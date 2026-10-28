import Section from './Section'
import { Icon } from './icons'

export default function Skills({ skills }) {
  return (
    <Section id="skills" kicker="Skills" title="What I work with">
      <div className="skills-grid">
        {skills.map((group, i) => (
          <div className="card skill-card" key={group.group} data-reveal style={{ '--stagger': i }}>
            <div className="skill-head">
              <span className="skill-icon">
                <Icon name={group.icon} size={20} />
              </span>
              <h3>{group.group}</h3>
            </div>
            <ul className="chips">
              {group.items.map((item) => (
                <li className="chip" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
