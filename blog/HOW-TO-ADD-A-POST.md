# Cómo añadir un nuevo post al blog

Manual operativo. De cero a publicado en 5–15 minutos según el camino.

---

## Decide el camino

Hay tres formas de crear un post. Elige según el origen del contenido:

| Origen | Camino | Tiempo |
|---|---|---|
| Idea / brief tuyo | `/nuevo-articulo` (skill de Claude) | 5–10 min |
| Post existente en WordPress | `/migrar-post-wp` (skill de Claude) | 2 min + revisión |
| Quieres control absoluto | Manual: crear el `.md` a mano | 15+ min |

Los tres caminos terminan en lo mismo: un archivo `blog/src/content/posts/{lang}/{slug}.md` (o `.mdx`) que cumple el schema Zod.

---

## Pre-requisitos (una vez)

```bash
cd ~/Projects/nextscenario-web   # o donde tengas el repo
git checkout blog-migration       # rama donde vive el blog
git pull                          # asegurar último estado
cd blog
npm install                       # solo la primera vez
```

Para ver el preview en vivo mientras escribes:

```bash
cd blog
npm run dev
# → http://localhost:4321
```

Mantén esta terminal abierta. Cualquier cambio que hagas en un `.md` se refleja en <1 segundo.

---

## Camino 1 — Skill `/nuevo-articulo` (recomendado)

### En Claude Code (panel lateral de VS Code o app)

```
/nuevo-articulo tema: net retention rate en SaaS
```

Variantes:

```
/nuevo-articulo tema: cómo calcular el CAC payback period
/nuevo-articulo tema: SaaS pricing models — idioma: en
/nuevo-articulo tema: dashboards para retail — tags: ["retail", "dashboards", "kpis"]
```

### Qué hace el skill (automático)

1. Lee `BRAND-BOOK.md` para asegurar tono.
2. Lee el schema Zod (`src/content.config.ts`) para conocer las constraints.
3. Lista los posts existentes para identificar **2+ enlaces internos** relevantes a incluir.
4. Genera el `.mdx` completo con:
   - Frontmatter válido (title, description, slug kebab-case, pubDate ISO, lang correcto, tags).
   - Body estructurado: lede + 3–6 secciones H2 + cierre.
   - 2+ enlaces internos absolutos hacia otros posts.
   - `heroImage` vacío si no le indicas uno (renderiza fallback CSS automático).
5. Escribe en `blog/src/content/posts/{lang}/{slug}.mdx`.

### Lo que tienes que hacer tú

1. **Revisar el dev server**: el post aparece en `http://localhost:4321/{slug}/` (EN) o `/es/{slug}/` (ES) automáticamente.
2. **Leer y editar**: ningún skill escribe contenido perfecto. Repasa el body, ajusta el ángulo, añade ejemplos numéricos reales.
3. **Auditar SEO** (siguiente sección).
4. **Crear la versión en el otro idioma** si quieres bilingüe.

---

## Camino 2 — Migrar un post existente de WordPress

```
/migrar-post-wp https://nextscenario.com/north-star-metric/
```

El skill:

1. Hace fetch del HTML público.
2. Extrae Yoast (title, meta description, og:image, pubDate, canonical, hreflang).
3. Convierte el body HTML → Markdown limpio.
4. Quita el H1 duplicado.
5. Resuelve imágenes lazy-loaded.
6. Empareja con su par ES/EN si existe vía hreflang.
7. Marca `needsReview: true` si la conversión es subóptima.

Tras ejecutarlo, **siempre** abre el archivo y revisa: las fórmulas matemáticas y los shortcodes de WP suelen necesitar limpieza manual.

---

## Camino 3 — Manual

### Paso 1 — Crear el archivo

```bash
# Para post nuevo en español:
touch blog/src/content/posts/es/mi-nuevo-post.mdx

# O en inglés:
touch blog/src/content/posts/en/my-new-post.mdx
```

> **`.md` vs `.mdx`**: usa `.mdx` solo si vas a usar componentes Astro inline (callouts, CTAs custom). Para texto plano + Markdown, usa `.md`. Es más seguro: las llaves `{` `}` literales no rompen el parser.

### Paso 2 — Frontmatter

Pega esto y rellena:

```yaml
---
title: 'Título del artículo (10–70 caracteres)'
description: 'Descripción meta entre 110 y 165 caracteres. Tiene que poder leerse como snippet de Google y enganchar al lector. Frases cortas.'
slug: 'mi-nuevo-post'
pubDate: '2026-04-26T10:00:00Z'
updatedDate: '2026-04-26T10:00:00Z'
lang: 'es'
tags: ['saas', 'metricas']
heroImage: ''
heroAlt: ''
translationOf: ''
author: 'NextScenario'
needsReview: false
draft: false
---
```

#### Reglas duras del frontmatter (si fallan, el build falla)

| Campo | Regla | Consejo |
|---|---|---|
| `title` | 10 ≤ len ≤ 70 | Sin punto final. Sin "!" ni "?". |
| `description` | 110 ≤ len ≤ 165 | Empieza fuerte, dato o promesa |
| `slug` | kebab-case | minúsculas, sin tildes, sin espacios |
| `pubDate` | ISO 8601 | usa la hora actual o pasada |
| `lang` | `'es'` o `'en'` | DEBE coincidir con la carpeta |
| `heroImage` | URL absoluta o `''` | si vacío, renderiza fallback CSS |
| `heroAlt` | ≥5 chars si hay hero | obligatorio cuando hay imagen |

### Paso 3 — Body

Estructura mínima:

```md
**Frase fuerte de apertura** que enganche al lector. Una segunda frase de contexto que prometa qué va a aprender. Dos o tres frases máximo.

## Primera sección (H2 — no H1)

Cuerpo de la sección. Párrafos cortos. Datos concretos cuando puedas.

- Bullet con **número o concepto clave**
- Bullet con ejemplo
- Bullet con referencia interna a otro post: [unit economics](/es/unit-economics/)

## Segunda sección

Más cuerpo. Inserta otro enlace interno: [análisis de cohortes](/es/estudio-de-cohortes/).

### Sub-sección si hace falta (H3)

Detalle. Tablas, listas, código.

| Cabecera | Cabecera |
|---|---|
| valor | valor |

## Conclusión o cierre

Resumen accionable, no genérico.
```

### Reglas duras del body

- **Sin H1**: el title del frontmatter ya es el H1 visual.
- **Mínimo 2 H2** (`## ...`).
- **Mínimo 2 enlaces internos** absolutos: `[texto](/es/slug/)` o `[texto](https://nextscenario.com/slug/)`. Linkea a otros posts del blog.
- **600+ palabras** recomendado. <500 dispara warning de auditoría.
- **Una palabra por H1/H2 destacable** opcional con `*cursiva*` (renderiza en Instrument Serif).

### Reglas blandas (brand book)

- **Producto siempre como `NextScenario`** (no "Next Scenario" ni "nextscenario").
- **Tono directo y data-forward**. Frases cortas. Sin relleno.
- **Anti-Excel**: el enemigo es entrada manual, CSVs, cierres mensuales. Refiérete a Excel como "el método antiguo".
- **Números con locale**: `€412.850` en ES, `€412,850` en EN.
- **CTAs como verbos**: "Solicitar demo", "Calcular tu margen". Nunca "Learn more" o "Más información".
- **Sin emojis**.
- **Sin signos de exclamación en headlines.**

---

## Validar antes de publicar

```bash
cd blog
npx astro check
```

Si pasa con `0 errors`, el post cumple el contrato SEO.

Si falla, te dirá exactamente qué campo y qué archivo:

```
[InvalidContentEntryDataError] post → my-new-post data does not match collection schema.
  description: description too short (target 120-160)
```

Solución: edita el frontmatter, vuelve a correr.

### Auditoría SEO completa (opcional)

```
/auditar-seo blog/src/content/posts/es/mi-nuevo-post.mdx
```

El skill devuelve un informe con:

- Errors (bloquean publicación)
- Warnings (deberías arreglar pero el build pasa)
- Sugerencias (links internos, longitud body, palabras prohibidas)

**Importante**: el skill nunca modifica el archivo, solo reporta. Tú aplicas los cambios.

---

## Crear la versión en el otro idioma

```
/traducir-articulo mi-nuevo-post → en
```

(O `→ es` si el origen es inglés.)

Qué pasa:

1. Lee `blog/src/content/posts/{origen}/mi-nuevo-post.mdx`.
2. Reescribe en idioma destino siguiendo el tono brand book (no traducción literal).
3. Adapta enlaces internos: `/es/mrr-saas/` → `/mrr-saas/` si el par EN existe; mantiene el original si no.
4. Crea el archivo en la carpeta del idioma destino.
5. **Actualiza `translationOf` en ambos posts** → activa hreflang automáticamente.

Repasa siempre la traducción. La fidelidad de tono importa más que la fidelidad palabra a palabra.

---

## Publicar

Cuando estés listo:

```bash
cd ~/Projects/nextscenario-web
git status                # qué archivos nuevos/modificados hay
git add blog/src/content/posts/
git commit -m "Add post: mi-nuevo-post (ES)"
git push origin blog-migration
```

Vercel detecta el push y despliega un preview en ~30 segundos.

URL del preview de la rama: https://blog-migration-nextscenario.vercel.app/

Cuando todo se vea bien, mergea a `main` y promociona a producción (ese paso lo definimos cuando estés listo para apagar WP).

---

## Errores comunes y cómo resolverlos

### Error: "description too short"

```
description: description too short (target 120-160)
```

Tu meta description tiene <110 caracteres. Reescríbela con más sustancia. **No la rellenes con paja**: tiene que ser informativa.

### Error: "title > 70 chars will be truncated in SERP"

Acorta el title. Quita preposiciones, "guía completa de", etc. Mantén lo que el usuario buscaría en Google.

### Error: "slug must be kebab-case"

Solo `a-z`, `0-9` y guiones. No tildes (`á → a`), no espacios, no mayúsculas, no underscore.

### Build falla con `Could not parse expression with acorn` en .mdx

El parser MDX está interpretando llaves `{` `}` como JSX. Soluciones:

- Cambia la extensión a `.md` (más seguro).
- O escapa las llaves: `\{` y `\}`.
- O envuelve la fórmula en backticks: `` `FCF = X - Y` ``.

### El post no aparece en el listing

- ¿`draft: true`? → quítalo.
- ¿`lang` coincide con la carpeta? → `/en/` debe ser `lang: 'en'`.
- ¿Has guardado el archivo? → con dev server, recarga forzada (Cmd+Shift+R).

### El post existe pero el lang switcher no aparece

Necesitas `translationOf: 'slug-del-otro-idioma'` en ambos archivos, y los dos slugs tienen que existir en disco. El skill `/traducir-articulo` lo hace automáticamente.

### Las imágenes están rotas

- Si la URL apunta a `/wp-content/uploads/...`: depende de que WordPress siga vivo. Cuando apaguemos WP, hay que descargar las imágenes a `blog/public/blog/images/` y reescribir paths.
- Si `heroImage: ''`: se renderiza el fallback CSS (navy + lime + grid + logo). Está bien, no es un error.

### El post tiene fórmulas matemáticas raras

Patrón típico exportado de WP con MathJax: `FCF=X−YFCF = X - YFCF=X−Y` (triplicado). Ya hay un script que lo limpia (`/tmp/gsc-export/fix_formulas.py` en el último estado de la migración). Para casos puntuales nuevos, busca el patrón a mano y deja solo la versión legible envuelta en `` `backticks` ``.

---

## Estructura del repo (referencia rápida)

```
blog/
├── src/
│   ├── content.config.ts            ← schema Zod (no tocar sin saber)
│   ├── content/posts/
│   │   ├── es/                      ← aquí van tus posts ES
│   │   └── en/                      ← aquí van tus posts EN
│   ├── pages/                       ← rutas Astro (no tocar para añadir posts)
│   ├── components/
│   │   ├── PostCard.astro           ← card del listing
│   │   └── CTABlock.astro           ← bloque CTA con demo + trial
│   ├── layouts/
│   │   └── BaseLayout.astro         ← header, footer, hreflang, JSON-LD
│   ├── lib/i18n.ts                  ← URLs, demo, trial UTM
│   └── styles/blog.css              ← estilos del blog
├── astro.config.mjs
├── package.json
└── HOW-TO-ADD-A-POST.md             ← este archivo
```

Para añadir posts solo tocas `src/content/posts/`. El resto está estable.

---

## Cheat sheet

```
# Crear post nuevo (skill)
/nuevo-articulo tema: <tu tema>

# Migrar de WP
/migrar-post-wp <URL completa>

# Traducir un post
/traducir-articulo <slug> → en

# Auditar SEO
/auditar-seo blog/src/content/posts/<lang>/<slug>.md

# Validar todo el blog
cd blog && npx astro check

# Preview local
cd blog && npm run dev      # http://localhost:4321

# Publicar
git add blog/src/content/posts/
git commit -m "Add post: <slug> (<lang>)"
git push origin blog-migration
```
