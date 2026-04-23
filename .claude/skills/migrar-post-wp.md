---
name: migrar-post-wp
description: Migra un único post de WordPress (por URL) al formato MDX del blog. Usa el scraper Python de /tmp/gsc-export/scrape.py como referencia, pero apunta a un post concreto y permite revisión manual.
---

# Skill: migrar-post-wp

## Cuándo usar
- Un post de la fase 2 (long-tail, clicks<10) que el usuario decide migrar manualmente.
- Un post que el scraper batch marcó como `needsReview: true` y hay que regenerar limpio.
- Migrar un post nuevo de WP tras el corte (caso edge).

## Input
- URL completa del post en producción (ej. `https://nextscenario.com/north-star-metric/`)
- Opcionalmente: overrides de `title`, `description`, `tags`

## Pasos

1. **Fetch** del HTML de la URL.
2. **Parse** con BeautifulSoup:
   - Extraer `<title>`, meta description, canonical, hreflang, OG image, article:published_time.
   - Localizar el cuerpo: selectores candidatos `article .entry-content`, `main article`, `.post-content`.
   - Resolver imágenes lazy-loaded (reemplazar `data:image/svg+xml` por `data-src`/`srcset`).
   - Eliminar ruido: sharing widgets, comments, related, author-box, scripts, forms.
   - Quitar el primer `<h1>` del body (ya es el title en frontmatter).
3. **Convertir** HTML → Markdown (html2text con `body_width=0`, `mark_code=True`).
4. **Limpieza post**:
   - Colapsar blank lines
   - Quitar `![](data:...)` residuales
   - Fix bold spacing (`El**X**` → `El **X**`)
   - Quitar anchors `[..](#...)` que no llevan a ninguna parte
5. **Detectar idioma y slug destino**:
   - Si URL matches `/es/{slug}/` → `lang: es`
   - Si URL matches `/{slug}/` (raíz) → `lang: en` (o `es` si el `<html lang>` dice `es` — caso de duplicados WP)
6. **Emparejar** con hreflang: si existe, poblar `translationOf`.
7. **Generar** el MDX con frontmatter completo:
   - Validar longitudes contra schema Zod
   - Marcar `needsReview: true` si falla validación no crítica
   - Añadir `migratedFrom: '{url}'`
8. **Escribir** a `blog/src/content/posts/{lang}/{slug}.mdx`.
9. **Reportar** al usuario:
   - Si hay imágenes externas apuntando a `/wp-content/uploads/`, listarlas (requieren descarga aparte).
   - Si `translationOf` quedó vacío, avisar.
   - Si el body es <600 palabras, avisar.

## Dependencias

- `/tmp/scrape-env` (venv con `beautifulsoup4`, `html2text`, `requests`, `lxml`)
- Schema vigente en `blog/src/content.config.ts`

## Post-migración pendiente (siempre)

- Descargar imágenes de `/wp-content/uploads/` y moverlas a `blog/public/blog/images/{slug}/` — reescribir src.
- Revisar que los enlaces internos apuntan a la versión del idioma correcto.
- Auditar con `auditar-seo` antes de publicar.
