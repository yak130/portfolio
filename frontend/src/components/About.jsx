import Section from './Section'
import { Icon } from './icons'

export default function About({ profile }) {
  return (
    <Section id="about" kicker="About" title="A quick introduction">
      <div className="about-grid">
        <div className="about-text" data-reveal>
          {profile.about.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
          {profile.resumeUrl && profile.resumeUrl !== '#' && (
            <a className="btn btn-ghost" href={profile.resumeUrl}>
              Download résumé <Icon name="download" size={16} />
            </a>
          )}
        </div>

        <ul className="facts card" data-reveal style={{ '--stagger': 1 }}>
          {profile.facts.map((fact) => (
            <li key={fact.label}>
              <span>{fact.label}</span>
              <strong>{fact.value}</strong>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
