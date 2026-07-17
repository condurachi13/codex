import { copyFile, mkdir } from 'node:fs/promises'

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
]

for (const route of routes) {
  await mkdir(`dist/${route}`, { recursive: true })
  await copyFile('dist/index.html', `dist/${route}/index.html`)
}

// Keep a fallback for unknown project-local paths.
await copyFile('dist/index.html', 'dist/404.html')
