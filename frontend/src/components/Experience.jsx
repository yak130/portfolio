import Section from './Section'

export default function Experience({ experience }) {
  return (
    <Section id="experience" kicker="Experience" title="Where I've worked">
      <ol className="timeline">
        {experience.map((job, i) => (
          <li className="timeline-item" key={job.company} data-reveal style={{ '--stagger': Math.min(i, 2) }}>
            <span className="timeline-dot" />
            <div className="card timeline-card">
              <div className="timeline-head">
                <h3>
                  {job.role} <span className="at">@ {job.company}</span>
                </h3>
                <span className="period">{job.period}</span>
              </div>
              <p className="timeline-summary">{job.summary}</p>
              <ul className="highlights">
                {job.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
