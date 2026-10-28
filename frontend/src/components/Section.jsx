export default function Section({ id, kicker, title, children }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="kicker">{kicker}</span>
          <h2 className="section-title">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  )
}
