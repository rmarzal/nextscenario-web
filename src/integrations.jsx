// Integrations section
function Integrations({ t }) {
  return (
    <section id="integrations">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <div className="eyebrow">{t.integrations.kicker}</div>
            <h2>{t.integrations.title}</h2>
          </div>
          <p>{t.integrations.desc}</p>
        </div>

        <div className="int-grid reveal">
          {t.integrations.items.map((it, i) => (
            <div className="int-cell" key={i}>
              <div className="int-kind">{it.k}</div>
              <div style={{ marginTop: 4, marginBottom: 4 }}><BrandLogo name={it.n} size={34} /></div>
              <div className="int-logo">{it.n}</div>
              <div className="int-desc">{it.d}</div>
            </div>
          ))}
        </div>

        <div className="int-count">
          <span>+ {t.integrations.moreCount}</span>
          <a href={t._lang === "en" ? "integrations.html" : "integraciones.html"} style={{ color: "var(--ink)", textDecoration: "underline", textUnderlineOffset: 4 }}>{t.integrations.requestLink}</a>
        </div>
      </div>

      <div className="marquee" style={{ marginTop: 48 }}>
        <div className="marquee-track">
          {[0,1].map(k => (
            <span key={k}>
              {["Stripe","Holded","Odoo","Shopify","WooCommerce","Amazon","PayPal","BBVA","Santander","CaixaBank","Sabadell","ING","Revolut","Google Ads","Meta Ads","Slack","Notion","SAP","Zoho","QuickBooks"].map((n,i) => <span key={i}>{n}</span>)}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Integrations = Integrations;
