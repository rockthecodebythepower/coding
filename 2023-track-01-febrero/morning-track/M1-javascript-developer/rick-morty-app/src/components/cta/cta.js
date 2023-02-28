import './cta.css'

export const setupCTA = (title, variant) => `
  <h1 class="cta-title">${title}</h1>
  <a href="#" class="cta ${variant}">More</a>
`