import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/cc498bf6ab970409a2e350e0a866619f'

export default function EnquiryForm({ booking = false }) {
  const [status, setStatus] = useState('idle')
  const today = new Date().toISOString().slice(0, 10)

  async function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    setStatus('sending')

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      })

      if (!response.ok) throw new Error('Unable to send enquiry')
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  const buttonLabel = status === 'sending'
    ? 'Sending…'
    : status === 'sent'
      ? 'Message sent'
      : 'Send enquiry'

  const heading = booking ? 'BOOK YOUR APPOINTMENT' : 'START YOUR QUOTE'
  const intro = booking ? 'Choose your preferred appointment date and tell us a little about your car.' : 'Tell us a little about your car and the tint you have in mind.'
  const subject = booking ? 'New Tintopia Bristol booking request' : 'New Tintopia Bristol enquiry'

  return <aside className="enquiry"><p className="eyebrow">Get in touch</p><h3>{heading}</h3><p>{intro}</p><form action={FORM_ENDPOINT} onSubmit={handleSubmit}><input type="hidden" name="_subject" value={subject}/><input type="hidden" name="_template" value="table"/><input className="form-honeypot" type="text" name="_honey" tabIndex="-1" autoComplete="off" aria-hidden="true"/><input required name="name" placeholder="Your name"/><input required name="email" type="email" placeholder="Email address"/><input name="vehicle" placeholder="Vehicle make & model"/>{booking && <label className="date-field">Preferred appointment date<input required name="preferred_date" type="date" min={today}/></label>}<textarea name="message" placeholder="How can we help?" rows="4"></textarea><button className="quote" type="submit" disabled={status === 'sending'}>{buttonLabel} <ArrowRight size={16}/></button>{status === 'sent' && <p className="form-status success" role="status">Thanks — we’ll be in touch shortly.</p>}{status === 'error' && <p className="form-status error" role="alert">Sorry, your enquiry could not be sent. Please try again.</p>}</form></aside>
}
