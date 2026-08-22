# Implementors

Public open-finance **implementor directory**. Deployable Astro sample.

Collections (public only): `cards`, `diffs`, `lab`.

Hard rules:

- No `private/`, no `as-run/`, no unpublished fields, no `/fcs/*` or `/private/*` routes.
- No `spine/` anywhere (no spine collection, no `/spine` routes, no boolean `spine` frontmatter).
- `fcs_evolution` is a string on a card only — not a route and not a collection.
- `family`: `fapi`|`obl`|`hmt`|`threat`|`kyc`|`diffs`|`lab`|`adjacent` (no `family:spine`).
- Everything under `src/content` is public. If it cannot be public, it does not enter the repo.
- Build fails if `spine/`, `private/`, or `as-run/` appears (leak guard).
- Off this repo: hop-path, observer-cards, evidence-pack, collector-as-gate, unauthorised-liability-asserts, signed-test-packs-sip.

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

- `src/content/cards/`
- `src/content/diffs/`
- `src/content/lab/`

Shared frontmatter: `title`, `status` (`card`|`stub`), `family` (`fapi`|`obl`|`hmt`|`threat`|`kyc`|`diffs`|`lab`|`adjacent`), `fcs_evolution` (string — not a route), `sources` (url[]), `updated` (ISO date), `slug`.

`#fcs-evolution` is a string field on a card, not a route. No boolean `spine` field.

## Routes

| Path | Purpose |
| --- | --- |
| `/` | Family indexes only |
| `/fapi/`, `/obl/`, `/hmt/` | Family filters |
| `/cards/[slug]` | Card detail (title, abstract, sources, fcs_evolution) |
| `/diffs/`, `/diffs/[slug]` | Diffs |
| `/lab/`, `/lab/[slug]` | Public instruments only |

Nav: Home, FAPI, OBL, HMT, Lab, Diffs.

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
# Failure modes (do not commit):
# mkdir -p src/content/private && npm run build   # must fail
# mkdir -p spine && npm run build                 # must fail
# mkdir -p as-run && npm run build                # must fail
```
