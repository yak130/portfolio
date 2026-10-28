import { useState } from 'react'
import Section from './Section'
import { Icon } from './icons'
import { sendContact } from '../api'

const EMPTY = { name: '', email: '', message: '' }

export default function Contact({ profile }) {
  const [form, setForm] = useState(EMPTY)
  const [status, setStatus] = useState({ state: 'idle', message: '' })

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  async function onSubmit(e) {
    e.preventDefault()
    setStatus({ state: 'sending', message: '' })
    try {
      const res = await sendContact(form)
      setStatus({ state: 'success', message: res.message })
      setForm(EMPTY)
    } catch (err) {
      setStatus({ state: 'error', message: err.message })
    }
  }

  return (
    <Section id="contact" kicker="Contact" title="Let's build something">
      <div className="contact-grid">
        <div className="contact-info" data-reveal>
          <p>
            Have a project in mind, a role to fill, or just want to say hi? My inbox is
            always open — I usually reply within a day.
          </p>
          <a className="meta-item" href={`mailto:${profile.email}`}>
            <Icon name="mail" size={16} /> {profile.email}
          </a>
          <div className="socials">
            {profile.socials.map((s) => (
              <a key={s.label} href={s.url} target="_blank" rel="noreferrer" aria-label={s.label} title={s.label}>
                <Icon name={s.icon} size={20} />
              </a>
            ))}
          </div>
        </div>

        <form className="card contact-form" onSubmit={onSubmit} data-reveal style={{ '--stagger': 1 }}>
          <label>
            Name
            <input
              name="name"
              value={form.name}
              onChange={update}
              placeholder="Jane Doe"
              required
              minLength={2}
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={update}
              placeholder="jane@example.com"
              required
            />
          </label>
          <label>
            Message
            <textarea
              name="message"
              rows={5}
              value={form.message}
              onChange={update}
              placeholder="Tell me about your project…"
              required
              minLength={10}
            />
          </label>

          <button className="btn btn-primary" type="submit" disabled={status.state === 'sending'}>
            {status.state === 'sending' ? (
              'Sending…'
            ) : (
              <>
                Send message <Icon name="send" size={16} />
              </>
            )}
          </button>

          {status.message && (
            <p className={`form-status ${status.state}`} role="status">
              {status.message}
            </p>
          )}
        </form>
      </div>
    </Section>
  )
}
