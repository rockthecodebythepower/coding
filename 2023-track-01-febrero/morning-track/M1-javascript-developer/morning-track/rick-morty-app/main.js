import { homeListeners, initHome } from './src/page/Home/home'
import './style.css'

const createHome = () => {
  document.querySelector('#app').innerHTML = `
    <div class="container">
      <div class="split left"></div>
      <div class="split right"></div>
    </div>
  `
  initHome()
  homeListeners()
}

//TODO: Colocar FAQ a nivel del main para tenerlo siempre accesible

createHome()