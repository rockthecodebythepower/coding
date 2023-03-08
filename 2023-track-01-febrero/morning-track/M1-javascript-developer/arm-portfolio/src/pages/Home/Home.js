import './home.css'

import { cleanPage } from '../../utils/cleanPage'

export const Home = () => {
  const main = document.querySelector('main')
  cleanPage(main)
  main.innerHTML = initHome()
}

const initHome = () => `
  <section class="home">
    <p>Hey I'm</p>
    <h1 class="home-title">Alberto Rivera</h1>
    <p>I'm software engineer <span role="img">💻</span>  based in Madrid, Spain and Always enjoying new features and tools. Toy collector <span role="img">🦄</span> , fan of Rayo Vallecano <span role="img">🚀</span> and proud father <span role="img">👼👼</span></p>
    <a href="mailto:alberto@rockthecode.com"> Say hi →</a>
  </section>
`