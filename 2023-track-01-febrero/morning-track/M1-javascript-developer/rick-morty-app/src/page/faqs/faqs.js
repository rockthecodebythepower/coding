import { createHome } from '../../../main'
import { initButton } from '../../components/button/button'
import './faqs.css'

export const initFaqs = () => {
  const container = document.querySelector('#app')
  container.innerHTML = faqsContent()
  document.querySelector('#app').innerHTML += initButton({
    name: '🚀',
    class: 'rounded',
    id: 'homeButton'
  })

  buttonListener()
  faqListener()
}

const faqsContent = () => `
  <div class="faq-container">
    <h1 class="faq-page-title">Preguntas frecuentes</h1>
    <div class="faq active">
      <h3 class="faq-title">
        ¿Qué enfermedad tiene Morty?
      </h3>
      <p class="faq-text">
      Rick le hace pensar que Morty está muriendo de una enfermedad renal fatal, por lo que Snuffles no le cuesta gastar tratando de curar a Morty.
      </p>
      <button class ="faq-toggle">
        <i class="fa fa-open">🧪</i>
        <i class="fa fa-close">🔒</i>
      </button>
    </div>
    <div class="faq">
      <h3 class="faq-title">
      ¿Quién es el mejor amigo de Rick Sánchez?
      </h3>
      <p class="faq-text">
        PERSONA PÁJARO Combina partes iguales de Hawkman y Birdman e incluye todos los estereotipos de los nativos americanos que puedas imaginar: es el mejor amigo de Rick, Persona Pájaro.
      </p>
      <button class ="faq-toggle">
      <i class="fa fa-open">🧪</i>
      <i class="fa fa-close">🔒</i>
    </button>
    </div>
    <div class="faq">
      <h3 class="faq-title">
      ¿Quién es el mejor amigo de Rick Sánchez?
      </h3>
      <p class="faq-text">
        PERSONA PÁJARO Combina partes iguales de Hawkman y Birdman e incluye todos los estereotipos de los nativos americanos que puedas imaginar: es el mejor amigo de Rick, Persona Pájaro.
      </p>
      <button class ="faq-toggle">
      <i class="fa fa-open">🧪</i>
      <i class="fa fa-close">🔒</i>
    </button>
    </div>
    <div class="faq">
      <h3 class="faq-title">
      ¿Quién es el mejor amigo de Rick Sánchez?
      </h3>
      <p class="faq-text">
        PERSONA PÁJARO Combina partes iguales de Hawkman y Birdman e incluye todos los estereotipos de los nativos americanos que puedas imaginar: es el mejor amigo de Rick, Persona Pájaro.
      </p>
      <button class ="faq-toggle">
      <i class="fa fa-open">🧪</i>
      <i class="fa fa-close">🔒</i>
    </button>
    </div>
    <div class="faq">
      <h3 class="faq-title">
      ¿Quién es el mejor amigo de Rick Sánchez?
      </h3>
      <p class="faq-text">
        PERSONA PÁJARO Combina partes iguales de Hawkman y Birdman e incluye todos los estereotipos de los nativos americanos que puedas imaginar: es el mejor amigo de Rick, Persona Pájaro.
      </p>
      <button class ="faq-toggle">
      <i class="fa fa-open">🧪</i>
      <i class="fa fa-close">🔒</i>
    </button>
    </div>
  </div>
`
export const buttonListener = () => {
  document.querySelector('#homeButton').
    addEventListener('click',
      () => createHome())
}

const faqListener = () => {
  const toggles = document.querySelectorAll('.faq-toggle')
  toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      toggle.parentNode.classList.toggle('active')
    })
  })
}
