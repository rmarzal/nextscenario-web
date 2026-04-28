# NextScenario Blog — Astro sub-app

Static blog co-existing with the marketing site in this same repo.
The marketing pages are plain HTML at the repo root; the blog is an
Astro project inside `blog/` that builds into `dist/`. The root
`build-site.sh` script merges both into `__out/` which Vercel serves.

## URLs

| What | URL |
|---|---|
| Listing (EN) | `/blog/` |
| Post (EN) | `/{slug}/` |
| Listing (ES) | `/es/blog-es/` |
| Post (ES) | `/es/{slug}/` |
| Sitemap | `/sitemap-index.xml` |
| RSS (EN) | `/blog/rss.xml` |
| RSS (ES) | `/es/blog-es/rss.xml` |

**Post permalinks are NOT under `/blog/*`** — they live at the domain root
to preserve the historical WordPress URLs (already indexed in Google).
Only the listing/index pages sit under `/blog/` and `/es/blog-es/`.

## Content

Each post is a `.md` (scraped/migrated) or `.mdx` (new authored) file in:

```
src/content/posts/
├── en/{slug}.md
└── es/{slug}.md
```

Frontmatter is validated by a Zod schema in `src/content.config.ts` — any
post that doesn't meet the SEO contract fails the build. See that file
for exact constraints (title ≤70, description 110–165, kebab-case slug, etc).

## Authoring with Claude

Skills live in `.claude/skills/` at the repo root:

- `nuevo-articulo` — create a new post (defaults to ES)
- `traducir-articulo` — produce the paired translation and link both via `translationOf`
- `auditar-seo` — lint a post against the SEO contract (read-only)
- `migrar-post-wp` — one-off migration of a single WP post

Typical flow:

```
/nuevo-articulo tema: Net retention rate en SaaS
/auditar-seo src/content/posts/es/net-retention-rate-saas.md
/traducir-articulo net-retention-rate-saas → en
```

## Local dev

```bash
cd blog
npm install
npm run dev     # preview at http://localhost:4321
```

The dev server only serves the blog routes; to preview with the
marketing pages merged in, run the root build:

```bash
cd ..
bash ./build-site.sh
npx serve __out
```

## Build (CI / Vercel)

Configured in `vercel.json` at the root:

```
buildCommand: bash ./build-site.sh
outputDirectory: __out
```

The script:

1. Runs `npm ci && astro build` inside `blog/` (emits `blog/dist/`)
2. Copies `blog/dist/*` into `__out/`
3. Overlays the static marketing HTML files
4. Cleans Astro content-layer artifacts

## Migration provenance

The initial 85 posts were imported from the `nextscenario.WordPress.2026-04-23.xml`
WXR export, filtered by Google Search Console traffic (clicks ≥ 10).
Some posts retain `needsReview: true` — the build publishes them but
flags them for editorial review.

Six URLs that were indexed under the wrong locale (Spanish content at
the EN root) are redirected 301 to their canonical `/es/{slug}/` in
`vercel.json`.
