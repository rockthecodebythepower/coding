const template = () => `
  <nav>
    <a href="/" data-link>Home 🏠</a>
    <a id="portfolio" href="/portfolio" data-link>Portfolio 📚</a>
    <a href="/about" data-link>About 🧑🏽‍💻</a>
  </nav>
`

export const addNavbar = () => {
  document.querySelector('#header').innerHTML = template();
}