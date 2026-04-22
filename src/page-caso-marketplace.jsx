const cfg = { page: "caso-marketplace.html", name: "Marketplace",
  heroPre: "GMV,", heroEm: "take rate", heroPost: "y los dos lados del mercado, en", heroHl: "tiempo real",
  lede: "GMV, take rate, fees, supply vs demand, liquidez, top sellers, cohortes de compradores. Todo lo que necesitas para entender un marketplace de dos lados.",
  kpis: [{l:"GMV 30d",v:"€1.82M",s:"+18%"},{l:"Take rate",v:"8.4%",s:"+0.3pts"},{l:"Supply activa",v:"1,284",s:"+67"},{l:"MAU demanda",v:"42,180",s:"+12%"}],
  dashTitle: "Two-sided marketplace", dashKpis: [{l:"Fee revenue",v:"€152,900",d:"+18%"},{l:"Liquidez",v:"72%",d:"+4pts"},{l:"Top 10 sellers",v:"48% GMV",d:"concentración"}],
  capabilities: [
    { tag: "01 · Métricas", title: "GMV, take rate y fee revenue", body: "GMV bruto, take rate efectivo, fees por categoría y tipo. Revenue neto del marketplace desglosado.", bullets: ["GMV por categoría y región","Take rate efectivo vs nominal","Fees supply vs demand","Revenue neto"] },
    { tag: "02 · Supply/Demand", title: "Equilibrio de los dos lados", body: "Ratio oferta-demanda por segmento. Detección de huecos de supply y sobreoferta. Match rate por búsqueda.", bullets: ["Supply/demand por segmento","Match rate","Time to first interaction","Gaps de supply"], hi: true },
    { tag: "03 · Sellers", title: "Top sellers y cohortes", body: "Ranking por GMV, rating, churn. Concentración top 10 / 100. Cohortes de nuevos sellers y su ramp-up.", bullets: ["Ranking de sellers","Concentración top N","Cohortes de nuevos sellers","Sellers inactivos 30d+"] },
    { tag: "04 · Forecast", title: "Forecast de GMV y take rate", body: "Proyección de GMV por lado del mercado, sensibilidad al take rate, escenarios de liquidez.", bullets: ["Forecast GMV 24 meses","Sensibilidad take rate","Escenarios de liquidez","Proyección supply/demand"] },
    { tag: "05 · Cashflow", title: "Cashflow con split de pagos", body: "Payouts a sellers, fees retenidas, escrow, reembolsos. Conciliación bancaria y tesorería.", bullets: ["Payouts a sellers","Escrow y retenciones","Reembolsos y disputas","Conciliación multi-banco"] },
    { tag: "06 · Alertas", title: "Alertas de salud del marketplace", body: "Caída de match rate, sellers top inactivos, concentración peligrosa, abuso de fees.", bullets: ["Match rate < umbral","Seller top inactivo 7d","Concentración top 10 > 50%","Disputas en aumento"] }
  ],
  flow: [
    { title: "Conectas plataforma", desc: "Stripe Connect, tu backend, banco, CRM — integración completa." },
    { title: "Modelamos los 2 lados", desc: "Supply, demand, transacciones y fees en un único modelo." },
    { title: "Panel marketplace", desc: "GMV, take rate, liquidez, cohortes — todo en vivo." },
    { title: "Escalas con salud", desc: "Ajustas take rate, activas sellers, cierras gaps de supply." }
  ],
  tools: ["Stripe","Holded","Odoo","Slack","HubSpot","PayPal"],
  report: [
    { l: "GMV semanal", v: "€432,100", d: "+18%", pos: true },
    { l: "Take rate efectivo", v: "8.4%", d: "+0.3pts", pos: true },
    { l: "Match rate", v: "78%", d: "+5pts", pos: true },
    { l: "Sellers activos", v: "1,284", d: "+67", pos: true },
    { l: "Top 10 GMV", v: "48%", d: "vigilar", neg: true },
    { l: "Disputas abiertas", v: "12", d: "-3", pos: true }
  ],
  alerts: [
    { k: "warn", t: "Concentración top 10: 48%", s: "Marketplace dependiente de pocos sellers" },
    { k: "neg", t: "Gap de supply · Barcelona", s: "Demand > supply x3 últimos 14 días" },
    { k: "pos", t: "Match rate +5pts", s: "Mejoras de ranking están funcionando" },
    { k: "warn", t: "3 sellers top sin vender 7d", s: "Revisa con customer success" }
  ],
  ctaTitle: "Marketplaces que entienden sus dos lados.", seed: 5 };
ReactDOM.createRoot(document.getElementById("root")).render(<UseCasePage cfg={cfg} />);
