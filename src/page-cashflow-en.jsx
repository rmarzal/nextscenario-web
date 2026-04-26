// Cashflow page (English)
const { useState: useStateCf } = React;

function CashflowPageEN() {
  const [view, setView] = useStateCf("waterfall");

  const wfData = [
    { l: "Opening cash", v: 1200, c: "#5B8CFF" },
    { l: "Collections", v: 478, c: "#D4FF3F" },
    { l: "Payments", v: -312, c: "#E24A4A" },
    { l: "Payroll", v: -118, c: "#E24A4A" },
    { l: "Taxes", v: -43, c: "#E24A4A" },
    { l: "Investment", v: -45, c: "#FF8A3D" },
    { l: "Other", v: -12, c: "#E24A4A" },
    { l: "Closing cash", v: 1148, c: "#D4FF3F" },
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
      <SubNav current="cashflow.html" lang="en" />

      <section className="sub-hero" style={{ borderTop: "none" }}>
        <div className="container">
          <div className="sub-crumb"><a href="index.html">Home</a> · <span>Cashflow</span></div>
          <div className="sub-kicker">Cashflow</div>
          <h1 className="sub-h1">Your <em>cash</em> in real time. <span className="hl">Runway</span> without surprises.</h1>
          <p className="sub-lede">Cash in, cash out and 12-month treasury projection. Automatic bank reconciliation and alerts before cash runs short.</p>
          <div className="sub-ctas" style={{ marginTop: 28 }}>
            <a href="book-demo.html" className="btn btn-primary">Book a demo →</a>
            <a href={REGISTER_EN} className="btn btn-accent">Start free →</a>
          </div>

          <div className="grid-4-kpi">
            {[{l:"Current cash",v:"€1.24M"},{l:"Cash in (30d)",v:"€478k"},{l:"Cash out (30d)",v:"€312k"},{l:"Runway",v:"18m"}].map((m,i)=>(
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
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.1em", color: "color-mix(in oklab, var(--paper) 55%, transparent)", textTransform: "uppercase" }}>Cashflow · April 2026</div>
                <div style={{ fontSize: 32, fontWeight: 500, letterSpacing: "-0.02em", marginTop: 4 }}>Monthly cash flow</div>
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
                  April 2026 → April 2028 · Estimated runway: 18 months
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
              <div className="mf-tag">01 · Bank reconciliation</div>
              <h3>Every movement, categorized. Automatically.</h3>
              <p>We connect your banks via PSD2 and classify every transaction by concept, vendor and accounting entry. No Excel needed.</p>
              <ul>
                <li><span className="chk">✓</span>20+ banks via Open Banking</li>
                <li><span className="chk">✓</span>Automatic rules by concept</li>
                <li><span className="chk">✓</span>Multi-account and multi-currency</li>
              </ul>
            </div>
            <div className="mf-visual">
              <div className="vl">Transactions today</div>
              <div className="vv num">142</div>
              <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 6 }}>
                {[
                  { n: "Stripe payout", c: "BBVA ••1234", v: "+€12,480", type: "in" },
                  { n: "April payroll", c: "BBVA ••1234", v: "-€118,400", type: "out" },
                  { n: "AWS Cloud", c: "BBVA ••1234", v: "-€2,840", type: "out" },
                  { n: "Client Acme", c: "Santander ••9821", v: "+€4,200", type: "in" },
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
              <div className="mf-tag">02 · 12-month treasury</div>
              <h3>Project your cash. Avoid surprises.</h3>
              <p>We include expected collections and payments (recurring, payroll, taxes, subscriptions) to know where your cash will be in 3, 6, 12 months.</p>
              <ul>
                <li><span className="chk">✓</span>Recurring payments detected automatically</li>
                <li><span className="chk">✓</span>Tax and payroll calendar</li>
                <li><span className="chk">✓</span>Alerts if cash drops below a threshold</li>
              </ul>
            </div>
            <div className="mf-visual">
              <div className="vl">Projected cash · Dec 2026</div>
              <div className="vv num">€1.82M</div>
              <div style={{ color: "var(--accent)", fontSize: 13, fontFamily: "var(--font-mono)" }}>+€580k vs. today</div>
              <div style={{ height: 160, marginTop: 18 }}>
                <AreaChart data={(() => { const a = []; let v = 1240; for (let i = 0; i < 12; i++) { v += 50 + (Math.random() - 0.3) * 40; a.push(v); } return a; })()} />
              </div>
            </div>
          </div>

          <div className="mf-feature">
            <div className="mf-text">
              <div className="mf-tag">03 · Cash alerts</div>
              <h3>Know before there's a problem.</h3>
              <p>We notify you via WhatsApp, email or Slack if we detect that cash may drop below a threshold, if a client is late on payment, or if there's an unexpected spending spike.</p>
              <ul>
                <li><span className="chk">✓</span>Custom thresholds per account</li>
                <li><span className="chk">✓</span>Anomaly detection (AI)</li>
                <li><span className="chk">✓</span>Channel: WhatsApp, email, Slack</li>
              </ul>
            </div>
            <div className="mf-visual">
              <div className="vl">Recent alerts</div>
              <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  { t: "🟢 Cash in higher than forecast", s: "+€42k vs. forecast this week", c: "var(--accent)" },
                  { t: "🟡 Client Acme overdue", s: "Invoice for €12k · 15 days past due", c: "#FFD747" },
                  { t: "🔴 AWS spike", s: "+22% vs. previous month · review", c: "#FFB3B3" },
                  { t: "🟢 New Stripe payout", s: "+€28k collected today", c: "var(--accent)" }
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

      <SubCTA title="Always know how much cash you have. And how much you'll have." sub="Connect your banks in 10 minutes and have your live cashflow the same day." lang="en" />
      <SubFooter lang="en" current="cashflow.html" />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<CashflowPageEN />);
