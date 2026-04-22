const cfg = { lang: "en", page: "use-case-ecommerce.html", name: "Ecommerce",
  heroPre: "Your entire", heroEm: "ecommerce", heroPost: "operation, unified in", heroHl: "real time",
  lede: "P&L by SKU, cashflow with marketplace payouts, demand forecast, automated reporting. Shopify, Amazon, Meta Ads and your bank in one place.",
  kpis: [{l:"Revenue 30d",v:"€412k",s:"+12.4%"},{l:"ROAS",v:"4.2x",s:"+0.4"},{l:"Net margin",v:"38%",s:"+2pts"},{l:"Returns",v:"3.1%",s:"-0.4pts"}],
  dashTitle: "Unified ecommerce view", dashKpis: [{l:"Weekly GMV",v:"€84,200",d:"+8%"},{l:"Orders",v:"1,284",d:"+67"},{l:"Meta CAC",v:"€54",d:"-€9"}],
  capabilities: [
    { tag: "01 · Metrics", title: "ROAS, margin & LTV by channel", body: "Real ROAS attributed to actual orders. Margin by SKU after fees, shipping and returns. LTV by acquisition cohort.", bullets: ["Meta / Google / TikTok ROAS","Net margin by SKU","LTV by channel","Multi-touch attribution"] },
    { tag: "02 · P&L", title: "Income statement by channel", body: "Consolidated P&L with revenue, COGS, marketplace fees, shipping and returns broken down by channel and product.", bullets: ["P&L by channel (D2C, Amazon, B2B)","COGS by SKU and batch","Shopify/Amazon/Stripe fees","Contribution margin"], hi: true },
    { tag: "03 · Cashflow", title: "Cashflow with real payouts", body: "Visibility into when money arrives: Stripe T+2, Amazon 14d, Shopify Payments. Reconciliation with bank balances.", bullets: ["Expected Stripe/Amazon payouts","Daily operating cashflow","Bank reconciliation","90-day treasury forecast"] },
    { tag: "04 · Forecast", title: "Demand & stock forecast", body: "Sales projection by SKU with seasonality. Stockout and excess inventory alerts.", bullets: ["Demand by SKU and variant","Days of stock remaining","Black Friday / Q4 scenarios","Reorder recommendations"] },
    { tag: "05 · Reporting", title: "Automated weekly report", body: "Every Monday on your WhatsApp: top SKUs, ROAS by channel, cash, returns. Shareable with investors.", bullets: ["WhatsApp + Email + Slack","Board-ready PDF","Segmented by store","Automatic YoY comparison"] },
    { tag: "06 · Alerts", title: "Alerts when something happens", body: "ROAS drops, SKU margin turns red, CAC spikes, critical stock. We alert you before it's too late.", bullets: ["ROAS below threshold","Negative SKU margin","Stock < 7 days","Returns spike"] }
  ],
  flow: [
    { title: "Connect sources", desc: "Shopify, Amazon, Meta, Google, Stripe, bank — in 15 minutes." },
    { title: "We normalize data", desc: "Orders, fees, returns and ad spend, all in a single model." },
    { title: "Live dashboards", desc: "ROAS, margin and cashflow by the minute, no Excel or month-end." },
    { title: "Decisions", desc: "Know which SKU to push, which channel to pause, and when to restock." }
  ],
  tools: ["Shopify","WooCommerce","Amazon","Meta Ads","Google Ads","Stripe"],
  report: [
    { l: "Weekly revenue", v: "€84,200", d: "+8%", pos: true },
    { l: "Net margin", v: "38%", d: "+2pts", pos: true },
    { l: "Meta ROAS", v: "4.6x", d: "+0.3", pos: true },
    { l: "Avg CAC", v: "€54", d: "-€9", pos: true },
    { l: "Returns", v: "3.1%", d: "-0.4pts", pos: true },
    { l: "Critical stock", v: "4 SKU", d: "review", neg: true }
  ],
  alerts: [
    { k: "neg", t: "Critical stock · SKU-AL23", s: "5 days of sales left at current pace" },
    { k: "warn", t: "Google ROAS < 3.0x", s: "\"Summer B2C\" campaign declining 3 days straight" },
    { k: "pos", t: "Meta margin +4pts", s: "\"Retargeting Q2\" campaign at 6.1x ROAS" },
    { k: "neg", t: "Returns ↑ SKU-BT11", s: "12% last week vs. 3% historical" }
  ],
  ctaTitle: "Ecommerce that decides on margin, not revenue.", seed: 4 };
ReactDOM.createRoot(document.getElementById("root")).render(<UseCasePage cfg={cfg} />);
