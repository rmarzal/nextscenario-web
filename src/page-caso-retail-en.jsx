const cfg = { lang: "en", page: "use-case-retail.html", name: "Retail",
  heroPre: "Every", heroEm: "store", heroPost: ", every category, every POS, in", heroHl: "real time",
  lede: "Sales by store, live inventory, margins by category, omnichannel, seasonal forecast and critical stock alerts. One panel for your entire network.",
  kpis: [{l:"Sales today",v:"€18,420",s:"+14%"},{l:"Tickets",v:"284",s:"+22"},{l:"Avg margin",v:"42%",s:"+1pt"},{l:"Critical stock",v:"14 SKU",s:"review"}],
  dashTitle: "Live multi-store retail", dashKpis: [{l:"Top store",v:"Madrid",d:"+18% YoY"},{l:"Top category",v:"Accessories",d:"+12%"},{l:"Turnover",v:"42 days",d:"-3d"}],
  capabilities: [
    { tag: "01 · Metrics", title: "Sales & margins by store", body: "Live ranking by sales, margin, average ticket and conversion. Geographic heatmap and YoY comparison.", bullets: ["Store ranking","Avg ticket & units","Conversion by hour","YoY & vs. budget comparison"] },
    { tag: "02 · P&L", title: "P&L by store & category", body: "Income statement per store: sales, occupancy cost, staff, margins by category. Real profitability of each location.", bullets: ["P&L by store","Staff & occupancy costs","Margin by category","Contribution per location"], hi: true },
    { tag: "03 · Inventory", title: "Live stock & turnover", body: "Control by SKU and store. Stockout alerts, slow-mover detection, inventory value at cost.", bullets: ["Live stock by store","Turnover by SKU","Automatic slow-movers","Value at cost & WAC"] },
    { tag: "04 · Forecast", title: "Seasonal forecast", body: "Demand projection by store and category. Sale season, Christmas, back-to-school scenarios.", bullets: ["Demand by store/category","Seasonal scenarios","Replenishment recommendations","Coverage alerts"] },
    { tag: "05 · Omnichannel", title: "Physical + online unified", body: "Unite your POS with your ecommerce. See total sales per customer, cross-channel cannibalization, click & collect.", bullets: ["Cross-channel customers","Physical/online cannibalization","Click & collect tracking","Omnichannel LTV"] },
    { tag: "06 · Alerts", title: "Operational alerts", body: "Critical stock, store with sales decline, category with negative margin, cash register deviation.", bullets: ["Stock < 7 days","Store -20% week","Negative category margin","Cash register deviation"] }
  ],
  flow: [
    { title: "Connect POS & ecom", desc: "Shopify, POS, Odoo, Holded, your bank — direct integration." },
    { title: "We unify inventory", desc: "SKUs, variants, stores and warehouses in a single catalog." },
    { title: "Multi-store panel", desc: "Sales, margins and inventory by store, by the minute." },
    { title: "Decisions by location", desc: "Know which store to support, which product to move and when to restock." }
  ],
  tools: ["Shopify","Odoo","Holded","Stripe","POS","BBVA"],
  report: [
    { l: "Weekly sales", v: "€128,400", d: "+14%", pos: true },
    { l: "Top store", v: "Madrid", d: "+18% YoY", pos: true },
    { l: "Avg ticket", v: "€64", d: "+€3", pos: true },
    { l: "Avg turnover", v: "42 days", d: "-3d", pos: true },
    { l: "Critical stock", v: "14 SKU", d: "review", neg: true },
    { l: "Cash deviation", v: "€48", d: "within range", pos: true }
  ],
  alerts: [
    { k: "neg", t: "Valencia store -22%", s: "Conversion decline, low average ticket" },
    { k: "warn", t: "Critical stock · 14 SKU", s: "Coverage < 7 days in key stores" },
    { k: "pos", t: "Accessories +12% margin", s: "Category rising 4 weeks straight" },
    { k: "warn", t: "Madrid Gran Vía saturated", s: "85% capacity during peak hours" }
  ],
  ctaTitle: "Retail that decides by store, not by average.", seed: 7 };
ReactDOM.createRoot(document.getElementById("root")).render(<UseCasePage cfg={cfg} />);
