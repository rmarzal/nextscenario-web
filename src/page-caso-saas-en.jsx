const cfg = { lang: "en", page: "use-case-saas.html", name: "SaaS",
  heroPre: "MRR,", heroEm: "cohorts", heroPost: ", burn & runway — no", heroHl: "spreadsheets",
  lede: "MRR movement, retention by cohort, NRR, payback, burn and runway. Investor-ready dashboards, churn alerts and forecast with 3 scenarios.",
  kpis: [{l:"MRR",v:"€184,200",s:"+12.4%"},{l:"Churn",v:"2.1%",s:"-0.3pts"},{l:"LTV/CAC",v:"4.2x",s:"+0.3"},{l:"Runway",v:"18m",s:"stable"}],
  dashTitle: "SaaS metrics", dashKpis: [{l:"ARR",v:"€2.21M",d:"+24% YoY"},{l:"NRR",v:"112%",d:"+3pts"},{l:"Payback",v:"3.1m",d:"-0.4m"}],
  capabilities: [
    { tag: "01 · Metrics", title: "MRR movement & SaaS metrics", body: "MRR broken down: new, expansion, contraction, churn. ARR, NRR, GRR, LTV, CAC, payback — all up to date.", bullets: ["MRR movement","ARR / NRR / GRR","LTV, CAC, payback","Rule of 40"] },
    { tag: "02 · Cohorts", title: "Retention by cohort & channel", body: "Retention M1/M3/M6/M12 by acquisition cohort. Understand which channel retains best, which plan expands.", bullets: ["Retention by cohort","Predictive churn","Expansion by segment","Analysis by channel/plan"], hi: true },
    { tag: "03 · Burn & Runway", title: "Real burn & credible runway", body: "Net and gross burn from your actual accounts, not a 3-month-old Excel. Runway with 3 scenarios updated daily.", bullets: ["Daily net/gross burn","Base/opt/cons runway","Cash conversion cycle","Board-ready dashboard"] },
    { tag: "04 · Forecast", title: "ARR forecast with scenarios", body: "ARR projection with drivers: new MRR, churn, expansion, pricing. Simulate funding rounds, hires or price changes.", bullets: ["24-month ARR forecast","Levers (hiring, pricing, churn)","What-if scenarios","Fundraising ready"] },
    { tag: "05 · Reporting", title: "Board reports in one click", body: "Monthly board report: MRR movement, cohorts, burn, runway. Exportable to PDF and slides.", bullets: ["Monthly board report","PDF + slides + Notion","Shareable with VCs","Versioned history"] },
    { tag: "06 · Alerts", title: "Churn & SaaS health alerts", body: "Abnormal churn, expansion decline, downgrade spike, NRR < 100%. Plus at-risk customer alerts.", bullets: ["Churn > threshold","At-risk customers","Expansion declining","NRR < 100%"] }
  ],
  flow: [
    { title: "Connect Stripe & CRM", desc: "Stripe, HubSpot, Salesforce, Chargebee, your bank — 30 min setup." },
    { title: "We calculate metrics", desc: "MRR movement, cohorts, burn, runway — all automated." },
    { title: "Dashboards & alerts", desc: "Executive panel, board report and Slack alerts." },
    { title: "Grow with data", desc: "Pitch to VCs, decide hiring, adjust pricing — with real data." }
  ],
  tools: ["Stripe","HubSpot","Salesforce","Slack","Holded","Xero"],
  report: [
    { l: "Net new MRR", v: "€18,420", d: "+12%", pos: true },
    { l: "Churn", v: "2.1%", d: "-0.3pts", pos: true },
    { l: "NRR", v: "112%", d: "+3pts", pos: true },
    { l: "Net burn", v: "€68,900", d: "stable", pos: true },
    { l: "Runway", v: "18 months", d: "+0.4m", pos: true },
    { l: "At-risk customers", v: "6", d: "act now", neg: true }
  ],
  alerts: [
    { k: "warn", t: "Starter plan churn 4.1%", s: "Up 2pts vs. historical average" },
    { k: "neg", t: "6 at-risk customers", s: "Low NPS + declining usage last 30d" },
    { k: "pos", t: "Enterprise expansion +22%", s: "3 upsells in the last week" },
    { k: "warn", t: "Meta payback > 4m", s: "Channel payback worsening 2 months straight" }
  ],
  ctaTitle: "SaaS that closes its round with data, not promises.", seed: 2 };
ReactDOM.createRoot(document.getElementById("root")).render(<UseCasePage cfg={cfg} />);
