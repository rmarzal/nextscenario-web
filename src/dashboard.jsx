// Tabbed dashboard preview
const { useState: useStateDash, useEffect: useEffectDash, useMemo: useMemoDash } = React;

function Dashboard({ t, tweaks }) {
  const [tab, setTab] = useStateDash(0);
  const keys = ["overview", "cashflow", "pl", "cohortes", "forecast", "campanas"];
  const data = t.dash[keys[tab]];
  const [seriesA, setSeriesA] = useStateDash(() => genSeries(36, 100, 16, tab + 1));
  const [seriesB, setSeriesB] = useStateDash(() => genSeries(24, 80, 14, tab + 10));

  useEffectDash(() => {
    setSeriesA(genSeries(36, 100, 16, tab + 1));
    setSeriesB(genSeries(24, 80, 14, tab + 10));
  }, [tab]);

  useEffectDash(() => {
    const id = setInterval(() => {
      setSeriesA(prev => {
        const n = prev.slice(1);
        n.push(Math.max(20, prev[prev.length - 1] + (Math.random() - 0.4) * 18));
        return n;
      });
    }, 1800);
    return () => clearInterval(id);
  }, []);

  const style = tweaks.dashboardStyle || "charts-grid";

  return (
    <section id="product">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <div className="eyebrow">{t.dashSection.kicker}</div>
            <h2 dangerouslySetInnerHTML={{ __html: t.dashSection.title.replace(/(siempre al día|always live)/i, '<em>$1</em>') }} />
          </div>
          <p>{t.dashSection.desc}</p>
        </div>

        <div className="dash-wrap reveal">
          <div className="dash-tabs">
            {t.dash.tabs.map((label, i) => (
              <button key={i} className={i === tab ? "active" : ""} onClick={() => setTab(i)}>{label}</button>
            ))}
          </div>

          <div className="dash-body">
            <div className="dash-panel">
              <div className="dp-head">
                <div>
                  <div className="dp-label">{data.revenue.label}</div>
                  <div className="dp-big num">{data.revenue.big}</div>
                </div>
                <div className="dp-tag">{data.revenue.tag}</div>
              </div>
              {style === "numbers-first" ? (
                <div style={{ height: 150, display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 4, alignItems: "end" }}>
                  <Bars data={seriesA.slice(-14)} />
                </div>
              ) : (
                <div style={{ height: 160 }}><AreaChart data={seriesA} /></div>
              )}
            </div>

            <div className="dash-panel">
              <div className="dp-head">
                <div>
                  <div className="dp-label">{data.cash.label}</div>
                  <div className="dp-big num">{data.cash.big}</div>
                </div>
                <div className={"dp-tag " + (data.cash.neg ? "neg" : "")}>{data.cash.tag}</div>
              </div>
              <div className="kpi-row">
                {data.kpis.map((k, i) => (
                  <div className="kpi" key={i}>
                    <div className="l">{k.l}</div>
                    <div className="v num">{k.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{ marginTop: 16, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
            <div className="dash-panel">
              <div className="dp-label" style={{ marginBottom: 10 }}>{t._lang === "en" ? "Retention cohort" : "Cohorte de retención"}</div>
              <div style={{ height: 140 }}><CohortGrid /></div>
            </div>
            <div className="dash-panel">
              <div className="dp-label" style={{ marginBottom: 10 }}>{t._lang === "en" ? "Revenue by channel" : "Ingresos por canal"}</div>
              <div style={{ display: "flex", alignItems: "center", gap: 16, height: 140 }}>
                <div style={{ width: 130, height: 130 }}>
                  <DonutSplit parts={[46, 28, 16, 10]} />
                </div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, display: "flex", flexDirection: "column", gap: 6 }}>
                  <div><span style={{ color: "#D4FF3F" }}>● </span>Stripe · 46%</div>
                  <div><span style={{ color: "#5B8CFF" }}>● </span>Shopify · 28%</div>
                  <div><span style={{ color: "#FF8A3D" }}>● </span>Amazon · 16%</div>
                  <div><span style={{ color: "#fff" }}>● </span>{t._lang === "en" ? "Other" : "Otros"} · 10%</div>
                </div>
              </div>
            </div>
            <div className="dash-panel">
              <div className="dp-label" style={{ marginBottom: 10 }}>{t._lang === "en" ? "Weekly growth" : "Crecimiento semanal"}</div>
              <div style={{ height: 140 }}><Bars data={seriesB.slice(-12)} /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Dashboard = Dashboard;
