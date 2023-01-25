import './style.css'

import { printHtml } from '../One/OneComponent'


export const createTemplate = () => {
  document.querySelector('#app').innerHTML = `
  <div class="container">
  <div class="split left">
    <h1>one</h1>
    <button id="two" class="btn">Know more...</button>
  </div>
  <div class="split right">
    <h1>Two</h1>
    <button id="one" class="btn">Know more...</button>
  </div>
  </div>
`
  addListerners()
}

const addListerners = () => {
  const left = document.querySelector('.left')
  const right = document.querySelector('.right')
  const container = document.querySelector('.container')
  const buttonTwo = document.querySelector('#two')
  const buttonOne = document.querySelector('#one')

  left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
  left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))

  right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
  right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))

  buttonTwo.addEventListener('click', () => console.log('call component Two'))
  buttonOne.addEventListener('click', () => printHtml())
}
