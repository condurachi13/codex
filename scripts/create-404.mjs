import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises'

const siteUrl = 'https://condurachi13.github.io/codex'
const pageMeta = {
  '': ['Tintopia Bristol | Professional Car Window Tinting', 'Professional automotive window tinting in Bristol. Standard, ceramic and chameleon window films, plus windscreen protection.'],
  films: ['Window Films | Tintopia Bristol', 'Compare professional standard, ceramic, chameleon and windscreen protection films in Bristol.'],
  'films/standard': ['Standard Window Film | Tintopia Bristol', 'Professional standard car window tinting in Bristol for privacy, glare reduction and a factory-style finish.'],
  'films/ceramic': ['Ceramic Window Film | Tintopia Bristol', 'Premium ceramic car window tinting in Bristol with heat rejection, clarity and signal-friendly performance.'],
  'films/chameleon': ['Chameleon Window Film | Tintopia Bristol', 'Professional chameleon windscreen tint in Bristol with a distinctive colour-shifting finish and UV protection.'],
  'films/windshield': ['Windscreen Protection Film | Tintopia Bristol', 'Windscreen protection film in Bristol to help guard against chips, scratches, glare and UV exposure.'],
  services: ['Car Tinting Services | Tintopia Bristol', "Explore Tintopia Bristol's professional automotive tinting services, installation process and aftercare."],
  gallery: ['Tintopia Bristol Gallery | Car Window Tinting', 'Browse recent Tintopia Bristol automotive window tinting projects and finished vehicles.'],
  booknow: ['Book Car Window Tinting | Tintopia Bristol', 'Request a car window tinting appointment with Tintopia Bristol. Tell us about your vehicle and preferred date.'],
  contact: ['Contact Tintopia Bristol | Car Window Tinting', 'Contact Tintopia Bristol for professional automotive window tinting, advice, quotes and appointments.'],
  legal: ['Legal & Privacy | Tintopia Bristol', 'Tintopia Bristol privacy notice, website terms, data processing information and your privacy rights.'],
}

// GitHub Pages has no SPA rewrite rule. Publish an HTML document at every
// route so direct visits and refreshes receive a successful response.
const routes = [
  'films',
  'films/standard',
  'films/ceramic',
  'films/chameleon',
  'films/windshield',
  'services',
  'gallery',
  'booknow',
  'contact',
  'legal',
]

function pageHtml(html, route) {
  const [title, description] = pageMeta[route]
  const canonicalUrl = `${siteUrl}/${route ? `${route}/` : ''}`
  return html
    .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
    .replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${description}" />`)
    .replace(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${canonicalUrl}" />`)
    .replace(/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${title}" />`)
    .replace(/<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${description}" />`)
    .replace(/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${canonicalUrl}" />`)
}

const indexHtml = await readFile('dist/index.html', 'utf8')

for (const route of routes) {
  await mkdir(`dist/${route}`, { recursive: true })
  await writeFile(`dist/${route}/index.html`, pageHtml(indexHtml, route))
}

// Keep a fallback for unknown project-local paths.
await copyFile('dist/index.html', 'dist/404.html')
