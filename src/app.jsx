// App root
const { useState: useStateApp, useEffect: useEffectApp } = React;

function App() {
  const [lang, setLang] = useStateApp(() => localStorage.getItem("ns_lang") || "es");
  const [tweaks, setTweaks] = useStateApp(() => ({ ...(window.TWEAK_DEFAULTS || {}) }));

  useEffectApp(() => {
    localStorage.setItem("ns_lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  useEffectApp(() => {
    document.documentElement.setAttribute("data-palette", tweaks.palette || "navy-electric");
  }, [tweaks.palette]);

  // Scroll reveal
  useEffectApp(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach(el => io.observe(el));
    return () => io.disconnect();
  }, [lang]);

  const t = { ...window.TR[lang], _lang: lang };
  const L = lang === "en";
  const demoUrl = L ? "https://nextscenario.com/book-demo/" : "https://nextscenario.com/es/reservar-demo/";

  // fallback hero h1 if tweaks empty
  if (!tweaks.headline_es) tweaks.headline_es = "Tus datos de negocio, en tiempo real. Sin Excel.";
  if (!tweaks.headline_en) tweaks.headline_en = "Your business data, in real time. No spreadsheets.";
  if (!tweaks.subhead_es) tweaks.subhead_es = "NextScenario conecta tus bancos, ERPs y canales de venta para automatizar cashflow, P&L y métricas clave. Decide con datos frescos, no con el cierre del mes pasado.";
  if (!tweaks.subhead_en) tweaks.subhead_en = "NextScenario connects your banks, ERPs and sales channels to automate cashflow, P&L and key metrics. Decide on fresh data, not last month's close.";

  // Nav links per language
  const navLinks = L ? [
    { href: "#product", label: t.nav.product },
    { href: "integrations.html", label: t.nav.integrations },
    { href: "financial-models.html", label: "Financial models" },
    { href: "sales-forecast.html", label: "Forecast" },
    { href: "cashflow.html", label: "Cashflow" },
    { href: "use-cases.html", label: "Use cases" },
    { href: "#pricing", label: t.nav.pricing },
  ] : [
    { href: "#product", label: t.nav.product },
    { href: "integraciones.html", label: t.nav.integrations },
    { href: "modelos-financieros.html", label: "Modelos financieros" },
    { href: "forecast-ventas.html", label: "Forecast" },
    { href: "cashflow.html", label: "Cashflow" },
    { href: "casos-de-uso.html", label: "Casos de uso" },
    { href: "#pricing", label: t.nav.pricing },
  ];

  // Language switch: navigate to the equivalent page in the other language
  // Both ES and EN pages are in subdirectories, so ../en/ or ../es/
  const langSwitchUrl = L ? "../es/index.html" : "../en/index.html";

  return (
    <>
      <nav className="nav">
        <div className="container nav-inner">
          <a href="index.html" className="logo"><span className="logo-mark" /> NextScenario</a>
          <div className="nav-links">
            {navLinks.map((nl, i) => (
              <a key={i} href={nl.href}>{nl.label}</a>
            ))}
          </div>
          <div className="nav-right">
            <a href={langSwitchUrl} style={{ display: "inline-flex", border: "1px solid var(--line-strong)", borderRadius: 999, overflow: "hidden", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.06em", textDecoration: "none" }}>
              <span style={{ padding: "7px 12px", background: L ? "transparent" : "var(--ink)", color: L ? "var(--mute)" : "var(--paper)" }}>ES</span>
              <span style={{ padding: "7px 12px", background: L ? "var(--ink)" : "transparent", color: L ? "var(--paper)" : "var(--mute)" }}>EN</span>
            </a>
            <a href={demoUrl} className="btn btn-primary" style={{ padding: "8px 14px", fontSize: 13 }}>{L ? "Book a demo" : "Solicitar demo"}</a>
          </div>
        </div>
      </nav>

      <Hero t={t} tweaks={tweaks} />
      <Integrations t={t} />
      <Dashboard t={t} tweaks={tweaks} />
      <Features t={t} />
      <ForecastSection t={t} />
      <Roles t={t} />
      <WhatsApp t={t} />
      <Social t={t} />
      <Pricing t={t} />
      <FAQ t={t} />
      <Footer t={t} />
      <Tweaks tweaks={tweaks} setTweaks={setTweaks} lang={lang} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
