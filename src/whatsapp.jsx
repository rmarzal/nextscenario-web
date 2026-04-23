// WhatsApp reporting section
function WhatsApp({ t }) {
  return (
    <section id="reporting">
      <div className="container">
        <div className="wa-wrap">
          <div className="reveal">
            <div className="eyebrow">{t.whatsapp.kicker}</div>
            <h2 style={{ fontSize: "clamp(36px, 4.2vw, 56px)", letterSpacing: "-0.03em", fontWeight: 500, lineHeight: 1, margin: "12px 0 20px" }}
              dangerouslySetInnerHTML={{ __html: t.whatsapp.title.replace(/(WhatsApp|email|Slack)/g, '<em>$1</em>') }} />
            <p style={{ color: "var(--mute)", fontSize: 17, lineHeight: 1.5, maxWidth: 520 }}>{t.whatsapp.desc}</p>
            <ul className="role-list" style={{ marginTop: 24, color: "var(--ink)" }}>
              {t.whatsapp.bullets.map((b, i) => <li key={i}><span className="chk" style={{ color: "var(--ink)" }}>✓</span>{b}</li>)}
            </ul>
            <div style={{ marginTop: 28, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href={getRegisterUrl(t._lang)} className="btn btn-primary">{t._lang === "en" ? "Start free" : "Empieza gratis"}<Icon name="arrow-right" size={14} /></a>
              <a href={getDemoUrl(t._lang)} className="btn btn-ghost">{t._lang === "en" ? "Book a demo" : "Solicitar demo"}</a>
            </div>
          </div>

          <div className="reveal">
            <div className="phone-frame">
              <div className="phone-screen">
                <div className="wa-header">
                  <div className="wa-avatar">NS</div>
                  <div>
                    <div className="wa-name">NextScenario Bot</div>
                    <div className="wa-status">{t._lang === "en" ? "online" : "en línea"}</div>
                  </div>
                </div>
                {t.whatsapp.chat.map((m, i) => (
                  <div key={i} className={"bubble " + (m.from === "me" ? "me" : "")}>
                    {m.text}
                    {m.chart && (
                      <>
                        <div className="mini-chart">
                          <AreaChart data={genSeries(20, 60, 10, 2)} stroke="#128C7E" fill="rgba(18,140,126,0.18)" grid={false} />
                        </div>
                        <div className="mini-kpi">
                          <span>MRR: €184.2k</span>
                          <span style={{ color: "var(--pos)" }}>+12.4%</span>
                        </div>
                      </>
                    )}
                    <span className="time">{m.time}</span>
                  </div>
                ))}
                <div className="bubble" style={{ background: "#FFF4C2", color: "#5A4200" }}>
                  <strong>💡 Insight</strong><br />
                  {t._lang === "en" ? "Your Starter plan churn is 2x higher on weekends. Investigate?" : "El churn de tu plan Starter es 2x los fines de semana. ¿Investigamos?"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.WhatsApp = WhatsApp;
