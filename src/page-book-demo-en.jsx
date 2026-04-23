// Book demo page — EN
function BookDemoPageEN() {
  return (
    <>
      <SubNav current="book-demo.html" lang="en" />
      <section className="sub-hero" style={{ borderTop: "none", paddingBottom: 40 }}>
        <div className="container">
          <div className="sub-crumb"><a href="index.html">Home</a> · <span>Book a demo</span></div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "start" }}>
            <div>
              <div className="sub-kicker">Personalized demo</div>
              <h1 className="sub-h1" style={{ fontSize: "clamp(36px, 4.8vw, 64px)" }}>Book a <em>demo</em> with our team.</h1>
              <p className="sub-lede">We'll show you how NextScenario adapts to your business in 30 minutes. No commitment.</p>
              <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  { icon: "⏱", text: "30 minutes — demo adapted to your business model" },
                  { icon: "🔗", text: "We can connect your real data live if you want" },
                  { icon: "📊", text: "See your actual metrics, not test data" },
                  { icon: "🚀", text: "No commitment — decide after seeing the product" },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, alignItems: "start", fontSize: 15, color: "var(--mute)" }}>
                    <span style={{ fontSize: 18, flexShrink: 0 }}>{item.icon}</span>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 40, padding: 24, background: "var(--ink)", borderRadius: 16, color: "var(--paper)" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "color-mix(in oklab, var(--paper) 55%, transparent)", marginBottom: 12 }}>Companies already using NextScenario</div>
                <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                  {["Stripe","Shopify","Amazon","Holded","BBVA","Odoo"].map((b,i) => (
                    <div key={i} style={{ opacity: 0.7 }}><BrandLogo name={b} size={24} /></div>
                  ))}
                </div>
              </div>
            </div>
            <div style={{ background: "white", borderRadius: 20, border: "1px solid var(--line)", padding: 4, minHeight: 600 }}>
              <iframe
                src="https://tidycal.com/nextscenario/demo-next-scenario"
                width="100%"
                height="600"
                frameBorder="0"
                style={{ border: "none", borderRadius: 16 }}
                title="Book a demo with NextScenario"
              />
            </div>
          </div>
        </div>
      </section>
      <SubFooter lang="en" current="book-demo.html" />
    </>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<BookDemoPageEN />);
