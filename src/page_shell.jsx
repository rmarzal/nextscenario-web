// Shared page chrome: nav + footer, reused across subpages.
const { useState: useStateShell, useEffect: useEffectShell } = React;

function PageShell({ children, active }) {
  const [lang, setLang] = useStateShell(() => localStorage.getItem("ns_lang") || "es");
  useEffectShell(() => { localStorage.setItem("ns_lang", lang); document.documentElement.lang = lang; }, [lang]);
  useEffectShell(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach(el => io.observe(el));
    return () => io.disconnect();
  }, [lang, children]);

  const t = { ...window.TR[lang], _lang: lang };

  const navItems = [
    { k: "integrations", href: "integrations.html", label: { es: "Integraciones", en: "Integrations" } },
    { k: "financial-models", href: "financial-models.html", label: { es: "Modelos financieros", en: "Financial models" } },
    { k: "forecast", href: "forecast.html", label: { es: "Forecast de ventas", en: "Sales forecast" } },
    { k: "cashflow", href: "cashflow.html", label: { es: "Cashflow", en: "Cashflow" } },
    { k: "pricing", href: "index.html#pricing", label: { es: "Precios", en: "Pricing" } }
  ];

  return (
    <>
      <nav className="nav">
        <div className="container nav-inner">
          <a href="index.html" className="logo"><span className="logo-mark" /> NextScenario</a>
          <div className="nav-links">
            {navItems.map(n => (
              <a key={n.k} href={n.href} style={active === n.k ? { opacity: 1, color: "var(--ink)", fontWeight: 500 } : {}}>{n.label[lang]}</a>
            ))}
          </div>
          <div className="nav-right">
            <div className="lang-toggle">
              <button className={lang === "es" ? "active" : ""} onClick={() => setLang("es")}>ES</button>
              <button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>EN</button>
            </div>
            <a className="btn btn-primary" href="index.html" style={{ padding: "8px 14px", fontSize: 13 }}>{t.cta.start}</a>
          </div>
        </div>
      </nav>

      {typeof children === "function" ? children({ t, lang }) : children}

      <Footer t={t} />
    </>
  );
}
window.PageShell = PageShell;
