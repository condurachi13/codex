import { Camera, Globe2, Phone } from "lucide-react";
import Brand from "./Brand";
import "./Footer.scss";
import { sitePath } from "../paths";

export default function Footer({ compact = false }) {
  if (compact)
    return (
      <footer>
        <div className="copyright shell">
          © 2026 Tintopia Bristol. Automotive window tinting.
        </div>
      </footer>
    );
  return (
    <footer>
      <div className="shell footer-grid">
        <div className="brand-footer">
          <Brand />
          <p>Professional automotive window tinting for Bristol drivers.</p>
          <div className="social">
            <a href={sitePath()} aria-label="Instagram">
              <Camera />
            </a>
            <a href={sitePath()} aria-label="Website">
              <Globe2 />
            </a>
          </div>
        </div>
        <div>
          <h4>Explore</h4>
          <a href={sitePath("films/")}>Window films</a>
          <a href={sitePath("services/")}>Services</a>
          <a href={sitePath("gallery/")}>Gallery</a>
          <a href={sitePath("contact/")}>Contact</a>
        </div>
        <div className="workshop">
          <h4>Workshop</h4>
          <p>Unit 4, Green Tree Farm</p>
          <p>Roman Road, Emersons Green</p>
          <p>Bristol BS16 7NT</p>
        </div>
        <div>
          <h4>Let’s talk</h4>
          <a className="contact-link" href="tel:+447392010907">
            <Phone /> 07392 010907
          </a>
          <a className="contact-link" href="mailto:tintopiabristol@gmail.com">
            tintopiabristol@gmail.com
          </a>
        </div>
      </div>
      <div className="copyright shell">
        © 2026 Tintopia Bristol. All rights reserved.
      </div>
    </footer>
  );
}
