import './navbar.css'

export const changeTheme = () => {
  const themeBtn = document.querySelector('#themeBtn')
  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light')
    changeLogoTheme()
  })
}

export const changeLogoTheme = () => {
  const themeBtn = document.querySelector('#themeBtn')
  if (themeBtn.innerText === '☀️') {
    themeBtn.innerText = '🌑'
  } else {
    themeBtn.innerText = '☀️'
  }
}

export const Navbar = () => `
  <nav>
    <ul>
      <li>
        <a href="#" id="homeLink"> 
          Go! 🚀
        </a>
      </li>
      <li>
        <a href="#" id="projectsLink"> Projects 💽 </a>
      </li>
      <li>
        <a href="#" id="aboutLink"> About 🧙🏽‍♂️ </a>
      </li>
      <li>
        <button id="themeBtn">☀️</button>
      </li>
    </ul>
  </nav>
`