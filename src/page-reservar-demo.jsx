// Reservar demo page — ES
function ReservarDemoPage() {
  return (
    <>
      <SubNav current="reservar-demo.html" lang="es" />
      <section className="sub-hero" style={{ borderTop: "none", paddingBottom: 40 }}>
        <div className="container">
          <div className="sub-crumb"><a href="index.html">Inicio</a> · <span>Reservar demo</span></div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "start" }}>
            <div>
              <div className="sub-kicker">Demo personalizada</div>
              <h1 className="sub-h1" style={{ fontSize: "clamp(36px, 4.8vw, 64px)" }}>Reserva una <em>demo</em> con nuestro equipo.</h1>
              <p className="sub-lede">Te mostramos cómo NextScenario se adapta a tu negocio en 30 minutos. Sin compromiso.</p>
              <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  { icon: "⏱", text: "30 minutos — demo adaptada a tu modelo de negocio" },
                  { icon: "🔗", text: "Te conectamos tus datos en directo si quieres" },
                  { icon: "📊", text: "Verás tus métricas reales, no datos de prueba" },
                  { icon: "🚀", text: "Sin compromiso — decide después de ver el producto" },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, alignItems: "start", fontSize: 15, color: "var(--mute)" }}>
                    <span style={{ fontSize: 18, flexShrink: 0 }}>{item.icon}</span>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 40, padding: 24, background: "var(--ink)", borderRadius: 16, color: "var(--paper)" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "color-mix(in oklab, var(--paper) 55%, transparent)", marginBottom: 12 }}>Empresas que ya usan NextScenario</div>
                <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                  {["Stripe","Shopify","Amazon","Holded","BBVA","Odoo"].map((b,i) => (
                    <div key={i} style={{ opacity: 0.7 }}><BrandLogo name={b} size={24} /></div>
                  ))}
                </div>
              </div>
            </div>
            <div style={{ background: "white", borderRadius: 20, border: "1px solid var(--line)", padding: 4, minHeight: 600 }}>
              <iframe
                src="https://tidycal.com/nextscenario/demo-next-scenario-es"
                width="100%"
                height="600"
                frameBorder="0"
                style={{ border: "none", borderRadius: 16 }}
                title="Reservar demo NextScenario"
              />
            </div>
          </div>
        </div>
      </section>
      <SubFooter lang="es" current="reservar-demo.html" />
    </>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<ReservarDemoPage />);
