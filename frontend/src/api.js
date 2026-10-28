export async function fetchPortfolio() {
  const res = await fetch('/api/portfolio')
  if (!res.ok) throw new Error(`API responded with ${res.status}`)
  return res.json()
}

export async function sendContact({ name, email, message }) {
  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, message }),
  })
  const body = await res.json().catch(() => ({}))
  if (!res.ok) {
    const detail = typeof body.detail === 'string'
      ? body.detail
      : Array.isArray(body.detail) ? 'Please check the form fields.' : `API responded with ${res.status}`
    throw new Error(detail)
  }
  return body
}
