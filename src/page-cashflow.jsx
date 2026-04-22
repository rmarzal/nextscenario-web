// Cashflow page
const { useState: useStateCf } = React;

function CashflowPage() {
  const [view, setView] = useStateCf("waterfall");

  const wfData = [
    { l: "Caja inicial", v: 1200, c: "#5B8CFF" },
    { l: "Cobros", v: 478, c: "#D4FF3F" },
    { l: "Pagos", v: -312, c: "#E24A4A" },
    { l: "Nómina", v: -118, c: "#E24A4A" },
    { l: "Impuestos", v: -43, c: "#E24A4A" },
    { l: "Inversión", v: -45, c: "#FF8A3D" },
    { l: "Otros", v: -12, c: "#E24A4A" },
    { l: "Caja final", v: 1148, c: "#D4FF3F" },
  ];

  // Waterfall bar calc
  let running = 0;
  const wfBars = wfData.map((d, i) => {
    if (i === 0 || i === wfData.length - 1) {
      const bar = { h: d.v, top: 0, ...d };
      running = d.v;
      return bar;
    }
    const start = running;
    running += d.v;
    const top = Math.min(start, running);
    const h = Math.abs(d.v);
    return { h, top, ...d };
  });
  const maxVal = 1300;

  return (
    <>
      <SubNav current="cashflow.html" />

      <section className="sub-hero" style={{ borderTop: "none" }}>
        <div className="container">
          <div className="sub-crumb"><a href="index.html">Inicio</a> · <span>Cashflow</span></div>
          <div className="sub-kicker">Cashflow</div>
          <h1 className="sub-h1">Tu <em>caja</em> en tiempo real. <span className="hl">Runway</span> sin sorpresas.</h1>
          <p className="sub-lede">Cash in, cash out y proyección de tesorería a 12 meses. Conciliación bancaria automática y alertas antes de que falte caja.</p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginTop: 40 }}>
            {[{l:"Caja actual",v:"€1.24M"},{l:"Cash in (30d)",v:"€478k"},{l:"Cash out (30d)",v:"€312k"},{l:"Runway",v:"18m"}].map((m,i)=>(
              <div key={i} className="bigmetric"><div className="l">{m.l}</div><div className="v num">{m.v}</div></div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 40 }}>
        <div className="container">
          <div className="sub-big-viz">
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20, flexWrap: "wrap", gap: 20 }}>
              <div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.1em", color: "color-mix(in oklab, var(--paper) 55%, transparent)", textTransform: "uppercase" }}>Cashflow · Abril 2026</div>
                <div style={{ fontSize: 32, fontWeight: 500, letterSpacing: "-0.02em", marginTop: 4 }}>Flujo de caja mensual</div>
              </div>
              <div className="scenario-tabs">
                <button className={view === "waterfall" ? "active" : ""} onClick={() => setView("waterfall")}>Waterfall</button>
                <button className={view === "runway" ? "active" : ""} onClick={() => setView("runway")}>Runway</button>
              </div>
            </div>

            {view === "waterfall" ? (
              <div className="waterfall">
                {wfBars.map((b, i) => {
                  const hPct = (b.h / maxVal) * 100;
                  const topPct = (b.top / maxVal) * 100;
                  return (
                    <div key={i} style={{ display: "flex", flexDirection: "column" }}>
                      <div style={{ height: 220, position: "relative" }}>
                        <div className="wf-bar" style={{ position: "absolute", bottom: `${topPct}%`, left: 0, right: 0, height: `${hPct}%`, background: b.c }}>
                          <span className="wf-val">€{Math.abs(b.v)}k</span>
                        </div>
                      </div>
                      <div className="wf-label">{b.l}</div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div>
                <div style={{ height: 280, position: "relative" }}>
                  <svg viewBox="0 0 800 280" preserveAspectRatio="none" style={{ width: "100%", height: "100%", display: "block" }}>
                    {[0.25, 0.5, 0.75].map(p => <line key={p} x1={0} x2={800} y1={280*p} y2={280*p} stroke="rgba(255,255,255,0.06)" strokeDasharray="2 4" />)}
                    <line x1={0} x2={800} y1={220} y2={220} stroke="#E24A4A" strokeDasharray="4 4" opacity="0.4" />
                    <text x={8} y={215} fontFamily="JetBrains Mono" fontSize="10" fill="#E24A4A">Zero cash</text>
                    {(() => {
                      const runway = [];
                      let cash = 1240;
                      for (let i = 0; i < 24; i++) {
                        runway.push(cash);
                        cash -= 40 + (Math.random() - 0.3) * 30;
                      }
                      const { d } = pathFromPoints(runway, 800, 280, 10);
                      return <path d={d} fill="none" stroke="#D4FF3F" strokeWidth={2.5} strokeLinecap="round" />;
                    })()}
                  </svg>
                </div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "color-mix(in oklab, var(--paper) 60%, transparent)", marginTop: 12, textAlign: "center" }}>
                  Abril 2026 → Abril 2028 · Runway estimado: 18 meses
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="mf-feature">
            <div className="mf-text">
              <div className="mf-tag">01 · Conciliación bancaria</div>
              <h3>Cada movimiento, categorizado. Automáticamente.</h3>
              <p>Conectamos tus bancos vía PSD2 y clasificamos cada movimiento por concepto, proveedor y cuenta contable. Sin tocar una línea de Excel.</p>
              <ul>
                <li><span className="chk">✓</span>20+ bancos vía Open Banking</li>
                <li><span className="chk">✓</span>Reglas automáticas por concepto</li>
                <li><span className="chk">✓</span>Multi-cuenta y multi-divisa</li>
              </ul>
            </div>
            <div className="mf-visual">
              <div className="vl">Movimientos hoy</div>
              <div className="vv num">142</div>
              <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 6 }}>
                {[
                  { n: "Stripe payout", c: "BBVA ••1234", v: "+€12,480", type: "in" },
                  { n: "Nómina Abril", c: "BBVA ••1234", v: "-€118,400", type: "out" },
                  { n: "AWS Cloud", c: "BBVA ••1234", v: "-€2,840", type: "out" },
                  { n: "Cliente Acme", c: "Santander ••9821", v: "+€4,200", type: "in" },
                ].map((m, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "8px 12px", background: "color-mix(in oklab, var(--paper) 6%, transparent)", borderRadius: 8, fontSize: 12, fontFamily: "var(--font-mono)" }}>
                    <span>{m.n} <span style={{ color: "color-mix(in oklab, var(--paper) 45%, transparent)" }}>· {m.c}</span></span>
                    <span style={{ color: m.type === "in" ? "var(--accent)" : "#FFB3B3" }}>{m.v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mf-feature">
            <div className="mf-text">
              <div className="mf-tag">02 · Tesorería a 12 meses</div>
              <h3>Proyecta tu caja. Evita sorpresas.</h3>
              <p>Incluimos cobros y pagos previstos (recurrencias, nóminas, impuestos, suscripciones) para saber dónde estará tu caja en 3, 6, 12 meses.</p>
              <ul>
                <li><span className="chk">✓</span>Recurrencias detectadas automáticamente</li>
                <li><span className="chk">✓</span>Calendario de impuestos y nóminas</li>
                <li><span className="chk">✓</span>Alertas si la caja baja de un umbral</li>
              </ul>
            </div>
            <div className="mf-visual">
              <div className="vl">Caja prevista · Dic 2026</div>
              <div className="vv num">€1.82M</div>
              <div style={{ color: "var(--accent)", fontSize: 13, fontFamily: "var(--font-mono)" }}>+€580k vs. hoy</div>
              <div style={{ height: 160, marginTop: 18 }}>
                <AreaChart data={(() => { const a = []; let v = 1240; for (let i = 0; i < 12; i++) { v += 50 + (Math.random() - 0.3) * 40; a.push(v); } return a; })()} />
              </div>
            </div>
          </div>

          <div className="mf-feature">
            <div className="mf-text">
              <div className="mf-tag">03 · Alertas de caja</div>
              <h3>Entérate antes de que haya un problema.</h3>
              <p>Te avisamos por WhatsApp, email o Slack si detectamos que la caja puede caer bajo un umbral, si un cliente se retrasa en pagar, o si hay un pico de gasto inesperado.</p>
              <ul>
                <li><span className="chk">✓</span>Umbrales personalizados por cuenta</li>
                <li><span className="chk">✓</span>Detección de anomalías (IA)</li>
                <li><span className="chk">✓</span>Canal: WhatsApp, email, Slack</li>
              </ul>
            </div>
            <div className="mf-visual">
              <div className="vl">Alertas recientes</div>
              <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  { t: "🟢 Cash in mayor del previsto", s: "+€42k vs. forecast esta semana", c: "var(--accent)" },
                  { t: "🟡 Cliente Acme con retraso", s: "Factura de €12k · 15 días vencida", c: "#FFD747" },
                  { t: "🔴 Pico en AWS", s: "+22% vs. mes anterior · revisar", c: "#FFB3B3" },
                  { t: "🟢 Nuevo payout Stripe", s: "+€28k cobrado hoy", c: "var(--accent)" }
                ].map((a, i) => (
                  <div key={i} style={{ padding: "10px 14px", background: "color-mix(in oklab, var(--paper) 6%, transparent)", border: "1px solid color-mix(in oklab, var(--paper) 12%, transparent)", borderRadius: 10 }}>
                    <div style={{ fontSize: 13, fontWeight: 500 }}>{a.t}</div>
                    <div style={{ fontSize: 11, color: "color-mix(in oklab, var(--paper) 60%, transparent)", fontFamily: "var(--font-mono)", marginTop: 2 }}>{a.s}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <SubCTA title="Sabe siempre cuánta caja tienes. Y cuánta tendrás." sub="Conecta tus bancos en 10 minutos y tendrás tu cashflow vivo el mismo día." />
      <SubFooter current="cashflow.html" />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<CashflowPage />);
