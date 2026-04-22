const cfg = { page: "caso-saas.html", name: "SaaS",
  heroPre: "MRR,", heroEm: "cohortes", heroPost: ", burn y runway — sin", heroHl: "Excel",
  lede: "MRR movement, retention por cohorte, NRR, payback, burn y runway. Dashboards listos para inversores, alertas de churn y forecast con 3 escenarios.",
  kpis: [{l:"MRR",v:"€184,200",s:"+12.4%"},{l:"Churn",v:"2.1%",s:"-0.3pts"},{l:"LTV/CAC",v:"4.2x",s:"+0.3"},{l:"Runway",v:"18m",s:"estable"}],
  dashTitle: "SaaS metrics", dashKpis: [{l:"ARR",v:"€2.21M",d:"+24% YoY"},{l:"NRR",v:"112%",d:"+3pts"},{l:"Payback",v:"3.1m",d:"-0.4m"}],
  capabilities: [
    { tag: "01 · Métricas", title: "MRR movement y SaaS metrics", body: "MRR desglosado: new, expansion, contraction, churn. ARR, NRR, GRR, LTV, CAC, payback — todo al día.", bullets: ["MRR movement","ARR / NRR / GRR","LTV, CAC, payback","Rule of 40"] },
    { tag: "02 · Cohortes", title: "Retención por cohorte y canal", body: "Retention M1/M3/M6/M12 por cohorte de adquisición. Entiende qué canal retiene mejor, qué plan se expande.", bullets: ["Retention por cohorte","Churn predictivo","Expansion por segmento","Análisis por canal/plan"], hi: true },
    { tag: "03 · Burn & Runway", title: "Burn real y runway creíble", body: "Burn neto y bruto con tus cuentas, no con Excel de hace 3 meses. Runway con 3 escenarios actualizado cada día.", bullets: ["Burn neto / bruto diario","Runway base/opt/cons","Cash conversion cycle","Dashboard board-ready"] },
    { tag: "04 · Forecast", title: "Forecast de ARR con escenarios", body: "Proyección de ARR con drivers: nuevo MRR, churn, expansion, pricing. Simula rondas, contrataciones o subidas de precio.", bullets: ["Forecast ARR 24 meses","Palancas (hiring, pricing, churn)","Escenarios what-if","Ready para fundraising"] },
    { tag: "05 · Reporting", title: "Board reports en un clic", body: "Informe mensual para el board: MRR movement, cohortes, burn, runway. Exportable a PDF y slides.", bullets: ["Board report mensual","PDF + slides + Notion","Compartible con VCs","Histórico versionado"] },
    { tag: "06 · Alertas", title: "Alertas de churn y SaaS health", body: "Churn anormal, caída de expansion, pico de downgrades, NRR < 100%. Y alertas de clientes en riesgo.", bullets: ["Churn > umbral","Clientes en riesgo","Expansion bajando","NRR < 100%"] }
  ],
  flow: [
    { title: "Conectas Stripe y CRM", desc: "Stripe, HubSpot, Salesforce, Chargebee, tu banco — setup en 30 min." },
    { title: "Calculamos métricas", desc: "MRR movement, cohortes, burn, runway — todo automático." },
    { title: "Dashboards y alertas", desc: "Panel ejecutivo, board report y alertas en Slack." },
    { title: "Crece con datos", desc: "Pitchea a VCs, decide hiring, ajusta pricing — con datos de verdad." }
  ],
  tools: ["Stripe","HubSpot","Salesforce","Slack","Holded","Xero"],
  report: [
    { l: "Net new MRR", v: "€18,420", d: "+12%", pos: true },
    { l: "Churn", v: "2.1%", d: "-0.3pts", pos: true },
    { l: "NRR", v: "112%", d: "+3pts", pos: true },
    { l: "Burn neto", v: "€68,900", d: "estable", pos: true },
    { l: "Runway", v: "18 meses", d: "+0.4m", pos: true },
    { l: "Clientes riesgo", v: "6", d: "actuar", neg: true }
  ],
  alerts: [
    { k: "warn", t: "Churn plan Starter 4.1%", s: "Subida de 2pts vs. media histórica" },
    { k: "neg", t: "6 clientes en riesgo", s: "NPS bajo + uso decreciente últimos 30d" },
    { k: "pos", t: "Expansion Enterprise +22%", s: "3 upsells en la última semana" },
    { k: "warn", t: "Payback Meta > 4m", s: "Canal empeorando payback 2 meses seguidos" }
  ],
  ctaTitle: "SaaS que cierra su ronda con datos, no con promesas.", seed: 2 };
ReactDOM.createRoot(document.getElementById("root")).render(<UseCasePage cfg={cfg} />);
