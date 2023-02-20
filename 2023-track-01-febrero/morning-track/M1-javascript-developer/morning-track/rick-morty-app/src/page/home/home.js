import { setupCTA } from '../../components/cta/cta'
import { initCharacters } from '../Characters/characters'
import { initLocations } from '../Locations/locations'
import './home.css'



export const initHome = () => {
  document.querySelector('.left').innerHTML += setupCTA('Characters', 'cta-left')
  document.querySelector('.right').innerHTML += setupCTA('Locations', 'cta-right')
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

  document.querySelector('.cta-left').addEventListener('click', () => initCharacters())
  document.querySelector('.cta-right').addEventListener('click', () => initLocations())
}