import './navbar.css'
import homeSvg from '/public/icons/home.svg'
import projectSvg from '/public/icons/windows-explorer.svg'
import aboutSvg from '/public/icons/about.svg'


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
          <img src="${homeSvg}" alt="Home logo" />
        </a>
      </li>
      <li>
        <a href="#" id="projectsLink"> 
          <img src="${projectSvg}" alt="Home logo" />
        </a>
      </li>
      <li>
        <a href="#" id="aboutLink"> 
          <img src="${aboutSvg}" alt="Home logo" />
        </a>
      </li>
      <li>
        <button id="themeBtn">
        ☀️
        </button>
      </li>
    </ul>
  </nav>
`