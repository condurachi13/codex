import { useEffect, useRef, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import Brand from "./Brand";
import { sitePath } from "../paths";
import "./Header.scss";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const close = () => setOpen(false);
  const base = import.meta.env.BASE_URL;
  const currentPath = window.location.pathname.endsWith("/")
    ? window.location.pathname
    : `${window.location.pathname}/`;
  const isCurrent = (path, includesChildren = false) => {
    const target = sitePath(path);
    return includesChildren
      ? currentPath.startsWith(target)
      : currentPath === target;
  };

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDifference = currentScrollY - lastScrollY.current;

      if (currentScrollY <= 10) {
        setVisible(true);
      } else if (scrollDifference > 0) {
        setVisible(false);
        setOpen(false);
      } else if (scrollDifference < 0) {
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={visible ? "nav-wrap" : "nav-wrap header-hidden"}>
      <div className="nav shell">
        <Brand />
        <nav className={open ? "nav-links active" : "nav-links"}>
          <a
            className={isCurrent() ? "current" : undefined}
            onClick={close}
            href={base}
          >
            Home
          </a>
          <a
            className={isCurrent("films/", true) ? "current" : undefined}
            onClick={close}
            href={sitePath("films/")}
          >
            Window films
          </a>
          <a
            className={isCurrent("services/") ? "current" : undefined}
            onClick={close}
            href={sitePath("services/")}
          >
            Services
          </a>
          <a
            className={isCurrent("gallery/") ? "current" : undefined}
            onClick={close}
            href={sitePath("gallery/")}
          >
            Gallery
          </a>
          <a
            className={isCurrent("faq/") ? "current" : undefined}
            onClick={close}
            href={sitePath("faq/")}
          >
            FAQ
          </a>
          <a
            className="mobile-quote"
            onClick={close}
            href={sitePath("booknow/")}
          >
            Book now <ArrowRight size={15} />
          </a>
        </nav>
        <a className="quote small" href={sitePath("booknow/")}>
          Book now <ArrowRight size={15} />
        </a>
        <button
          className={open ? "menu menu-open" : "menu"}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <Menu className="menu-icon" />
          <X className="menu-icon menu-close" />
        </button>
      </div>
    </header>
  );
}
