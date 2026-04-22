// Shared sub-page nav + footer — bilingual (ES/EN)
// Both ES and EN pages live in /es/ and /en/ subdirectories
// All internal links are relative (same directory), language switch uses ../

// Page mapping: ES filename <-> EN filename
const PAGE_MAP = {
  "index.html": "index.html",
  "integraciones.html": "integrations.html",
  "bancos.html": "banks.html",
  "casos-de-uso.html": "use-cases.html",
  "caso-ecommerce.html": "use-case-ecommerce.html",
  "caso-retail.html": "use-case-retail.html",
  "caso-saas.html": "use-case-saas.html",
  "caso-marketplace.html": "use-case-marketplace.html",
  "modelos-financieros.html": "financial-models.html",
  "forecast-ventas.html": "sales-forecast.html",
  "cashflow.html": "cashflow.html",
  "privacidad.html": "privacy.html",
  "terminos.html": "terms.html",
  "cookies.html": "cookies.html",
  // EN -> ES (reverse)
  "integrations.html": "integraciones.html",
  "banks.html": "bancos.html",
  "use-cases.html": "casos-de-uso.html",
  "use-case-ecommerce.html": "caso-ecommerce.html",
  "use-case-retail.html": "caso-retail.html",
  "use-case-saas.html": "caso-saas.html",
  "use-case-marketplace.html": "caso-marketplace.html",
  "financial-models.html": "modelos-financieros.html",
  "sales-forecast.html": "forecast-ventas.html",
  "privacy.html": "privacidad.html",
  "terms.html": "terminos.html",
  "cookies.html": "cookies.html",
};

function getLangSwitchUrl(current, lang) {
  const otherLang = lang === "en" ? "es" : "en";
  const currentFile = current || "index.html";
  const otherFile = PAGE_MAP[currentFile] || "index.html";
  return "../" + otherLang + "/" + otherFile;
}

const SubNav = ({ current, lang = "es" }) => {
  const L = lang === "en";
  const demoUrl = L ? "https://nextscenario.com/book-demo/" : "https://nextscenario.com/es/reservar-demo/";
  const langSwitchUrl = getLangSwitchUrl(current, lang);

  const links = L ? [
    { h: "integrations.html", n: "Integrations" },
    { h: "banks.html", n: "Banks" },
    { h: "use-cases.html", n: "Use cases" },
    { h: "financial-models.html", n: "Models" },
    { h: "sales-forecast.html", n: "Forecast" },
    { h: "cashflow.html", n: "Cashflow" },
  ] : [
    { h: "integraciones.html", n: "Integraciones" },
    { h: "bancos.html", n: "Bancos" },
    { h: "casos-de-uso.html", n: "Casos de uso" },
    { h: "modelos-financieros.html", n: "Modelos" },
    { h: "forecast-ventas.html", n: "Forecast" },
    { h: "cashflow.html", n: "Cashflow" },
  ];

  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a href="index.html" className="logo"><span className="logo-mark" /> NextScenario</a>
        <div className="nav-links">
          {links.map(l => (
            <a key={l.h} href={l.h} style={current === l.h ? { opacity: 1, color: "var(--ink)", fontWeight: 500 } : {}}>{l.n}</a>
          ))}
          <a href="index.html#pricing">{L ? "Pricing" : "Precios"}</a>
        </div>
        <div className="nav-right">
          <a href={langSwitchUrl} style={{ display: "inline-flex", border: "1px solid var(--line-strong)", borderRadius: 999, overflow: "hidden", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.06em", textDecoration: "none" }}>
            <span style={{ padding: "7px 12px", background: L ? "transparent" : "var(--ink)", color: L ? "var(--mute)" : "var(--paper)" }}>ES</span>
            <span style={{ padding: "7px 12px", background: L ? "var(--ink)" : "transparent", color: L ? "var(--paper)" : "var(--mute)" }}>EN</span>
          </a>
          <a href={demoUrl} className="btn btn-primary" style={{ padding: "8px 14px", fontSize: 13 }}>{L ? "Book a demo" : "Solicitar demo"}</a>
        </div>
      </div>
    </nav>
  );
};

const SubFooter = ({ lang = "es", current }) => {
  const L = lang === "en";
  const langSwitchUrl = getLangSwitchUrl(current, lang);
  const demoUrl = L ? "https://nextscenario.com/book-demo/" : "https://nextscenario.com/es/reservar-demo/";
  return (
    <footer>
      <div className="container">
        <div className="foot-grid">
          <div className="foot-col">
            <div className="logo" style={{ marginBottom: 14 }}><span className="logo-mark" /> NextScenario</div>
            <div style={{ color: "var(--mute)", fontSize: 14, maxWidth: 280 }}>{L ? "Your business data, in real time." : "Tus datos de negocio, en tiempo real."}</div>
          </div>
          <div className="foot-col">
            <h5>{L ? "Product" : "Producto"}</h5>
            {(L ? [
              { n: "Integrations", h: "integrations.html" },
              { n: "Banks", h: "banks.html" },
              { n: "Financial models", h: "financial-models.html" },
              { n: "Forecast", h: "sales-forecast.html" },
              { n: "Cashflow", h: "cashflow.html" },
              { n: "Pricing", h: "index.html#pricing" },
            ] : [
              { n: "Integraciones", h: "integraciones.html" },
              { n: "Bancos", h: "bancos.html" },
              { n: "Modelos financieros", h: "modelos-financieros.html" },
              { n: "Forecast", h: "forecast-ventas.html" },
              { n: "Cashflow", h: "cashflow.html" },
              { n: "Precios", h: "index.html#pricing" },
            ]).map((l, i) => <a key={i} href={l.h}>{l.n}</a>)}
          </div>
          <div className="foot-col">
            <h5>{L ? "Use cases" : "Casos de uso"}</h5>
            {(L ? [
              { n: "Ecommerce", h: "use-case-ecommerce.html" },
              { n: "Retail", h: "use-case-retail.html" },
              { n: "SaaS", h: "use-case-saas.html" },
              { n: "Marketplace", h: "use-case-marketplace.html" },
            ] : [
              { n: "Ecommerce", h: "caso-ecommerce.html" },
              { n: "Retail", h: "caso-retail.html" },
              { n: "SaaS", h: "caso-saas.html" },
              { n: "Marketplace", h: "caso-marketplace.html" },
            ]).map((l, i) => <a key={i} href={l.h}>{l.n}</a>)}
          </div>
          <div className="foot-col">
            <h5>{L ? "Company" : "Empresa"}</h5>
            <a href={demoUrl}>{L ? "Book a demo" : "Solicitar demo"}</a>
            <a href={langSwitchUrl}>{L ? "Español (ES)" : "English (EN)"}</a>
            <div style={{ marginTop: 16 }}>
              <h5>{L ? "Legal" : "Legal"}</h5>
              {(L ? [
                { n: "Privacy policy", h: "privacy.html" },
                { n: "Terms of service", h: "terms.html" },
                { n: "Cookie policy", h: "cookies.html" },
              ] : [
                { n: "Política de privacidad", h: "privacidad.html" },
                { n: "Términos y condiciones", h: "terminos.html" },
                { n: "Política de cookies", h: "cookies.html" },
              ]).map((l, i) => <a key={i} href={l.h}>{l.n}</a>)}
            </div>
          </div>
        </div>
        <div className="foot-meta">
          <span>{L ? "© 2026 NextScenario · Built in Madrid with real numbers" : "© 2026 NextScenario · Hecho en Madrid con números reales"}</span>
          <span>nextscenario.com</span>
        </div>
      </div>
    </footer>
  );
};

const SubCTA = ({ title, sub, lang = "es" }) => {
  const L = lang === "en";
  const demoUrl = L ? "https://nextscenario.com/book-demo/" : "https://nextscenario.com/es/reservar-demo/";
  const t = title || (L ? "Start deciding with real-time data." : "Empieza a decidir con datos en tiempo real.");
  const s = sub || (L ? "14-day free trial. No card. 30-minute setup." : "14 días gratis. Sin tarjeta. Instalación en 30 minutos.");
  return (
    <section id="demo-cta" className="sub-cta" style={{ borderTop: 0, padding: 0 }}>
      <div className="container">
        <div className="cta-card">
          <div>
            <div className="cta-h"><em>{t}</em></div>
            <div className="cta-sub">{s}</div>
            <div style={{ marginTop: 24, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href={demoUrl} className="btn btn-accent">{L ? "Book a demo →" : "Solicitar demo →"}</a>
              <a href="index.html#pricing" className="btn" style={{ color: "var(--paper)", border: "1px solid color-mix(in oklab, var(--paper) 28%, transparent)", background: "transparent" }}>{L ? "See pricing" : "Ver precios"}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

window.SubNav = SubNav; window.SubFooter = SubFooter; window.SubCTA = SubCTA;
window.PAGE_MAP = PAGE_MAP; window.getLangSwitchUrl = getLangSwitchUrl;
