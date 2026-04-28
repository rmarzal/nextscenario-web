#!/usr/bin/env bash
# Smoke tests for the blog sub-app and the merged Vercel output.
# Fails loudly on any check; prints a green summary on success.
set -uo pipefail

PASS=0
FAIL=0
CHECKS=()

pass() { PASS=$((PASS+1)); CHECKS+=("✓ $1"); }
fail() { FAIL=$((FAIL+1)); CHECKS+=("✗ $1"); }

run() {
  local name="$1"; shift
  if "$@" >/dev/null 2>&1; then pass "$name"; else fail "$name"; fi
}

cd "$(dirname "$0")"

echo "=== 1. Astro type & schema check ==="
if npx astro check 2>&1 | tee /tmp/astro-check.log | tail -5 | grep -q "0 errors"; then
  pass "astro check (0 errors)"
else
  fail "astro check reported errors"
  tail -20 /tmp/astro-check.log
fi

echo ""
echo "=== 2. vercel.json is valid JSON ==="
if node -e "JSON.parse(require('fs').readFileSync('../vercel.json','utf8'))" 2>/dev/null; then
  pass "vercel.json parses"
else
  fail "vercel.json is malformed"
fi

echo ""
echo "=== 3. Build produces expected artefacts ==="
cd ..
OUT="__out"
[ -f "$OUT/index.html" ] && pass "root index.html present" || fail "root index.html missing"
[ -f "$OUT/es/index.html" ] && pass "/es/ index.html present" || fail "/es/ index.html missing"
[ -f "$OUT/blog/index.html" ] && pass "/blog/ listing present" || fail "/blog/ listing missing"
[ -f "$OUT/es/blog-es/index.html" ] && pass "/es/blog-es/ listing present" || fail "/es/blog-es/ listing missing"
[ -f "$OUT/sitemap-index.xml" ] && pass "sitemap-index.xml present" || fail "sitemap-index.xml missing"
[ -f "$OUT/blog/rss.xml" ] && pass "EN RSS present" || fail "EN RSS missing"
[ -f "$OUT/es/blog-es/rss.xml" ] && pass "ES RSS present" || fail "ES RSS missing"

echo ""
echo "=== 4. Sitemap & RSS are well-formed XML ==="
for f in "$OUT/sitemap-index.xml" "$OUT/blog/rss.xml" "$OUT/es/blog-es/rss.xml"; do
  if xmllint --noout "$f" 2>/dev/null; then pass "xml ok: $f"; else fail "invalid xml: $f"; fi
done

echo ""
echo "=== 5. Sample post renders core SEO tags ==="
SAMPLE_EN="$OUT/unit-economics/index.html"
SAMPLE_ES="$OUT/es/mrr-saas/index.html"
[ -f "$SAMPLE_EN" ] && pass "sample EN post built" || fail "sample EN post missing"
[ -f "$SAMPLE_ES" ] && pass "sample ES post built" || fail "sample ES post missing"

if [ -f "$SAMPLE_EN" ]; then
  grep -q '<link rel="canonical"' "$SAMPLE_EN" && pass "EN post has canonical" || fail "EN canonical missing"
  grep -q '"@type":"Article"' "$SAMPLE_EN" && pass "EN post has JSON-LD Article" || fail "EN JSON-LD missing"
  grep -q '<meta property="og:image"' "$SAMPLE_EN" && pass "EN post has og:image" || fail "EN og:image missing"
fi

if [ -f "$SAMPLE_ES" ]; then
  grep -q 'lang="es"' "$SAMPLE_ES" && pass "ES post html lang=es" || fail "ES html lang incorrect"
  grep -q '<link rel="canonical"' "$SAMPLE_ES" && pass "ES post has canonical" || fail "ES canonical missing"
fi

echo ""
echo "=== 6. hreflang present on paired posts ==="
# cuenta-de-perdidas-y-ganancias ↔ profit-and-loss-statement is a known pair
PAIR_ES="$OUT/es/cuenta-de-perdidas-y-ganancias/index.html"
PAIR_EN="$OUT/profit-and-loss-statement/index.html"
if [ -f "$PAIR_ES" ]; then
  grep -q 'hreflang="en"' "$PAIR_ES" && pass "ES paired post has hreflang en" || fail "ES paired post missing hreflang en"
fi
if [ -f "$PAIR_EN" ]; then
  grep -q 'hreflang="es"' "$PAIR_EN" && pass "EN paired post has hreflang es" || fail "EN paired post missing hreflang es"
fi

echo ""
echo "=== 7. Redirects JSON has the expected duplicate-canonicalisers ==="
if grep -q '"source": "/margen-neto-y-margen-bruto/"' vercel.json; then
  pass "redirect for ES-in-root duplicate present"
else
  fail "redirect for /margen-neto-y-margen-bruto/ missing"
fi

echo ""
echo "=== 8. No drafts leaked into the build ==="
if find "$OUT" -name "index.html" -exec grep -l '"robots": "noindex"' {} \; 2>/dev/null | grep -v '__out/index.html'; then
  fail "draft posts leaked (above files)"
else
  pass "no drafts exposed"
fi

echo ""
echo "=== 9. Blog listing actually contains post cards ==="
if grep -q 'class="post-card"' "$OUT/blog/index.html"; then
  pass "EN listing has post cards"
else
  fail "EN listing has no post cards"
fi
if grep -q 'class="post-card"' "$OUT/es/blog-es/index.html"; then
  pass "ES listing has post cards"
else
  fail "ES listing has no post cards"
fi

echo ""
echo "=== Summary ==="
for c in "${CHECKS[@]}"; do echo "  $c"; done
echo ""
echo "  Passed: $PASS"
echo "  Failed: $FAIL"

exit $FAIL
