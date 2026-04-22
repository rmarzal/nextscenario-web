// App root — uses SubNav for consistent menu across all pages
// Language is determined by URL path (/es/ or /en/), not localStorage
const { useEffect: useEffectApp } = React;

function App() {
  // Detect language from URL path
  const lang = window.location.pathname.includes("/en/") ? "en" : "es";
  const [tweaks] = React.useState(() => ({ ...(window.TWEAK_DEFAULTS || {}) }));

  useEffectApp(() => {
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
  }, []);

  const t = { ...window.TR[lang], _lang: lang };

  // fallback hero h1 if tweaks empty
  if (!tweaks.headline_es) tweaks.headline_es = "Tus datos de negocio, en tiempo real. Sin Excel.";
  if (!tweaks.headline_en) tweaks.headline_en = "Your business data, in real time. No spreadsheets.";
  if (!tweaks.subhead_es) tweaks.subhead_es = "NextScenario conecta tus bancos, ERPs y canales de venta para automatizar cashflow, P&L y métricas clave. Decide con datos frescos, no con el cierre del mes pasado.";
  if (!tweaks.subhead_en) tweaks.subhead_en = "NextScenario connects your banks, ERPs and sales channels to automate cashflow, P&L and key metrics. Decide on fresh data, not last month's close.";

  return (
    <>
      <SubNav current="index.html" lang={lang} />

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
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
