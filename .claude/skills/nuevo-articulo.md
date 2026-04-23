---
name: nuevo-articulo
description: Crea un nuevo artículo del blog de NextScenario en ES o EN, respetando el contrato SEO (schema Zod en blog/src/content.config.ts), el tono del brand book y la estructura MDX del proyecto.
---

# Skill: nuevo-articulo

## Cuándo usar
Cuando el usuario pide un artículo nuevo para el blog (ej. "escribe un artículo sobre X", "publica un post sobre Y"). Por defecto, crea SOLO en español (idioma principal del sitio). Para crear la versión inglesa, usa después el skill `traducir-articulo`.

## Inputs esperados
- **Tema / brief** del artículo (obligatorio)
- **Idioma**: `es` (default) o `en`
- **Slug** opcional (si no, se deriva del título en kebab-case)
- **Tags** opcionales (eg. `["saas", "metricas"]`)
- **Hero image URL** opcional (si no, el artículo se crea sin hero y se avisa al usuario para que la añada)

## Reglas duras (hará fallar el build si no se cumplen)

El schema en `blog/src/content.config.ts` valida cada MDX. Cualquier incumplimiento rompe el build:

1. `title`: 10–70 caracteres. Sin punto final. No usar exclamaciones.
2. `description`: 110–165 caracteres. Debe poder leerse como snippet en SERP.
3. `slug`: kebab-case estricto (`^[a-z0-9]+(?:-[a-z0-9]+)*$`). Minúsculas, sin acentos, sin tildes.
4. `pubDate`: ISO 8601 (`2026-04-23T10:00:00Z` o equivalente con offset).
5. `lang`: exactamente `es` o `en`.
6. `heroImage`: URL absoluta (`https://...`) o path absoluto del repo (`/blog/images/...`).
7. `heroAlt`: ≥ 5 caracteres, descriptivo. Si hay heroImage, heroAlt es obligatorio en la práctica.

## Reglas de redacción (brand book — `BRAND-BOOK.md`)

- **Tono:** directo, data-forward, anti-Excel. Frases cortas. Sin relleno.
- **Números con locale:** `€412.850` en ES, `€412,850` en EN.
- **CTAs como verbos de acción:** "Solicitar demo", "Book a demo" — nunca "Learn more".
- **Nombre del producto:** `NextScenario` (una palabra, N y S mayúsculas). Nunca "Next Scenario" en texto.
- **Una palabra destacada por H1/lead** opcional con `<em>` (renderiza Instrument Serif cursiva).

## Estructura que debe tener el artículo

```md
---
title: '...'
description: '...'
slug: '...'
pubDate: 'YYYY-MM-DDTHH:MM:SSZ'
lang: 'es'
tags: ['tag1', 'tag2']
heroImage: ''
heroAlt: ''
translationOf: ''    # dejar vacío; el skill traducir-articulo lo rellena
author: 'NextScenario'
needsReview: false
---

Párrafo de introducción (lede) — 2-3 frases que enganchen y resuman qué aprende el lector. Aquí puedes usar **negrita** para una frase clave.

## Primera sección (H2)

Contenido. Al menos un párrafo por sección. Usa listas con moderación.

- Item con **dato numérico** o ejemplo concreto
- Item con referencia a métrica real

## Segunda sección

Prosa + ejemplos numéricos. Cita fuentes internas enlazando a otros posts del blog cuando sea relevante. El minímo son **2 enlaces internos** por artículo.

## Tercera sección

...

## Conclusión o resumen (opcional pero recomendado)

2-3 frases. No uses "En conclusión" literal; ve al grano.
```

## Pasos concretos al ejecutar

1. Leer `BRAND-BOOK.md` para verificar tono y terminología actual.
2. Leer `blog/src/content.config.ts` para comprobar el schema vigente.
3. Listar posts existentes en `blog/src/content/posts/{lang}/` para identificar **al menos 2 enlaces internos** relevantes a incluir.
4. Generar el MDX completo siguiendo la estructura arriba.
5. Ejecutar las validaciones locales (bloque siguiente) ANTES de escribir.
6. Escribir el archivo a `blog/src/content/posts/{lang}/{slug}.mdx`.
7. Opcional: ejecutar `auditar-seo` skill sobre el nuevo post.

## Validaciones antes de escribir

```
- title.length entre 10 y 70
- description.length entre 110 y 165
- slug coincide con /^[a-z0-9]+(?:-[a-z0-9]+)*$/
- Contiene ≥ 2 enlaces internos absolutos a otros posts del blog (/slug/ o /es/slug/)
- Contiene al menos 2 H2
- Ningún H1 en el body (el title ya es H1 visual en el layout)
- Si heroImage: heroAlt no vacío
- lang coincide con la carpeta destino (en/ o es/)
```

## Qué NO hacer

- NO inventar estadísticas, precios o plazos. Si citas un número, debe venir de una fuente identificable.
- NO copiar párrafos de otros sitios. Parafrasear siempre.
- NO usar frases genéricas de marketing ("soluciones innovadoras", "nuestro equipo de expertos"...).
- NO meter emojis.
- NO meter H1 en el body.
- NO prometer features que NextScenario no tiene (consulta `integrations.html` / `cashflow.html` / `financial-models.html` para saber qué hay).

## Ejemplo de frontmatter válido

```yaml
---
title: 'Qué es la tasa de retención neta en SaaS'
description: 'La net retention rate es una de las métricas más vigiladas por inversores en SaaS. Te explicamos cómo calcularla y qué rangos son saludables.'
slug: 'net-retention-rate-saas'
pubDate: '2026-04-23T10:00:00Z'
lang: 'es'
tags: ['saas', 'metricas', 'retencion']
heroImage: 'https://nextscenario.com/blog/images/net-retention-cover.png'
heroAlt: 'Gráfico de net retention rate por cohorte en dashboard NextScenario'
author: 'NextScenario'
needsReview: false
---
```
