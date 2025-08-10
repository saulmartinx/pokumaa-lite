import { useState } from 'react'
import { NEWSLETTER_ENDPOINT } from '../config.ts'

/**
 * Newsletter form integrates with Mailchimp/Klaviyo or any other provider via
 * a simple POST request.  The endpoint should be provided through a Vite
 * environment variable (see `NEWSLETTER_ENDPOINT` in `src/config.ts`).  On
 * successful submission the form will display a confirmation message.
 */
const NewsletterForm = () => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) return
    setStatus('sending')
    try {
      const resp = await fetch(NEWSLETTER_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })
      if (resp.ok) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3" aria-label="Uudiskirja vorm">
      <label htmlFor="newsletter-email" className="sr-only">
        E‑posti aadress
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border border-gray-300 rounded-md p-2"
        placeholder="Sisesta oma e‑post"
        aria-label="E‑postiga liitumiseks"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        disabled={status === 'sending'}
        aria-label="Saada liitumise taotlus"
      >
        {status === 'sending' ? 'Saadan...' : 'Liitu'}
      </button>
      {status === 'success' && (
        <p className="text-green-700 text-sm" aria-live="polite">
          Aitäh! Liitumine õnnestus.
        </p>
      )}
      {status === 'error' && (
        <p className="text-red-600 text-sm" aria-live="assertive">
          Midagi läks valesti. Palun proovi uuesti.
        </p>
      )}
    </form>
  )
}

export default NewsletterForm
