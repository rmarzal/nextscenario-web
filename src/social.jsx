// Testimonials
function Social({ t }) {
  return (
    <section id="customers">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <div className="eyebrow">{t.social.kicker}</div>
            <h2 dangerouslySetInnerHTML={{ __html: t.social.title.replace(/(Excel|spreadsheets)/i, '<em>$1</em>') }} />
          </div>
        </div>
        <div className="quotes">
          {t.social.quotes.map((q, i) => (
            <div key={i} className={"quote reveal " + (q.big ? "big" : "")}>
              <div className="quote-text">"{q.text}"</div>
              <div className="quote-foot">
                <div className="qf-avatar">{q.name.split(" ").map(w => w[0]).slice(0,2).join("")}</div>
                <div>
                  <div className="qf-name">{q.name}</div>
                  <div className="qf-role">{q.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Social = Social;
