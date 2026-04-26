---
title: 'Rule of 40 in SaaS: what it is and how to apply it'
description: 'Growth + margin ≥ 40 %. The number VCs and CFOs use first to decide if a SaaS is healthy or burning cash without return. How to measure it right.'
slug: 'rule-of-40-saas'
pubDate: '2026-04-26T10:00:00Z'
updatedDate: '2026-04-26T10:00:00Z'
lang: 'en'
tags: ['saas', 'metrics', 'unit-economics']
heroImage: ""
heroAlt: 'Rule of 40 in SaaS — chart of growth plus margin'
translationOf: 'regla-de-40-saas'
author: 'NextScenario'
needsReview: false
draft: false
businessModel: 'both'
---

The **Rule of 40** is the fastest single check on SaaS health. Add your **growth rate** and your **profit margin**: if it clears 40 %, you're in good shape. If it doesn't, you're burning cash without a proportional return.

The rule was popularised by Brad Feld in 2015 and it's now the first number a VC looks at in a Series A or B. Here's how to calculate it, which inputs to use, and why most founders apply it wrong.

## The formula

```
Rule of 40 = Growth rate (%) + Margin (%) ≥ 40
```

The math is trivial. The trap is **which specific metrics you put on each side**.

- **Growth**: typically YoY ARR growth. Some teams use total revenue growth, but in SaaS with recurring billing, ARR is more stable.
- **Margin**: no consensus here. The three most common choices are EBITDA margin, free cash flow margin, and operating margin.

For a typical Series A B2B SaaS, the most-used combo is **EBITDA + ARR growth**. At later stages, **FCF margin + ARR growth**.

## Why it matters

Investors lean on it because it captures an uncomfortable truth in SaaS: **growth without profitability** and **profitability without growth** are both bad in the long run.

- Company A: grows 60 %, margin –20 % → sums to 40. Pass.
- Company B: grows 10 %, margin 30 % → sums to 40. Pass.
- Company C: grows 50 %, margin –30 % → sums to 20. Fail.

All three burn cash differently, but the first two are building value. The third is destroying capital with no proportional return.

## How to calculate it with real data

Imagine a SaaS company with these numbers:

| Metric | Current year | Prior year |
|---|---|---|
| ARR | $4,000,000 | $2,500,000 |
| EBITDA | –$600,000 | –$800,000 |

**ARR growth**: (4,000,000 − 2,500,000) / 2,500,000 = **60 %**

**EBITDA margin**: −600,000 / 4,000,000 = **−15 %**

**Rule of 40**: 60 + (−15) = **45**

✓ Pass. Investors accept losses because the company is growing fast enough to justify them.

If next year growth drops to 30 % and margin stays at −15 %, the sum is 15. Fail. You either cut spend, reignite growth, or both.

## Common mistakes when measuring it

### 1. Using monthly growth instead of annual

MoM growth amplifies one-off spikes. For the Rule of 40 always use **YoY (12 months)**, which smooths seasonality.

### 2. Confusing [gross margin](/gross-margin-vs-net-margin/) with the Rule of 40 margin

**Gross margin** measures product efficiency (revenue − COGS). The Rule of 40 uses **operating margin**, **EBITDA**, or **FCF margin** — metrics that also include sales, marketing, and G&A. Don't conflate them.

### 3. Ignoring [free cash flow](/free-cashflow/) when there's debt

If you carry significant debt, EBITDA inflates real profitability. For Series B+ companies or anyone with debt on the balance sheet, **FCF margin** is the more honest input.

### 4. Reading it as a snapshot, not a trajectory

The Rule of 40 is useful month over month, but the trajectory matters more. A company moving from 25 to 38 to 45 over three years is on a healthy path. A company moving from 50 to 42 to 38 is losing efficiency, even if it still "passes".

## When NOT to apply the Rule of 40

The rule is built for **growing B2B SaaS**, typically between $1M and $100M ARR. Outside that band, accuracy drops:

- **Pre-$1M ARR**: growth percentages can be absurdly high and margins deeply negative. The rule tells you very little.
- **Mature companies above $500M ARR**: growth stabilises below 30 %, and the focus shifts to finer [unit economics](/unit-economics/): NRR, magic number, CAC payback.
- **Non-SaaS businesses**: ecommerce, marketplaces, services. Margin and revenue dynamics behave differently.

## How it connects to other metrics

The Rule of 40 is an **aggregate**. When you fail it, the metrics that tell you *why* are:

- Growth rate → if it's dropping, look at CAC payback, retention, top-of-funnel.
- [Gross margin](/gross-margin-vs-net-margin/) → if it's below 70 %, your product isn't efficient.
- [EBITDA and EBIT](/understanding-cash-ebitda-vs-ebitda/) → if margin is deeply negative, find the spend line responsible.
- [MRR](/mrr-saas/) and churn → predict next year's growth.

Passing doesn't mean everything is fine — it means the aggregate is healthy. Keep watching the components.

## How NextScenario measures it

NextScenario calculates the Rule of 40 in real time from your Stripe + bank + ad-platform data. No CSV imports, no waiting on month-end. Cash, ARR, and margin updated daily turn the Rule of 40 into a live KPI, not a rear-view mirror six weeks late.

If you want to see your own Rule of 40 with your real numbers, book a 20-minute demo.
