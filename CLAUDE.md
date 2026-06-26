# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Start dev server (Next.js 16)
npm run build    # Production build
npm run lint     # ESLint (no test suite in this project)
```

## Environment variables

Required in `.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=      # server-only, never expose to client
RESEND_API_KEY=
DND_FROM_EMAIL=                 # defaults to onboarding@resend.dev
DND_ADMIN_EMAIL=                # defaults to dndconseils@gmail.com
NEXT_PUBLIC_SITE_URL=           # canonical URL for SEO/OG
```

## Architecture

**Marketing site** for DND Conseils, a French home-renovation advisory firm. Next.js 16 App Router, React 19, Tailwind CSS v4, TypeScript.

### Pages

| Route | Purpose |
|---|---|
| `/` | Landing page — stacked section components |
| `/tarifs` | Pricing page |
| `/devis` | Quote request form |
| `/a-propos` | About |
| `/[slug]` | Statically generated SEO service pages (slugs defined in `src/lib/seo-pages.ts`) |
| `/admin` | Cookie-based admin login |
| `/admin/leads` | CRM view of `contact_requests` Supabase table |

### Key patterns

**SEO**: All pages call `generateSeo()` from `src/lib/seo.ts` for `export const metadata`. Structured data (JSON-LD) is injected via `src/components/seo/JsonLd.tsx` using schemas from `src/lib/schema.ts`. To add a new SEO landing page, add an entry to `seoServicePages` in `src/lib/seo-pages.ts` — the `[slug]` dynamic route picks it up automatically (`dynamicParams = false`).

**Supabase — two clients**:
- `src/lib/supabase.ts` — anon key, safe for client components
- `src/lib/supabase-admin.ts` — service role key, `"server-only"` import guard, used only in API routes and server components

**Contact flow**: `src/services/contact.ts` (client-side fetch helper) → `POST /api/contact` → inserts into `contact_requests` table → fires two Resend emails (admin notification + user confirmation).

**Admin auth**: Cookie `dnd_admin=true` set by `POST /api/admin/login`. Server components at `/admin/leads` check this cookie and redirect if absent.

**Styling**: Tailwind v4 via `@tailwindcss/postcss`. Design tokens are inline hex values — the brand palette centers on `#17130f` (near-black), `#b49a7c` (warm gold), and `#f6f2ee` (off-white background). No custom `tailwind.config` — all config is in CSS.

**Animations**: Framer Motion is available; use it for section-level transitions and interactive UI only, not for purely decorative micro-animations.
