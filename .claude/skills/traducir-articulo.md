---
name: traducir-articulo
description: Traduce un artículo existente del blog de NextScenario entre ES y EN, preservando estructura, tono del brand book, enlaces internos (reescritos al idioma destino) y enlazando ambos posts via `translationOf` para hreflang.
---

# Skill: traducir-articulo

## Cuándo usar
Cuando el usuario pide la versión en el otro idioma de un post ya existente. Ejemplos: "traduce el post X al inglés", "crea la versión ES de Y".

## Inputs
- **Slug del post origen** (obligatorio) — ej. `mrr-saas`
- **Idioma destino** (`es` o `en`). Si no se indica, se infiere: origen ES → destino EN y viceversa.

## Filosofía de traducción (del brand book)

> "English mirrors the same tone, not a formal translation."

No es traducción literal. Es **reescritura en paralelo** manteniendo estructura, ejemplos numéricos y datos, pero adaptando expresiones al otro idioma. Términos técnicos SaaS normalmente se dejan en inglés aunque el post sea en ES (ej. "churn", "MRR", "cohort"), salvo que haya traducción consolidada (ej. "margen bruto" en vez de "gross margin").

## Pasos

1. Leer `blog/src/content/posts/{lang-origen}/{slug}.mdx`.
2. Leer `BRAND-BOOK.md` sección "Tone of voice" para refrescar criterios.
3. Determinar slug destino:
   - Si el post origen NO tiene `translationOf`, derivar un slug nuevo en kebab-case apropiado al idioma destino (ej. `net-retention-rate-saas` → `tasa-de-retencion-neta-saas`).
   - Si el post origen ya tiene `translationOf`, usar ese slug (overwrite el archivo existente en ese idioma).
4. Traducir/reescribir:
   - Frontmatter: `title`, `description`, `heroAlt` → reescribir al idioma destino respetando límites del schema.
   - Body: reescribir sección por sección.
   - **Enlaces internos**: reescribir para que apunten a la versión del idioma destino si existe. Si NO existe aún, mantener el enlace al idioma origen (no romper al lector, se traducirá más adelante).
   - Fechas, precios, números con locale del idioma destino.
5. Escribir el archivo destino: `blog/src/content/posts/{lang-destino}/{slug-destino}.mdx`.
6. **Actualizar `translationOf` en ambos lados**:
   - Origen: `translationOf: '{slug-destino}'`
   - Destino: `translationOf: '{slug-origen}'`
7. Validar que los títulos y descripciones siguen cumpliendo el schema (longitudes) en el idioma destino.

## Reescritura de enlaces internos — ejemplos

| Enlace origen (ES) | Enlace destino (EN) si existe | Si no existe EN |
|--------------------|-------------------------------|-----------------|
| `/es/mrr-saas/` | `/mrr-saas/` | mantener `/es/mrr-saas/` |
| `/es/estudio-de-cohortes/` | `/cohort-study-saas/` | mantener `/es/estudio-de-cohortes/` |

Para comprobar existencia, listar `blog/src/content/posts/{lang-destino}/` antes de reescribir el enlace.

## Qué NO hacer

- NO traducir términos que deben permanecer (`MRR`, `ARR`, `LTV`, `CAC`, `churn`, `cohort`, nombres propios como Stripe, Shopify...).
- NO inventar enlaces a posts que no existen en el idioma destino.
- NO cambiar pubDate — crea con la fecha actual si es post nuevo, o conserva la original si es update.
- NO cambiar `heroImage` ni `tags` (salvo traducir el tag si aplica).
- NO romper la estructura de secciones (mismos H2 en paralelo).

## Entregable final

- Dos archivos MDX sincronizados via `translationOf`.
- Un resumen breve al usuario: qué se tradujo, cuántos enlaces internos se reescribieron.
