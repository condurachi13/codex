import { useEffect, useState } from "react";
import { Check, X } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import EnquiryForm from "./EnquiryForm";
import ServiceGrid from "./ServiceGrid";
import { sitePath } from "../paths";

export default function DetailPage({ page, gallery = [], showServiceGrid = false }) {
  const [title, tagline, copy, label, items] = page;
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setActiveImage(null);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <main className="subpage">
      <Header />
      <section className="subhero">
        <div className="subhero-image"></div>
        <div className="shell">
          <p className="eyebrow">Tintopia Bristol</p>
          <h1>{title}</h1>
          <p>{tagline}</p>
        </div>
      </section>
      {gallery.length > 0 && (
        <section className="shell gallery sub-gallery">
          {gallery.map((src, index) => (
            <figure key={src}>
              <button
                className="gallery-image-trigger"
                type="button"
                onClick={() => setActiveImage({ src, index })}
                aria-label={`View Tintopia project ${index + 1} full screen`}
              >
                <img src={sitePath(src)} alt={`Tintopia project ${index + 1}`} />
              </button>
            </figure>
          ))}
        </section>
      )}
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
      <section className="sub-content shell">
        {showServiceGrid ? <ServiceGrid /> : (
          <div>
            <p className="eyebrow">{label}</p>
            <p className="sub-copy">{copy}</p>
            <ul>
              {items.map((item) => (
                <li key={item}>
                  <Check size={16} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
        <EnquiryForm booking />
      </section>
      <Footer compact />
    </main>
  );
}
