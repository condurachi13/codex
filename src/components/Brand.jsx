import "./Brand.scss";
import { sitePath } from "../paths";

export default function Brand() {
  return (
    <a className="brand" href={sitePath()} aria-label="Tintopia Bristol home">
      <img className="brand-logo" src={`${import.meta.env.BASE_URL}assets/tintopia-logo.svg`} alt="" />
      <span>
        TINTOPIA<em>BRISTOL</em>
      </span>
    </a>
  );
}
