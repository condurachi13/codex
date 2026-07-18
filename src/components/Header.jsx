import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import Brand from "./Brand";
import { sitePath } from "../paths";
import "./Header.scss";

export default function Header() {
  const [open, setOpen] = useState(false);
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

  return (
    <header className="nav-wrap">
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
        </nav>
        <a className="quote small" href={sitePath("booknow/")}>
          Book now <ArrowRight size={15} />
        </a>
        <button
          className="menu"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
