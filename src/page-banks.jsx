// Banks page - dedicated
const { useState: useStateBk } = React;

const ALL_BANKS = [
// España
{ n: "BBVA", country: "España", tag: "PSD2 · Tiempo real", region: "ES" },
{ n: "Santander", country: "España", tag: "PSD2 · Multi-país", region: "ES" },
{ n: "CaixaBank", country: "España", tag: "PSD2 · Sync diario", region: "ES" },
{ n: "Sabadell", country: "España", tag: "Cuentas y tarjetas", region: "ES" },
{ n: "Bankinter", country: "España", tag: "PSD2 · Tiempo real", region: "ES" },
{ n: "Kutxabank", country: "España", tag: "PSD2 · Sync", region: "ES" },
{ n: "Unicaja", country: "España", tag: "PSD2 · Cuentas", region: "ES" },
{ n: "Abanca", country: "España", tag: "PSD2 · Sync", region: "ES" },
{ n: "Ibercaja", country: "España", tag: "PSD2 · Cuentas", region: "ES" },
{ n: "Cajamar", country: "España", tag: "PSD2 · Sync", region: "ES" },
{ n: "Openbank", country: "España", tag: "PSD2 · Tiempo real", region: "ES" },
{ n: "EVO Banco", country: "España", tag: "PSD2 · Sync", region: "ES" },
// Neobancos
{ n: "Revolut", country: "Global", tag: "Multi-divisa", region: "NEO" },
{ n: "N26", country: "Europa", tag: "Open Banking", region: "NEO" },
{ n: "Wise", country: "Global", tag: "Multi-divisa", region: "NEO" },
{ n: "Bnext", country: "España", tag: "Open Banking", region: "NEO" },
// Europa
{ n: "ING", country: "Europa", tag: "PSD2 · Corporate", region: "EU" },
{ n: "Deutsche Bank", country: "Alemania", tag: "PSD2 · Corporate", region: "EU" },
{ n: "BNP Paribas", country: "Francia", tag: "PSD2 · Corporate", region: "EU" },
{ n: "Société Générale", country: "Francia", tag: "PSD2 · Corporate", region: "EU" },
{ n: "UniCredit", country: "Italia", tag: "PSD2 · Corporate", region: "EU" },
{ n: "Intesa Sanpaolo", country: "Italia", tag: "PSD2 · Sync", region: "EU" },
{ n: "Commerzbank", country: "Alemania", tag: "PSD2 · Corporate", region: "EU" },
{ n: "KBC", country: "Bélgica", tag: "PSD2 · Sync", region: "EU" },
{ n: "Rabobank", country: "Países Bajos", tag: "PSD2 · Sync", region: "EU" },
{ n: "ABN AMRO", country: "Países Bajos", tag: "PSD2 · Corporate", region: "EU" },
// UK
{ n: "HSBC", country: "Reino Unido", tag: "Open Banking", region: "UK" },
{ n: "Barclays", country: "Reino Unido", tag: "Open Banking", region: "UK" },
{ n: "Lloyds", country: "Reino Unido", tag: "Open Banking", region: "UK" },
{ n: "NatWest", country: "Reino Unido", tag: "Open Banking", region: "UK" },
{ n: "Starling", country: "Reino Unido", tag: "Open Banking", region: "UK" },
{ n: "Monzo", country: "Reino Unido", tag: "Open Banking", region: "UK" },
// LatAm
{ n: "BCI", country: "Chile", tag: "API directa", region: "LATAM" },
{ n: "Bancolombia", country: "Colombia", tag: "API directa", region: "LATAM" },
{ n: "Itaú", country: "Brasil", tag: "Open Banking", region: "LATAM" }];


const REGIONS = [
{ k: "all", n: "Todos" },
{ k: "ES", n: "España" },
{ k: "EU", n: "Europa" },
{ k: "UK", n: "Reino Unido" },
{ k: "NEO", n: "Neobancos" },
{ k: "LATAM", n: "Latinoamérica" }];


const BankMark2 = ({ name }) => {
  const initials = name.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase();
  const known = ["BBVA", "Santander", "CaixaBank", "Sabadell", "ING", "Revolut"];
  if (known.includes(name)) {
    return <div style={{ height: 32, display: "flex", alignItems: "center", justifyContent: "center" }}><BrandLogo name={name} size={26} /></div>;
  }
  // Hash to pick a color seed
  let h = 0;for (const c of name) h = h * 31 + c.charCodeAt(0) >>> 0;
  const hue1 = h % 360;
  const hue2 = (hue1 + 40) % 360;
  return (
    <div style={{ width: 40, height: 32, borderRadius: 8, background: `linear-gradient(135deg, oklch(70% 0.18 ${hue1}), oklch(62% 0.2 ${hue2}))`, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.02em" }}>{initials}</div>);

};

function BanksPage() {
  const [region, setRegion] = useStateBk("all");
  const filtered = region === "all" ? ALL_BANKS : ALL_BANKS.filter((b) => b.region === region);

  const counts = {
    all: ALL_BANKS.length,
    ES: ALL_BANKS.filter((b) => b.region === "ES").length,
    EU: ALL_BANKS.filter((b) => b.region === "EU").length,
    UK: ALL_BANKS.filter((b) => b.region === "UK").length,
    NEO: ALL_BANKS.filter((b) => b.region === "NEO").length,
    LATAM: ALL_BANKS.filter((b) => b.region === "LATAM").length
  };

  return (
    <>
      <SubNav current="bancos.html" />

      <section className="sub-hero" style={{ borderTop: "none" }}>
        <div className="container">
          <div className="sub-crumb"><a href="index.html">Inicio</a> · <a href="integraciones.html">Integraciones</a> · <span>Bancos</span></div>
          <div className="sub-kicker">Integraciones bancarias</div>
          <h1 className="sub-h1">Conecta <em>cualquier banco</em> vía <span className="hl">en 2 clicks</span>.</h1>
          <p className="sub-lede">Lectura segura de cuentas y tarjetas con Open Banking. Conciliación automática, saldos y movimientos en tiempo real — nunca modificamos nada en tu banco.</p>
          <div className="sub-ctas" style={{ marginTop: 28 }}>
            <a href="reservar-demo.html" className="btn btn-primary">Solicitar demo →</a>
            <a href={REGISTER_ES} className="btn btn-accent">Empieza gratis →</a>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginTop: 40 }}>
            {[{ l: "Bancos soportados", v: "30+" }, { l: "Países", v: "8" }, { l: "Frecuencia sync", v: "15 min" }, { l: "Cumplimiento", v: "PSD2" }].map((m, i) =>
            <div key={i} className="bigmetric"><div className="l">{m.l}</div><div className="v num">{m.v}</div></div>
            )}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head">
            <div><div className="eyebrow">Todos los bancos</div><h2>Elige tu banco</h2></div>
            <p>Cobertura completa de banca española y principales bancos europeos, británicos e internacionales</p>
          </div>

          <div className="ints-filter">
            {REGIONS.map((r) =>
            <button key={r.k} className={region === r.k ? "active" : ""} onClick={() => setRegion(r.k)}>
                {r.n} <span style={{ opacity: 0.6, marginLeft: 6, fontFamily: "var(--font-mono)", fontSize: 11 }}>{counts[r.k]}</span>
              </button>
            )}
          </div>

          <div className="ints-grid" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
            {filtered.map((b, i) =>
            <div className="ints-card" key={i}>
                <div className="ih">
                  <div className="brand-box"><BankMark2 name={b.n} /></div>
                  <span className="cat">{b.country}</span>
                </div>
                <div className="nm">{b.n}</div>
                <div className="dc">{b.tag}</div>
                <div className="foot">
                  <span className="status">● PSD2</span>
                  <span>Sync 15 min</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head">
            <div><div className="eyebrow">Seguridad</div><h2>Tus datos bancarios, <em>protegidos</em>.</h2></div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
            {[
            { t: "Solo lectura", d: "Nunca podemos mover dinero ni modificar nada. Leemos cuentas y movimientos con tu consentimiento." },
            { t: "PSD2 / AISP", d: "Somos Agentes de Información de Cuentas regulados. Cumplimos la directiva europea PSD2." },
            { t: "Cifrado extremo", d: "Datos cifrados en tránsito (TLS 1.3) y en reposo (AES-256). ISO 27001 y RGPD." },
            { t: "Consentimiento", d: "Revocas el acceso en cualquier momento desde tu banco o desde NextScenario." },
            { t: "Auditado", d: "Auditorías de seguridad anuales por terceros independientes." },
            { t: "Sin credenciales", d: "No almacenamos tus credenciales del banco. Autenticación vía API oficial." }].
            map((f, i) =>
            <div key={i} className="step">
                <div className="sn">0{i + 1}</div>
                <h4>{f.t}</h4>
                <p>{f.d}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <SubCTA title="¿No ves tu banco?" sub="Cubrimos 30+ bancos de España, Europa, UK y LatAm. Si usas otro, lo añadimos." />
      <SubFooter current="bancos.html" />
    </>);

}

ReactDOM.createRoot(document.getElementById("root")).render(<BanksPage />);