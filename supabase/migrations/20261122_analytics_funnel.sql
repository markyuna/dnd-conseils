-- Embudo de conversion : visiteurs -> page /devis -> devis démarré -> demande envoyée.
-- À exécuter après 20261122_analytics.sql.

create or replace function public.analytics_funnel(p_from timestamptz, p_to timestamptz)
returns jsonb
language sql
stable
security invoker
set search_path = public
as $$
  with base as (
    select event_type, event_name, path, visitor_hash
    from public.analytics_events
    where created_at >= p_from and created_at < p_to
  )
  select jsonb_build_array(
    jsonb_build_object('step', 'visitors', 'label', 'Visiteurs',
      'visitors', (select count(distinct visitor_hash) from base where event_type = 'pageview')),
    jsonb_build_object('step', 'devis_page', 'label', 'Page /devis vue',
      'visitors', (select count(distinct visitor_hash) from base
                   where event_type = 'pageview' and path = '/devis')),
    jsonb_build_object('step', 'quote_started', 'label', 'Devis démarré',
      'visitors', (select count(distinct visitor_hash) from base
                   where event_type = 'event' and event_name = 'quote_started')),
    jsonb_build_object('step', 'lead_submitted', 'label', 'Demande envoyée',
      'visitors', (select count(distinct visitor_hash) from base
                   where event_type = 'event' and event_name = 'lead_submitted'))
  );
$$;

revoke all on function public.analytics_funnel(timestamptz, timestamptz) from public, anon, authenticated;
grant execute on function public.analytics_funnel(timestamptz, timestamptz) to service_role;

notify pgrst, 'reload schema';
