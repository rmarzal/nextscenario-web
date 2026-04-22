// Banks page — English
const { useState: useStateBk } = React;

const ALL_BANKS = [
// Spain
{ n: "BBVA", country: "Spain", tag: "PSD2 · Real time", region: "ES" },
{ n: "Santander", country: "Spain", tag: "PSD2 · Multi-country", region: "ES" },
{ n: "CaixaBank", country: "Spain", tag: "PSD2 · Daily sync", region: "ES" },
{ n: "Sabadell", country: "Spain", tag: "Accounts and cards", region: "ES" },
{ n: "Bankinter", country: "Spain", tag: "PSD2 · Real time", region: "ES" },
{ n: "Kutxabank", country: "Spain", tag: "PSD2 · Sync", region: "ES" },
{ n: "Unicaja", country: "Spain", tag: "PSD2 · Accounts", region: "ES" },
{ n: "Abanca", country: "Spain", tag: "PSD2 · Sync", region: "ES" },
{ n: "Ibercaja", country: "Spain", tag: "PSD2 · Accounts", region: "ES" },
{ n: "Cajamar", country: "Spain", tag: "PSD2 · Sync", region: "ES" },
{ n: "Openbank", country: "Spain", tag: "PSD2 · Real time", region: "ES" },
{ n: "EVO Banco", country: "Spain", tag: "PSD2 · Sync", region: "ES" },
// Neobanks
{ n: "Revolut", country: "Global", tag: "Multi-currency", region: "NEO" },
{ n: "N26", country: "Europe", tag: "Open Banking", region: "NEO" },
{ n: "Wise", country: "Global", tag: "Multi-currency", region: "NEO" },
{ n: "Bnext", country: "Spain", tag: "Open Banking", region: "NEO" },
// Europe
{ n: "ING", country: "Europe", tag: "PSD2 · Corporate", region: "EU" },
{ n: "Deutsche Bank", country: "Germany", tag: "PSD2 · Corporate", region: "EU" },
{ n: "BNP Paribas", country: "France", tag: "PSD2 · Corporate", region: "EU" },
{ n: "Société Générale", country: "France", tag: "PSD2 · Corporate", region: "EU" },
{ n: "UniCredit", country: "Italy", tag: "PSD2 · Corporate", region: "EU" },
{ n: "Intesa Sanpaolo", country: "Italy", tag: "PSD2 · Sync", region: "EU" },
{ n: "Commerzbank", country: "Germany", tag: "PSD2 · Corporate", region: "EU" },
{ n: "KBC", country: "Belgium", tag: "PSD2 · Sync", region: "EU" },
{ n: "Rabobank", country: "Netherlands", tag: "PSD2 · Sync", region: "EU" },
{ n: "ABN AMRO", country: "Netherlands", tag: "PSD2 · Corporate", region: "EU" },
// UK
{ n: "HSBC", country: "United Kingdom", tag: "Open Banking", region: "UK" },
{ n: "Barclays", country: "United Kingdom", tag: "Open Banking", region: "UK" },
{ n: "Lloyds", country: "United Kingdom", tag: "Open Banking", region: "UK" },
{ n: "NatWest", country: "United Kingdom", tag: "Open Banking", region: "UK" },
{ n: "Starling", country: "United Kingdom", tag: "Open Banking", region: "UK" },
{ n: "Monzo", country: "United Kingdom", tag: "Open Banking", region: "UK" },
// LatAm
{ n: "BCI", country: "Chile", tag: "Direct API", region: "LATAM" },
{ n: "Bancolombia", country: "Colombia", tag: "Direct API", region: "LATAM" },
{ n: "Itaú", country: "Brazil", tag: "Open Banking", region: "LATAM" }];


const REGIONS = [
{ k: "all", n: "All" },
{ k: "ES", n: "Spain" },
{ k: "EU", n: "Europe" },
{ k: "UK", n: "UK" },
{ k: "NEO", n: "Neobanks" },
{ k: "LATAM", n: "Latin America" }];


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

function BanksPageEN() {
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
      <SubNav lang="en" current="banks.html" />

      <section className="sub-hero" style={{ borderTop: "none" }}>
        <div className="container">
          <div className="sub-crumb"><a href="index.html">Home</a> · <a href="integrations.html">Integrations</a> · <span>Banks</span></div>
          <div className="sub-kicker">Bank integrations</div>
          <h1 className="sub-h1">Connect <em>any bank</em> in <span className="hl">2 clicks</span>.</h1>
          <p className="sub-lede">Secure account and card read access with Open Banking. Automatic reconciliation, balances and movements in real time — we never modify anything in your bank.</p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginTop: 40 }}>
            {[{ l: "Supported banks", v: "30+" }, { l: "Countries", v: "8" }, { l: "Sync frequency", v: "15 min" }, { l: "Compliance", v: "PSD2" }].map((m, i) =>
            <div key={i} className="bigmetric"><div className="l">{m.l}</div><div className="v num">{m.v}</div></div>
            )}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head">
            <div><div className="eyebrow">All banks</div><h2>Choose your bank</h2></div>
            <p>Full coverage of Spanish banks and major European, British and international banks</p>
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
            <div><div className="eyebrow">Security</div><h2>Your banking data, <em>protected</em>.</h2></div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
            {[
            { t: "Read only", d: "We can never move money or modify anything. We read accounts and movements with your consent." },
            { t: "PSD2 / AISP", d: "We are regulated Account Information Service Providers. We comply with the European PSD2 directive." },
            { t: "End-to-end encryption", d: "Data encrypted in transit (TLS 1.3) and at rest (AES-256). ISO 27001 and GDPR compliant." },
            { t: "Consent", d: "You can revoke access at any time from your bank or from NextScenario." },
            { t: "Audited", d: "Annual security audits by independent third parties." },
            { t: "No credentials", d: "We don't store your bank credentials. Authentication via official API." }].
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

      <SubCTA lang="en" title="Don't see your bank?" sub="We cover 30+ banks in Spain, Europe, UK and LatAm. If you use another one, we'll add it." />
      <SubFooter lang="en" current="banks.html" />
    </>);

}

ReactDOM.createRoot(document.getElementById("root")).render(<BanksPageEN />);
