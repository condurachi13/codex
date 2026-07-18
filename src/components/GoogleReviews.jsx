import { ExternalLink, Star } from 'lucide-react'
import './GoogleReviews.scss'

const reviewsUrl = 'https://www.google.com/search?num=10&hl=en-RO&output=search&tbm=lcl&kgmid=/g/11mzpl0005&q=Tintopia+Bristol#lkt=LocalPoiReviews'

const reviews = [
  {
    name: 'CONFUZ OFFICIAL',
    date: '5 months ago',
    initials: 'C',
    text: 'Just had my car back windows tinted by these absolute legends and I’m blown away! The difference is night and day — it looks sleek, professional, and far more discreet now. The team were spot on from start to finish, and the installation was flawless.',
  },
  {
    name: 'Leonard Dautaru',
    date: '4 weeks ago',
    initials: 'L',
    text: 'I recently had my car tinted at Tintopia Bristol and I’m genuinely very happy with the result. The work was done to a really high standard and the finish looks excellent. They took the time to explain everything clearly and made sure I understood the process.',
  },
  {
    name: 'Bogdan Vornicu',
    date: 'a month ago',
    initials: 'B',
    text: 'Absolutely amazing job by Sergiu! The window tint completely transformed my car and changed its look for the better. His attention to detail, professionalism, and quality of work were outstanding. The finish is flawless — highly recommended.',
  },
]

export default function GoogleReviews() {
  return <section className="reviews-section">
    <div className="shell">
      <div className="reviews-heading">
        <div><p className="eyebrow">Google reviews</p><h2>TRUSTED BY<br/>BRISTOL DRIVERS.</h2></div>
        <a href={reviewsUrl} target="_blank" rel="noreferrer">Read all reviews <ExternalLink size={16}/></a>
      </div>
      <div className="reviews-grid">
        {reviews.map(review => <article className="review-card" key={review.name}>
          <div className="review-card-top"><span className="review-avatar">{review.initials}</span><div><h3>{review.name}</h3><p>Google review · {review.date}</p></div></div>
          <div className="review-stars" aria-label="5 out of 5 stars">{Array.from({ length: 5 }, (_, index) => <Star key={index} size={16} fill="currentColor"/>)}</div>
          <blockquote>“{review.text}”</blockquote>
        </article>)}
      </div>
    </div>
  </section>
}
