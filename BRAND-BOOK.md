# NextScenario — Brand Book

## Logo

Wordmark: **NextScenario** set in Geist SemiBold (600), 19px, letter-spacing -0.02em.

Logo mark: two overlapping squares (22×22px, border-radius 4px).
- Back square: `--ink` (#0A1230), offset -3px/-3px
- Front square: `--accent` (#D4FF3F), offset +3px/+3px, `mix-blend-mode: multiply`

Always pair the mark with the wordmark. Minimum clear space: 10px around the mark.

---

## Color Palette

### Primary palette — Navy · Electric Lime

| Role | Token | Hex | Usage |
|------|-------|-----|-------|
| Ink | `--ink` | `#0A1230` | Primary text, backgrounds, nav, cards |
| Ink 2 | `--ink-2` | `#111B42` | Hover states, secondary dark |
| Ink 3 | `--ink-3` | `#1B2657` | Tertiary dark, inset shadows |
| Paper | `--paper` | `#F6F4EE` | Page background, light cards |
| Paper 2 | `--paper-2` | `#EBE7DB` | Alternate section backgrounds |
| Accent | `--accent` | `#D4FF3F` | CTAs, highlights, active states, data viz primary |
| Accent 2 | `--accent-2` | `#5B8CFF` | Secondary accent, links, step numbers |
| Positive | `--pos` | `#00B67A` | Positive deltas, growth indicators |
| Negative | `--neg` | `#E24A4A` | Negative deltas, alerts, churn |
| Line | `--line` | `rgba(10,18,48,0.12)` | Borders, dividers |
| Line strong | `--line-strong` | `rgba(10,18,48,0.22)` | Emphasized borders, toggle outlines |
| Muted | `--mute` | `rgba(10,18,48,0.58)` | Secondary text, descriptions |

### Data visualization colors

1. `#D4FF3F` — Primary series (lime)
2. `#5B8CFF` — Secondary series (blue)
3. `#FF8A3D` — Tertiary series (orange)
4. `#FFFFFF` — Quaternary / other

### Alternate palettes (available via `data-palette` attribute)

**Onyx · Lime**: `--ink: #0B0B0C`, `--accent: #C6FF2E`, `--accent-2: #FF6B3D`
**Forest · Cream**: `--ink: #0F2A1F`, `--accent: #D4FF3F`, `--accent-2: #FF8A3D`

---

## Typography

### Font stack

| Role | Font | Fallback | Token |
|------|------|----------|-------|
| Sans (primary) | **Geist** | ui-sans-serif, system-ui, sans-serif | `--font-sans` |
| Mono | **JetBrains Mono** | ui-monospace, monospace | `--font-mono` |
| Serif (display) | **Instrument Serif** | serif | `--font-serif` |

All fonts loaded from Google Fonts: `Geist:wght@300;400;500;600;700`, `JetBrains Mono:wght@400;500;600`, `Instrument Serif:ital@0;1`.

### Type scale

| Element | Font | Size | Weight | Letter-spacing | Line-height |
|---------|------|------|--------|----------------|-------------|
| H1 (hero) | Geist | clamp(44px, 6.2vw, 88px) | 500 | -0.035em | 0.95 |
| H1 `<em>` | Instrument Serif | inherit | 400 italic | inherit | inherit |
| H1 `.hl` | Geist | inherit | inherit | — | — |
| H2 (section) | Geist | clamp(36px, 4.2vw, 56px) | 500 | -0.03em | 1 |
| H2 `<em>` | Instrument Serif | inherit | 400 italic | inherit | inherit |
| Subhead / lede | Geist | 19px | 400 | -0.005em | 1.45 |
| Body | Geist | 14–15px | 400 | — | 1.5 |
| Eyebrow / kicker | JetBrains Mono | 11px | 400 | 0.14em | — |
| Ticker label | JetBrains Mono | 10px | 400 | 0.1em | — |
| Ticker value | Geist | 28px | 500 | -0.02em | — |
| KPI big number | Geist | 42–56px | 400 | -0.025em | — |
| KPI label | JetBrains Mono | 10px | 400 | 0.08em | — |
| Nav links | Geist | 14px | 400 | — | — |
| Button | Geist | 14px | 500 | — | — |
| Marquee | JetBrains Mono | 12px | 400 | 0.08em | — |
| Footer meta | JetBrains Mono | 12px | 400 | 0.04em | — |

### Numeric display

All numbers use `font-variant-numeric: tabular-nums` and negative letter-spacing (-0.01em to -0.03em) for a tight, dashboard feel.

---

## Tone of voice

- **Direct and punchy.** Short sentences. No filler words.
- **Data-forward.** Lead with numbers, not promises. "€412,850 revenue this month" not "Great revenue growth."
- **Anti-Excel.** The enemy is manual data entry. Reference Excel, CSVs, and month-end closes as the old way.
- **Bilingual.** Spanish is the primary language (default). English mirrors the same tone, not a formal translation.
- **Confident but not arrogant.** We show what the product does, not what we think we are.

### Writing rules

1. Headlines: Geist medium + Instrument Serif italic for emphasis. One highlighted word in lime (`<span class="hl">`).
2. No exclamation marks in headlines.
3. Numbers always formatted with locale (€412.850 in ES, €412,850 in EN). Use `font-variant-numeric: tabular-nums`.
4. Metric labels in UPPERCASE mono (JetBrains Mono, 10–11px, letter-spacing 0.08–0.14em).
5. CTAs are action verbs: "Solicitar demo", "Book a demo", not "Learn more".

---

## Layout & spacing

- **Max width:** 1360px (`.container`)
- **Page padding:** 32px (20px on mobile < 720px)
- **Section padding:** 96px top/bottom
- **Card border-radius:** 14–24px depending on size
- **Button border-radius:** 999px (full pill)
- **Standard gap:** 12–16px (grid items), 40–56px (section columns)

### Grid patterns

- Hero: `1.05fr 1fr` split (dashboard on right)
- Features: 3-column grid (`repeat(3, 1fr)`)
- Pricing: 3-column grid
- Use case capabilities: 3-column grid
- Flow steps: 4-column grid with arrow connectors
- Dashboard KPIs: 2-column or 3-column grids
- Integration grid: 6-column with 1px gap dividers

### Responsive breakpoints

| Breakpoint | Behavior |
|------------|----------|
| ≤ 1040px | Hero goes single column |
| ≤ 1000px | Feature grid 2 columns |
| ≤ 900px | Dashboard, flow, alerts go single column |
| ≤ 820px | Nav links hidden, footer 2-column |
| ≤ 720px | Container padding 20px, tickers 2-column |
| ≤ 640px | Feature grid 1 column |
| ≤ 520px | Steps 1 column |

---

## Components

### Dark cards
Background `var(--ink)`, text `var(--paper)`, radial gradient glow from top-right using accent at 14–22% opacity. Border-radius 20–24px.

### Floating chips
White background, 12px shadow, pill tag in accent color. Positioned absolute on dashboard cards.

### Metric tiles
1px border `var(--line)`, border-radius 14–18px, monospace label + large tabular number + delta badge.

### Buttons
- **Primary:** `var(--ink)` bg, `var(--paper)` text, pill shape
- **Accent:** `var(--accent)` bg, `var(--ink)` text
- **Ghost:** transparent bg, `var(--line-strong)` border
- **Demo CTA:** Ink bg, accent text, 16px 24px padding, pulsing dot animation, arrow that moves on hover

### Animations
- `reveal`: fade-up on scroll (opacity 0→1, translateY 24→0, 0.7s ease)
- `blink`: eyebrow dot pulsing (50% opacity: 0.4)
- `draw`: SVG path stroke animation (1.8s ease-out)
- `marquee`: infinite horizontal scroll (38s linear)
- `btnPulse`: demo button dot pulsing (1.6s ease-in-out)
- Ticker values: eased counter animation (1.4s, cubic ease-out)
- Dashboard chart: live-updating data points every 1.4s

---

## Iconography

Monoline stroke icons (stroke-width 1.6, round caps/joins). Used sparingly:
- `arrow-right`, `arrow-up` — CTAs, navigation
- `zap` — primary CTA emphasis
- `check` — feature lists
- `chart`, `layers`, `target` — feature illustrations
- `bell`, `send`, `spark` — alerts, reporting

---

## Brand logos (integrations)

Simplified geometric marks using brand colors. Not official logos — trademark-safe interpretations:
- Stripe: purple `#635BFF` rounded rectangle with white "S"
- Shopify: green `#95BF47` rounded rectangle with serif "S"
- Amazon: dark `#232F3E` rectangle with orange "a."
- PayPal: navy `#003087` rectangle with blue italic "P"
- Meta/Google/Slack: simplified SVG compositions
- Banks (BBVA, Santander, CaixaBank, ING, Revolut): brand-colored rectangles with initials

Fallback: linear-gradient rectangle with 2-letter uppercase initials.

---

## URL structure

| Language | Path | Example |
|----------|------|---------|
| English (root) | `/` | `nextscenario.com/index.html` |
| Spanish | `/es/` | `nextscenario.com/es/index.html` |

Default language: Spanish (`x-default` → `/es/index.html`).

### Demo booking URLs
- EN: `https://nextscenario.com/book-demo/`
- ES: `https://nextscenario.com/es/reservar-demo/`
