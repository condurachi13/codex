const base = import.meta.env.BASE_URL

/** Creates a URL that stays inside this GitHub Pages project. */
export const sitePath = (path = '') => `${base}${path}`
