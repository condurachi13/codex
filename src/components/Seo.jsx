import { useEffect } from "react";

const siteUrl = "https://condurachi13.github.io/codex";

const pages = {
  "/": {
    title: "Tintopia Bristol | Professional Car Window Tinting",
    description: "Professional automotive window tinting in Bristol. Explore standard, ceramic and chameleon window films, plus windscreen protection.",
  },
  "/films/": { title: "Window Films | Tintopia Bristol", description: "Compare professional standard, ceramic, chameleon and windscreen protection films in Bristol." },
  "/films/standard/": { title: "Standard Window Film | Tintopia Bristol", description: "Professional standard car window tinting in Bristol for privacy, glare reduction and a factory-style finish." },
  "/films/ceramic/": { title: "Ceramic Window Film | Tintopia Bristol", description: "Premium ceramic car window tinting in Bristol with heat rejection, clarity and signal-friendly performance." },
  "/films/chameleon/": { title: "Chameleon Window Film | Tintopia Bristol", description: "Professional chameleon windscreen tint in Bristol with a distinctive colour-shifting finish and UV protection." },
  "/films/windshield/": { title: "Windscreen Protection Film | Tintopia Bristol", description: "Windscreen protection film in Bristol to help guard against chips, scratches, glare and UV exposure." },
  "/services/": { title: "Car Tinting Services | Tintopia Bristol", description: "Explore Tintopia Bristol's professional automotive tinting services, installation process and aftercare." },
  "/gallery/": { title: "Tintopia Bristol Gallery | Car Window Tinting", description: "Browse recent Tintopia Bristol automotive window tinting projects and finished vehicles." },
  "/booknow/": { title: "Book Car Window Tinting | Tintopia Bristol", description: "Request a car window tinting appointment with Tintopia Bristol. Tell us about your vehicle and preferred date." },
  "/contact/": { title: "Contact Tintopia Bristol | Car Window Tinting", description: "Contact Tintopia Bristol for professional automotive window tinting, advice, quotes and appointments." },
  "/legal/": { title: "Legal & Privacy | Tintopia Bristol", description: "Tintopia Bristol privacy notice, website terms, data processing information and your privacy rights." },
  "/faq/": { title: "Window Tint FAQ & UK Rules | Tintopia Bristol", description: "Answers to common questions about car window tinting and the UK legal limits for front and rear vehicle windows." },
};

function normalisePath(pathname) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const path = pathname.startsWith(base) ? pathname.slice(base.length) || "/" : pathname;
  return path.endsWith("/") ? path : `${path}/`;
}

export default function Seo() {
  useEffect(() => {
    const path = normalisePath(window.location.pathname);
    const page = pages[path] ?? pages["/"];
    const canonicalUrl = `${siteUrl}${path}`;

    document.title = page.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", page.description);
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", canonicalUrl);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", page.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", page.description);
    document.querySelector('meta[property="og:url"]')?.setAttribute("content", canonicalUrl);

    const existingSchema = document.querySelector('script[data-seo-schema]');
    if (existingSchema) existingSchema.remove();
    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.dataset.seoSchema = "true";
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "AutomotiveBusiness",
      name: "Tintopia Bristol",
      url: siteUrl,
      image: `${siteUrl}/assets/tintopia-hero.jpg`,
      telephone: "+447392010907",
      email: "tintopiabristol@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Unit 4, Green Tree Farm, Roman Road, Emersons Green",
        addressLocality: "Bristol",
        postalCode: "BS16 7NT",
        addressCountry: "GB",
      },
      areaServed: "Bristol",
      description: "Professional automotive window tinting, ceramic films, chameleon films and windscreen protection in Bristol.",
    });
    document.head.appendChild(schema);
  }, []);

  return null;
}
