import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function EnquiryForm() {
  const [sent, setSent] = useState(false)
  return <aside className="enquiry"><p className="eyebrow">Get in touch</p><h3>START YOUR QUOTE</h3><p>Tell us a little about your car and the tint you have in mind.</p><form onSubmit={(event) => { event.preventDefault(); setSent(true) }}><input required placeholder="Your name"/><input required type="email" placeholder="Email address"/><input placeholder="Vehicle make & model"/><textarea placeholder="How can we help?" rows="4"></textarea><button className="quote" type="submit">{sent ? 'Message sent' : 'Send enquiry'} <ArrowRight size={16}/></button></form></aside>
}
