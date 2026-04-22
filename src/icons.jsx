// Simple monoline icons used across the site
const Icon = ({ name, size = 18, stroke = "currentColor" }) => {
  const props = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke, strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "arrow-right": return <svg {...props}><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
    case "arrow-up": return <svg {...props}><path d="M12 19V5M6 11l6-6 6 6" /></svg>;
    case "check": return <svg {...props}><path d="M5 12l4 4 10-10" /></svg>;
    case "plus": return <svg {...props}><path d="M12 5v14M5 12h14" /></svg>;
    case "close": return <svg {...props}><path d="M6 6l12 12M18 6l-12 12" /></svg>;
    case "bell": return <svg {...props}><path d="M6 8a6 6 0 1 1 12 0c0 7 3 9 3 9H3s3-2 3-9z" /><path d="M10 21a2 2 0 0 0 4 0" /></svg>;
    case "zap": return <svg {...props}><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" /></svg>;
    case "chart": return <svg {...props}><path d="M3 3v18h18" /><path d="M7 15l4-4 4 3 5-7" /></svg>;
    case "layers": return <svg {...props}><path d="M12 3l9 5-9 5-9-5 9-5z" /><path d="M3 13l9 5 9-5M3 18l9 5 9-5" /></svg>;
    case "target": return <svg {...props}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /></svg>;
    case "send": return <svg {...props}><path d="M22 2L11 13" /><path d="M22 2l-7 20-4-9-9-4 20-7z" /></svg>;
    case "spark": return <svg {...props}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" /></svg>;
  }
  return null;
};
window.Icon = Icon;
