// Integrations page — English
const { useState: useStateInt } = React;

const CATEGORIES = [
  { k: "all", n: "All" },
  { k: "Pagos", n: "Payments" },
  { k: "Banco", n: "Banks" },
  { k: "ERP", n: "ERPs" },
  { k: "Ecommerce", n: "Ecommerce" },
  { k: "Marketplace", n: "Marketplaces" },
  { k: "Marketing", n: "Marketing" },
  { k: "CRM", n: "CRM" },
  { k: "Retail", n: "Retail" },
  { k: "Otros", n: "Other" }
];

const INTS = [
  { n: "Stripe", k: "Pagos", d: "MRR, churn, subscriptions, refunds. Real-time sync." },
  { n: "PayPal", k: "Pagos", d: "Movements and automatic reconciliation." },
  { n: "Holded", k: "ERP", d: "Invoices, treasury and accounting." },
  { n: "Odoo", k: "ERP", d: "Stock, sales, purchases, costs." },
  { n: "QuickBooks", k: "ERP", d: "Accounting books and reconciliation." },
  { n: "Sage", k: "ERP", d: "Accounting and payroll." },
  { n: "SAP", k: "ERP", d: "SAP Business One and S/4HANA." },
  { n: "Xero", k: "ERP", d: "Cloud accounting for SMBs." },
  { n: "Shopify", k: "Ecommerce", d: "Orders, cohorts, refunds." },
  { n: "WooCommerce", k: "Ecommerce", d: "Sales, products, returns." },
  { n: "Amazon", k: "Marketplace", d: "Sales, fees, FBA, returns." },
  { n: "Google Ads", k: "Marketing", d: "Spend, CAC and performance." },
  { n: "Meta Ads", k: "Marketing", d: "ROAS by campaign and audience." },
  { n: "TikTok Ads", k: "Marketing", d: "Spend and conversions." },
  { n: "Mailchimp", k: "Marketing", d: "Email and automations." },
  { n: "HubSpot", k: "CRM", d: "Pipeline and conversion." },
  { n: "Salesforce", k: "CRM", d: "Opportunities and forecast." },
  { n: "POS", k: "Retail", d: "In-store POS." },
  { n: "Slack", k: "Otros", d: "Alerts and reporting." },
  { n: "Notion", k: "Otros", d: "Dashboards and docs." }
];

const BANKS = [
  { n: "BBVA", country: "ES", tag: "PSD2 · Open Banking" },
  { n: "Santander", country: "ES", tag: "PSD2 · Multi-country" },
  { n: "CaixaBank", country: "ES", tag: "PSD2 · Daily sync" },
  { n: "Sabadell", country: "ES", tag: "PSD2 · Accounts & cards" },
  { n: "ING", country: "ES/EU", tag: "PSD2 · Movements" },
  { n: "Revolut", country: "EU/UK", tag: "Multi-currency" },
  { n: "Bankinter", country: "ES", tag: "PSD2 · Real time" },
  { n: "Kutxabank", country: "ES", tag: "PSD2 · Sync" },
  { n: "Unicaja", country: "ES", tag: "PSD2 · Accounts" },
  { n: "Abanca", country: "ES", tag: "PSD2 · Sync" },
  { n: "Deutsche Bank", country: "DE/EU", tag: "PSD2 · Corporate" },
  { n: "N26", country: "EU", tag: "Open Banking" },
  { n: "BNP Paribas", country: "FR/EU", tag: "PSD2 · Corporate" },
  { n: "HSBC", country: "UK/Global", tag: "Open Banking" },
  { n: "Wise", country: "Global", tag: "Multi-currency" },
  { n: "Barclays", country: "UK", tag: "Open Banking" }
];

// Generic bank placeholder mark
const BankMark = ({ name }) => {
  const initials = name.split(" ").map(w => w[0]).slice(0, 2).join("");
  // Try brand logo first, else placeholder
  const known = ["BBVA", "Santander", "CaixaBank", "Sabadell", "ING", "Revolut"];
  if (known.includes(name)) return <BrandLogo name={name} size={30} />;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <div style={{ width: 30, height: 30, borderRadius: 8, background: "linear-gradient(135deg, #D4FF3F, #5B8CFF)", color: "#0A1230", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontFamily: "var(--font-mono)", fontSize: 11 }}>{initials}</div>
    </div>
  );
};

function IntegrationsPageEN() {
  const [filter, setFilter] = useStateInt("all");
  const filtered = filter === "all" ? INTS : INTS.filter(i => i.k === filter);

  return (
    <>
      <SubNav lang="en" current="integrations.html" />

      <section className="sub-hero" style={{ borderTop: "none" }}>
        <div className="container">
          <div className="sub-crumb"><a href="index.html">Home</a> · <span>Integrations</span></div>
          <div className="sub-kicker">Integrations</div>
          <h1 className="sub-h1">Connect your stack. <em>Unify your data</em> in <span className="hl">minutes</span>.</h1>
          <p className="sub-lede">40+ native integrations with banks, payment gateways, ERPs, ecommerce, marketplaces and marketing tools. Secure read access, continuous sync.</p>
          <div className="sub-ctas">
            <a href="book-demo.html" className="btn btn-primary">Book a demo →</a>
            <a href={REGISTER_EN} className="btn btn-accent">Start free →</a>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginTop: 48 }}>
            {[{l:"Integrations",v:"40+"},{l:"PSD2 Banks",v:"20+"},{l:"Sync",v:"Real time"},{l:"Compliance",v:"ISO 27001"}].map((m,i)=>(
              <div key={i} className="bigmetric"><div className="l">{m.l}</div><div className="v num">{m.v}</div></div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ borderTop: "1px solid var(--line)" }}>
        <div className="container">
          <div className="section-head">
            <div><div className="eyebrow">Catalog</div><h2>All integrations</h2></div>
            <p>Filter by category or search for yours. If you don't see it, we'll build it in 2-3 weeks.</p>
          </div>

          <div className="ints-filter">
            {CATEGORIES.map(c => (
              <button key={c.k} className={filter === c.k ? "active" : ""} onClick={() => setFilter(c.k)}>{c.n}</button>
            ))}
          </div>

          <div className="ints-grid">
            {filtered.map((it, i) => (
              <div className="ints-card" key={i}>
                <div className="ih">
                  <div className="brand-box"><BrandLogo name={it.n} size={28} /></div>
                  <span className="cat">{it.k}</span>
                </div>
                <div className="nm">{it.n}</div>
                <div className="dc">{it.d}</div>
                <div className="foot">
                  <span className="status">● Active</span>
                  <span>Sync 15 min</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SubCTA lang="en" title="Missing an integration?" sub="Tell us what you use and we'll add it. We have generic API connectors for almost any system." />
      <SubFooter lang="en" current="integrations.html" />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<IntegrationsPageEN />);
