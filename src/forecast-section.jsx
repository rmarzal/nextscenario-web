// Forecast section for index.html
function ForecastSection({ t }) {
  const L = t._lang === "en";
  const base = genSeries(24, 60, 8, 11);
  const opt = base.map((v, i) => v * (1 + i * 0.015));
  const cons = base.map((v, i) => v * (1 - i * 0.012));
  const w = 620, h = 260;

  return (
    <section id="forecast" style={{ borderTop: "1px solid var(--line)" }}>
      <div className="container">
        <div className="section-head reveal">
          <div>
            <div className="eyebrow">{L ? "Forecast" : "Forecast"}</div>
            <h2>{L ? "Proyecta tu negocio con " : "Proyecta tu negocio con "}<em>{L ? "escenarios" : "escenarios"}</em>.</h2>
          </div>
          <p>{L ? "Base, optimistic and conservative. Runway, ARR, cash. Know what happens if Q4 comes early or late." : "Base, optimista y conservador. Runway, ARR, caja. Sabe qué pasa si el Q4 se adelanta o se retrasa."}</p>
        </div>

        <div className="fc-grid reveal">
          <div className="fc-chart-card">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 16, flexWrap: "wrap", gap: 8 }}>
              <div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "color-mix(in oklab, var(--paper) 55%, transparent)" }}>{L ? "Revenue forecast · next 24 months" : "Forecast de ingresos · próximos 24 meses"}</div>
                <div style={{ fontSize: 32, fontWeight: 500, letterSpacing: "-0.025em", marginTop: 4 }}>€3.18M <span style={{ fontSize: 14, opacity: 0.6, fontFamily: "var(--font-mono)" }}>ARR · Dic 2027</span></div>
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                {[{c:"#D4FF3F",l:L?"Base":"Base"},{c:"#5B8CFF",l:L?"Optimistic":"Optimista"},{c:"#FF8A3D",l:L?"Conservative":"Conservador"}].map((s,i)=>(
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, fontFamily: "var(--font-mono)", color: "color-mix(in oklab, var(--paper) 80%, transparent)" }}>
                    <span style={{ width: 10, height: 2, background: s.c }}/>{s.l}
                  </div>
                ))}
              </div>
            </div>

            <svg viewBox={`0 0 ${w} ${h}`} style={{ width: "100%", height: 260, display: "block" }}>
              {[0.25,0.5,0.75].map((p,i)=><line key={i} x1="0" x2={w} y1={h*p} y2={h*p} stroke="#fff" strokeOpacity="0.06" strokeDasharray="2 4"/>)}
              {/* Band between cons and opt */}
              <path d={`${pathFromPoints(opt, w, h, 8).d} L ${pathFromPoints(cons, w, h, 8).xs.slice().reverse().map((x,i)=>`${x} ${pathFromPoints(cons, w, h, 8).ys.slice().reverse()[i]}`).join(" L ")} Z`} fill="#D4FF3F" opacity="0.08"/>
              <path d={pathFromPoints(cons, w, h, 8).d} fill="none" stroke="#FF8A3D" strokeWidth="1.5" strokeDasharray="4 3"/>
              <path d={pathFromPoints(opt, w, h, 8).d} fill="none" stroke="#5B8CFF" strokeWidth="1.5" strokeDasharray="4 3"/>
              <path d={pathFromPoints(base, w, h, 8).d} fill="none" stroke="#D4FF3F" strokeWidth="2.5"/>
              {/* Today line */}
              <line x1={w*0.4} y1="0" x2={w*0.4} y2={h} stroke="#fff" strokeOpacity="0.3" strokeDasharray="3 3"/>
              <text x={w*0.4+6} y="16" fill="#fff" opacity="0.7" fontSize="10" fontFamily="JetBrains Mono" letterSpacing="0.08em">{L?"TODAY":"HOY"}</text>
            </svg>
          </div>

          <div className="fc-right">
            <div className="fc-scenario">
              <div className="fc-tag" style={{ background: "#D4FF3F", color: "#0A1230" }}>{L?"Base scenario":"Escenario base"}</div>
              <div className="fc-scn-big num">€2.90M <span style={{ fontSize: 13, opacity: 0.6, fontFamily: "var(--font-mono)", fontWeight: 400 }}>ARR</span></div>
              <div className="fc-scn-rows">
                <div><span>Runway</span><span className="num">22 {L?"mo":"meses"}</span></div>
                <div><span>{L?"Break-even":"Break-even"}</span><span className="num">May 2027</span></div>
                <div><span>{L?"Confidence":"Confianza"}</span><span className="num">82%</span></div>
              </div>
            </div>
            <div className="fc-scenario fc-small">
              <div className="fc-tag" style={{ background: "#5B8CFF", color: "#fff" }}>{L?"Optimistic":"Optimista"}</div>
              <div className="fc-scn-big num" style={{ fontSize: 24 }}>€3.45M</div>
              <div style={{ fontSize: 12, color: "color-mix(in oklab, var(--paper) 60%, transparent)", fontFamily: "var(--font-mono)" }}>+19% vs base · runway 28m</div>
            </div>
            <div className="fc-scenario fc-small">
              <div className="fc-tag" style={{ background: "#FF8A3D", color: "#0A1230" }}>{L?"Conservative":"Conservador"}</div>
              <div className="fc-scn-big num" style={{ fontSize: 24 }}>€2.52M</div>
              <div style={{ fontSize: 12, color: "color-mix(in oklab, var(--paper) 60%, transparent)", fontFamily: "var(--font-mono)" }}>-13% vs base · runway 17m</div>
            </div>
          </div>
        </div>

        <div className="fc-levers reveal">
          {[
            { l: L?"Churn":"Churn", v: "2.1%", d: L?"→ 1.8% = +€180k ARR":"→ 1.8% = +€180k ARR" },
            { l: L?"Meta spend":"Gasto Meta", v: "€28k/m", d: L?"→ €40k = +340 clients":"→ €40k = +340 clientes" },
            { l: L?"Hiring":"Contratación", v: "+6 FTE", d: L?"→ -3m runway":"→ -3m runway" },
            { l: L?"Pricing":"Pricing", v: "+12%", d: L?"→ +€212k ARR":"→ +€212k ARR" }
          ].map((x, i) => (
            <div key={i} className="fc-lever">
              <div className="fc-lever-l">{x.l}</div>
              <div className="fc-lever-v num">{x.v}</div>
              <div className="fc-lever-d">{x.d}</div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 32 }}>
          <a href={L?"sales-forecast.html":"forecast-ventas.html"} className="btn btn-ghost">{L?"See full forecast →":"Ver forecast completo →"}</a>
        </div>
      </div>
    </section>
  );
}
window.ForecastSection = ForecastSection;
