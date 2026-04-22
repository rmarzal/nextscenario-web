// Features grid
function FeatureVis({ kind }) {
  if (kind === "metrics") {
    return (
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 6 }}>
        {[{l:"MRR",v:"€184k"},{l:"LTV",v:"€4.2k"},{l:"Churn",v:"2.1%"},{l:"ARR",v:"€2.2M"},{l:"CAC",v:"€68"},{l:"NRR",v:"112%"}].map((m,i)=>(
          <div key={i} style={{ border: "1px solid var(--line)", borderRadius: 8, padding: "8px 10px" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--mute)", textTransform: "uppercase", letterSpacing: "0.08em" }}>{m.l}</div>
            <div style={{ fontSize: 16, fontVariantNumeric: "tabular-nums", letterSpacing: "-0.015em" }}>{m.v}</div>
          </div>
        ))}
      </div>
    );
  }
  if (kind === "pl") {
    return (
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, display: "flex", flexDirection: "column", gap: 6, color: "color-mix(in oklab, var(--paper) 85%, transparent)" }}>
        {[
          ["Revenue", "€412,850", "+"],
          ["COGS", "€115,600", "-"],
          ["Gross margin", "72%", "="],
          ["OPEX", "€203,130", "-"],
          ["EBITDA", "€94,120", "="]
        ].map((r,i)=>(
          <div key={i} style={{ display: "flex", justifyContent: "space-between", borderBottom: i < 4 ? "1px dashed color-mix(in oklab, currentColor 25%, transparent)" : "none", paddingBottom: 4 }}>
            <span>{r[2]} {r[0]}</span><span style={{ color: i===4?"var(--accent)":"inherit", fontWeight: i===4?600:400 }}>{r[1]}</span>
          </div>
        ))}
      </div>
    );
  }
  if (kind === "cohort") {
    return <div style={{ height: 110 }}><CohortGrid rows={4} cols={6} /></div>;
  }
  if (kind === "forecast") {
    const base = genSeries(24, 100, 8, 5);
    const opt = base.map((v, i) => v * (1 + i * 0.01));
    const cons = base.map((v, i) => v * (1 - i * 0.008));
    return (
      <svg viewBox="0 0 300 110" style={{ width: "100%", height: 110, display: "block" }}>
        <path d={pathFromPoints(cons, 300, 110).d} fill="none" stroke="rgba(10,18,48,0.35)" strokeWidth="1.5" strokeDasharray="3 3" />
        <path d={pathFromPoints(base, 300, 110).d} fill="none" stroke="#0A1230" strokeWidth="2.2" />
        <path d={pathFromPoints(opt, 300, 110).d} fill="none" stroke="#0A1230" strokeWidth="1.5" strokeDasharray="3 3" />
      </svg>
    );
  }
  if (kind === "report") {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {[
          { ic: "💬", l: "WhatsApp", v: "Lun 9:00" },
          { ic: "✉", l: "Email", v: "Lun 9:00" },
          { ic: "#", l: "Slack", v: "Lun 9:00" }
        ].map((r, i) => (
          <div key={i} style={{ border: "1px solid var(--line)", borderRadius: 10, padding: "10px 12px", display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 13, background: "white" }}>
            <span><span style={{ marginRight: 8 }}>{r.ic}</span>{r.l}</span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--mute)" }}>{r.v}</span>
          </div>
        ))}
      </div>
    );
  }
  if (kind === "alert") {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 12 }}>
        {[
          { t: "MRR ↑ 12%", s: "vs. semana pasada", c: "var(--pos)" },
          { t: "Churn picked up", s: "Plan Starter · 4.1%", c: "var(--neg)" },
          { t: "Meta Ads ROAS 4.6x", s: "campaña Q2 Retargeting", c: "var(--pos)" }
        ].map((a, i) => (
          <div key={i} style={{ border: "1px solid var(--line)", borderRadius: 10, padding: "8px 10px", display: "flex", gap: 10, alignItems: "center" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: a.c, flexShrink: 0 }} />
            <div>
              <div style={{ fontWeight: 500 }}>{a.t}</div>
              <div style={{ color: "var(--mute)", fontSize: 11 }}>{a.s}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  return null;
}

function Features({ t }) {
  return (
    <section id="features">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <div className="eyebrow">{t.features.kicker}</div>
            <h2 dangerouslySetInnerHTML={{ __html: t.features.title.replace(/(Excel|spreadsheets)/i, '<em>$1</em>') }} />
          </div>
        </div>

        <div className="feat-grid">
          {t.features.items.map((it, i) => (
            <div key={i} className={"feat reveal " + (it.style === "dark" ? "dark" : it.style === "accent" ? "accent" : "")}>
              <div className="feat-tag">{it.tag}</div>
              <div className="feat-title">{it.title}</div>
              <div className="feat-body">{it.body}</div>
              <div className="feat-vis"><FeatureVis kind={it.vis} /></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Features = Features;
