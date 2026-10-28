import Section from './Section'
import { Icon } from './icons'

export default function Projects({ projects }) {
  return (
    <Section id="projects" kicker="Projects" title="Selected work">
      <div className="projects-grid">
        {projects.map((project, i) => (
          <article
            className="card project-card"
            key={project.title}
            data-reveal
            style={{ '--stagger': i % 2 }}
          >
            <div className="project-banner" style={{ background: project.gradient }}>
              <span className="project-emoji" aria-hidden="true">
                {project.icon}
              </span>
              {project.featured && <span className="badge">Featured</span>}
            </div>

            <div className="project-body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <ul className="chips">
                {project.tech.map((tech) => (
                  <li className="chip chip-sm" key={tech}>
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <Icon name="github" size={16} /> Code
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    <Icon name="external" size={16} /> Live demo
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
