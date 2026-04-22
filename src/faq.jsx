// FAQ
const { useState: useStateFaq } = React;

function FAQ({ t }) {
  const [open, setOpen] = useStateFaq(0);
  return (
    <section id="faq">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <div className="eyebrow">{t.faq.kicker}</div>
            <h2>{t.faq.title}</h2>
          </div>
        </div>
        <div className="faq-list">
          {t.faq.items.map((it, i) => (
            <div key={i} className={"faq-item " + (open === i ? "open" : "")}>
              <div className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                <h4>{it.q}</h4>
                <span className="faq-plus">+</span>
              </div>
              <div className="faq-a">{it.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.FAQ = FAQ;
