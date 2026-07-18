import { MessageCircle } from 'lucide-react'
import './WhatsAppPopup.scss'

const WHATSAPP_URL = 'https://wa.me/447392010907'

export default function WhatsAppPopup() {
  return <a className="whatsapp-popup" href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="Start a WhatsApp conversation with Tintopia Bristol">
    <MessageCircle size={25} strokeWidth={2.4}/>
    <span>Chat on WhatsApp</span>
  </a>
}
