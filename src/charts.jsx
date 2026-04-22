// SVG chart helpers (no libs)
const { useEffect, useRef, useState, useMemo } = React;

// Generate a smooth random-walk line
function genSeries(n, base, vol, seed = 1) {
  const arr = [];
  let v = base;
  let s = seed;
  for (let i = 0; i < n; i++) {
    s = (s * 9301 + 49297) % 233280;
    const rnd = s / 233280 - 0.5;
    v = Math.max(1, v + rnd * vol + vol * 0.02);
    arr.push(v);
  }
  return arr;
}

function pathFromPoints(points, w, h, pad = 4) {
  const xs = points.map((_, i) => pad + (i / (points.length - 1)) * (w - pad * 2));
  const min = Math.min(...points);
  const max = Math.max(...points);
  const ys = points.map(v => pad + (1 - (v - min) / (max - min || 1)) * (h - pad * 2));
  let d = `M ${xs[0]} ${ys[0]}`;
  for (let i = 1; i < points.length; i++) {
    const cx = (xs[i - 1] + xs[i]) / 2;
    d += ` Q ${cx} ${ys[i - 1]} ${xs[i]} ${ys[i]}`;
  }
  return { d, xs, ys };
}

function AreaChart({ data, width = 520, height = 150, stroke = "#D4FF3F", fill = "rgba(212,255,63,0.18)", grid = true, animate = true }) {
  const { d, xs, ys } = useMemo(() => pathFromPoints(data, width, height, 8), [data, width, height]);
  const last = xs.length - 1;
  const areaD = `${d} L ${xs[last]} ${height - 4} L ${xs[0]} ${height - 4} Z`;
  const pathRef = useRef(null);
  const [len, setLen] = useState(0);
  useEffect(() => {
    if (pathRef.current && animate) setLen(pathRef.current.getTotalLength());
  }, [d]);

  return (
    <svg viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none" style={{ width: "100%", height: "100%", display: "block" }}>
      {grid && [0.25, 0.5, 0.75].map(p => (
        <line key={p} x1={0} x2={width} y1={height * p} y2={height * p} stroke="rgba(255,255,255,0.06)" strokeDasharray="2 4" />
      ))}
      <path d={areaD} fill={fill} />
      <path
        ref={pathRef}
        d={d}
        fill="none"
        stroke={stroke}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={animate ? { strokeDasharray: len, strokeDashoffset: len, animation: "draw 1.8s 0.1s ease-out forwards" } : {}}
      />
      <circle cx={xs[last]} cy={ys[last]} r={4} fill={stroke} />
      <circle cx={xs[last]} cy={ys[last]} r={8} fill={stroke} opacity="0.25">
        <animate attributeName="r" values="4;10;4" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.4;0;0.4" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

function Bars({ data, width = 520, height = 150, color = "#D4FF3F", accentLast = true, muted = "rgba(255,255,255,0.22)" }) {
  const max = Math.max(...data);
  const bw = width / data.length;
  return (
    <svg viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none" style={{ width: "100%", height: "100%", display: "block" }}>
      {data.map((v, i) => {
        const h = (v / max) * (height - 10);
        const isLast = i === data.length - 1;
        return (
          <rect key={i} x={i * bw + bw * 0.15} y={height - h - 4} width={bw * 0.7} height={h} rx="2" fill={accentLast && isLast ? color : muted} />
        );
      })}
    </svg>
  );
}

function Sparkline({ data, color = "#D4FF3F", width = 120, height = 40 }) {
  const { d } = useMemo(() => pathFromPoints(data, width, height, 2), [data, width, height]);
  return (
    <svg viewBox={`0 0 ${width} ${height}`} style={{ width: "100%", height: "100%", display: "block" }}>
      <path d={d} fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" />
    </svg>
  );
}

function CohortGrid({ rows = 5, cols = 6, seed = 3 }) {
  const cells = [];
  let s = seed;
  for (let r = 0; r < rows; r++) {
    const row = [];
    for (let c = 0; c < cols; c++) {
      if (c <= r) { row.push(null); continue; }
      s = (s * 9301 + 49297) % 233280;
      const base = 95 - (c - r) * 12 - (s / 233280) * 8;
      row.push(Math.max(8, Math.round(base)));
    }
    cells.push(row);
  }
  const w = 320, h = 140;
  const cw = w / cols, ch = h / rows;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: "100%", height: "100%", display: "block" }}>
      {cells.map((row, r) => row.map((v, c) => {
        if (v == null) return null;
        const op = v / 100;
        return (
          <g key={`${r}-${c}`}>
            <rect x={c * cw + 1} y={r * ch + 1} width={cw - 2} height={ch - 2} rx="2" fill="#D4FF3F" opacity={op} />
            <text x={c * cw + cw / 2} y={r * ch + ch / 2 + 3} textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" fill={op > 0.55 ? "#0A1230" : "#fff"} opacity="0.85">{v}</text>
          </g>
        );
      }))}
    </svg>
  );
}

function DonutSplit({ parts = [40, 30, 20, 10], size = 120, stroke = 18 }) {
  const colors = ["#D4FF3F", "#5B8CFF", "#FF8A3D", "#FFFFFF"];
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  let offset = 0;
  const total = parts.reduce((a, b) => a + b, 0);
  return (
    <svg viewBox={`0 0 ${size} ${size}`} style={{ width: "100%", height: "100%", display: "block" }}>
      <circle cx={size / 2} cy={size / 2} r={r} stroke="rgba(255,255,255,0.08)" strokeWidth={stroke} fill="none" />
      {parts.map((p, i) => {
        const len = (p / total) * c;
        const el = (
          <circle
            key={i}
            cx={size / 2}
            cy={size / 2}
            r={r}
            stroke={colors[i % colors.length]}
            strokeWidth={stroke}
            fill="none"
            strokeDasharray={`${len} ${c - len}`}
            strokeDashoffset={-offset}
            transform={`rotate(-90 ${size / 2} ${size / 2})`}
            strokeLinecap="butt"
          />
        );
        offset += len;
        return el;
      })}
    </svg>
  );
}

// Animated counter that eases to target value
function useCounter(target, duration = 1400, start = 0) {
  const [val, setVal] = useState(start);
  useEffect(() => {
    let raf; const t0 = performance.now();
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(start + (target - start) * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target]);
  return val;
}

function formatEuro(n, decimals = 0) {
  return new Intl.NumberFormat('es-ES', { maximumFractionDigits: decimals }).format(Math.round(n));
}

Object.assign(window, { genSeries, pathFromPoints, AreaChart, Bars, Sparkline, CohortGrid, DonutSplit, useCounter, formatEuro });

// Add CSS for path draw
const s = document.createElement('style');
s.textContent = `@keyframes draw { to { stroke-dashoffset: 0; } }`;
document.head.appendChild(s);
