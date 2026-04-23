// Modelos financieros page
const { useState: useStateMf } = React;

function ModelosPage() {
  const [scenario, setScenario] = useStateMf("base");
  const scenarios = { opt: { tag: "Optimista", mul: 1.15 }, base: { tag: "Base", mul: 1 }, con: { tag: "Conservador", mul: 0.85 } };
  const mul = scenarios[scenario].mul;

  const plRows = [
    { l: "Ingresos netos", v: 412850, kind: "total" },
    { l: "Ventas Stripe", v: 248100, kind: "sub" },
    { l: "Ventas Shopify", v: 121400, kind: "sub" },
    { l: "Ventas Amazon", v: 43350, kind: "sub" },
    { l: "− COGS", v: -115600, kind: "total" },
    { l: "= Margen bruto", v: 297250, kind: "gross" },
    { l: "− OPEX", v: -203130, kind: "total" },
    { l: "Personal", v: -118400, kind: "sub" },
    { l: "Marketing", v: -62400, kind: "sub" },
    { l: "Otros gastos", v: -22330, kind: "sub" },
    { l: "= EBITDA", v: 94120, kind: "final" },
  ];

  return (
    <>
      <SubNav current="modelos-financieros.html" />

      <section className="sub-hero" style={{ borderTop: "none" }}>
        <div className="container">
          <div className="sub-crumb"><a href="index.html">Inicio</a> · <span>Modelos financieros</span></div>
          <div className="sub-kicker">Modelos financieros</div>
          <h1 className="sub-h1">P&L y <em>modelo financiero</em> vivo. Sin <span className="hl">Excel</span>.</h1>
          <p className="sub-lede">Cuenta de pérdidas y ganancias, balance y estructura de costes que se actualizan solos con los datos reales de tu negocio. Cierra el mes el día 1.</p>
          <div className="sub-ctas">
            <a href="reservar-demo.html" className="btn btn-primary">Ver demo del modelo →</a>
            <a href="reservar-demo.html" className="btn btn-ghost">Descargar plantilla</a>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 40 }}>
        <div className="container">
          <div className="sub-big-viz">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: 20, flexWrap: "wrap", gap: 20 }}>
              <div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.1em", color: "color-mix(in oklab, var(--paper) 55%, transparent)", textTransform: "uppercase" }}>P&L · Abril 2026</div>
                <div style={{ fontSize: 32, fontWeight: 500, letterSpacing: "-0.02em", marginTop: 4 }}>Cuenta de pérdidas y ganancias</div>
              </div>
              <div className="scenario-tabs">
                {Object.entries(scenarios).map(([k, v]) => (
                  <button key={k} className={scenario === k ? "active" : ""} onClick={() => setScenario(k)}>{v.tag}</button>
                ))}
              </div>
            </div>

            <div className="pl-table">
              <div className="pl-row head"><span>Concepto</span><span>Ene</span><span>Feb</span><span>Mar</span><span>Abr</span></div>
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
              <div className="mf-tag">01 · P&L automática</div>
              <h3>Cuenta de resultados al día, sin picar datos.</h3>
              <p>Agrupa ingresos y gastos desde tus fuentes (ERP, banco, pasarelas) y los clasifica automáticamente. Comparativas mes a mes, YTD y trimestre.</p>
              <ul>
                <li><span className="chk">✓</span>Clasificación automática por categoría</li>
                <li><span className="chk">✓</span>Multi-empresa y multi-divisa</li>
                <li><span className="chk">✓</span>Comparativa YoY y presupuesto</li>
                <li><span className="chk">✓</span>Exportación a Excel, Google Sheets, A3</li>
              </ul>
            </div>
            <div className="mf-visual">
              <div className="vl">Margen bruto</div>
              <div className="vv num">72%</div>
              <div style={{ fontSize: 13, color: "color-mix(in oklab, var(--paper) 60%, transparent)", marginTop: 2 }}>+4.1 pts vs mes anterior</div>
              <div style={{ height: 180, marginTop: 20 }}><AreaChart data={genSeries(40, 70, 6, 4)} /></div>
            </div>
          </div>

          <div className="mf-feature">
            <div className="mf-text">
              <div className="mf-tag">02 · Balance</div>
              <h3>Balance vivo: activos, pasivos y patrimonio.</h3>
              <p>Entiende la foto patrimonial de tu empresa en cualquier momento. NextScenario consolida inventario, cuentas a cobrar y a pagar, e inmovilizado.</p>
              <ul>
                <li><span className="chk">✓</span>Clientes y proveedores por vencimiento</li>
                <li><span className="chk">✓</span>Inventario valorado a precio de coste</li>
                <li><span className="chk">✓</span>Ratios de liquidez y solvencia</li>
              </ul>
            </div>
            <div className="mf-visual">
              <div className="vl">Activo total</div>
              <div className="vv num">€3.84M</div>
              <div style={{ marginTop: 18, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                {[{l:"Circulante",v:"€1.92M"},{l:"No circulante",v:"€1.92M"},{l:"Pasivo CP",v:"€0.62M"},{l:"Patrimonio",v:"€3.22M"}].map((k,i)=>(
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
              <div className="mf-tag">03 · Modelo de unidad económica</div>
              <h3>Unit economics que muestran qué rentabilidad tiene cada venta.</h3>
              <p>Calcula LTV, CAC, payback, márgenes y break-even por producto, canal o cohorte de clientes.</p>
              <ul>
                <li><span className="chk">✓</span>LTV, CAC, payback y ratio por canal</li>
                <li><span className="chk">✓</span>Break-even por producto</li>
                <li><span className="chk">✓</span>Comparación de cohortes en el tiempo</li>
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

      <SubCTA title="Deja de cerrar el mes dos meses tarde." sub="Pon en marcha tu modelo financiero en menos de una semana." />
      <SubFooter current="modelos-financieros.html" />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<ModelosPage />);
