const cfg = { lang: "en", page: "use-case-marketplace.html", name: "Marketplace",
  heroPre: "GMV,", heroEm: "take rate", heroPost: "and both sides of the market, in", heroHl: "real time",
  lede: "GMV, take rate, fees, supply vs demand, liquidity, top sellers, buyer cohorts. Everything you need to understand a two-sided marketplace.",
  kpis: [{l:"GMV 30d",v:"€1.82M",s:"+18%"},{l:"Take rate",v:"8.4%",s:"+0.3pts"},{l:"Active supply",v:"1,284",s:"+67"},{l:"Demand MAU",v:"42,180",s:"+12%"}],
  dashTitle: "Two-sided marketplace", dashKpis: [{l:"Fee revenue",v:"€152,900",d:"+18%"},{l:"Liquidity",v:"72%",d:"+4pts"},{l:"Top 10 sellers",v:"48% GMV",d:"concentration"}],
  capabilities: [
    { tag: "01 · Metrics", title: "GMV, take rate & fee revenue", body: "Gross GMV, effective take rate, fees by category and type. Net marketplace revenue broken down.", bullets: ["GMV by category & region","Effective vs nominal take rate","Supply vs demand fees","Net revenue"] },
    { tag: "02 · Supply/Demand", title: "Two-sided equilibrium", body: "Supply-demand ratio by segment. Supply gap and oversupply detection. Match rate by search.", bullets: ["Supply/demand by segment","Match rate","Time to first interaction","Supply gaps"], hi: true },
    { tag: "03 · Sellers", title: "Top sellers & cohorts", body: "Ranking by GMV, rating, churn. Top 10/100 concentration. New seller cohorts and their ramp-up.", bullets: ["Seller ranking","Top N concentration","New seller cohorts","Sellers inactive 30d+"] },
    { tag: "04 · Forecast", title: "GMV & take rate forecast", body: "GMV projection by market side, take rate sensitivity, liquidity scenarios.", bullets: ["24-month GMV forecast","Take rate sensitivity","Liquidity scenarios","Supply/demand projection"] },
    { tag: "05 · Cashflow", title: "Cashflow with payment splits", body: "Seller payouts, retained fees, escrow, refunds. Bank reconciliation and treasury.", bullets: ["Seller payouts","Escrow & retentions","Refunds & disputes","Multi-bank reconciliation"] },
    { tag: "06 · Alerts", title: "Marketplace health alerts", body: "Match rate decline, top sellers inactive, dangerous concentration, fee abuse.", bullets: ["Match rate < threshold","Top seller inactive 7d","Top 10 concentration > 50%","Disputes increasing"] }
  ],
  flow: [
    { title: "Connect platform", desc: "Stripe Connect, your backend, bank, CRM — full integration." },
    { title: "We model both sides", desc: "Supply, demand, transactions and fees in a single model." },
    { title: "Marketplace panel", desc: "GMV, take rate, liquidity, cohorts — all live." },
    { title: "Scale with health", desc: "Adjust take rate, activate sellers, close supply gaps." }
  ],
  tools: ["Stripe","Holded","Odoo","Slack","HubSpot","PayPal"],
  report: [
    { l: "Weekly GMV", v: "€432,100", d: "+18%", pos: true },
    { l: "Effective take rate", v: "8.4%", d: "+0.3pts", pos: true },
    { l: "Match rate", v: "78%", d: "+5pts", pos: true },
    { l: "Active sellers", v: "1,284", d: "+67", pos: true },
    { l: "Top 10 GMV", v: "48%", d: "monitor", neg: true },
    { l: "Open disputes", v: "12", d: "-3", pos: true }
  ],
  alerts: [
    { k: "warn", t: "Top 10 concentration: 48%", s: "Marketplace dependent on few sellers" },
    { k: "neg", t: "Supply gap · Barcelona", s: "Demand > supply x3 last 14 days" },
    { k: "pos", t: "Match rate +5pts", s: "Ranking improvements are working" },
    { k: "warn", t: "3 top sellers not selling 7d", s: "Check with customer success" }
  ],
  ctaTitle: "Marketplaces that understand both sides.", seed: 5 };
ReactDOM.createRoot(document.getElementById("root")).render(<UseCasePage cfg={cfg} />);
