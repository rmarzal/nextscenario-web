const cfg = { page: "caso-retail.html", name: "Retail",
  heroPre: "Cada", heroEm: "tienda", heroPost: ", cada categoría, cada TPV, en", heroHl: "directo",
  lede: "Ventas por tienda, inventario en vivo, márgenes por categoría, omnicanal, forecast de temporada y alertas de stock crítico. Un solo panel para toda tu red.",
  kpis: [{l:"Ventas hoy",v:"€18,420",s:"+14%"},{l:"Tickets",v:"284",s:"+22"},{l:"Margen medio",v:"42%",s:"+1pt"},{l:"Stock crítico",v:"14 SKU",s:"revisar"}],
  dashTitle: "Retail multi-tienda en vivo", dashKpis: [{l:"Tienda top",v:"Madrid",d:"+18% YoY"},{l:"Categoría top",v:"Accesorios",d:"+12%"},{l:"Rotación",v:"42 días",d:"-3d"}],
  capabilities: [
    { tag: "01 · Métricas", title: "Ventas y márgenes por tienda", body: "Ranking en vivo por ventas, margen, ticket medio y conversión. Heatmap geográfico y comparativa YoY.", bullets: ["Ranking por tienda","Ticket medio y unidades","Conversión por hora","Comparativa YoY y vs. budget"] },
    { tag: "02 · P&L", title: "P&L por tienda y categoría", body: "Cuenta de resultados por tienda: ventas, coste de ocupación, personal, márgenes por categoría. Rentabilidad real de cada local.", bullets: ["P&L por tienda","Coste personal y ocupación","Margen por categoría","Contribución de cada local"], hi: true },
    { tag: "03 · Inventario", title: "Stock vivo y rotación", body: "Control por SKU y tienda. Alertas de rotura, detección de slow-movers, valor de inventario a coste.", bullets: ["Stock en vivo por tienda","Rotación por SKU","Slow-movers automáticos","Valor a coste y PMP"] },
    { tag: "04 · Forecast", title: "Forecast por temporada", body: "Proyección de demanda por tienda y categoría. Escenarios rebajas, Navidad, vuelta al cole.", bullets: ["Demanda por tienda/categoría","Escenarios de temporada","Recomendación de reposición","Alertas de cobertura"] },
    { tag: "05 · Omnicanal", title: "Tienda física + online unidos", body: "Une tu TPV con tu ecommerce. Ve venta total por cliente, canibalización entre canales, click & collect.", bullets: ["Clientes cross-canal","Canibalización físico/online","Click & collect tracking","LTV omnicanal"] },
    { tag: "06 · Alertas", title: "Alertas operativas", body: "Stock crítico, tienda con caída de ventas, categoría con margen negativo, cierre de caja con desviación.", bullets: ["Stock < 7 días","Tienda -20% semana","Margen categoría negativo","Desviación de caja"] }
  ],
  flow: [
    { title: "Conectas TPV y ecom", desc: "Shopify, POS, Odoo, Holded, tu banco — integración directa." },
    { title: "Unificamos inventario", desc: "SKUs, variantes, tiendas y almacenes en un único catálogo." },
    { title: "Panel multi-tienda", desc: "Ventas, márgenes e inventario por tienda al minuto." },
    { title: "Decisiones por local", desc: "Sabes qué tienda apoyar, qué producto mover y cuándo reponer." }
  ],
  tools: ["Shopify","Odoo","Holded","Stripe","POS","BBVA"],
  report: [
    { l: "Ventas semanales", v: "€128,400", d: "+14%", pos: true },
    { l: "Tienda top", v: "Madrid", d: "+18% YoY", pos: true },
    { l: "Ticket medio", v: "€64", d: "+€3", pos: true },
    { l: "Rotación media", v: "42 días", d: "-3d", pos: true },
    { l: "Stock crítico", v: "14 SKU", d: "revisar", neg: true },
    { l: "Caja desviación", v: "€48", d: "dentro rango", pos: true }
  ],
  alerts: [
    { k: "neg", t: "Tienda Valencia -22%", s: "Caída de conversión, ticket medio bajo" },
    { k: "warn", t: "Stock crítico · 14 SKU", s: "Cobertura < 7 días en tiendas clave" },
    { k: "pos", t: "Accesorios +12% margen", s: "Categoría subiendo 4 semanas seguidas" },
    { k: "warn", t: "Madrid Gran Vía saturado", s: "85% capacidad en horas punta" }
  ],
  ctaTitle: "Retail que decide por tienda, no por promedio.", seed: 7 };
ReactDOM.createRoot(document.getElementById("root")).render(<UseCasePage cfg={cfg} />);
