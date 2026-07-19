import { ArrowRight } from "lucide-react";
import { sitePath } from "../paths";

const services = [
  ["01", "Standard film", "A clean, factory-style finish with everyday privacy and UV protection.", "sedan", "films/standard/"],
  ["02", "Ceramic film", "Premium heat rejection and clear connectivity with no signal interference.", "suv", "films/ceramic/"],
  ["03", "Chameleon film", "Advanced protection with a distinctive colour-shifting finish.", "building", "films/chameleon/"],
  ["04", "Windshield protection film", "A protective layer against glare, UV and everyday road debris.", "shield", "films/windshield/"],
];

export default function ServiceGrid() {
  return (
    <div className="service-grid">
      {services.map(([number, title, copy, icon, path]) => (
        <article className="service-card" key={title}>
          <div className={`service-icon ${icon}`}><span /></div>
          <small>{number}</small>
          <h3>{title}</h3>
          <p>{copy}</p>
          <a href={sitePath(path)} aria-label={`View ${title}`}>
            <ArrowRight size={18} />
          </a>
        </article>
      ))}
    </div>
  );
}
