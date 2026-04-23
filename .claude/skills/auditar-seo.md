---
name: auditar-seo
description: Audita un post MDX del blog contra el contrato SEO (schema Zod + reglas del brand book) y devuelve un informe accionable de problemas detectados. No escribe cambios — solo reporta.
---

# Skill: auditar-seo

## Cuándo usar
- Antes de publicar un post nuevo generado con `nuevo-articulo`.
- Como revisión puntual de un post existente ("audita SEO de /es/mrr-saas/").
- Como barrido masivo sobre todos los posts con `needsReview: true`.

## Input
- Ruta a un archivo MDX concreto, un slug, o "todos".

## Reglas que valida

### Frontmatter (errors — bloquean build)
- `title`: 10–70 chars, sin punto final, sin `!`
- `description`: 110–165 chars, acaba en punto
- `slug`: kebab-case, coincide con el nombre del archivo
- `pubDate`: ISO 8601 válido, no futuro
- `lang`: `es` o `en`, coincide con la carpeta
- `heroImage` + `heroAlt`: si hay imagen, hay alt

### Frontmatter (warnings)
- `title` empieza con mayúscula
- `description` no empieza con la misma palabra que `title`
- `tags` tiene al menos 1, no más de 5
- `translationOf` apunta a un slug real del otro idioma (si existe)

### Body (errors)
- No hay H1 (`# ...`) en el body — el title del frontmatter ya es el H1 visual
- Al menos 2 H2 (`## ...`)
- Al menos 2 enlaces internos absolutos a otros posts del blog (`/slug/` o `/es/slug/`)
- Todas las imágenes tienen `alt` no vacío

### Body (warnings)
- Longitud mínima recomendada: 600 palabras (warning si menor)
- Longitud máxima útil: 3000 palabras (warning si mayor)
- No usa la palabra "obviously", "simply", "just" (hedge antipatrones)
- Nombre del producto siempre como `NextScenario` (no "Next Scenario", "nextscenario", "Nextscenario")

### Legibilidad (warnings informativos)
- Frases >35 palabras señalarlas (target ES: 20-25, EN: 15-20)
- Párrafos >5 líneas señalarlos

## Formato del informe

```
AUDITORÍA SEO: blog/src/content/posts/es/{slug}.mdx
================================================

✓ 11 reglas OK
⚠ 2 warnings
✗ 1 error

ERRORS (blocking):
  ✗ [body] H1 encontrado en línea 23 ("# MRR SaaS..."). Eliminar — el title ya es H1.

WARNINGS:
  ⚠ [body] Solo 1 enlace interno; mínimo 2.
  ⚠ [frontmatter] description empieza con la misma palabra que title ("El MRR...")

SUGERENCIAS:
  • Considera añadir un enlace a /es/estudio-de-cohortes/ en la sección "Análisis del MRR por cohortes".
```

## Comportamiento esperado

- **Read-only.** NUNCA modifica archivos. Solo reporta.
- Si el usuario pide corrección después, usar `nuevo-articulo` o edición manual.
- En modo "todos": generar un CSV/tabla resumen con 1 fila por post y totales por tipo de issue.
