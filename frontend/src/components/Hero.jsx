import { Icon } from './icons'

export default function Hero({ profile }) {
  return (
    <section className="hero" id="top">
      <div className="hero-glow hero-glow-1" />
      <div className="hero-glow hero-glow-2" />

      <div className="container hero-inner">
        {profile.available && (
          <p className="hero-badge" style={{ '--delay': '0ms' }}>
            <span className="pulse-dot" /> Available for new projects
          </p>
        )}
        <p className="hero-eyebrow" style={{ '--delay': '60ms' }}>
          Hi, I'm
        </p>
        <h1 className="hero-name" style={{ '--delay': '120ms' }}>
          {profile.name}
        </h1>
        <h2 className="hero-role" style={{ '--delay': '180ms' }}>
          {profile.role}
        </h2>
        <p className="hero-tagline" style={{ '--delay': '240ms' }}>
          {profile.tagline}
        </p>

        <div className="hero-actions" style={{ '--delay': '300ms' }}>
          <a className="btn btn-primary" href="#projects">
            View my work <Icon name="arrow" size={16} />
          </a>
          <a className="btn btn-ghost" href="#contact">
            Get in touch
          </a>
        </div>

        <div className="hero-meta" style={{ '--delay': '360ms' }}>
          <span className="meta-item">
            <Icon name="pin" size={15} /> {profile.location}
          </span>
          <a className="meta-item" href={`mailto:${profile.email}`}>
            <Icon name="mail" size={15} /> {profile.email}
          </a>
        </div>

        <div className="socials" style={{ '--delay': '420ms' }}>
          {profile.socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              title={s.label}
            >
              <Icon name={s.icon} size={20} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
