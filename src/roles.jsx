// Roles section
const { useState: useStateRoles } = React;

// Unique distinctive visual per role — abstract geometric illustrations
function RoleImage({ tab }) {
  if (tab === 0) { // Founder / CEO — compass / north star
    return (
      <svg viewBox="0 0 280 180" style={{ width: "100%", height: 140, display: "block", borderRadius: 12, background: "linear-gradient(135deg, #0A1230, #1B2657)" }}>
        <defs><radialGradient id="rg1" cx="50%" cy="50%"><stop offset="0%" stopColor="#D4FF3F" stopOpacity="0.35"/><stop offset="100%" stopColor="#D4FF3F" stopOpacity="0"/></radialGradient></defs>
        <rect width="280" height="180" fill="url(#rg1)"/>
        <circle cx="140" cy="90" r="52" fill="none" stroke="#5B8CFF" strokeWidth="1" opacity="0.5"/>
        <circle cx="140" cy="90" r="34" fill="none" stroke="#5B8CFF" strokeWidth="1" opacity="0.7"/>
        <circle cx="140" cy="90" r="18" fill="none" stroke="#D4FF3F" strokeWidth="1.2"/>
        <path d="M140 40 L146 90 L140 140 L134 90 Z" fill="#D4FF3F"/>
        <path d="M90 90 L140 84 L190 90 L140 96 Z" fill="#fff" opacity="0.7"/>
        <circle cx="140" cy="90" r="3" fill="#fff"/>
        <text x="140" y="168" textAnchor="middle" fill="#fff" opacity="0.55" fontSize="10" fontFamily="JetBrains Mono" letterSpacing="0.15em">NORTH STAR · MRR / RUNWAY</text>
      </svg>
    );
  }
  if (tab === 1) { // CFO — ledger / bars
    return (
      <svg viewBox="0 0 280 180" style={{ width: "100%", height: 140, display: "block", borderRadius: 12, background: "#F6F4EE", border: "1px solid rgba(10,18,48,0.1)" }}>
        {[0,1,2,3,4,5,6,7,8,9].map(i => <line key={i} x1={16+i*26} y1="20" x2={16+i*26} y2="140" stroke="#0A1230" strokeWidth="0.3" opacity="0.12"/>)}
        {[20,44,68,92,116,140].map((y,i) => <line key={i} x1="16" y1={y} x2="268" y2={y} stroke="#0A1230" strokeWidth="0.3" opacity="0.1"/>)}
        {[48,62,70,58,75,88,72,95,102,88].map((h,i) => <rect key={i} x={20+i*26} y={140-h} width="18" height={h} fill="#0A1230" opacity={i===9?1:0.72} rx="1"/>)}
        <rect x={20+9*26} y={140-88} width="18" height="6" fill="#D4FF3F"/>
        <text x="16" y="160" fill="#0A1230" opacity="0.6" fontSize="10" fontFamily="JetBrains Mono" letterSpacing="0.12em">EBITDA · 10 MESES</text>
        <text x="252" y="160" fill="#0A1230" opacity="0.6" fontSize="10" fontFamily="JetBrains Mono" textAnchor="end">+€94,120</text>
      </svg>
    );
  }
  if (tab === 2) { // Marketing — funnel / ROAS
    return (
      <svg viewBox="0 0 280 180" style={{ width: "100%", height: 140, display: "block", borderRadius: 12, background: "linear-gradient(135deg,#5B8CFF,#3B6BE6)" }}>
        <path d="M40 30 L240 30 L200 70 L80 70 Z" fill="#fff" opacity="0.95"/>
        <path d="M80 75 L200 75 L172 115 L108 115 Z" fill="#fff" opacity="0.75"/>
        <path d="M108 120 L172 120 L150 155 L130 155 Z" fill="#D4FF3F"/>
        <text x="140" y="53" textAnchor="middle" fill="#0A1230" fontSize="13" fontFamily="Geist" fontWeight="600">42,180 sesiones</text>
        <text x="140" y="98" textAnchor="middle" fill="#0A1230" fontSize="12" fontFamily="Geist" fontWeight="500">2,840 leads</text>
        <text x="140" y="142" textAnchor="middle" fill="#0A1230" fontSize="12" fontFamily="Geist" fontWeight="700">284 clientes</text>
        <text x="140" y="172" textAnchor="middle" fill="#fff" opacity="0.7" fontSize="10" fontFamily="JetBrains Mono" letterSpacing="0.12em">ROAS 4.2x · CAC €68</text>
      </svg>
    );
  }
  // Ventas — pipeline stages
  return (
    <svg viewBox="0 0 280 180" style={{ width: "100%", height: 140, display: "block", borderRadius: 12, background: "#0A1230" }}>
      {["Lead","Qualif.","Propuesta","Cierre"].map((lbl,i) => {
        const w = 58; const h = 48; const x = 10+i*66; const y = 60;
        const colors = ["#5B8CFF","#7BA3FF","#A8C3FF","#D4FF3F"];
        return (
          <g key={i}>
            <polygon points={`${x},${y} ${x+w-8},${y} ${x+w},${y+h/2} ${x+w-8},${y+h} ${x},${y+h} ${x+8},${y+h/2}`} fill={colors[i]} opacity={0.85}/>
            <text x={x+w/2} y={y+h/2+4} textAnchor="middle" fill={i===3?"#0A1230":"#0A1230"} fontSize="10" fontFamily="Geist" fontWeight="600">{lbl}</text>
            <text x={x+w/2} y={y-6} textAnchor="middle" fill="#fff" opacity="0.7" fontSize="10" fontFamily="JetBrains Mono">{["€2.1M","€1.4M","€820k","€680k"][i]}</text>
          </g>
        );
      })}
      <text x="140" y="150" textAnchor="middle" fill="#fff" opacity="0.55" fontSize="10" fontFamily="JetBrains Mono" letterSpacing="0.12em">PIPELINE · WIN RATE 32%</text>
    </svg>
  );
}

function Roles({ t }) {
  const [tab, setTab] = useStateRoles(0);
  const c = t.roles.content[tab];
  return (
    <section id="roles">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <div className="eyebrow">{t.roles.kicker}</div>
            <h2 dangerouslySetInnerHTML={{ __html: t.roles.title.replace(/(necesita|needs)/i, '<em>$1</em>') }} />
          </div>
        </div>

        <div className="roles reveal">
          <div className="roles-head">
            {t.roles.tabs.map((lbl, i) => (
              <button key={i} className={i === tab ? "active" : ""} onClick={() => setTab(i)}>{lbl}</button>
            ))}
          </div>
          <div className="roles-body">
            <div>
              <div className="role-title" dangerouslySetInnerHTML={{ __html: c.title }} />
              <div className="role-desc">{c.desc}</div>
              <ul className="role-list">
                {c.bullets.map((b, i) => <li key={i}><span className="chk">✓</span>{b}</li>)}
              </ul>
            </div>
            <div className="role-card">
              <div style={{ marginBottom: 14 }}><RoleImage tab={tab} /></div>
              <div className="dp-label" style={{ marginBottom: 12 }}>{t._lang === "en" ? "What they see" : "Lo que ven"}</div>
              <div className="kpi-row" style={{ gridTemplateColumns: "repeat(2,1fr)" }}>
                {c.kpis.map((k, i) => (
                  <div className="kpi" key={i}>
                    <div className="l">{k.l}</div>
                    <div className="v num">{k.v}</div>
                  </div>
                ))}
              </div>
              <div style={{ height: 80, marginTop: 14 }}>
                <AreaChart data={genSeries(30, 80, 12, tab + 3)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Roles = Roles;
