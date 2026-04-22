// Brand logo renderer — uses real SVG marks for well-known brands, falls back to initials.
const BRAND_COLORS = {
  "Stripe": ["#635BFF", "#A89FFF"],
  "PayPal": ["#003087", "#009CDE"],
  "Holded": ["#0061FF", "#60A5FA"],
  "Odoo": ["#714B67", "#9F6B8F"],
  "QuickBooks": ["#2CA01C", "#6FCF53"],
  "Sage": ["#00D639", "#5EEF7F"],
  "SAP": ["#0FAAFF", "#1B78D9"],
  "Xero": ["#13B5EA", "#5FD3F4"],
  "Shopify": ["#95BF47", "#5E8E3E"],
  "WooCommerce": ["#7F54B3", "#A97FD1"],
  "Amazon": ["#FF9900", "#232F3E"],
  "Google Ads": ["#4285F4", "#EA4335"],
  "Meta Ads": ["#1877F2", "#42A5F5"],
  "TikTok Ads": ["#000000", "#FF0050"],
  "TikTok": ["#000000", "#FF0050"],
  "Mailchimp": ["#FFE01B", "#241C15"],
  "HubSpot": ["#FF7A59", "#FFAA8D"],
  "Salesforce": ["#00A1E0", "#5BC8EF"],
  "POS": ["#0A1230", "#5B8CFF"],
  "Slack": ["#611F69", "#E01E5A"],
  "Notion": ["#000000", "#999999"],
  "BBVA": ["#004481", "#1973B8"],
  "Santander": ["#EC0000", "#FF4D4D"],
  "CaixaBank": ["#007EAE", "#FFC72C"],
  "Sabadell": ["#00A0DF", "#5BC8EF"],
  "ING": ["#FF6200", "#FF9347"],
  "Revolut": ["#0666EB", "#191C1F"],
  "Zoho": ["#E42527", "#FDB813"]
};

// Inline SVG marks (simplified, trademark-safe geometric interpretations)
const BRAND_SVG = {
  "Stripe": (s) => (
    <div style={{ width: s+6, height: s, background: "#635BFF", borderRadius: 6, display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: Math.round(s*0.58), fontFamily: "var(--font-sans)", letterSpacing: "-0.05em" }}>S</div>
  ),
  "Shopify": (s) => (
    <div style={{ width: s, height: s, background: "#95BF47", borderRadius: 6, display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: Math.round(s*0.6), fontFamily: "var(--font-serif)" }}>S</div>
  ),
  "Amazon": (s) => (
    <div style={{ width: s+6, height: s, background: "#232F3E", borderRadius: 6, display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#FF9900", fontWeight: 700, fontSize: Math.round(s*0.42), fontFamily: "var(--font-sans)" }}>a.</div>
  ),
  "PayPal": (s) => (
    <div style={{ width: s+4, height: s, background: "#003087", borderRadius: 6, display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#009CDE", fontWeight: 800, fontSize: Math.round(s*0.5), fontFamily: "var(--font-sans)", fontStyle: "italic" }}>P</div>
  ),
  "Meta Ads": (s) => (
    <svg width={s+6} height={s} viewBox="0 0 40 32" style={{ borderRadius: 6 }}>
      <rect width="40" height="32" fill="#fff"/>
      <path d="M8 22c0-6 3-12 8-12 3 0 5 2 8 6 3 4 4 6 6 6 2 0 3-2 3-4s-1-4-3-4c-1 0-2 1-3 2l-2-2c2-3 4-4 6-4 4 0 6 3 6 8s-2 8-6 8c-3 0-5-2-8-6-3-4-4-6-6-6-2 0-3 2-3 6s1 6 3 6c1 0 2-1 3-2l2 2c-2 3-4 4-6 4-4 0-6-3-6-8z" fill="#1877F2"/>
    </svg>
  ),
  "Google Ads": (s) => (
    <svg width={s+6} height={s} viewBox="0 0 40 32" style={{ borderRadius: 6, background: "#fff" }}>
      <circle cx="14" cy="16" r="8" fill="#FBBC04"/>
      <path d="M14 8l12 20h-4L10 8z" fill="#4285F4"/>
      <circle cx="26" cy="24" r="5" fill="#34A853"/>
    </svg>
  ),
  "Slack": (s) => (
    <svg width={s+4} height={s} viewBox="0 0 36 32" style={{ borderRadius: 6, background: "#fff", padding: 2 }}>
      <rect x="4" y="14" width="14" height="4" rx="2" fill="#36C5F0"/>
      <rect x="14" y="4" width="4" height="14" rx="2" fill="#2EB67D"/>
      <rect x="18" y="14" width="14" height="4" rx="2" fill="#ECB22E"/>
      <rect x="18" y="14" width="4" height="14" rx="2" fill="#E01E5A"/>
    </svg>
  ),
  "Notion": (s) => (
    <div style={{ width: s, height: s, background: "#fff", borderRadius: 6, border: "1px solid #000", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#000", fontWeight: 800, fontSize: Math.round(s*0.55), fontFamily: "var(--font-serif)" }}>N</div>
  ),
  "HubSpot": (s) => (
    <div style={{ width: s, height: s, background: "#FF7A59", borderRadius: 6, display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: Math.round(s*0.6), fontFamily: "var(--font-sans)" }}>H</div>
  ),
  "Salesforce": (s) => (
    <svg width={s+8} height={s} viewBox="0 0 48 32" style={{ borderRadius: 6, background: "#00A1E0" }}>
      <path d="M10 16c0-3 2-5 5-5 2 0 4 1 5 3 1-2 3-3 5-3 3 0 5 2 5 5 0 1 0 2-1 3 2 1 3 2 3 4s-2 4-5 4H12c-3 0-5-2-5-4s1-3 3-4z" fill="#fff" opacity="0.95"/>
    </svg>
  ),
  "BBVA": (s) => (
    <div style={{ width: s+12, height: s, background: "#004481", borderRadius: 4, display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: Math.round(s*0.4), letterSpacing: "-0.02em", fontFamily: "var(--font-sans)" }}>BBVA</div>
  ),
  "Santander": (s) => (
    <svg width={s+10} height={s} viewBox="0 0 44 32" style={{ borderRadius: 4, background: "#EC0000" }}>
      <path d="M22 6c-5 0-9 3-9 7 0 3 2 5 5 7l6 4c2 1 3 2 3 3 0 1-2 2-5 2s-5-1-5-3l-3 3c1 2 4 4 8 4 5 0 9-3 9-7 0-3-2-5-5-7l-6-4c-2-1-3-2-3-3 0-1 2-2 5-2s4 1 5 3l3-3c-1-2-4-4-8-4z" fill="#fff"/>
    </svg>
  ),
  "CaixaBank": (s) => (
    <svg width={s+6} height={s} viewBox="0 0 40 32" style={{ borderRadius: 4, background: "#007EAE" }}>
      <circle cx="15" cy="16" r="8" fill="#FFC72C"/>
      <circle cx="25" cy="16" r="6" fill="#fff"/>
    </svg>
  ),
  "ING": (s) => (
    <div style={{ width: s+8, height: s, background: "#fff", border: "1px solid #FF6200", borderRadius: 4, display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#FF6200", fontWeight: 800, fontSize: Math.round(s*0.5), fontFamily: "var(--font-sans)", letterSpacing: "0.02em" }}>ING</div>
  ),
  "Revolut": (s) => (
    <div style={{ width: s, height: s, background: "#191C1F", borderRadius: 6, display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 900, fontSize: Math.round(s*0.65), fontFamily: "var(--font-sans)" }}>R</div>
  ),
  "Sabadell": (s) => (
    <div style={{ width: s+8, height: s, background: "#00A0DF", borderRadius: 4, display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: Math.round(s*0.38), fontFamily: "var(--font-sans)" }}>SBD</div>
  ),
  "WooCommerce": (s) => (
    <div style={{ width: s+6, height: s, background: "#7F54B3", borderRadius: 6, display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: Math.round(s*0.5), fontFamily: "var(--font-sans)" }}>W</div>
  ),
  "Holded": (s) => (
    <div style={{ width: s, height: s, background: "#0061FF", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: Math.round(s*0.55), fontFamily: "var(--font-sans)" }}>h</div>
  ),
  "Odoo": (s) => (
    <div style={{ width: s+6, height: s, background: "#714B67", borderRadius: 6, display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: Math.round(s*0.42), fontFamily: "var(--font-sans)" }}>odo</div>
  ),
  "SAP": (s) => (
    <div style={{ width: s+8, height: s, background: "linear-gradient(90deg,#003D78,#1B78D9)", borderRadius: 4, display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: Math.round(s*0.46), fontFamily: "var(--font-sans)" }}>SAP</div>
  ),
  "Xero": (s) => (
    <div style={{ width: s, height: s, background: "#13B5EA", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: Math.round(s*0.5), fontFamily: "var(--font-sans)" }}>X</div>
  ),
  "QuickBooks": (s) => (
    <div style={{ width: s, height: s, background: "#2CA01C", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: Math.round(s*0.55), fontFamily: "var(--font-sans)" }}>qb</div>
  ),
  "Zoho": (s) => (
    <div style={{ width: s+6, height: s, background: "#fff", border: "1px solid #E42527", borderRadius: 4, display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#E42527", fontWeight: 800, fontSize: Math.round(s*0.45), fontFamily: "var(--font-sans)" }}>Zoho</div>
  ),
  "TikTok": (s) => (
    <div style={{ width: s, height: s, background: "#000", borderRadius: 8, display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#FF0050", fontWeight: 800, fontSize: Math.round(s*0.6), fontFamily: "var(--font-sans)" }}>♪</div>
  ),
  "TikTok Ads": (s) => (
    <div style={{ width: s, height: s, background: "#000", borderRadius: 8, display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#FF0050", fontWeight: 800, fontSize: Math.round(s*0.6), fontFamily: "var(--font-sans)" }}>♪</div>
  ),
};

const BrandLogo = ({ name, size = 28 }) => {
  if (!name) return null;
  if (BRAND_SVG[name]) return BRAND_SVG[name](size);
  const colors = BRAND_COLORS[name] || ["#0A1230", "#5B8CFF"];
  const initials = String(name).split(/[\s·]+/).filter(Boolean).map(w => w[0]).slice(0, 2).join("").toUpperCase();
  return (
    <div style={{
      width: size + 10,
      height: size,
      borderRadius: 6,
      background: `linear-gradient(135deg, ${colors[0]}, ${colors[1]})`,
      color: "#fff",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: Math.round(size * 0.42),
      letterSpacing: "-0.01em",
      boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
    }}>{initials}</div>
  );
};

window.BrandLogo = BrandLogo;
