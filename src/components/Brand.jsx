import './Brand.scss'
import { sitePath } from '../paths'

export default function Brand() {
  return <a className="brand" href={sitePath()} aria-label="Tintopia Bristol home"><span className="brand-mark"><i></i><b></b></span><span>TINTOPIA<em>BRISTOL</em></span></a>
}
