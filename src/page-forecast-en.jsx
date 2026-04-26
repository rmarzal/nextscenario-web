// Sales forecast page (English)
const { useState: useStateFc } = React;

function ForecastPageEN() {
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
      <SubNav current="sales-forecast.html" lang="en" />

      <section className="sub-hero" style={{ borderTop: "none" }}>
        <div className="container">
          <div className="sub-crumb"><a href="index.html">Home</a> · <span>Sales forecast</span></div>
          <div className="sub-kicker">Sales forecast</div>
          <h1 className="sub-h1">Project your sales with <em>scenarios</em> — <span className="hl">not intuition</span>.</h1>
          <p className="sub-lede">Use historical data, pipeline and seasonality to forecast the next 12 months. Optimistic, base and conservative scenarios with one click.</p>
          <div className="sub-ctas" style={{ marginTop: 28 }}>
            <a href="book-demo.html" className="btn btn-primary">Book a demo →</a>
            <a href={REGISTER_EN} className="btn btn-accent">Start free →</a>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 40 }}>
        <div className="container">
          <div className="sub-big-viz">
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20, flexWrap: "wrap", gap: 20 }}>
              <div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.1em", color: "color-mix(in oklab, var(--paper) 55%, transparent)", textTransform: "uppercase" }}>12-month forecast · ARR</div>
                <div style={{ fontSize: 48, fontWeight: 400, letterSpacing: "-0.03em", marginTop: 4, fontVariantNumeric: "tabular-nums" }}>
                  €{formatEuro(forecast[forecast.length - 1] * 24000)}
                </div>
                <div style={{ color: "color-mix(in oklab, var(--paper) 60%, transparent)", fontSize: 14 }}>Next 12 months · {scenario === "opt" ? "+40% YoY" : scenario === "base" ? "+24% YoY" : "+8% YoY"}</div>
              </div>
              <div className="scenario-tabs">
                <button className={scenario === "opt" ? "active" : ""} onClick={() => setScenario("opt")}>Optimistic</button>
                <button className={scenario === "base" ? "active" : ""} onClick={() => setScenario("base")}>Base</button>
                <button className={scenario === "con" ? "active" : ""} onClick={() => setScenario("con")}>Conservative</button>
              </div>
            </div>

            <div style={{ height: 280, position: "relative" }}>
              <svg viewBox="0 0 800 280" preserveAspectRatio="none" style={{ width: "100%", height: "100%", display: "block" }}>
                {[0.25, 0.5, 0.75].map(p => <line key={p} x1={0} x2={800} y1={280*p} y2={280*p} stroke="rgba(255,255,255,0.06)" strokeDasharray="2 4" />)}
                <line x1={800 * (history.length / combined.length)} x2={800 * (history.length / combined.length)} y1={10} y2={270} stroke="rgba(212,255,63,0.3)" strokeDasharray="4 4" />
                <text x={800 * (history.length / combined.length) + 8} y={22} fontFamily="JetBrains Mono" fontSize="10" fill="#D4FF3F">Today →</text>
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
                <div className="fl">Conservative</div>
                <div className="fv num">€2.5M</div>
                <div className="fd">Projected ARR · 82% confidence</div>
              </div>
              <div className="forecast-card hi">
                <div className="fl">Base</div>
                <div className="fv num">€2.9M</div>
                <div className="fd">Projected ARR · 92% confidence</div>
              </div>
              <div className="forecast-card">
                <div className="fl">Optimistic</div>
                <div className="fv num">€3.4M</div>
                <div className="fd">Projected ARR · 65% confidence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="mf-feature">
            <div className="mf-text">
              <div className="mf-tag">01 · Historical data</div>
              <h3>Start from your real data, not generic templates.</h3>
              <p>We learn from your 12-24 months of sales history: seasonality, product mix, churn and expansion.</p>
              <ul>
                <li><span className="chk">✓</span>Automatic seasonality detection</li>
                <li><span className="chk">✓</span>Mix by product, channel, region</li>
                <li><span className="chk">✓</span>Adjustment for one-off events (campaigns, launches)</li>
              </ul>
            </div>
            <div className="mf-visual">
              <div className="vl">Sales 24m</div>
              <div className="vv num">€4.8M</div>
              <div style={{ height: 180, marginTop: 20 }}><Bars data={genSeries(24, 80, 15, 2)} /></div>
            </div>
          </div>

          <div className="mf-feature">
            <div className="mf-text">
              <div className="mf-tag">02 · Weighted pipeline</div>
              <h3>Include your commercial pipeline weighted by probability.</h3>
              <p>Connect HubSpot or Salesforce and the forecast weights opportunities by stage and historical close rate.</p>
              <ul>
                <li><span className="chk">✓</span>Pipeline weighted by stage</li>
                <li><span className="chk">✓</span>Win rate by rep, product, deal size</li>
                <li><span className="chk">✓</span>Bookings vs. recognized revenue</li>
              </ul>
            </div>
            <div className="mf-visual">
              <div className="vl">Weighted pipeline</div>
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
              <div className="mf-tag">03 · Scenarios & what-if</div>
              <h3>Simulate changes and see the impact instantly.</h3>
              <p>Raise prices by 10%? Hire 3 sales reps? Launch a new product? The forecast recalculates in real time.</p>
              <ul>
                <li><span className="chk">✓</span>Assumptions editor (pricing, conversion, headcount)</li>
                <li><span className="chk">✓</span>Side-by-side scenario comparison</li>
                <li><span className="chk">✓</span>Share with team or investors in one click</li>
              </ul>
            </div>
            <div className="mf-visual">
              <div className="vl">Scenarios · ARR Q4</div>
              <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { n: "No changes", v: "€2.9M", c: "rgba(255,255,255,0.3)" },
                  { n: "+10% pricing", v: "€3.1M", c: "#5B8CFF" },
                  { n: "+3 SDRs", v: "€3.3M", c: "#D4FF3F" },
                  { n: "+ pricing + SDRs", v: "€3.6M", c: "#D4FF3F", hi: true },
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

      <SubCTA title="Stop forecasting with gut feeling." sub="Connect your data and get an honest forecast in 30 minutes." lang="en" />
      <SubFooter lang="en" current="sales-forecast.html" />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<ForecastPageEN />);
