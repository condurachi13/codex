import { useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'
import Brand from './Brand'
import './Header.scss'

export default function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return <header className="nav-wrap"><div className="nav shell"><Brand/><nav className={open ? 'nav-links active' : 'nav-links'}><a onClick={close} href="/">Home</a><a onClick={close} href="/window-films/">Window films</a><a onClick={close} href="/services/">Services</a><a onClick={close} href="/gallery/">Gallery</a><a onClick={close} href="/contact/">Contact</a><a className="mobile-quote" onClick={close} href="/booknow/">Book now</a></nav><a className="quote small" href="/booknow/">Book now <ArrowRight size={15}/></a><button className="menu" aria-label="Toggle menu" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button></div></header>
}
