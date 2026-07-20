import { Phone } from "lucide-react";
import Brand from "./Brand";
import "./Footer.scss";
import { sitePath } from "../paths";

export default function Footer({ compact = false }) {
  if (compact)
    return (
      <footer>
        <div className="copyright shell">
          © 2026 Tintopia Bristol. Automotive window tinting. <a href={sitePath("legal/")}>Legal &amp; Privacy</a>
        </div>
      </footer>
    );
  return (
    <footer>
      <div className="shell footer-grid">
        <div className="brand-footer">
          <Brand />
          <p>Professional automotive window tinting for Bristol drivers.</p>
          <div className="social" aria-label="Follow Tintopia Bristol">
            <a href="https://www.instagram.com/tintopia.bristol" target="_blank" rel="noreferrer" aria-label="Follow us on Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7.72 2h8.56A5.72 5.72 0 0 1 22 7.72v8.56A5.72 5.72 0 0 1 16.28 22H7.72A5.72 5.72 0 0 1 2 16.28V7.72A5.72 5.72 0 0 1 7.72 2Zm-.19 2A3.53 3.53 0 0 0 4 7.53v8.94A3.53 3.53 0 0 0 7.53 20h8.94A3.53 3.53 0 0 0 20 16.47V7.53A3.53 3.53 0 0 0 16.47 4H7.53Zm9.93 1.5a1.31 1.31 0 1 1 0 2.62 1.31 1.31 0 0 1 0-2.62ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" fill="currentColor" />
              </svg>
            </a>
            <a href="https://www.tiktok.com/@tintopia.bristol?_r=1&_t=ZN-98BztGPw34I" target="_blank" rel="noreferrer" aria-label="Follow us on TikTok">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M16.6 5.82a4.83 4.83 0 0 1-2.08-2.94h-3.16v12.85a2.7 2.7 0 1 1-2.7-2.7c.28 0 .56.04.82.13v-3.22a5.93 5.93 0 1 0 5.05 5.87V9.28a7.97 7.97 0 0 0 4.67 1.5V7.65a4.8 4.8 0 0 1-2.6-1.83Z" fill="currentColor" />
              </svg>
            </a>
            <a href="https://www.facebook.com/share/1JGvh4nxGT/" target="_blank" rel="noreferrer" aria-label="Follow us on Facebook">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M13.5 21v-8h2.75l.41-3h-3.16V8.08c0-.87.25-1.47 1.54-1.47H16.7V3.93c-.29-.04-1.27-.12-2.42-.12-2.4 0-4.04 1.46-4.04 4.15V10H7.5v3h2.74v8h3.26Z" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>
        <div>
          <h4>Explore</h4>
          <a href={sitePath("films/")}>Window films</a>
          <a href={sitePath("services/")}>Services</a>
          <a href={sitePath("gallery/")}>Gallery</a>
          <a href={sitePath("contact/")}>Contact</a>
          <a href={sitePath("legal/")}>Legal &amp; Privacy</a>
        </div>
        <div className="workshop">
          <h4>Workshop</h4>
          <p>Unit 4, Green Tree Farm, Roman Rd, Emerson’s green, Pucklechurch, Bristol BS16 7NT</p>
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
        © 2026 Tintopia Bristol. All rights reserved. <a href={sitePath("legal/")}>Legal &amp; Privacy</a>
      </div>
    </footer>
  );
}
