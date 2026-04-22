// Use cases hub — English
function CasosHubEN() {
  const cases = [
  { h: "en/use-case-ecommerce.html", n: "Ecommerce", d: "ROAS by channel, margins by SKU, returns, repeat cohorts.", c: "#D4FF3F", i: "var(--ink)" },
  { h: "en/use-case-retail.html", n: "Retail", d: "Sales by store, live inventory, margins by category, YoY.", c: "#5B8CFF", i: "var(--paper)" },
  { h: "en/use-case-saas.html", n: "SaaS", d: "MRR, ARR, churn, NRR, retention cohorts, payback, burn, runway.", c: "var(--ink)", i: "var(--paper)" },
  { h: "en/use-case-marketplace.html", n: "Marketplace", d: "GMV, take rate, supply vs demand, liquidity, top sellers.", c: "#FF8A3D", i: "var(--ink)" }];

  return (
    <>
      <SubNav lang="en" current="use-cases.html" />
      <section className="sub-hero" style={{ borderTop: "none" }}>
        <div className="container">
          <div className="sub-crumb"><a href="index.html">Home</a> · <span>Use cases</span></div>
          <div className="sub-kicker">Use cases</div>
          <h1 className="sub-h1">Metrics <em>adapted</em> to your business <span className="hl">model</span>.</h1>
          <p className="sub-lede">Every business has its own financial models. NextScenario adapts to each one: ecommerce, retail, SaaS or marketplace.</p>
        </div>
      </section>
      <section>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {cases.map((x, i) =>
            <a key={i} href={x.h} style={{ display: "block", borderRadius: 24, padding: 40, background: x.c, color: x.i, minHeight: 240, textDecoration: "none", boxShadow: "0 20px 40px -20px rgba(10,18,48,0.2)", transition: "transform 0.2s" }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-4px)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "none"}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.65 }}>0{i + 1} · Use case</div>
                <div style={{ fontSize: 44, fontWeight: 500, letterSpacing: "-0.03em", marginTop: 12, lineHeight: 1 }}>{x.n}</div>
                <div style={{ fontSize: 15, opacity: 0.75, marginTop: 14, maxWidth: 420, lineHeight: 1.5 }}>{x.d}</div>
                <div style={{ marginTop: 28, fontSize: 13, fontWeight: 500 }}>View case →</div>
              </a>
            )}
          </div>
        </div>
      </section>
      <SubCTA lang="en" title="Different business model?" sub="NextScenario adapts to any model. Let's talk about your case." />
      <SubFooter lang="en" current="use-cases.html" />
    </>);

}
ReactDOM.createRoot(document.getElementById("root")).render(<CasosHubEN />);
