import {
  ArrowRight,
  Check,
  ChevronRight,
  ShieldCheck,
  Sun,
  Thermometer,
  Zap,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GoogleReviews from "../components/GoogleReviews";
import { galleryImages } from "./pageData";
import { sitePath } from "../paths";
import ServiceGrid from "../components/ServiceGrid";

export default function Home() {
  return (
    <main id="top">
      <Header />
      <section className="hero">
        <div className="hero-image"></div>
        <div className="hero-glow"></div>
        <div className="shell hero-content">
          <p className="eyebrow">
            Professional automotive tinting <span></span>
          </p>
          <h1>
            STYLE. COMFORT.
            <br />
            <strong>PROTECTION.</strong>
          </h1>
          <p className="lead">
            Precision installation with premium Global Window Films for a
            cooler, more private and better protected drive.
          </p>
          <div className="actions">
            <a className="quote" href={sitePath("booknow/")}>
              Book now <ArrowRight size={16} />
            </a>
            <a className="outline" href={sitePath("films/")}>
              Explore films <ChevronRight size={16} />
            </a>
          </div>
          <div className="hero-perks">
            <span>
              <Sun /> UV protection
            </span>
            <span>
              <Thermometer /> Heat rejection
            </span>
            <span>
              <ShieldCheck /> Private by design
            </span>
          </div>
        </div>
        <div className="scroll-note">
          SCROLL TO DISCOVER <i></i>
        </div>
      </section>
      <section className="services section shell">
        <div className="section-intro">
          <p className="eyebrow">Window films</p>
          <h2>
            TINTING, PERFECTED
            <br />
            FOR EVERY DRIVE.
          </h2>
          <p>
            Choose the finish and performance level that suits your vehicle and
            your lifestyle.
          </p>
          <a href={sitePath("films/")}>
            Explore our films <ArrowRight />
          </a>
        </div>
        <ServiceGrid />
      </section>
      <section className="statement">
        <div className="statement-photo"></div>
        <div className="statement-copy">
          <p className="eyebrow">The Tintopia Bristol standard</p>
          <h2>
            QUALITY YOU CAN SEE.
            <br />
            COMFORT YOU CAN FEEL.
          </h2>
          <p>
            Premium Global Window Films, carefully selected shades and a
            precision-led install give your vehicle a crisp finish that performs
            day after day.
          </p>
          <ul>
            {[
              "UV protection and privacy",
              "Reduced glare and cabin heat",
              "Clear signal-friendly ceramic option",
              "Expert advice on shades and finish",
            ].map((item) => (
              <li key={item}>
                <Check size={15} />
                {item}
              </li>
            ))}
          </ul>
          <a className="text-link" href={sitePath("services/")}>
            Our services <ArrowRight size={17} />
          </a>
        </div>
      </section>
      <section className="work section shell">
        <div className="work-heading">
          <div>
            <p className="eyebrow">Recent work</p>
            <h2>
              THE DETAILS MAKE
              <br />
              THE DIFFERENCE.
            </h2>
          </div>
          <a className="outline" href={sitePath("gallery/")}>
            View gallery <ArrowRight size={16} />
          </a>
        </div>
        <div className="gallery">
          {galleryImages.map((src, index) => (
            <figure key={src}>
              <img src={src} alt={`Tintopia tinting project ${index + 1}`} />
              <figcaption>
                Project 0{index + 1}
                <ArrowRight size={16} />
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
      <section className="cta">
        <div className="shell cta-inner">
          <span className="cta-icon">
            <Zap />
          </span>
          <div>
            <p className="eyebrow">Make it yours</p>
            <h2>READY TO REDEFINE YOUR RIDE?</h2>
            <p>Book your Tintopia Bristol consultation today.</p>
          </div>
          <a className="quote" href={sitePath("booknow/")}>
            Book now <ArrowRight size={16} />
          </a>
        </div>
      </section>
      <GoogleReviews />
      <Footer />
    </main>
  );
}
