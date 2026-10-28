import { useState } from 'react'
import { Icon } from './icons'

const links = [
  ['#about', 'About'],
  ['#skills', 'Skills'],
  ['#projects', 'Projects'],
  ['#experience', 'Experience'],
  ['#contact', 'Contact'],
]

export default function Navbar({ profile }) {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#top" className="nav-logo" onClick={close}>
          {profile.initials}
          <span>.</span>
        </a>

        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {links.map(([href, label]) => (
            <a key={href} href={href} onClick={close}>
              {label}
            </a>
          ))}
          <a className="btn btn-primary btn-small" href="#contact" onClick={close}>
            Hire me
          </a>
        </nav>

        <button
          className="nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? 'close' : 'menu'} size={22} />
        </button>
      </div>
    </header>
  )
}
