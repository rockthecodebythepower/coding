import './about.css'
import { cleanPage } from '../../utils/cleanPage'

const main = document.querySelector('main')

export const About = () => {
  cleanPage(main)
  main.innerHTML = `
  <article class="wwdc">
  <span class="spin">
    <div class="large circle one"></div>
    <div class="large circle two"></div>
    <div class="large circle three"></div>
    <div class="large circle four"></div>
    <div class="large circle five"></div>
    <div class="large circle six"></div>
    <div class="large circle seven"></div>
    <div class="large circle eight"></div>
  </span>
  <span class="pulse">
    <div class="small circle one"></div>
    <div class="small squircle two"></div>
    <div class="small circle three"></div>
    <div class="small squircle four"></div>
    <div class="small circle five"></div>
    <div class="small squircle six"></div>
    <div class="small circle seven"></div>
    <div class="small squircle eight"></div>
  </span>
    <span class="spin-reverse">
      <div class="large squircle one"></div>
    </span>
    <div class="large squircle two">
      <div class="content">
      <h1>Alberto | Developer</h1>
      <p><strong>Github</strong> aRiveraMerida</p>
    </div>
  </div>
</article>
`
}
