# Implementors

Public open-finance **implementor directory**. Deployable Astro sample.

Collections (public only): `spine`, `cards`, `diffs`, `lab`.

Hard rules:

- No `private/`, no `as-run/`, no unpublished fields, no `/fcs/*` or `/private/*` routes.
- Everything under `src/content` is public. If it cannot be public, it does not enter the repo.
- Build fails if `private/` or `as-run/` directories appear anywhere in the tree (leak guard).

## Quick start

```bash
npm ci
npm run dev
```

```bash
npm ci
npm run build
npm run preview
```

`npm run build` runs the leak guard first (`scripts/leak-guard.mjs`).

## Content

Markdown cards live in:

- `src/content/spine/`
- `src/content/cards/`
- `src/content/diffs/`
- `src/content/lab/`

Shared frontmatter: `title`, `status` (`card`|`stub`), `family` (`spine`|`fapi`|`obl`|`hmt`|`threat`|`kyc`|`diffs`|`lab`|`adjacent`), `spine` (bool), `fcs_evolution` (string — not a route), `sources` (url[]), `updated` (ISO date), `slug`.

`#fcs-evolution` is a string field on a card, not a route. Spine index uses `spine == true`.

## Routes

| Path | Purpose |
| --- | --- |
| `/` | Spine first, then families |
| `/spine/`, `/spine/[slug]/ | Spine |
| `/fapi/`, `/obl/`, `/hmt/` | Family filters |
| `/cards/[slug]` | Card detail (title, abstract, sources, fcs_evolution) |
| `/diffs/`, `/diffs/[slug]` | Diffs |
| `/lab/`, `/lab/[slug]` | Public instruments only |

Nav: Home, Spine, FAPI, OBL, HMT, Lab, Diffs.

## Cloudflare Pages / Workers

Wrangler config: `wrangler.jsonc` (project name `implementors`). Adapter: `@astrojs/cloudflare`. Assets come from `./dist` **after** `astro build`.

**Do not** attach custom domain `implementors.attainai.ai` for this milestone. Use `*.pages.dev` when connected.

### Never deploy an empty tree

`wrangler.jsonc` points `assets.directory` at `./dist`. A bare `npx wrangler deploy` **without** a prior build fails or ships nothing useful.

**Always** use a script that builds first:

```bash
npm ci
npm run deploy
# → npm run build && wrangler deploy
```

Pages CLI equivalent (also builds first):

```bash
npm ci
npm run pages:deploy
# → npm run build && wrangler pages deploy dist --project-name=implementors
```

Do **not** run `npx wrangler deploy` alone.

### Pages (Git / dashboard)

Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git → `comet528/implementors`:

| Setting | Value |
| --- | --- |
| Build command | `npm ci && npm run build` |
| Output directory | `dist` |

After the first successful deploy you get the project’s `*.pages.dev` URL (often `https://implementors.pages.dev`).

If Pages is not yet connected, the remaining click is: **Cloudflare Dashboard → Create Pages project → Connect GitHub repo `comet528/implementors`**.

## Leak guard check

```bash
npm run leak-guard
# To verify failure mode locally (do not commit):
# mkdir -p src/content/private && npm run build   # must fail
```
