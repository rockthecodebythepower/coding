import { setupCTA } from '../../components/cta/cta'
import { initButton } from '../../components/button/button'
import { initDetails } from '../details/details'
import './home.css'
import { initFaqs } from '../faqs/faqs'
import { initGithub } from '../../components/github/github'



export const initHome = () => {
  document.querySelector('.left').innerHTML += setupCTA('Characters', 'cta-left')
  document.querySelector('.right').innerHTML += setupCTA('Locations', 'cta-right')
  document.querySelector('#app').innerHTML += initButton({
    name: 'FAQS',
    class: 'normal',
    id: 'faq'
  })
  document.querySelector('#app').innerHTML += initGithub()
}

export const homeListeners = () => {
  document.querySelector('.left').
    addEventListener('mouseenter',
      () => document.querySelector('.container')
        .classList.add('hover-left'))
  document.querySelector('.right').
    addEventListener('mouseenter',
      () => document.querySelector('.container')
        .classList.add('hover-right'))

  document.querySelector('.left').
    addEventListener('mouseleave',
      () => document.querySelector('.container')
        .classList.remove('hover-left'))

  document.querySelector('.right').
    addEventListener('mouseleave',
      () => document.querySelector('.container')
        .classList.remove('hover-right'))

  document.querySelector('.cta-left').addEventListener('click', () => initDetails('character'))
  document.querySelector('.cta-right').addEventListener('click', () => initDetails('location'))
  document.querySelector('#faq').addEventListener('click', () => initFaqs())
}
