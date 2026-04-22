const cfg = { page: "caso-ecommerce.html", name: "Ecommerce",
  heroPre: "Toda tu operación", heroEm: "ecommerce", heroPost: ", unificada en", heroHl: "tiempo real",
  lede: "P&L por SKU, cashflow con pagos de marketplace, forecast de demanda, reporting automático. Shopify, Amazon, Meta Ads y tu banco en un solo sitio.",
  kpis: [{l:"Revenue 30d",v:"€412k",s:"+12.4%"},{l:"ROAS",v:"4.2x",s:"+0.4"},{l:"Margen neto",v:"38%",s:"+2pts"},{l:"Devoluciones",v:"3.1%",s:"-0.4pts"}],
  dashTitle: "Vista ecommerce unificada", dashKpis: [{l:"GMV semana",v:"€84,200",d:"+8%"},{l:"Pedidos",v:"1,284",d:"+67"},{l:"CAC Meta",v:"€54",d:"-€9"}],
  capabilities: [
    { tag: "01 · Métricas", title: "ROAS, margen y LTV por canal", body: "ROAS real atribuido a pedidos reales. Margen por SKU tras fees, envío y devoluciones. LTV por cohorte de adquisición.", bullets: ["ROAS Meta / Google / TikTok","Margen neto por SKU","LTV por canal","Atribución multi-touch"] },
    { tag: "02 · P&L", title: "Cuenta de resultados por canal", body: "P&L consolidado con revenue, COGS, fees de marketplace, shipping y devoluciones desglosados por canal y producto.", bullets: ["P&L por canal (D2C, Amazon, B2B)","COGS por SKU y lote","Fees Shopify/Amazon/Stripe","Margen de contribución"], hi: true },
    { tag: "03 · Cashflow", title: "Cashflow con payouts reales", body: "Visibilidad de cuándo llega el dinero: Stripe T+2, Amazon 14d, Shopify Payments. Cuadre con saldos bancarios.", bullets: ["Payouts previstos Stripe/Amazon","Cashflow operativo diario","Conciliación con bancos","Previsión de tesorería 90 días"] },
    { tag: "04 · Forecast", title: "Forecast de demanda y stock", body: "Proyección de ventas por SKU con estacionalidad. Alertas de rotura de stock y exceso de inventario.", bullets: ["Demanda por SKU y variante","Días de stock restante","Escenarios Black Friday / Q4","Recomendación de reorder"] },
    { tag: "05 · Reporting", title: "Informe semanal automático", body: "Cada lunes en tu WhatsApp: top SKUs, ROAS por canal, caja, devoluciones. Compartible con inversores.", bullets: ["WhatsApp + Email + Slack","PDF listo para board","Segmentado por tienda","Comparativa YoY automática"] },
    { tag: "06 · Alertas", title: "Alertas cuando algo pasa", body: "ROAS se cae, margen por SKU en rojo, CAC sube, stock crítico. Te avisamos antes de que sea tarde.", bullets: ["ROAS < umbral","Margen SKU negativo","Stock < 7 días","Pico de devoluciones"] }
  ],
  flow: [
    { title: "Conectas fuentes", desc: "Shopify, Amazon, Meta, Google, Stripe, banco — en 15 minutos." },
    { title: "Normalizamos datos", desc: "Pedidos, fees, devoluciones y gasto en ads, todo en un único modelo." },
    { title: "Dashboards en vivo", desc: "ROAS, margen y cashflow al minuto, sin Excel ni cierres." },
    { title: "Decisiones", desc: "Sabes qué SKU impulsar, qué canal pausar y cuándo rellenar stock." }
  ],
  tools: ["Shopify","WooCommerce","Amazon","Meta Ads","Google Ads","Stripe"],
  report: [
    { l: "Revenue semanal", v: "€84,200", d: "+8%", pos: true },
    { l: "Margen neto", v: "38%", d: "+2pts", pos: true },
    { l: "ROAS Meta", v: "4.6x", d: "+0.3", pos: true },
    { l: "CAC medio", v: "€54", d: "-€9", pos: true },
    { l: "Devoluciones", v: "3.1%", d: "-0.4pts", pos: true },
    { l: "Stock crítico", v: "4 SKU", d: "revisar", neg: true }
  ],
  alerts: [
    { k: "neg", t: "Stock crítico · SKU-AL23", s: "Quedan 5 días de venta al ritmo actual" },
    { k: "warn", t: "ROAS Google < 3.0x", s: "Campaña «Verano B2C» bajando 3 días seguidos" },
    { k: "pos", t: "Margen Meta +4pts", s: "Campaña «Retargeting Q2» al 6.1x ROAS" },
    { k: "neg", t: "Devoluciones ↑ SKU-BT11", s: "12% última semana vs. 3% histórico" }
  ],
  ctaTitle: "Ecommerce que decide con margen, no con ingresos.", seed: 4 };
ReactDOM.createRoot(document.getElementById("root")).render(<UseCasePage cfg={cfg} />);
