// Tweaks panel
const { useState: useStateTw, useEffect: useEffectTw } = React;

function Tweaks({ tweaks, setTweaks, lang }) {
  const [editOn, setEditOn] = useStateTw(false);
  const [open, setOpen] = useStateTw(true);

  useEffectTw(() => {
    const onMsg = (e) => {
      const d = e.data || {};
      if (d.type === "__activate_edit_mode") { setEditOn(true); setOpen(true); }
      if (d.type === "__deactivate_edit_mode") setEditOn(false);
    };
    window.addEventListener("message", onMsg);
    try { window.parent.postMessage({ type: "__edit_mode_available" }, "*"); } catch (e) {}
    return () => window.removeEventListener("message", onMsg);
  }, []);

  const update = (patch) => {
    const next = { ...tweaks, ...patch };
    setTweaks(next);
    try { window.parent.postMessage({ type: "__edit_mode_set_keys", edits: patch }, "*"); } catch (e) {}
  };

  if (!editOn) return null;

  const palettes = [
    { k: "navy-electric", n: "Navy · Lime" },
    { k: "onyx-lime", n: "Onyx · Lime" },
    { k: "green-cream", n: "Forest · Cream" }
  ];
  const heroLayouts = [{ k: "split-dashboard", n: "Split" }, { k: "center", n: "Center" }];
  const dashStyles = [{ k: "charts-grid", n: "Charts" }, { k: "numbers-first", n: "Numbers" }];

  return (
    <>
      <button className={"tw-fab " + (editOn ? "on" : "")} onClick={() => setOpen(o => !o)}>
        ⚙ Tweaks
      </button>
      <div className={"tw-panel " + (open ? "open" : "")}>
        <h3>Tweaks <button className="tw-close" onClick={() => setOpen(false)}>×</button></h3>

        <label>Palette</label>
        <div className="tw-seg">
          {palettes.map(p => (
            <button key={p.k} className={tweaks.palette === p.k ? "active" : ""} onClick={() => update({ palette: p.k })}>{p.n}</button>
          ))}
        </div>

        <label>Hero layout</label>
        <div className="tw-seg">
          {heroLayouts.map(l => (
            <button key={l.k} className={tweaks.heroLayout === l.k ? "active" : ""} onClick={() => update({ heroLayout: l.k })}>{l.n}</button>
          ))}
        </div>

        <label>Dashboard style</label>
        <div className="tw-seg">
          {dashStyles.map(s => (
            <button key={s.k} className={tweaks.dashboardStyle === s.k ? "active" : ""} onClick={() => update({ dashboardStyle: s.k })}>{s.n}</button>
          ))}
        </div>

        <label>Headline ({lang.toUpperCase()})</label>
        <textarea
          rows={2}
          value={lang === "en" ? tweaks.headline_en : tweaks.headline_es}
          onChange={e => update(lang === "en" ? { headline_en: e.target.value } : { headline_es: e.target.value })}
        />
      </div>
    </>
  );
}
window.Tweaks = Tweaks;
