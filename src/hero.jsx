// Hero section
const { useEffect, useState } = React;

function Ticker({ label, value, delta, pos, format, prefix = "", suffix = "" }) {
  const v = useCounter(value, 1600);
  let display;
  if (format === "euro") display = prefix + formatEuro(v);
  else if (format === "ratio") display = v.toFixed(1) + (suffix || "");
  else display = formatEuro(v);
  return (
    <div className="ticker">
      <div className="ticker-label">{label}</div>
      <div className="ticker-value num">{display}</div>
      <div className={"ticker-delta " + (pos ? "pos" : "neg")}>{delta} · 30d</div>
    </div>
  );
}

function HeroCard({ t, layout }) {
  const [series, setSeries] = useState(() => genSeries(40, 100, 18, 7));
  const [val, setVal] = useState(412850);

  useEffect(() => {
    const id = setInterval(() => {
      setSeries(prev => {
        const next = prev.slice(1);
        const last = prev[prev.length - 1];
        next.push(Math.max(20, last + (Math.random() - 0.35) * 20));
        return next;
      });
      setVal(v => v + Math.round((Math.random() - 0.2) * 400));
    }, 1400);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="hero-card" style={{ position: "relative" }}>
      <div className="chip chip-a"><span className="pill">Shopify</span>{t.hero.chipA}</div>
      <div className="chip chip-b"><span className="pill" style={{ background: "#FFB3B3" }}>⚠</span>{t.hero.chipB}</div>

      <div className="hc-top">
        <span className="live"><span className="dot" />{t.hero.card.live}</span>
        <span>nextscenario.com</span>
      </div>
      <div className="hc-title">{t.hero.card.title}</div>
      <div className="hc-big num">€{formatEuro(val)}</div>
      <div className="hc-sub">
        <span className="up">↑ 12.4%</span>
        {t.hero.card.sub}
      </div>
      <div className="hc-chart">
        <AreaChart data={series} />
      </div>
      <div className="hc-foot">
        {t.hero.card.foot.map((f, i) => (
          <div className="cell" key={i}>
            <div className="lbl">{f.lbl}</div>
            <div className="val num">{f.val}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Hero({ t, tweaks }) {
  const layout = tweaks.heroLayout || "split-dashboard";
  return (
    <section className="hero" style={{ borderTop: "none", paddingTop: 40 }}>
      <div className="container">
        <div className="hero-grid" style={layout === "center" ? { gridTemplateColumns: "1fr", textAlign: "center", justifyItems: "center" } : {}}>
          <div>
            <div className="eyebrow"><span className="dot" />{t.hero.eyebrow}</div>
            <h1 className="h1" dangerouslySetInnerHTML={{ __html: renderHeadline(t._lang === 'en' ? (tweaks.headline_en || t.hero.h1) : (tweaks.headline_es || t.hero.h1), t._lang) }} />
            <p className="lede">{t._lang === 'en' ? (tweaks.subhead_en) : (tweaks.subhead_es)}</p>
            <div className="hero-ctas">
              <a href={getRegisterUrl(t._lang)} className="btn btn-primary"><Icon name="zap" size={14} />{t._lang === "en" ? "Start free" : "Empieza gratis"}<Icon name="arrow-right" size={14} /></a>
              <a href={getDemoUrl(t._lang)} className="btn btn-ghost">{t._lang === "en" ? "Book a demo" : "Solicitar demo"}</a>
            </div>
            <div className="hero-trust">{t.hero.trust}</div>
          </div>
          {layout !== "center" && <HeroCard t={t} layout={layout} />}
        </div>

        <div className="tickers">
          {t.hero.tickers.map((tk, i) => <Ticker key={i} {...tk} />)}
        </div>
      </div>
    </section>
  );
}

// Render headline with highlight of a word
function renderHeadline(str, lang) {
  if (!str) return "";
  // Highlight key phrase
  const target = lang === "en" ? "real time" : "tiempo real";
  const esc = (s) => s.replace(/</g, "&lt;");
  const re = new RegExp(`(${target})`, "i");
  return esc(str).replace(re, '<span class="hl">$1</span>');
}

window.Hero = Hero;
