---
title: 'Regla del 40 en SaaS: qué es y cómo aplicarla'
description: 'Crecimiento + margen ≥ 40 %. La métrica que VCs y CFOs usan para decidir si un SaaS está sano o quema caja sin sentido. Cómo medirla bien.'
slug: 'regla-de-40-saas'
pubDate: '2026-04-26T10:00:00Z'
updatedDate: '2026-04-26T10:00:00Z'
lang: 'es'
tags: ['saas', 'metricas', 'unit-economics']
heroImage: ""
heroAlt: 'Regla del 40 en SaaS — gráfico de crecimiento más margen'
translationOf: 'rule-of-40-saas'
author: 'NextScenario'
needsReview: false
draft: false
businessModel: 'both'
---

La **regla del 40** es la métrica más rápida para saber si un SaaS está sano. Suma tu **tasa de crecimiento** y tu **margen de beneficio**: si pasa de 40 %, vas bien. Si no, estás quemando caja sin retorno proporcional.

La fórmula la popularizó Brad Feld en 2015 y desde entonces es el primer número que miran los VC en una serie A o B. Aquí va cómo calcularla, qué entradas usar y por qué muchos founders la aplican mal.

## La fórmula

```
Regla del 40 = Tasa de crecimiento (%) + Margen (%) ≥ 40
```

Suena simple porque lo es. La trampa está en **qué métricas concretas pones a cada lado**.

- **Crecimiento**: típicamente crecimiento YoY del ARR. Algunos usan crecimiento de revenue total, pero en SaaS con buena recurrencia ARR es más estable.
- **Margen**: aquí no hay consenso. Las tres opciones más comunes son margen EBITDA, margen de free cash flow, y margen operativo.

Para un SaaS B2B serie A típico, lo más usado es **EBITDA + crecimiento ARR**. En etapas más maduras, **FCF margin + crecimiento ARR**.

## Por qué importa

VCs e inversores la miran porque captura una verdad incómoda en SaaS: **crecimiento sin rentabilidad** o **rentabilidad sin crecimiento** son igual de malos a largo plazo.

- Empresa A: crece 60 %, margen –20 % → suma 40. Aprueba.
- Empresa B: crece 10 %, margen 30 % → suma 40. Aprueba.
- Empresa C: crece 50 %, margen –30 % → suma 20. Suspende.

Las tres queman caja distinto, pero la primera y la segunda están construyendo valor. La tercera está quemando capital sin retorno proporcional.

## Cómo se calcula con datos reales

Imagina una empresa SaaS con estos números:

| Métrica | Año actual | Año anterior |
|---|---|---|
| ARR | €4.000.000 | €2.500.000 |
| EBITDA | –€600.000 | –€800.000 |

**Crecimiento ARR**: (4.000.000 − 2.500.000) / 2.500.000 = **60 %**

**Margen EBITDA**: −600.000 / 4.000.000 = **−15 %**

**Regla del 40**: 60 + (−15) = **45**

✓ Pasa. Los inversores aceptan que la empresa pierda dinero porque crece muy rápido.

Si en el año siguiente el crecimiento baja a 30 % y el margen sigue en −15 %, la suma es 15. Suspende. Hay que recortar gastos o reactivar crecimiento — o ambos.

## Errores comunes al medirla

### 1. Usar crecimiento mensual en vez de anual

El crecimiento MoM amplifica picos puntuales. Para la regla del 40 usa siempre **YoY (12 meses)**, que normaliza estacionalidad.

### 2. Confundir [margen bruto](/es/blog-es/que-es-el-gross-margin/) con margen de la regla del 40

El **gross margin** mide eficiencia de producto (ingresos − COGS). La regla del 40 usa **margen operativo**, **EBITDA** o **FCF margin** — métricas que incluyen también gastos de venta, marketing, y G&A. No las mezcles.

### 3. Ignorar [free cash flow](/es/blog-es/free-cashflow/) cuando hay deuda

Si tienes deuda significativa, el EBITDA infla la rentabilidad real. Para empresas en serie B+ o con deuda en balance, **FCF margin** es más honesto.

### 4. Mirarla puntualmente y no su trayectoria

La regla del 40 es útil mes a mes, pero más útil aún es mirar su tendencia. Una empresa que pasó de 25 a 38 a 45 en tres años está en un camino sano. Una que pasó de 50 a 42 a 38 está perdiendo eficiencia aunque siga "pasando".

## Cuándo NO aplicar la regla del 40

La regla está pensada para **SaaS B2B en crecimiento**, típicamente de €1M a €100M de ARR. Fuera de ese rango pierde precisión:

- **Pre-ARR €1M**: el numerador (crecimiento) puede ser absurdamente alto y el margen muy negativo. Te dirá poco.
- **Empresas mature de €500M+ ARR**: el crecimiento se estabiliza por debajo del 30 % y el foco pasa a [unit economics](/es/blog-es/unit-economics/) más finos: NRR, magic number, payback de CAC.
- **Negocios no-SaaS**: ecommerce, marketplaces, services. Los márgenes y dinámicas de ingreso son distintas.

## Cómo se conecta con otras métricas

La regla del 40 es un **agregado**. Si suspendes, las métricas que te dicen *por qué* son:

- [Tasa de crecimiento](/es/blog-es/growth-rate/) → si baja, mira CAC payback, retention, top-of-funnel.
- [Margen bruto](/es/blog-es/que-es-el-gross-margin/) → si está por debajo del 70 %, tu producto no es eficiente.
- [EBITDA y EBIT](/es/blog-es/que-es-el-ebitda-y-ebit/) → si margen EBITDA es muy negativo, mira en qué línea de gasto.
- [MRR](/es/blog-es/mrr-saas/) y churn → predicen el crecimiento futuro.

Si pasas, no significa que todo esté bien — significa que el agregado es saludable. Sigue mirando los componentes.

## Cómo lo medimos en NextScenario

NextScenario calcula la regla del 40 en tiempo real con tus datos de Stripe + bancos + plataformas de publicidad. Sin importar CSVs, sin esperar al cierre mensual. Caja, ARR y margen actualizados a diario te dan la regla del 40 como un KPI vivo, no un retrovisor de hace 6 semanas.

Si quieres ver tu propia regla del 40 con tus datos reales, pídenos una demo de 20 minutos.
