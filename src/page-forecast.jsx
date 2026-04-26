// Sales forecast page
const { useState: useStateFc } = React;

function ForecastPage() {
  const [scenario, setScenario] = useStateFc("base");
  const scenarios = { opt: 1.2, base: 1, con: 0.82 };
  const mul = scenarios[scenario];

  const history = genSeries(18, 100, 8, 3);
  const forecast = [];
  let last = history[history.length - 1];
  for (let i = 0; i < 12; i++) {
    last = last * (1 + 0.015 * mul + (Math.random() - 0.5) * 0.02);
    forecast.push(last);
  }
  const combined = [...history, ...forecast];

  return (
    <>
      <SubNav current="forecast-ventas.html" />

      <section className="sub-hero" style={{ borderTop: "none" }}>
        <div className="container">
          <div className="sub-crumb"><a href="index.html">Inicio</a> · <span>Forecast de ventas</span></div>
          <div className="sub-kicker">Forecast de ventas</div>
          <h1 className="sub-h1">Proyecta tus ventas con <em>escenarios</em> — <span className="hl">no con intuición</span>.</h1>
          <p className="sub-lede">Usa datos históricos, pipeline y estacionalidad para prever los próximos 12 meses. Escenarios optimista, base y conservador con un clic.</p>
          <div className="sub-ctas" style={{ marginTop: 28 }}>
            <a href="reservar-demo.html" className="btn btn-primary">Solicitar demo →</a>
            <a href={REGISTER_ES} className="btn btn-accent">Empieza gratis →</a>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 40 }}>
        <div className="container">
          <div className="sub-big-viz">
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20, flexWrap: "wrap", gap: 20 }}>
              <div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.1em", color: "color-mix(in oklab, var(--paper) 55%, transparent)", textTransform: "uppercase" }}>Forecast 12 meses · ARR</div>
                <div style={{ fontSize: 48, fontWeight: 400, letterSpacing: "-0.03em", marginTop: 4, fontVariantNumeric: "tabular-nums" }}>
                  €{formatEuro(forecast[forecast.length - 1] * 24000)}
                </div>
                <div style={{ color: "color-mix(in oklab, var(--paper) 60%, transparent)", fontSize: 14 }}>Próximos 12 meses · {scenario === "opt" ? "+40% YoY" : scenario === "base" ? "+24% YoY" : "+8% YoY"}</div>
              </div>
              <div className="scenario-tabs">
                <button className={scenario === "opt" ? "active" : ""} onClick={() => setScenario("opt")}>Optimista</button>
                <button className={scenario === "base" ? "active" : ""} onClick={() => setScenario("base")}>Base</button>
                <button className={scenario === "con" ? "active" : ""} onClick={() => setScenario("con")}>Conservador</button>
              </div>
            </div>

            <div style={{ height: 280, position: "relative" }}>
              <svg viewBox="0 0 800 280" preserveAspectRatio="none" style={{ width: "100%", height: "100%", display: "block" }}>
                {[0.25, 0.5, 0.75].map(p => <line key={p} x1={0} x2={800} y1={280*p} y2={280*p} stroke="rgba(255,255,255,0.06)" strokeDasharray="2 4" />)}
                <line x1={800 * (history.length / combined.length)} x2={800 * (history.length / combined.length)} y1={10} y2={270} stroke="rgba(212,255,63,0.3)" strokeDasharray="4 4" />
                <text x={800 * (history.length / combined.length) + 8} y={22} fontFamily="JetBrains Mono" fontSize="10" fill="#D4FF3F">Hoy →</text>
                {(() => {
                  const { d: d1 } = pathFromPoints(history, 800, 280, 10);
                  const scaled = combined.map((v, i) => v);
                  const { d: d2 } = pathFromPoints(scaled, 800, 280, 10);
                  return <>
                    <path d={d2} fill="none" stroke="rgba(212,255,63,0.3)" strokeWidth={1.5} strokeDasharray="4 4" />
                    <path d={d1} fill="none" stroke="#D4FF3F" strokeWidth={2.5} strokeLinecap="round" />
                  </>;
                })()}
              </svg>
            </div>

            <div className="forecast-grid" style={{ marginTop: 18 }}>
              <div className="forecast-card">
                <div className="fl">Conservador</div>
                <div className="fv num">€2.5M</div>
                <div className="fd">ARR proyectado · 82% confianza</div>
              </div>
              <div className="forecast-card hi">
                <div className="fl">Base</div>
                <div className="fv num">€2.9M</div>
                <div className="fd">ARR proyectado · 92% confianza</div>
              </div>
              <div className="forecast-card">
                <div className="fl">Optimista</div>
                <div className="fv num">€3.4M</div>
                <div className="fd">ARR proyectado · 65% confianza</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="mf-feature">
            <div className="mf-text">
              <div className="mf-tag">01 · Datos históricos</div>
              <h3>Parte de tus datos reales, no de plantillas genéricas.</h3>
              <p>Aprendemos de tus 12-24 meses de historial de ventas: estacionalidad, mix de producto, churn y expansión.</p>
              <ul>
                <li><span className="chk">✓</span>Detección automática de estacionalidad</li>
                <li><span className="chk">✓</span>Mix por producto, canal, región</li>
                <li><span className="chk">✓</span>Ajuste por eventos puntuales (campañas, lanzamientos)</li>
              </ul>
            </div>
            <div className="mf-visual">
              <div className="vl">Ventas 24m</div>
              <div className="vv num">€4.8M</div>
              <div style={{ height: 180, marginTop: 20 }}><Bars data={genSeries(24, 80, 15, 2)} /></div>
            </div>
          </div>

          <div className="mf-feature">
            <div className="mf-text">
              <div className="mf-tag">02 · Pipeline valorado</div>
              <h3>Incluye tu pipeline comercial ponderado por probabilidad.</h3>
              <p>Conecta HubSpot o Salesforce y el forecast pondera las oportunidades por fase y ratio de cierre histórico.</p>
              <ul>
                <li><span className="chk">✓</span>Pipeline ponderado por fase</li>
                <li><span className="chk">✓</span>Win rate por comercial, producto, tamaño</li>
                <li><span className="chk">✓</span>Bookings vs. revenue reconocido</li>
              </ul>
            </div>
            <div className="mf-visual">
              <div className="vl">Pipeline valorado</div>
              <div className="vv num">€2.1M</div>
              <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 8, fontFamily: "var(--font-mono)", fontSize: 12 }}>
                {[
                  { s: "Qualified", v: "€740k", w: 0.2, p: 60 },
                  { s: "Proposal", v: "€560k", w: 0.4, p: 45 },
                  { s: "Negotiation", v: "€480k", w: 0.65, p: 30 },
                  { s: "Closing", v: "€320k", w: 0.85, p: 18 }
                ].map((s, i) => (
                  <div key={i} style={{ display: "grid", gridTemplateColumns: "100px 1fr 60px", gap: 8, alignItems: "center" }}>
                    <span style={{ color: "color-mix(in oklab, var(--paper) 65%, transparent)" }}>{s.s}</span>
                    <div style={{ height: 8, background: "color-mix(in oklab, var(--paper) 10%, transparent)", borderRadius: 4, position: "relative" }}>
                      <div style={{ width: `${s.p}%`, height: "100%", background: "var(--accent)", borderRadius: 4 }} />
                    </div>
                    <span style={{ textAlign: "right" }}>{s.v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mf-feature">
            <div className="mf-text">
              <div className="mf-tag">03 · Escenarios y qué pasa si</div>
              <h3>Simula cambios y ve el impacto al segundo.</h3>
              <p>¿Subes precios un 10%? ¿Contratas 3 comerciales? ¿Lanzas un producto nuevo? El forecast se recalcula en tiempo real.</p>
              <ul>
                <li><span className="chk">✓</span>Editor de supuestos (precios, conversión, headcount)</li>
                <li><span className="chk">✓</span>Comparación side-by-side de escenarios</li>
                <li><span className="chk">✓</span>Compartir con equipo o inversores en un clic</li>
              </ul>
            </div>
            <div className="mf-visual">
              <div className="vl">Escenarios · ARR Q4</div>
              <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { n: "Sin cambios", v: "€2.9M", c: "rgba(255,255,255,0.3)" },
                  { n: "+10% precio", v: "€3.1M", c: "#5B8CFF" },
                  { n: "+3 SDRs", v: "€3.3M", c: "#D4FF3F" },
                  { n: "+ precio + SDRs", v: "€3.6M", c: "#D4FF3F", hi: true },
                ].map((s, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 14px", border: `1px solid ${s.hi ? s.c : "color-mix(in oklab, var(--paper) 12%, transparent)"}`, borderRadius: 10, background: s.hi ? "color-mix(in oklab, var(--accent) 15%, transparent)" : "transparent" }}>
                    <span style={{ fontSize: 13, display: "flex", gap: 10, alignItems: "center" }}>
                      <span style={{ width: 8, height: 8, borderRadius: "50%", background: s.c }} /> {s.n}
                    </span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 14, fontWeight: 500 }}>{s.v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <SubCTA title="Deja de preverte con el corazón." sub="Conecta tus datos y tendrás un forecast honesto en 30 minutos." />
      <SubFooter current="forecast-ventas.html" />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<ForecastPage />);
