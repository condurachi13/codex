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
import WhatsAppPopup from './components/WhatsAppPopup'

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
}

export default function App() {
  const base = import.meta.env.BASE_URL
  const pathname = window.location.pathname
  const relativePath = pathname.startsWith(base) ? pathname.slice(base.length - 1) : '/'
  const path = relativePath.endsWith('/') ? relativePath : `${relativePath}/`
  const Page = routes[path] || Home
  return <><Page/><WhatsAppPopup/></>
}
