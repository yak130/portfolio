import { useEffect, useState } from 'react'
import { fetchPortfolio } from './api'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchPortfolio().then(setData).catch((e) => setError(e.message))
  }, [])

  // Reveal-on-scroll: anything with [data-reveal] fades in when visible.
  useEffect(() => {
    if (!data) return undefined
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )
    document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [data])

  if (error) {
    return (
      <div className="splash splash-error">
        <div className="error-box">
          <h2>Couldn't load the portfolio</h2>
          <p>{error} — make sure the FastAPI backend is running on port 8000.</p>
          <button className="btn btn-primary" onClick={() => window.location.reload()}>
            Retry
          </button>
        </div>
      </div>
    )
  }

  if (!data) {
    return <div className="splash" aria-label="Loading" />
  }

  const { profile, skills, projects, experience } = data
  return (
    <>
      <Navbar profile={profile} />
      <main>
        <Hero profile={profile} />
        <About profile={profile} />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Experience experience={experience} />
        <Contact profile={profile} />
      </main>
      <Footer profile={profile} />
    </>
  )
}
