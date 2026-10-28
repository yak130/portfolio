export default function Footer({ profile }) {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span className="footer-built">Built with React + FastAPI</span>
      </div>
    </footer>
  )
}
