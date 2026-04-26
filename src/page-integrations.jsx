// Integrations page
const { useState: useStateInt } = React;

const CATEGORIES = [
  { k: "all", n: "Todas" },
  { k: "Pagos", n: "Pagos" },
  { k: "Banco", n: "Bancos" },
  { k: "ERP", n: "ERPs" },
  { k: "Ecommerce", n: "Ecommerce" },
  { k: "Marketplace", n: "Marketplaces" },
  { k: "Marketing", n: "Marketing" },
  { k: "CRM", n: "CRM" },
  { k: "Retail", n: "Retail" },
  { k: "Otros", n: "Otros" }
];

const INTS = [
  { n: "Stripe", k: "Pagos", d: "MRR, churn, suscripciones, reembolsos. Sync en tiempo real." },
  { n: "PayPal", k: "Pagos", d: "Movimientos y conciliación automática." },
  { n: "Holded", k: "ERP", d: "Facturas, tesorería y contabilidad." },
  { n: "Odoo", k: "ERP", d: "Stock, ventas, compras, costes." },
  { n: "QuickBooks", k: "ERP", d: "Libros contables y conciliación." },
  { n: "Sage", k: "ERP", d: "Contabilidad y nóminas." },
  { n: "SAP", k: "ERP", d: "SAP Business One y S/4HANA." },
  { n: "Xero", k: "ERP", d: "Contabilidad cloud para pymes." },
  { n: "Shopify", k: "Ecommerce", d: "Pedidos, cohortes, refunds." },
  { n: "WooCommerce", k: "Ecommerce", d: "Ventas, productos, devoluciones." },
  { n: "Amazon", k: "Marketplace", d: "Ventas, fees, FBA, devoluciones." },
  { n: "Google Ads", k: "Marketing", d: "Spend, CAC y rendimiento." },
  { n: "Meta Ads", k: "Marketing", d: "ROAS por campaña y público." },
  { n: "TikTok Ads", k: "Marketing", d: "Spend y conversiones." },
  { n: "Mailchimp", k: "Marketing", d: "Email y automations." },
  { n: "HubSpot", k: "CRM", d: "Pipeline y conversión." },
  { n: "Salesforce", k: "CRM", d: "Oportunidades y forecast." },
  { n: "POS", k: "Retail", d: "TPV y tienda física." },
  { n: "Slack", k: "Otros", d: "Alertas y reporting." },
  { n: "Notion", k: "Otros", d: "Dashboards y docs." }
];

const BANKS = [
  { n: "BBVA", country: "ES", tag: "PSD2 · Open Banking" },
  { n: "Santander", country: "ES", tag: "PSD2 · Multi-país" },
  { n: "CaixaBank", country: "ES", tag: "PSD2 · Sync diario" },
  { n: "Sabadell", country: "ES", tag: "PSD2 · Cuentas & tarjetas" },
  { n: "ING", country: "ES/EU", tag: "PSD2 · Movimientos" },
  { n: "Revolut", country: "EU/UK", tag: "Multi-divisa" },
  { n: "Bankinter", country: "ES", tag: "PSD2 · Tiempo real" },
  { n: "Kutxabank", country: "ES", tag: "PSD2 · Sync" },
  { n: "Unicaja", country: "ES", tag: "PSD2 · Cuentas" },
  { n: "Abanca", country: "ES", tag: "PSD2 · Sync" },
  { n: "Deutsche Bank", country: "DE/EU", tag: "PSD2 · Corporate" },
  { n: "N26", country: "EU", tag: "Open Banking" },
  { n: "BNP Paribas", country: "FR/EU", tag: "PSD2 · Corporate" },
  { n: "HSBC", country: "UK/Global", tag: "Open Banking" },
  { n: "Wise", country: "Global", tag: "Multi-divisa" },
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

function IntegrationsPage() {
  const [filter, setFilter] = useStateInt("all");
  const filtered = filter === "all" ? INTS : INTS.filter(i => i.k === filter);

  return (
    <>
      <SubNav current="integraciones.html" />

      <section className="sub-hero" style={{ borderTop: "none" }}>
        <div className="container">
          <div className="sub-crumb"><a href="index.html">Inicio</a> · <span>Integraciones</span></div>
          <div className="sub-kicker">Integraciones</div>
          <h1 className="sub-h1">Conecta tu stack. <em>Unifica tus datos</em> en <span className="hl">minutos</span>.</h1>
          <p className="sub-lede">Más de 40 integraciones nativas con bancos, pasarelas, ERPs, ecommerce, marketplaces y herramientas de marketing. Lectura segura, sincronización continua.</p>
          <div className="sub-ctas">
            <a href="reservar-demo.html" className="btn btn-primary">Solicitar demo →</a>
            <a href={REGISTER_ES} className="btn btn-accent">Empieza gratis →</a>
          </div>

          <div className="grid-4-kpi" style={{ marginTop: 48 }}>
            {[{l:"Integraciones",v:"40+"},{l:"Bancos PSD2",v:"20+"},{l:"Sync",v:"Tiempo real"},{l:"Cumplimiento",v:"ISO 27001"}].map((m,i)=>(
              <div key={i} className="bigmetric"><div className="l">{m.l}</div><div className="v num">{m.v}</div></div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ borderTop: "1px solid var(--line)" }}>
        <div className="container">
          <div className="section-head">
            <div><div className="eyebrow">Catálogo</div><h2>Todas las integraciones</h2></div>
            <p>Filtra por categoría o busca la tuya. Si no la ves, la desarrollamos en 2-3 semanas.</p>
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
                  <span className="status">● Activa</span>
                  <span>Sync 15 min</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SubCTA title="¿Te falta alguna integración?" sub="Dinos qué usas y la añadimos. Tenemos conectores genéricos por API para casi cualquier sistema." />
      <SubFooter current="integraciones.html" />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<IntegrationsPage />);
