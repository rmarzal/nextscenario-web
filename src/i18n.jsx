// Translations + helpers
const TR = {
  es: {
    nav: { product: "Producto", integrations: "Integraciones", pricing: "Precios", customers: "Clientes", docs: "Docs" },
    cta: { demo: "Ver demo", start: "Empieza gratis", book: "Agendar llamada", trial: "Prueba 14 días gratis" },
    hero: {
      eyebrow: "Analítica de negocio · en tiempo real",
      trust: "Conectado a + de 40 fuentes · Stripe · Holded · Odoo · Shopify · BBVA · Paypal",
      tickers: [
        { label: "MRR", value: 184200, prefix: "€", delta: "+12.4%", pos: true, format: "euro" },
        { label: "Cash flow", value: 42310, prefix: "€", delta: "+8.1%", pos: true, format: "euro" },
        { label: "Burn mensual", value: 68900, prefix: "€", delta: "-3.2%", pos: true, format: "euro" },
        { label: "LTV / CAC", value: 4.2, suffix: "x", delta: "+0.3", pos: true, format: "ratio" }
      ],
      card: {
        live: "LIVE · actualizado hace 6 seg",
        title: "Ingresos mes en curso",
        big: "€412,850",
        sub: "vs. €367,100 mes anterior",
        foot: [
          { lbl: "Clientes activos", val: "1,284" },
          { lbl: "Runway", val: "18 meses" },
          { lbl: "Nuevos este mes", val: "+67" }
        ]
      },
      chipA: "Shopify · +€1,240 en 12 min",
      chipB: "Alerta: gasto AdWords +22%"
    },
    marquee: "Conéctate con",
    integrations: {
      kicker: "Integraciones",
      title: "Conecta una vez. Olvídate de picar datos.",
      desc: "Bancos, pasarelas, ERPs y canales de venta. NextScenario unifica tu stack y lo mantiene al día, sin CSVs ni cierres manuales.",
      items: [
        { n: "Stripe", k: "Pagos", d: "MRR, churn, reembolsos" },
        { n: "PayPal", k: "Pagos", d: "Sync diario de movimientos" },
        { n: "Holded", k: "ERP", d: "Facturas y contabilidad" },
        { n: "Odoo", k: "ERP", d: "Stock, ventas, costes" },
        { n: "BBVA", k: "Banco", d: "PSD2 · en tiempo real" },
        { n: "Santander", k: "Banco", d: "PSD2 · Open Banking" },
        { n: "CaixaBank", k: "Banco", d: "PSD2 · sincronización" },
        { n: "Sabadell", k: "Banco", d: "Cuentas y tarjetas" },
        { n: "ING", k: "Banco", d: "Movimientos y saldos" },
        { n: "Revolut", k: "Banco", d: "Multi-divisa" },
        { n: "Shopify", k: "Ecommerce", d: "Pedidos y cohortes" },
        { n: "WooCommerce", k: "Ecommerce", d: "Ventas y devoluciones" },
        { n: "Amazon", k: "Marketplace", d: "Ventas y fees" },
        { n: "Google Ads", k: "Marketing", d: "CAC y rendimiento" },
        { n: "Meta Ads", k: "Marketing", d: "ROAS por campaña" },
        { n: "POS", k: "Retail", d: "TPV y tienda física" }
      ],
      moreCount: "40+ integraciones",
      requestLink: "Solicitar una →"
    },
    dashSection: {
      kicker: "Producto",
      title: "Tu P&L, cashflow y métricas — siempre al día.",
      desc: "Una vista viva de tu negocio. No esperes al cierre de la gestoría: todo se calcula solo."
    },
    dash: {
      tabs: ["Overview", "Cash flow", "P&L", "Cohortes", "Forecast", "Campañas"],
      overview: {
        revenue: { label: "Ingresos (30d)", big: "€412,850", tag: "+12.4%" },
        cash: { label: "Caja disponible", big: "€1.24M", tag: "+€42k" },
        kpis: [
          { l: "MRR", v: "€184,200" },
          { l: "ARR", v: "€2.21M" },
          { l: "Gross margin", v: "72%" },
          { l: "Churn mensual", v: "2.1%" },
          { l: "LTV / CAC", v: "4.2x" },
          { l: "Runway", v: "18 meses" }
        ]
      },
      cashflow: {
        revenue: { label: "Cash in (30d)", big: "€478,210", tag: "+9.2%" },
        cash: { label: "Cash out (30d)", big: "€312,400", tag: "+4.1%", neg: true },
        kpis: [
          { l: "Cash neto", v: "€165,810" },
          { l: "Días de caja", v: "547" },
          { l: "Cobros pendientes", v: "€87,200" },
          { l: "Pagos próximos", v: "€54,100" },
          { l: "Nómina (mes)", v: "€118,400" },
          { l: "Impuestos Q", v: "€42,900" }
        ]
      },
      pl: {
        revenue: { label: "Ingresos netos", big: "€412,850", tag: "+12.4%" },
        cash: { label: "EBITDA", big: "€94,120", tag: "+18.6%" },
        kpis: [
          { l: "Coste ventas", v: "€115,600" },
          { l: "Margen bruto", v: "72%" },
          { l: "OPEX", v: "€203,130" },
          { l: "Marketing", v: "€62,400" },
          { l: "Personal", v: "€118,400" },
          { l: "Resultado neto", v: "€71,410" }
        ]
      },
      cohortes: {
        revenue: { label: "Retención M3", big: "78%", tag: "+3.2pts" },
        cash: { label: "LTV promedio", v: "€4,280", big: "€4,280", tag: "+€180" },
        kpis: [
          { l: "Cohorte Ene", v: "84%" },
          { l: "Cohorte Feb", v: "81%" },
          { l: "Cohorte Mar", v: "79%" },
          { l: "Cohorte Abr", v: "78%" },
          { l: "Churn 30d", v: "2.1%" },
          { l: "NRR", v: "112%" }
        ]
      },
      forecast: {
        revenue: { label: "ARR previsto Q4", big: "€3.1M", tag: "+40% YoY" },
        cash: { label: "Caja prevista Dic", big: "€1.82M", tag: "+€580k" },
        kpis: [
          { l: "Escenario base", v: "€2.9M" },
          { l: "Optimista", v: "€3.4M" },
          { l: "Conservador", v: "€2.5M" },
          { l: "Runway base", v: "22 meses" },
          { l: "Break-even", v: "May 2027" },
          { l: "Confianza", v: "82%" }
        ]
      },
      campanas: {
        revenue: { label: "ROAS total", big: "4.2x", tag: "+0.4" },
        cash: { label: "CAC medio", big: "€68", tag: "-€12", neg: false },
        kpis: [
          { l: "Google Ads", v: "3.8x" },
          { l: "Meta Ads", v: "4.6x" },
          { l: "TikTok", v: "2.1x" },
          { l: "Orgánico", v: "∞" },
          { l: "Email", v: "9.4x" },
          { l: "Afiliados", v: "5.1x" }
        ]
      }
    },
    features: {
      kicker: "Funcionalidades",
      title: "Todo lo que necesitas. Nada de Excel.",
      items: [
        { tag: "01", title: "Métricas automáticas", body: "MRR, churn, LTV, CAC, cohortes... calculado en tiempo real desde tus fuentes de datos.", vis: "metrics" },
        { tag: "02", title: "P&L y cashflow en vivo", body: "Cuenta de resultados y flujo de caja al día. Sin esperar al cierre mensual.", vis: "pl", style: "dark" },
        { tag: "03", title: "Cohortes y retención", body: "Entiende cómo se comportan tus clientes en el tiempo. Encuentra qué canales retienen mejor.", vis: "cohort" },
        { tag: "04", title: "Forecast inteligente", body: "Proyecta ingresos, gastos y caja con escenarios base, optimista y conservador.", vis: "forecast", style: "accent" },
        { tag: "05", title: "Reporting automático", body: "Informes semanales que se envían solos a tu bandeja, WhatsApp o Slack.", vis: "report" },
        { tag: "06", title: "Alertas e insights", body: "Te avisamos si algo cambia: caída de MRR, pico de gasto, churn anormal.", vis: "alert" }
      ]
    },
    roles: {
      kicker: "Para quién es",
      title: "Un solo panel. Cada equipo ve lo que necesita.",
      tabs: ["Founder / CEO", "CFO / Finanzas", "Marketing", "Ventas"],
      content: {
        0: {
          title: "Entiende tu negocio en 60 segundos.",
          desc: "Métricas clave, runway, cohortes y forecast en una sola vista. Cada lunes, un resumen en tu WhatsApp.",
          bullets: ["MRR, ARR, runway y churn al día", "Alertas cuando algo se mueve", "Resumen ejecutivo semanal automático", "Escenarios what-if en 2 clics"],
          kpis: [ {l:"MRR", v:"€184,200"}, {l:"Runway", v:"18m"}, {l:"Growth", v:"+12.4%"}, {l:"Burn", v:"€68.9k"} ]
        },
        1: {
          title: "Cierra el mes antes de que acabe.",
          desc: "P&L y cashflow reales, no el Excel de la gestoría dos meses tarde. Consolida filiales y divisas.",
          bullets: ["Conciliación bancaria automática", "Cuenta de P&L y cashflow en directo", "Multi-empresa y multi-divisa", "Exporta a tu gestoría con un clic"],
          kpis: [ {l:"EBITDA", v:"€94,120"}, {l:"Margen", v:"72%"}, {l:"Caja", v:"€1.24M"}, {l:"DSO", v:"34d"} ]
        },
        2: {
          title: "Sabe qué campañas funcionan de verdad.",
          desc: "ROAS, CAC y LTV por canal y campaña. No solo clics: dinero real que entra.",
          bullets: ["ROAS y CAC por canal", "Atribución a cohortes de clientes", "Seguimiento de presupuesto en vivo", "Alertas de gasto anómalo"],
          kpis: [ {l:"ROAS", v:"4.2x"}, {l:"CAC", v:"€68"}, {l:"LTV", v:"€4,280"}, {l:"Payback", v:"3.1m"} ]
        },
        3: {
          title: "Enfoca al equipo donde hay dinero.",
          desc: "Pipeline, conversión y ticket medio por comercial, canal y producto.",
          bullets: ["Pipeline valorado en tiempo real", "Conversión por fase y comercial", "Ticket medio y ciclo de venta", "Objetivos y progreso automático"],
          kpis: [ {l:"Pipeline", v:"€2.1M"}, {l:"Win rate", v:"32%"}, {l:"Ticket", v:"€3,840"}, {l:"Ciclo", v:"24d"} ]
        }
      }
    },
    whatsapp: {
      kicker: "Reporting",
      title: "Tus métricas llegan solas. WhatsApp, email o Slack.",
      desc: "Configura el informe una vez y recíbelo cada lunes a las 9:00. O pregunta cuando quieras: «¿Cómo va el MRR?»",
      bullets: ["Resúmenes semanales y mensuales", "Pregunta en lenguaje natural", "Comparte con tu equipo o inversores", "Alertas inmediatas cuando algo cambia"],
      chat: [
        { from: "bot", text: "Buenos lunes ☕ Aquí tu resumen semanal.", time: "9:00" },
        { from: "bot", chart: true, text: "MRR: €184.200 (+12.4% vs. semana pasada). Caja: €1,24M · 18 meses runway.", time: "9:00" },
        { from: "me", text: "¿Y el CAC de Meta Ads?", time: "9:14" },
        { from: "bot", text: "CAC Meta: €54 (-€9 vs. la semana pasada). ROAS: 4.6x. Campaña top: «Retargeting Q2».", time: "9:14" }
      ]
    },
    social: {
      kicker: "Clientes",
      title: "Equipos que ya no tocan Excel.",
      quotes: [
        { big: true, text: "Cerramos el mes el día 1, no el día 20. NextScenario nos ahorró 40 horas al mes en reporting.", name: "Lucía Martín", role: "CFO · Mintly" },
        { text: "La primera vez que vi el P&L en tiempo real pensé que estaba roto. Estaba bien. Era mágico.", name: "Javier Ortiz", role: "Founder · Holalow" },
        { text: "Los informes de WhatsApp los miran hasta mis inversores los domingos. Game changer.", name: "Nerea Prieto", role: "CEO · Kumo Retail" }
      ]
    },
    pricing: {
      kicker: "Precios",
      title: "Empieza gratis. Crece cuando quieras.",
      desc: "14 días de prueba. Sin tarjeta. Sin permanencia.",
      plans: [
        { name: "Starter", price: "€49", desc: "Para equipos de 1–5 personas dando sus primeros pasos con datos.", features: ["3 integraciones", "P&L y cashflow básico", "Reporting por email", "Alertas simples"], cta: "Empezar gratis" },
        { name: "Growth", price: "€149", desc: "Para pymes que necesitan reporting automático multi-canal.", features: ["Integraciones ilimitadas", "P&L, cashflow, cohortes", "Reporting WhatsApp + email", "Forecast con escenarios", "Alertas personalizadas", "Soporte prioritario"], cta: "Probar 14 días", hi: true },
        { name: "Enterprise", price: "Custom", desc: "Multi-empresa, multi-divisa, SSO, integraciones a medida.", features: ["Todo lo de Growth", "Multi-entidad y divisa", "SSO + SAML", "Integraciones a medida", "SLA y soporte dedicado"], cta: "Hablar con ventas" }
      ]
    },
    faq: {
      kicker: "FAQ",
      title: "Preguntas frecuentes",
      items: [
        { q: "¿Cuánto tarda en configurarse?", a: "Conectar tus fuentes de datos lleva entre 10 y 30 minutos. Los primeros informes están listos el mismo día." },
        { q: "¿Sustituye a mi gestoría?", a: "No. NextScenario te da visibilidad en tiempo real de tu negocio. Tu gestoría sigue haciendo la presentación fiscal, pero tú ya no esperas al cierre para decidir." },
        { q: "¿Mis datos están seguros?", a: "Cifrado en reposo y en tránsito, ISO 27001 y cumplimiento RGPD. Solo leemos datos: nunca modificamos nada en tus fuentes." },
        { q: "¿Qué pasa si no tengo una de las integraciones?", a: "Tenemos +40 integraciones nativas y conectores para cualquier API. Si usas algo poco común, lo añadimos en 2–3 semanas." },
        { q: "¿Puedo exportar o llevarme mis datos?", a: "Sí. Exporta a CSV, Excel, Google Sheets o conecta tu BI favorito vía API. Tus datos son tuyos." },
        { q: "¿Se integra con mi gestoría o asesor?", a: "Sí. Damos acceso limitado a tu asesor y exportamos directamente a los formatos más comunes (A3, Sage, Contasol)." }
      ]
    },
    ctaFinal: {
      title: "Deja de picar datos. Empieza a decidir.",
      sub: "14 días gratis. Sin tarjeta. Instalación en 30 minutos.",
      primary: "Empieza gratis",
      secondary: "Agendar demo"
    },
    footer: {
      product: "Producto",
      company: "Compañía",
      resources: "Recursos",
      legal: "Legal",
      productLinks: ["Funcionalidades", "Integraciones", "Modelos financieros", "Forecast", "Cashflow", "Precios"],
      companyLinks: ["Sobre nosotros", "Clientes", "Carreras", "Contacto"],
      resourcesLinks: ["Blog", "Documentación", "Guías", "Plantillas"],
      legalLinks: ["Privacidad", "Términos", "Seguridad", "RGPD"],
      tagline: "Tus datos de negocio, en tiempo real.",
      meta: "© 2026 NextScenario · Hecho en Madrid con números reales"
    }
  },
  en: {
    nav: { product: "Product", integrations: "Integrations", pricing: "Pricing", customers: "Customers", docs: "Docs" },
    cta: { demo: "See demo", start: "Start free", book: "Book a call", trial: "Free 14-day trial" },
    hero: {
      eyebrow: "Business analytics · in real time",
      trust: "Connected to 40+ sources · Stripe · Holded · Odoo · Shopify · BBVA · Paypal",
      tickers: [
        { label: "MRR", value: 184200, prefix: "€", delta: "+12.4%", pos: true, format: "euro" },
        { label: "Cash flow", value: 42310, prefix: "€", delta: "+8.1%", pos: true, format: "euro" },
        { label: "Monthly burn", value: 68900, prefix: "€", delta: "-3.2%", pos: true, format: "euro" },
        { label: "LTV / CAC", value: 4.2, suffix: "x", delta: "+0.3", pos: true, format: "ratio" }
      ],
      card: {
        live: "LIVE · updated 6s ago",
        title: "Revenue this month",
        big: "€412,850",
        sub: "vs. €367,100 last month",
        foot: [
          { lbl: "Active customers", val: "1,284" },
          { lbl: "Runway", val: "18 months" },
          { lbl: "New this month", val: "+67" }
        ]
      },
      chipA: "Shopify · +€1,240 in 12 min",
      chipB: "Alert: AdWords spend +22%"
    },
    marquee: "Connect with",
    integrations: {
      kicker: "Integrations",
      title: "Connect once. Never enter data again.",
      desc: "Banks, payment gateways, ERPs and sales channels. NextScenario unifies your stack and keeps it live — no CSVs, no month-end.",
      items: [
        { n: "Stripe", k: "Payments", d: "MRR, churn, refunds" },
        { n: "PayPal", k: "Payments", d: "Daily movement sync" },
        { n: "Holded", k: "ERP", d: "Invoices & accounting" },
        { n: "Odoo", k: "ERP", d: "Stock, sales, costs" },
        { n: "BBVA", k: "Bank", d: "PSD2 · real-time" },
        { n: "Santander", k: "Bank", d: "PSD2 · Open Banking" },
        { n: "CaixaBank", k: "Bank", d: "PSD2 · daily sync" },
        { n: "Sabadell", k: "Bank", d: "Accounts & cards" },
        { n: "ING", k: "Bank", d: "Movements & balances" },
        { n: "Revolut", k: "Bank", d: "Multi-currency" },
        { n: "Shopify", k: "Ecommerce", d: "Orders & cohorts" },
        { n: "WooCommerce", k: "Ecommerce", d: "Sales & refunds" },
        { n: "Amazon", k: "Marketplace", d: "Sales & fees" },
        { n: "Google Ads", k: "Marketing", d: "CAC & performance" },
        { n: "Meta Ads", k: "Marketing", d: "ROAS per campaign" },
        { n: "POS", k: "Retail", d: "In-store POS" }
      ],
      moreCount: "40+ integrations",
      requestLink: "Request one →"
    },
    dashSection: {
      kicker: "Product",
      title: "Your P&L, cashflow and metrics — always live.",
      desc: "A living view of your business. Stop waiting for the accountant's monthly close."
    },
    dash: {
      tabs: ["Overview", "Cash flow", "P&L", "Cohorts", "Forecast", "Campaigns"],
      overview: {
        revenue: { label: "Revenue (30d)", big: "€412,850", tag: "+12.4%" },
        cash: { label: "Cash on hand", big: "€1.24M", tag: "+€42k" },
        kpis: [
          { l: "MRR", v: "€184,200" },
          { l: "ARR", v: "€2.21M" },
          { l: "Gross margin", v: "72%" },
          { l: "Monthly churn", v: "2.1%" },
          { l: "LTV / CAC", v: "4.2x" },
          { l: "Runway", v: "18 months" }
        ]
      },
      cashflow: {
        revenue: { label: "Cash in (30d)", big: "€478,210", tag: "+9.2%" },
        cash: { label: "Cash out (30d)", big: "€312,400", tag: "+4.1%", neg: true },
        kpis: [
          { l: "Net cash", v: "€165,810" },
          { l: "Days of cash", v: "547" },
          { l: "Receivables", v: "€87,200" },
          { l: "Upcoming payments", v: "€54,100" },
          { l: "Payroll (mo)", v: "€118,400" },
          { l: "Taxes Q", v: "€42,900" }
        ]
      },
      pl: {
        revenue: { label: "Net revenue", big: "€412,850", tag: "+12.4%" },
        cash: { label: "EBITDA", big: "€94,120", tag: "+18.6%" },
        kpis: [
          { l: "COGS", v: "€115,600" },
          { l: "Gross margin", v: "72%" },
          { l: "OPEX", v: "€203,130" },
          { l: "Marketing", v: "€62,400" },
          { l: "Personnel", v: "€118,400" },
          { l: "Net income", v: "€71,410" }
        ]
      },
      cohortes: {
        revenue: { label: "M3 retention", big: "78%", tag: "+3.2pts" },
        cash: { label: "Avg LTV", big: "€4,280", tag: "+€180" },
        kpis: [
          { l: "Jan cohort", v: "84%" },
          { l: "Feb cohort", v: "81%" },
          { l: "Mar cohort", v: "79%" },
          { l: "Apr cohort", v: "78%" },
          { l: "30d churn", v: "2.1%" },
          { l: "NRR", v: "112%" }
        ]
      },
      forecast: {
        revenue: { label: "Q4 projected ARR", big: "€3.1M", tag: "+40% YoY" },
        cash: { label: "Dec cash forecast", big: "€1.82M", tag: "+€580k" },
        kpis: [
          { l: "Base case", v: "€2.9M" },
          { l: "Optimistic", v: "€3.4M" },
          { l: "Conservative", v: "€2.5M" },
          { l: "Base runway", v: "22 months" },
          { l: "Break-even", v: "May 2027" },
          { l: "Confidence", v: "82%" }
        ]
      },
      campanas: {
        revenue: { label: "Total ROAS", big: "4.2x", tag: "+0.4" },
        cash: { label: "Avg CAC", big: "€68", tag: "-€12" },
        kpis: [
          { l: "Google Ads", v: "3.8x" },
          { l: "Meta Ads", v: "4.6x" },
          { l: "TikTok", v: "2.1x" },
          { l: "Organic", v: "∞" },
          { l: "Email", v: "9.4x" },
          { l: "Affiliates", v: "5.1x" }
        ]
      }
    },
    features: {
      kicker: "Features",
      title: "Everything you need. No spreadsheets.",
      items: [
        { tag: "01", title: "Automated metrics", body: "MRR, churn, LTV, CAC, cohorts… calculated live from your data sources.", vis: "metrics" },
        { tag: "02", title: "Live P&L and cashflow", body: "Income statement and cashflow up-to-date. No waiting for month-end.", vis: "pl", style: "dark" },
        { tag: "03", title: "Cohorts & retention", body: "Understand how customers behave over time. Find which channels retain best.", vis: "cohort" },
        { tag: "04", title: "Smart forecasting", body: "Project revenue, expenses and cash with base, optimistic and conservative scenarios.", vis: "forecast", style: "accent" },
        { tag: "05", title: "Automated reporting", body: "Weekly reports delivered to your inbox, WhatsApp or Slack automatically.", vis: "report" },
        { tag: "06", title: "Alerts & insights", body: "We notify you if something shifts: MRR dip, spend spike, unusual churn.", vis: "alert" }
      ]
    },
    roles: {
      kicker: "Built for",
      title: "One dashboard. Every team gets what it needs.",
      tabs: ["Founder / CEO", "CFO / Finance", "Marketing", "Sales"],
      content: {
        0: {
          title: "Know your business in 60 seconds.",
          desc: "Key metrics, runway, cohorts and forecast in a single view. Every Monday, a summary on your WhatsApp.",
          bullets: ["MRR, ARR, runway and churn up to date", "Alerts when something moves", "Automated weekly executive summary", "What-if scenarios in 2 clicks"],
          kpis: [ {l:"MRR", v:"€184,200"}, {l:"Runway", v:"18m"}, {l:"Growth", v:"+12.4%"}, {l:"Burn", v:"€68.9k"} ]
        },
        1: {
          title: "Close the month before it ends.",
          desc: "Real P&L and cashflow, not the accountant's Excel two months late. Consolidate entities and currencies.",
          bullets: ["Automatic bank reconciliation", "Live P&L and cashflow", "Multi-entity & multi-currency", "One-click export to your accountant"],
          kpis: [ {l:"EBITDA", v:"€94,120"}, {l:"Margin", v:"72%"}, {l:"Cash", v:"€1.24M"}, {l:"DSO", v:"34d"} ]
        },
        2: {
          title: "Know which campaigns actually work.",
          desc: "ROAS, CAC and LTV per channel and campaign. Not just clicks: real money in.",
          bullets: ["ROAS and CAC by channel", "Attribution to customer cohorts", "Live budget tracking", "Abnormal spend alerts"],
          kpis: [ {l:"ROAS", v:"4.2x"}, {l:"CAC", v:"€68"}, {l:"LTV", v:"€4,280"}, {l:"Payback", v:"3.1m"} ]
        },
        3: {
          title: "Point your team where money is.",
          desc: "Pipeline, conversion and average ticket by rep, channel and product.",
          bullets: ["Live valued pipeline", "Conversion by stage and rep", "Average ticket and cycle", "Goals & automatic progress"],
          kpis: [ {l:"Pipeline", v:"€2.1M"}, {l:"Win rate", v:"32%"}, {l:"Ticket", v:"€3,840"}, {l:"Cycle", v:"24d"} ]
        }
      }
    },
    whatsapp: {
      kicker: "Reporting",
      title: "Your metrics come to you. WhatsApp, email or Slack.",
      desc: "Set up the report once and receive it every Monday at 9:00. Or ask anytime: \"How's MRR doing?\"",
      bullets: ["Weekly and monthly summaries", "Ask in natural language", "Share with your team or investors", "Instant alerts when something shifts"],
      chat: [
        { from: "bot", text: "Happy Monday ☕ Here's your weekly summary.", time: "9:00" },
        { from: "bot", chart: true, text: "MRR: €184,200 (+12.4% vs. last week). Cash: €1.24M · 18 months runway.", time: "9:00" },
        { from: "me", text: "What about Meta Ads CAC?", time: "9:14" },
        { from: "bot", text: "Meta CAC: €54 (-€9 vs. last week). ROAS: 4.6x. Top campaign: \"Q2 Retargeting\".", time: "9:14" }
      ]
    },
    social: {
      kicker: "Customers",
      title: "Teams that stopped touching Excel.",
      quotes: [
        { big: true, text: "We close the month on day 1, not day 20. NextScenario saved us 40 hours a month in reporting.", name: "Lucía Martín", role: "CFO · Mintly" },
        { text: "The first time I saw the live P&L I thought it was broken. It wasn't. It was magic.", name: "Javier Ortiz", role: "Founder · Holalow" },
        { text: "Even my investors read the WhatsApp reports on Sundays. Game changer.", name: "Nerea Prieto", role: "CEO · Kumo Retail" }
      ]
    },
    pricing: {
      kicker: "Pricing",
      title: "Start free. Grow when you want.",
      desc: "14-day trial. No card. No commitment.",
      plans: [
        { name: "Starter", price: "€49", desc: "For teams of 1–5 taking their first steps with data.", features: ["3 integrations", "Basic P&L & cashflow", "Email reporting", "Simple alerts"], cta: "Start free" },
        { name: "Growth", price: "€149", desc: "For SMBs that need automated multi-channel reporting.", features: ["Unlimited integrations", "P&L, cashflow, cohorts", "WhatsApp + email reporting", "Forecast with scenarios", "Custom alerts", "Priority support"], cta: "Try 14 days", hi: true },
        { name: "Enterprise", price: "Custom", desc: "Multi-entity, multi-currency, SSO, custom integrations.", features: ["Everything in Growth", "Multi-entity & currency", "SSO + SAML", "Custom integrations", "SLA & dedicated support"], cta: "Talk to sales" }
      ]
    },
    faq: {
      kicker: "FAQ",
      title: "Frequently asked",
      items: [
        { q: "How long does setup take?", a: "Connecting your data sources takes 10–30 minutes. Your first reports are ready the same day." },
        { q: "Does it replace my accountant?", a: "No. NextScenario gives you real-time visibility of your business. Your accountant still handles tax filings — but you stop waiting for month-end to decide." },
        { q: "Is my data secure?", a: "Encryption at rest and in transit, ISO 27001 and GDPR compliance. We only read data: we never modify anything at your sources." },
        { q: "What if I don't have one of the integrations?", a: "We have 40+ native integrations and generic API connectors. If you use something rare, we add it in 2–3 weeks." },
        { q: "Can I export or take my data?", a: "Yes. Export to CSV, Excel, Google Sheets or connect your favourite BI via API. Your data is yours." },
        { q: "Does it work with my accountant?", a: "Yes. Give limited access to your advisor and export directly to the most common formats (A3, Sage, Contasol)." }
      ]
    },
    ctaFinal: {
      title: "Stop entering data. Start deciding.",
      sub: "14 days free. No card. 30-minute setup.",
      primary: "Start free",
      secondary: "Book a demo"
    },
    footer: {
      product: "Product",
      company: "Company",
      resources: "Resources",
      legal: "Legal",
      productLinks: ["Features", "Integrations", "Financial models", "Forecast", "Cashflow", "Pricing"],
      companyLinks: ["About", "Customers", "Careers", "Contact"],
      resourcesLinks: ["Blog", "Docs", "Guides", "Templates"],
      legalLinks: ["Privacy", "Terms", "Security", "GDPR"],
      tagline: "Your business data, in real time.",
      meta: "© 2026 NextScenario · Built in Madrid with real numbers"
    }
  }
};

window.TR = TR;
