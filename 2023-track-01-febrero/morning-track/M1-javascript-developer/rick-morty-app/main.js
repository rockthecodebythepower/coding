import { homeListeners, initHome } from './src/page/Home/home'
import './style.css'

export const createHome = () => {
  document.querySelector('#app').innerHTML = `
    <div class="container">
      <div class="split left"></div>
      <div class="split right"></div>
    </div>
  `
  initHome()
  homeListeners()
}

createHome()