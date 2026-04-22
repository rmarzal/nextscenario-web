function CasosHub() {
  const cases = [
  { h: "caso-ecommerce.html", n: "Ecommerce", d: "ROAS por canal, márgenes por SKU, devoluciones, cohortes de repetición.", c: "#D4FF3F", i: "var(--ink)" },
  { h: "caso-retail.html", n: "Retail", d: "Ventas por tienda, inventario vivo, márgenes por categoría, YoY.", c: "#5B8CFF", i: "var(--paper)" },
  { h: "caso-saas.html", n: "SaaS", d: "MRR, ARR, churn, NRR, cohortes de retención, payback, burn, runway.", c: "var(--ink)", i: "var(--paper)" },
  { h: "caso-marketplace.html", n: "Marketplace", d: "GMV, take rate, supply vs demand, liquidez, top sellers.", c: "#FF8A3D", i: "var(--ink)" }];

  return (
    <>
      <SubNav current="casos-de-uso.html" />
      <section className="sub-hero" style={{ borderTop: "none" }}>
        <div className="container">
          <div className="sub-crumb"><a href="index.html">Inicio</a> · <span>Casos de uso</span></div>
          <div className="sub-kicker">Casos de uso</div>
          <h1 className="sub-h1">Métricas <em>adaptadas</em> a tu modelo de <span className="hl">negocio</span>.</h1>
          <p className="sub-lede">Cada negocio tiene sus propios modelos financieros. NextScenario se adapta a cada particulariedad: ecommerce, retail, SaaS o marketplace.</p>
        </div>
      </section>
      <section>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {cases.map((x, i) =>
            <a key={i} href={x.h} style={{ display: "block", borderRadius: 24, padding: 40, background: x.c, color: x.i, minHeight: 240, textDecoration: "none", boxShadow: "0 20px 40px -20px rgba(10,18,48,0.2)", transition: "transform 0.2s" }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-4px)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "none"}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.65 }}>0{i + 1} · Caso de uso</div>
                <div style={{ fontSize: 44, fontWeight: 500, letterSpacing: "-0.03em", marginTop: 12, lineHeight: 1 }}>{x.n}</div>
                <div style={{ fontSize: 15, opacity: 0.75, marginTop: 14, maxWidth: 420, lineHeight: 1.5 }}>{x.d}</div>
                <div style={{ marginTop: 28, fontSize: 13, fontWeight: 500 }}>Ver caso →</div>
              </a>
            )}
          </div>
        </div>
      </section>
      <SubCTA title="¿Otro modelo de negocio?" sub="NextScenario se adapta a cualquier modelo. Hablemos de tu caso." />
      <SubFooter current="casos-de-uso.html" />
    </>);

}
ReactDOM.createRoot(document.getElementById("root")).render(<CasosHub />);