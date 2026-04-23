#!/usr/bin/env bash
# Build pipeline for Vercel:
#   1. Astro builds the blog into blog/dist/
#   2. We merge: static marketing HTML + Astro blog output → __out/
# The merge happens last to avoid Astro's dist-cleanup stomping the HTML.
set -euo pipefail

ROOT="$(pwd)"
OUT="__out"
BLOG_DIST="blog/dist"

echo "→ Building Astro blog"
cd blog
npm ci --no-audit --no-fund --prefer-offline
npx astro build
cd "$ROOT"

echo "→ Assembling merged output at $OUT"
rm -rf "$OUT"
mkdir -p "$OUT"

# 1. Copy Astro blog output first (it has its own subdirs)
cp -R "$BLOG_DIST"/. "$OUT"/

# 2. Clean Astro content-layer artifacts that leaked
rm -f "$OUT/content-assets.mjs" "$OUT/content-modules.mjs"
rm -rf "$OUT/collections"

# 3. Overlay static marketing pages (they should NOT overlap blog slugs)
for f in *.html *.css robots.txt; do
  [ -e "$f" ] && cp "$f" "$OUT/"
done
for f in favicon.svg favicon.ico og-default.png; do
  [ -e "$f" ] && cp "$f" "$OUT/"
done
# /es marketing mirror (overlay, not replace)
if [ -d es ]; then
  for f in es/*.html es/*.css; do
    [ -e "$f" ] && cp "$f" "$OUT/es/"
  done
fi
# Shared /src assets used by marketing pages
if [ -d src ]; then
  cp -R src "$OUT/"
fi

echo "✓ Build complete."
echo "  Marketing HTML at /:    $(ls "$OUT"/*.html 2>/dev/null | wc -l | tr -d ' ')"
echo "  Marketing HTML at /es/: $(ls "$OUT"/es/*.html 2>/dev/null | wc -l | tr -d ' ')"
echo "  Blog post dirs:         $(find "$OUT" -maxdepth 2 -name index.html -not -path "$OUT/index.html" -not -path "$OUT/es/index.html" | wc -l | tr -d ' ')"
