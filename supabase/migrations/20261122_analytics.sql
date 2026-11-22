-- Analytics first-party, sans cookie, sans IP stockée.
-- À exécuter une fois dans Supabase (SQL Editor).

create table if not exists public.analytics_events (
  id            bigint generated always as identity primary key,
  created_at    timestamptz not null default now(),
  event_type    text not null default 'pageview'
                  check (event_type in ('pageview', 'event')),
  event_name    text,
  path          text not null,
  -- Hash quotidien (sel qui change chaque jour) : pas de suivi inter-jours.
  visitor_hash  text not null,
  referrer_host text,
  source        text not null default 'direct',
  utm_source    text,
  utm_medium    text,
  utm_campaign  text,
  country       text,
  region        text,
  city          text,
  device        text,
  browser       text,
  os            text,
  language      text
);

create index if not exists analytics_events_created_at_idx
  on public.analytics_events (created_at desc);
create index if not exists analytics_events_path_idx
  on public.analytics_events (path);
create index if not exists analytics_events_type_idx
  on public.analytics_events (event_type, created_at desc);

-- RLS activée sans aucune policy : seul le service role (serveur) y accède.
alter table public.analytics_events enable row level security;

-- Purge des données de plus de 13 mois (durée max recommandée par la CNIL).
create or replace function public.analytics_purge()
returns void
language sql
security invoker
set search_path = public
as $$
  delete from public.analytics_events
  where created_at < now() - interval '13 months';
$$;

-- Agrégation complète pour le dashboard en un seul appel.
create or replace function public.analytics_summary(p_from timestamptz, p_to timestamptz)
returns jsonb
language sql
stable
security invoker
set search_path = public
as $$
  with pv as (
    select * from public.analytics_events
    where event_type = 'pageview' and created_at >= p_from and created_at < p_to
  ),
  per_visitor as (
    select visitor_hash, count(*) as pages
    from pv group by visitor_hash
  ),
  days as (
    select d::date as day
    from generate_series(
      (p_from at time zone 'Europe/Paris')::date,
      ((p_to - interval '1 second') at time zone 'Europe/Paris')::date,
      interval '1 day'
    ) d
  ),
  by_day as (
    select days.day,
           coalesce(count(distinct pv.visitor_hash), 0) as visitors,
           coalesce(count(pv.id), 0) as pageviews
    from days
    left join pv on (pv.created_at at time zone 'Europe/Paris')::date = days.day
    group by days.day order by days.day
  )
  select jsonb_build_object(
    'pageviews', (select count(*) from pv),
    'visitors',  (select count(*) from per_visitor),
    'bounce_rate',
      (select case when count(*) = 0 then 0
              else round(100.0 * count(*) filter (where pages = 1) / count(*), 1) end
       from per_visitor),
    'pages_per_visitor',
      (select coalesce(round(avg(pages), 2), 0) from per_visitor),
    'live_visitors',
      (select count(distinct visitor_hash) from public.analytics_events
        where event_type = 'pageview' and created_at >= now() - interval '5 minutes'),
    'by_day',
      (select coalesce(jsonb_agg(jsonb_build_object(
         'day', day, 'visitors', visitors, 'pageviews', pageviews) order by day), '[]'::jsonb)
       from by_day),
    'by_hour',
      (select coalesce(jsonb_agg(jsonb_build_object('hour', h, 'pageviews', n) order by h), '[]'::jsonb)
       from (select extract(hour from created_at at time zone 'Europe/Paris')::int as h, count(*) as n
             from pv group by 1) x),
    'top_pages',
      (select coalesce(jsonb_agg(jsonb_build_object('label', path, 'visitors', v, 'pageviews', n) order by n desc), '[]'::jsonb)
       from (select path, count(distinct visitor_hash) v, count(*) n from pv group by path order by n desc limit 15) x),
    'entry_pages',
      (select coalesce(jsonb_agg(jsonb_build_object('label', path, 'visitors', n) order by n desc), '[]'::jsonb)
       from (select path, count(*) n from (
               select distinct on (visitor_hash) visitor_hash, path from pv
               order by visitor_hash, created_at asc) e
             group by path order by n desc limit 10) x),
    'sources',
      (select coalesce(jsonb_agg(jsonb_build_object('label', source, 'visitors', n) order by n desc), '[]'::jsonb)
       from (select source, count(distinct visitor_hash) n from pv group by source order by n desc limit 12) x),
    'referrers',
      (select coalesce(jsonb_agg(jsonb_build_object('label', referrer_host, 'visitors', n) order by n desc), '[]'::jsonb)
       from (select referrer_host, count(distinct visitor_hash) n from pv
             where referrer_host is not null group by referrer_host order by n desc limit 12) x),
    'campaigns',
      (select coalesce(jsonb_agg(jsonb_build_object(
          'label', concat_ws(' / ', utm_source, utm_medium, utm_campaign), 'visitors', n) order by n desc), '[]'::jsonb)
       from (select utm_source, utm_medium, utm_campaign, count(distinct visitor_hash) n from pv
             where utm_source is not null or utm_campaign is not null
             group by 1,2,3 order by n desc limit 10) x),
    'countries',
      (select coalesce(jsonb_agg(jsonb_build_object('label', country, 'visitors', n) order by n desc), '[]'::jsonb)
       from (select coalesce(country, '??') country, count(distinct visitor_hash) n from pv group by 1 order by n desc limit 12) x),
    'cities',
      (select coalesce(jsonb_agg(jsonb_build_object('label', city, 'visitors', n) order by n desc), '[]'::jsonb)
       from (select concat_ws(', ', city, country) city, count(distinct visitor_hash) n from pv
             where city is not null group by 1 order by n desc limit 12) x),
    'devices',
      (select coalesce(jsonb_agg(jsonb_build_object('label', device, 'visitors', n) order by n desc), '[]'::jsonb)
       from (select coalesce(device, 'inconnu') device, count(distinct visitor_hash) n from pv group by 1 order by n desc) x),
    'browsers',
      (select coalesce(jsonb_agg(jsonb_build_object('label', browser, 'visitors', n) order by n desc), '[]'::jsonb)
       from (select coalesce(browser, 'inconnu') browser, count(distinct visitor_hash) n from pv group by 1 order by n desc limit 8) x),
    'os',
      (select coalesce(jsonb_agg(jsonb_build_object('label', os, 'visitors', n) order by n desc), '[]'::jsonb)
       from (select coalesce(os, 'inconnu') os, count(distinct visitor_hash) n from pv group by 1 order by n desc limit 8) x),
    'languages',
      (select coalesce(jsonb_agg(jsonb_build_object('label', language, 'visitors', n) order by n desc), '[]'::jsonb)
       from (select coalesce(language, '??') language, count(distinct visitor_hash) n from pv group by 1 order by n desc limit 6) x),
    'events',
      (select coalesce(jsonb_agg(jsonb_build_object('label', event_name, 'count', n) order by n desc), '[]'::jsonb)
       from (select event_name, count(*) n from public.analytics_events
             where event_type = 'event' and created_at >= p_from and created_at < p_to
             group by event_name order by n desc) x)
  );
$$;

-- Ces fonctions ne doivent être appelables que côté serveur (service role).
revoke all on function public.analytics_summary(timestamptz, timestamptz) from public, anon, authenticated;
revoke all on function public.analytics_purge() from public, anon, authenticated;
grant execute on function public.analytics_summary(timestamptz, timestamptz) to service_role;
grant execute on function public.analytics_purge() to service_role;
