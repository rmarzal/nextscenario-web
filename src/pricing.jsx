// Pricing
function Pricing({ t }) {
  return (
    <section id="pricing">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <div className="eyebrow">{t.pricing.kicker}</div>
            <h2 dangerouslySetInnerHTML={{ __html: t.pricing.title.replace(/(gratis|free)/i, '<em>$1</em>') }} />
          </div>
          <p>{t.pricing.desc}</p>
        </div>
        <div className="price-grid">
          {t.pricing.plans.map((p, i) => (
            <div key={i} className={"price reveal " + (p.hi ? "hi" : "")}>
              <div>
                <div className="price-name">{p.name}</div>
                <div className="price-desc" style={{ marginTop: 6 }}>{p.desc}</div>
              </div>
              <div className="price-val num">{p.price}{p.price !== "Custom" && <span className="mo">/{t._lang === "en" ? "month" : "mes"}</span>}</div>
              <ul className="price-list">
                {p.features.map((f, j) => <li key={j}><span className="chk">✓</span>{f}</li>)}
              </ul>
              <a href={t._lang === "en" ? "https://nextscenario.com/book-demo/" : "https://nextscenario.com/es/reservar-demo/"} className={"btn " + (p.hi ? "btn-accent" : "btn-primary")} style={{ justifyContent: "center" }}>{p.cta}<Icon name="arrow-right" size={14} /></a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Pricing = Pricing;
