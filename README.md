# Implementors

Public open-finance **newsletter** for implementors. Deployable Astro site.

Issue 1 (August 2026) is the homepage: short, sourced pieces—not a filing cabinet.

Collections (content store only): `cards`, `diffs`, `lab`.

Hard rules:

- No `private/`, no `as-run/`, no unpublished fields, no `/fcs/*` or `/private/*` routes.
- No public `spine` collection or `/spine` routes (internal hop-path / observer-cards / evidence-pack stay out of this repo).
- Everything under `src/content` is public. If it cannot be public, it does not enter the repo.
- Build fails if `private/`, `as-run/`, `src/content/spine`, or `src/pages/spine` appear (leak guard).
- Never publish staff names, agent names, Slack rooms, or internal process labels on public pages.

## Quick start

```bash
npm install
npm run dev
```

```bash
npm run build
npm run preview
```

`npm run build` runs the leak guard first (`scripts/leak-guard.mjs`).

## Content

Markdown pieces live in:

- `src/content/cards/` — features
- `src/content/lab/` — lab notes
- `src/content/diffs/` — reserved (empty in Issue 1)

Shared frontmatter: `title`, `family`, `sources` (url[]), `updated`, `slug`, `order`, optional `illustration` (filename under `public/issue-1/`), `section` (`Feature`|`Lab`).

Art for Issue 1 lives in `public/issue-1/`.

## Routes

| Path | Purpose |
| --- | --- |
| `/` | Issue 1 (masthead, contents, pieces) |
| `/cards/[slug]` | Feature permalink |
| `/lab/`, `/lab/[slug]` | Lab notes |

## Cloudflare Pages

Wrangler/Pages config is in `wrangler.jsonc` (project name `implementors`). Adapter: `@astrojs/cloudflare`.

**Do not** attach custom domain `implementors.attainai.ai` for this milestone. Use `*.pages.dev` when connected.

### Deploy options

1. **Dashboard (recommended first connect)**  
   Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git → select `comet528/implementors` → framework preset Astro → build command `npm run build` → output directory `dist`.  
   After the first successful deploy you get `https://implementors.pages.dev` (or the project’s `*.pages.dev` URL).

2. **CLI (after the Pages project exists and you are logged in)**  
   ```bash
   npx wrangler login
   npm run pages:deploy
   ```

## Leak guard check

```bash
npm run leak-guard
# To verify failure mode locally (do not commit):
# mkdir -p src/content/private && npm run build   # must fail
# mkdir -p src/content/spine && npm run build     # must fail
```
