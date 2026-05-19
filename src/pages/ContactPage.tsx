import { useState, FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import HeroBackground3D from '../components/HeroBackground3D'
import { TEAM_LEADER_EMAIL } from '../data/team'
import './ContactPage.css'

export default function ContactPage() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    /*
     * PRODUCTION: Wire to your email API, e.g.:
     *
     * await fetch('/api/contact', {
     *   method: 'POST',
     *   headers: { 'Content-Type': 'application/json' },
     *   body: JSON.stringify({
     *     to: TEAM_LEADER_EMAIL,
     *     fromName: name,
     *     message,
     *   }),
     * });
     *
     * Or EmailJS / Resend / SendGrid:
     * sendEmail({ to: TEAM_LEADER_EMAIL, subject: `Incognito contact from ${name}`, text: message });
     */

    console.info('[Contact] Would email team leader:', {
      to: TEAM_LEADER_EMAIL,
      from: name,
      message,
    })

    setSubmitted(true)
    setName('')
    setMessage('')
  }

  return (
    <motion.main
      className="contact-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <HeroBackground3D />

      <div className="container contact-page__inner">
        <Link to="/" className="contact-page__back">
          ← Back home
        </Link>

        <motion.div
          className="contact-page__card"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="contact-page__eyebrow">Get in touch</p>
          <h1>Contact Team Incognito</h1>
          <p className="contact-page__lead">
            Send a note to our team leader. We read every message.
          </p>

          {submitted ? (
            <motion.p
              className="contact-page__success"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              Thank you — your message is queued for <strong>{TEAM_LEADER_EMAIL}</strong>.
            </motion.p>
          ) : (
            <form className="contact-page__form" onSubmit={handleSubmit}>
              <label className="contact-page__field">
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Your email"
                  autoComplete="email"
                />
              </label>

              <label className="contact-page__field">
                <span>Message</span>
                <textarea
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={6}
                  placeholder="Tell us about your project or question…"
                />
              </label>

              <button type="submit" className="contact-page__submit hero__cta">
                Submit
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </motion.main>
  )
}
