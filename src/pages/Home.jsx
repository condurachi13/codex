import {
  ArrowRight,
  Check,
  ChevronRight,
  ShieldCheck,
  Sun,
  Thermometer,
  Zap,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GoogleReviews from "../components/GoogleReviews";
import { homeGalleryImages } from "./pageData";
import { sitePath } from "../paths";
import ServiceGrid from "../components/ServiceGrid";

export default function Home() {
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setActiveImage(null);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

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
            {homeGalleryImages.map((src, index) => (
              <figure key={src}>
                <button
                  className="gallery-image-trigger"
                  type="button"
                  onClick={() => setActiveImage({ src, index })}
                  aria-label={`View Tintopia project ${index + 1} full screen`}
                >
                  <img src={sitePath(src)} alt={`Tintopia tinting project ${index + 1}`} />
                </button>
                <figcaption>
                  Project 0{index + 1}
                  <ArrowRight size={16} />
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      {activeImage && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Tintopia project ${activeImage.index + 1}`}
          onClick={(event) => {
            if (event.target === event.currentTarget) setActiveImage(null);
          }}
        >
          <button className="gallery-lightbox-close" type="button" onClick={() => setActiveImage(null)} aria-label="Close full screen image">
            <X />
          </button>
          <img src={sitePath(activeImage.src)} alt={`Tintopia project ${activeImage.index + 1}`} />
        </div>
      )}
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
      <section className="tint-shades shell" aria-label="Window tint shade guide">
        <img
          src={sitePath("assets/tintopia-bristol-car-foil-shades.jpeg")}
          alt="Window tint shade guide showing 5%, 20%, 50%, 70%, and 86% tint levels on a car"
        />
      </section>
      <GoogleReviews />
      <section className="location-map" aria-label="Tintopia Bristol location">
        <iframe
          title="Tintopia Bristol location"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4967.919511399873!2d-2.456317!3d51.495606!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48719b112d422c7b%3A0x4c7d9edff6c54df7!2sTintopia%20Bristol!5e0!3m2!1sen!2sro!4v1783709310234!5m2!1sen!2sro"
          width="100%"
          height="450"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </section>
      <Footer />
    </main>
  );
}
