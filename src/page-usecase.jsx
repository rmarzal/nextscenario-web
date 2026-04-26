// Use case page shell — full functionality per business model — bilingual
function UseCasePage({ cfg }) {
  const lang = cfg.lang || "es";
  const L = lang === "en";
  const homeHref = "index.html";
  const casesHref = L ? "use-cases.html" : "casos-de-uso.html";
  const demoUrl = getDemoUrl(lang);

  return (
    <>
      <SubNav current={cfg.page} lang={lang} />
      <section className="sub-hero" style={{ borderTop: "none" }}>
        <div className="container">
          <div className="sub-crumb"><a href={homeHref}>{L ? "Home" : "Inicio"}</a> · <a href={casesHref}>{L ? "Use cases" : "Casos de uso"}</a> · <span>{cfg.name}</span></div>
          <div className="sub-kicker">{L ? "For" : "Para"} {cfg.name}</div>
          <h1 className="sub-h1">{cfg.heroPre} <em>{cfg.heroEm}</em> {cfg.heroPost} <span className="hl">{cfg.heroHl}</span>.</h1>
          <p className="sub-lede">{cfg.lede}</p>
          <div className="sub-ctas">
            <a href={demoUrl} className="btn-demo">
              <span className="btn-demo-dot" />
              <span className="btn-demo-label">{L ? "Request demo for" : "Solicitar demo adaptada a"} {cfg.name}</span>
              <span className="btn-demo-arrow">→</span>
            </a>
            <a href={getRegisterUrl(lang)} className="btn btn-accent">{L ? "Start free →" : "Empieza gratis →"}</a>
            <a href="index.html#pricing" className="btn btn-ghost">{L ? "See pricing" : "Ver precios"}</a>
          </div>
          <div className="grid-4-kpi">
            {cfg.kpis.map((m, i) => (
              <div key={i} className="bigmetric"><div className="l">{m.l}</div><div className="v num">{m.v}</div><div className="sub">{m.s}</div></div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 40 }}>
        <div className="container">
          <div className="sub-big-viz">
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20, flexWrap: "wrap", gap: 20 }}>
              <div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.1em", color: "color-mix(in oklab, var(--paper) 55%, transparent)", textTransform: "uppercase" }}>Dashboard · {cfg.name}</div>
                <div style={{ fontSize: 32, fontWeight: 500, letterSpacing: "-0.02em", marginTop: 4 }}>{cfg.dashTitle}</div>
              </div>
            </div>
            <div className="grid-3-dash">
              {cfg.dashKpis.map((k, i) => (
                <div key={i} style={{ border: "1px solid color-mix(in oklab, var(--paper) 12%, transparent)", borderRadius: 12, padding: 16, background: i === 0 ? "var(--accent)" : "color-mix(in oklab, var(--ink) 55%, black)", color: i === 0 ? "var(--ink)" : "var(--paper)" }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", opacity: 0.7 }}>{k.l}</div>
                  <div style={{ fontSize: 26, fontVariantNumeric: "tabular-nums", letterSpacing: "-0.02em", marginTop: 4 }}>{k.v}</div>
                  <div style={{ fontSize: 11, fontFamily: "var(--font-mono)", opacity: 0.7, marginTop: 2 }}>{k.d}</div>
                </div>
              ))}
            </div>
            <div style={{ height: 200, marginTop: 18 }}><AreaChart data={genSeries(40, 80, 12, cfg.seed || 3)} /></div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">{L ? "Adapted features" : "Funcionalidades adaptadas"}</div>
              <h2>NextScenario {L ? "for" : "para"} <em>{cfg.name}</em>{L ? ", end to end." : ", de principio a fin."}</h2>
            </div>
            <p>{L ? "Not just metrics. P&L, cashflow, forecast, automated reporting, alerts and integrations built for" : "No solo métricas. P&L, cashflow, forecast, reporting automático, alertas e integraciones pensadas para"} {cfg.name.toLowerCase()}.</p>
          </div>
          <div className="uc-caps">
            {cfg.capabilities.map((cap, i) => (
              <div key={i} className={"uc-cap " + (cap.hi ? "hi" : "")}>
                <div className="uc-cap-tag">{cap.tag}</div>
                <div className="uc-cap-title">{cap.title}</div>
                <div className="uc-cap-body">{cap.body}</div>
                <ul className="uc-cap-list">
                  {cap.bullets.map((b, j) => <li key={j}><span className="chk">✓</span>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <div className="cta-band">
        <div className="container">
          <span className="cta-band-text">{L ? "Ready to see it in action?" : "¿Quieres verlo en acción?"}</span>
          <a href={demoUrl} className="btn btn-accent">{L ? "Book a demo" : "Solicitar demo"}</a>
          <a href={getRegisterUrl(lang)} className="btn btn-ghost" style={{ borderColor: "rgba(246,244,238,0.28)", color: "var(--paper)" }}>{L ? "Start free" : "Empieza gratis"}</a>
        </div>
      </div>

      <section style={{ background: "var(--paper-2)" }}>
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">{L ? "How it works" : "Cómo funciona"}</div>
              <h2>{L ? "From your sources to your decision in" : "De tus fuentes a tu decisión en"} <em>{L ? "4 steps" : "4 pasos"}</em>.</h2>
            </div>
          </div>
          <div className="uc-flow">
            {cfg.flow.map((step, i) => (
              <div key={i} className="uc-flow-step">
                <div className="uc-flow-num">0{i+1}</div>
                <div className="uc-flow-title">{step.title}</div>
                <div className="uc-flow-desc">{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">{L ? "Key integrations" : "Integraciones clave"}</div>
              <h2>{L ? "Connected to what you already use." : "Conectado con lo que ya usas."}</h2>
            </div>
            <p>{L ? "No development needed. 30+ integrations for" : "Sin desarrollos. 30+ integraciones específicas para"} {cfg.name.toLowerCase()}.</p>
          </div>
          <div className="grid-6-tools">
            {cfg.tools.map((t, i) => (
              <div key={i} style={{ padding: "20px 10px", border: "1px solid var(--line)", borderRadius: 12, background: "white", display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
                <BrandLogo name={t} size={32} />
                <span style={{ fontSize: 12, fontWeight: 500 }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">{L ? "Reporting & alerts" : "Reporting y alertas"}</div>
              <h2>{L ? "Every week, what matters —" : "Cada semana, lo que importa —"} <em>{L ? "without asking" : "sin pedirlo"}</em>.</h2>
            </div>
          </div>
          <div className="uc-alerts">
            <div className="uc-report">
              <div className="uc-report-head">
                <div className="uc-report-title">{L ? "Weekly report" : "Informe semanal"} · {cfg.name}</div>
                <div className="uc-report-time">{L ? "Monday 9:00 · WhatsApp + Email" : "Lunes 9:00 · WhatsApp + Email"}</div>
              </div>
              <div className="uc-report-body">
                {cfg.report.map((r, i) => (
                  <div key={i} className="uc-report-row">
                    <span className="uc-report-l">{r.l}</span>
                    <span className="uc-report-v num">{r.v}</span>
                    <span className={"uc-report-d " + (r.pos ? "pos" : r.neg ? "neg" : "")}>{r.d}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="uc-alert-list">
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--mute)", marginBottom: 12 }}>{L ? "Configured alerts" : "Alertas configuradas"}</div>
              {cfg.alerts.map((a, i) => (
                <div key={i} className={"uc-alert uc-alert-" + a.k}>
                  <span className="uc-alert-dot" />
                  <div>
                    <div className="uc-alert-t">{a.t}</div>
                    <div className="uc-alert-s">{a.s}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SubCTA title={cfg.ctaTitle} sub={L ? "Setup in less than a day. No card. 14-day free trial." : "Setup en menos de un día. Sin tarjeta. 14 días gratis."} lang={lang} />
      <SubFooter lang={lang} current={cfg.page} />
    </>
  );
}
window.UseCasePage = UseCasePage;
