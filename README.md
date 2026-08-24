# Implementors

Public open-finance **implementor directory**. Deployable Astro sample.

Collections (public only): `cards`, `diffs`, `lab`.

Hard rules:

- No `private/`, no `as-run/`, no unpublished fields, no `/fcs/*` or `/private/*` routes.
- No public `spine` collection or `/spine` routes (internal hop-path / observer-cards / evidence-pack stay out of this repo).
- Everything under `src/content` is public. If it cannot be public, it does not enter the repo.
- Build fails if `private/`, `as-run/`, `src/content/spine`, or `src/pages/spine` appear (leak guard).

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

Markdown cards live in:

- `src/content/cards/`
- `src/content/diffs/`
- `src/content/lab/`

Shared frontmatter: `title`, `status` (`card`|`stub`), `family` (`spine`|`fapi`|`obl`|`hmt`|`threat`|`kyc`|`diffs`|`lab`|`adjacent`), `spine` (bool — metadata only, not a route), `fcs_evolution` (string — not a route), `sources` (url[]), `updated` (ISO date), `slug`.

`#fcs-evolution` is a string field on a card, not a route. The `spine` frontmatter bool may appear on a card; it does not create `/spine` pages.

## Routes

| Path | Purpose |
| --- | --- |
| `/` | Families, then cards / lab / diffs |
| `/fapi/`, `/obl/`, `/hmt/` | Family filters |
| `/cards/[slug]` | Card detail (title, abstract, sources, fcs_evolution) |
| `/diffs/`, `/diffs/[slug]` | Diffs |
| `/lab/`, `/lab/[slug]` | Public instruments only |

Nav: Home, FAPI, OBL, HMT, Lab, Diffs.

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

This environment cannot invent a live Pages URL. If Pages is not yet connected, the remaining click is: **Cloudflare Dashboard → Create Pages project → Connect GitHub repo `comet528/implementors`**.

## Leak guard check

```bash
npm run leak-guard
# To verify failure mode locally (do not commit):
# mkdir -p src/content/private && npm run build   # must fail
# mkdir -p src/content/spine && npm run build     # must fail
```
