// Footer + final CTA
function Footer({ t }) {
  const L = t._lang === "en";
  const demoUrl = L ? "https://nextscenario.com/book-demo/" : "https://nextscenario.com/es/reservar-demo/";
  const langSwitchUrl = L ? "../es/index.html" : "../en/index.html";

  const productLinks = L ? [
    { n: "Integrations", h: "integrations.html" },
    { n: "Banks", h: "banks.html" },
    { n: "Financial models", h: "financial-models.html" },
    { n: "Forecast", h: "sales-forecast.html" },
    { n: "Cashflow", h: "cashflow.html" },
    { n: "Pricing", h: "#pricing" },
  ] : [
    { n: "Integraciones", h: "integraciones.html" },
    { n: "Bancos", h: "bancos.html" },
    { n: "Modelos financieros", h: "modelos-financieros.html" },
    { n: "Forecast", h: "forecast-ventas.html" },
    { n: "Cashflow", h: "cashflow.html" },
    { n: "Precios", h: "#pricing" },
  ];

  const useCaseLinks = L ? [
    { n: "Ecommerce", h: "use-case-ecommerce.html" },
    { n: "Retail", h: "use-case-retail.html" },
    { n: "SaaS", h: "use-case-saas.html" },
    { n: "Marketplace", h: "use-case-marketplace.html" },
  ] : [
    { n: "Ecommerce", h: "caso-ecommerce.html" },
    { n: "Retail", h: "caso-retail.html" },
    { n: "SaaS", h: "caso-saas.html" },
    { n: "Marketplace", h: "caso-marketplace.html" },
  ];

  return (
    <>
      <section id="demo-cta" style={{ borderTop: "none", paddingTop: 40, paddingBottom: 80 }}>
        <div className="container">
          <div className="cta-card reveal">
            <div>
              <div className="cta-h" dangerouslySetInnerHTML={{ __html: t.ctaFinal.title.replace(/(decidir|deciding)/i, '<em>$1</em>') }} />
              <div className="cta-sub">{t.ctaFinal.sub}</div>
              <div style={{ marginTop: 28, display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href={demoUrl} className="btn btn-accent">{t.ctaFinal.primary}<Icon name="arrow-right" size={14} /></a>
                <a href={demoUrl} className="btn" style={{ color: "var(--paper)", border: "1px solid color-mix(in oklab, var(--paper) 28%, transparent)", background: "transparent" }}>{t.ctaFinal.secondary}</a>
              </div>
            </div>
            <div>
              <div className="hc-foot" style={{ marginTop: 0, gridTemplateColumns: "1fr 1fr" }}>
                <div className="cell"><div className="lbl">{L ? "Setup" : "Setup"}</div><div className="val num">30 min</div></div>
                <div className="cell"><div className="lbl">{L ? "Free trial" : "Prueba"}</div><div className="val num">14d</div></div>
                <div className="cell"><div className="lbl">{L ? "Integrations" : "Integraciones"}</div><div className="val num">40+</div></div>
                <div className="cell"><div className="lbl">{L ? "Customers" : "Clientes"}</div><div className="val num">800+</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="foot-grid">
            <div className="foot-col">
              <div className="logo" style={{ marginBottom: 14 }}>
                <span className="logo-mark" /> NextScenario
              </div>
              <div style={{ color: "var(--mute)", fontSize: 14, maxWidth: 280 }}>{t.footer.tagline}</div>
            </div>
            <div className="foot-col">
              <h5>{L ? "Product" : "Producto"}</h5>
              {productLinks.map((l, i) => <a key={i} href={l.h}>{l.n}</a>)}
            </div>
            <div className="foot-col">
              <h5>{L ? "Use cases" : "Casos de uso"}</h5>
              {useCaseLinks.map((l, i) => <a key={i} href={l.h}>{l.n}</a>)}
            </div>
            <div className="foot-col">
              <h5>{L ? "Language" : "Idioma"}</h5>
              <a href={langSwitchUrl}>{L ? "Español (ES)" : "English (EN)"}</a>
              <a href={demoUrl} style={{ marginTop: 14, display: "block" }}>{L ? "Book a demo" : "Solicitar demo"}</a>
            </div>
          </div>
          <div className="foot-meta">
            <span>{t.footer.meta}</span>
            <span>nextscenario.com</span>
          </div>
        </div>
      </footer>
    </>
  );
}
window.Footer = Footer;
