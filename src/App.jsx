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

const routes = {
  '/window-films/': WindowFilms,
  '/window-films/standard-films/': StandardFilms,
  '/window-films/ceramic-films/': CeramicFilms,
  '/window-films/chameleon-films/': ChameleonFilms,
  '/window-films/windshield-film/': WindshieldFilm,
  '/services/': Services,
  '/gallery/': Gallery,
  '/booknow/': BookNow,
  '/contact/': Contact,
}

export default function App() {
  const path = window.location.pathname.endsWith('/') ? window.location.pathname : `${window.location.pathname}/`
  const Page = routes[path] || Home
  return <Page/>
}
