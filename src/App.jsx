import { useEffect } from 'react'
import Home from './pages/Home'
import WindowFilms from './pages/WindowFilms'
import StandardFilms from './pages/StandardFilms'
import CeramicFilms from './pages/CeramicFilms'
import ChameleonFilms from './pages/ChameleonFilms'
import WindshieldFilm from './pages/WindshieldFilm'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import BookNow from './pages/BookNow'
import Contact from './pages/Contact'
import Legal from './pages/Legal'
import WhatsAppPopup from './components/WhatsAppPopup'
import Seo from './components/Seo'

const routes = {
  '/': Home,
  '/films/': WindowFilms,
  '/films/standard/': StandardFilms,
  '/films/ceramic/': CeramicFilms,
  '/films/chameleon/': ChameleonFilms,
  '/films/windshield/': WindshieldFilm,
  '/services/': Services,
  '/gallery/': Gallery,
  '/booknow/': BookNow,
  '/contact/': Contact,
  '/legal/': Legal,
}

export default function App() {
  useEffect(() => {
    const elements = document.querySelectorAll('.service-card, .enquiry, .gallery figure, .review-card')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const finishReveal = () => {
            entry.target.classList.remove('reveal-ready', 'revealed')
            entry.target.removeEventListener('animationend', finishReveal)
          }
          entry.target.addEventListener('animationend', finishReveal)
          entry.target.classList.add('revealed')
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.15 },
    )

    elements.forEach((element, index) => {
      element.classList.add('reveal-ready')
      element.style.setProperty('--reveal-delay', `${(index % 4) * 80}ms`)
      observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const base = import.meta.env.BASE_URL
  const pathname = window.location.pathname
  const relativePath = pathname.startsWith(base) ? pathname.slice(base.length - 1) : '/'
  const path = relativePath.endsWith('/') ? relativePath : `${relativePath}/`
  const Page = routes[path] || Home
  return <><Seo/><Page/><WhatsAppPopup/></>
}
