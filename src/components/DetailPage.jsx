import { Check } from 'lucide-react'
import Header from './Header'
import Footer from './Footer'
import EnquiryForm from './EnquiryForm'

export default function DetailPage({ page, gallery = [] }) {
  const [title, tagline, copy, label, items] = page
  return <main className="subpage"><Header/><section className="subhero"><div className="subhero-image"></div><div className="shell"><p className="eyebrow">Tintopia Bristol</p><h1>{title}</h1><p>{tagline}</p></div></section><section className="sub-content shell"><div><p className="eyebrow">{label}</p><h2>{title.toUpperCase()}</h2><p className="sub-copy">{copy}</p><ul>{items.map(item => <li key={item}><Check size={16}/>{item}</li>)}</ul></div><EnquiryForm/></section>{gallery.length > 0 && <section className="shell gallery sub-gallery">{gallery.concat(gallery).map((src, index) => <figure key={`${src}-${index}`}><img src={src} alt={`Tintopia project ${index + 1}`}/></figure>)}</section>}<Footer compact/></main>
}
