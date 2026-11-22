-- Purge automatique des données d'audience de plus de 13 mois (chaque dimanche à 03:00 UTC).
-- Nécessite l'extension pg_cron (Supabase : Database > Extensions > pg_cron).

create extension if not exists pg_cron;

select cron.schedule(
  'analytics-purge',
  '0 3 * * 0',
  $$select public.analytics_purge()$$
);
