// Financial models page — English
const { useState: useStateMf } = React;

function ModelosPageEN() {
  const [scenario, setScenario] = useStateMf("base");
  const scenarios = { opt: { tag: "Optimistic", mul: 1.15 }, base: { tag: "Base", mul: 1 }, con: { tag: "Conservative", mul: 0.85 } };
  const mul = scenarios[scenario].mul;

  const plRows = [
    { l: "Net revenue", v: 412850, kind: "total" },
    { l: "Stripe sales", v: 248100, kind: "sub" },
    { l: "Shopify sales", v: 121400, kind: "sub" },
    { l: "Amazon sales", v: 43350, kind: "sub" },
    { l: "− COGS", v: -115600, kind: "total" },
    { l: "= Gross margin", v: 297250, kind: "gross" },
    { l: "− OPEX", v: -203130, kind: "total" },
    { l: "Payroll", v: -118400, kind: "sub" },
    { l: "Marketing", v: -62400, kind: "sub" },
    { l: "Other expenses", v: -22330, kind: "sub" },
    { l: "= EBITDA", v: 94120, kind: "final" },
  ];

  return (
    <>
      <SubNav lang="en" current="financial-models.html" />

      <section className="sub-hero" style={{ borderTop: "none" }}>
        <div className="container">
          <div className="sub-crumb"><a href="index.html">Home</a> · <span>Financial models</span></div>
          <div className="sub-kicker">Financial models</div>
          <h1 className="sub-h1">Live P&L and <em>financial model</em>. No <span className="hl">Excel</span>.</h1>
          <p className="sub-lede">Profit and loss statement, balance sheet and cost structure that update automatically with your real business data. Close the month on day 1.</p>
          <div className="sub-ctas">
            <a href="https://nextscenario.com/book-demo/" className="btn btn-primary">See model demo →</a>
            <a href="https://nextscenario.com/book-demo/" className="btn btn-ghost">Download template</a>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 40 }}>
        <div className="container">
          <div className="sub-big-viz">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: 20, flexWrap: "wrap", gap: 20 }}>
              <div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.1em", color: "color-mix(in oklab, var(--paper) 55%, transparent)", textTransform: "uppercase" }}>P&L · April 2026</div>
                <div style={{ fontSize: 32, fontWeight: 500, letterSpacing: "-0.02em", marginTop: 4 }}>Profit and loss statement</div>
              </div>
              <div className="scenario-tabs">
                {Object.entries(scenarios).map(([k, v]) => (
                  <button key={k} className={scenario === k ? "active" : ""} onClick={() => setScenario(k)}>{v.tag}</button>
                ))}
              </div>
            </div>

            <div className="pl-table">
              <div className="pl-row head"><span>Item</span><span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span></div>
              {plRows.map((r, i) => {
                const base = r.v;
                const vals = [base * 0.82, base * 0.88, base * 0.94, base * mul].map(x => Math.round(x));
                const cls = r.kind === "sub" ? "sub" : r.kind === "final" ? "total" : "";
                return (
                  <div className={"pl-row " + cls} key={i}>
                    <span>{r.l}</span>
                    {vals.map((v, j) => (
                      <span key={j}>{v < 0 ? "-" : ""}€{formatEuro(Math.abs(v))}</span>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="mf-feature">
            <div className="mf-text">
              <div className="mf-tag">01 · Automated P&L</div>
              <h3>Up-to-date income statement, no manual data entry.</h3>
              <p>Aggregates revenue and expenses from your sources (ERP, bank, payment gateways) and classifies them automatically. Month-over-month, YTD and quarterly comparisons.</p>
              <ul>
                <li><span className="chk">✓</span>Automatic classification by category</li>
                <li><span className="chk">✓</span>Multi-entity and multi-currency</li>
                <li><span className="chk">✓</span>YoY and budget comparison</li>
                <li><span className="chk">✓</span>Export to Excel, Google Sheets, A3</li>
              </ul>
            </div>
            <div className="mf-visual">
              <div className="vl">Gross margin</div>
              <div className="vv num">72%</div>
              <div style={{ fontSize: 13, color: "color-mix(in oklab, var(--paper) 60%, transparent)", marginTop: 2 }}>+4.1 pts vs previous month</div>
              <div style={{ height: 180, marginTop: 20 }}><AreaChart data={genSeries(40, 70, 6, 4)} /></div>
            </div>
          </div>

          <div className="mf-feature">
            <div className="mf-text">
              <div className="mf-tag">02 · Balance sheet</div>
              <h3>Live balance sheet: assets, liabilities and equity.</h3>
              <p>Understand your company's financial position at any time. NextScenario consolidates inventory, accounts receivable and payable, and fixed assets.</p>
              <ul>
                <li><span className="chk">✓</span>Customers and suppliers by due date</li>
                <li><span className="chk">✓</span>Inventory valued at cost</li>
                <li><span className="chk">✓</span>Liquidity and solvency ratios</li>
              </ul>
            </div>
            <div className="mf-visual">
              <div className="vl">Total assets</div>
              <div className="vv num">€3.84M</div>
              <div style={{ marginTop: 18, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                {[{l:"Current assets",v:"€1.92M"},{l:"Non-current assets",v:"€1.92M"},{l:"Current liabilities",v:"€0.62M"},{l:"Equity",v:"€3.22M"}].map((k,i)=>(
                  <div key={i} style={{ border: "1px solid color-mix(in oklab, var(--paper) 12%, transparent)", borderRadius: 10, padding: "10px 12px" }}>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "color-mix(in oklab, var(--paper) 55%, transparent)", textTransform: "uppercase", letterSpacing: "0.08em" }}>{k.l}</div>
                    <div style={{ fontSize: 18, fontVariantNumeric: "tabular-nums" }}>{k.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mf-feature">
            <div className="mf-text">
              <div className="mf-tag">03 · Unit economics model</div>
              <h3>Unit economics that show the profitability of each sale.</h3>
              <p>Calculate LTV, CAC, payback, margins and break-even by product, channel or customer cohort.</p>
              <ul>
                <li><span className="chk">✓</span>LTV, CAC, payback and ratio by channel</li>
                <li><span className="chk">✓</span>Break-even by product</li>
                <li><span className="chk">✓</span>Cohort comparison over time</li>
              </ul>
            </div>
            <div className="mf-visual">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                {[{l:"LTV / CAC",v:"4.2x",d:"+0.3"},{l:"Payback",v:"3.1m",d:"-0.4m"},{l:"Gross margin",v:"72%",d:"+4pts"},{l:"Break-even",v:"May 27",d:"-2m"}].map((k,i)=>(
                  <div key={i} style={{ border: "1px solid color-mix(in oklab, var(--paper) 12%, transparent)", borderRadius: 12, padding: 14 }}>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "color-mix(in oklab, var(--paper) 55%, transparent)", textTransform: "uppercase", letterSpacing: "0.08em" }}>{k.l}</div>
                    <div style={{ fontSize: 24, fontVariantNumeric: "tabular-nums", letterSpacing: "-0.02em" }}>{k.v}</div>
                    <div style={{ fontSize: 11, color: "var(--accent)", fontFamily: "var(--font-mono)" }}>{k.d}</div>
                  </div>
                ))}
              </div>
              <div style={{ height: 100, marginTop: 16 }}><CohortGrid rows={4} cols={6} /></div>
            </div>
          </div>
        </div>
      </section>

      <SubCTA lang="en" title="Stop closing the month two months late." sub="Get your financial model up and running in less than a week." />
      <SubFooter lang="en" current="financial-models.html" />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<ModelosPageEN />);
