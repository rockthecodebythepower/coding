import { initCard } from '../../components/card/card'
import { initButton } from '../../components/button/button'
import './details.css'
import { createHome } from '../../../main'

// crear un botón y cuando haga click +1 en el index
let indexPage = 1;

export const initDetails = (type) => {
  retrieveAllData(type)
}

const retrieveAllData = async (type) => {
  try {
    const responsePromise = await fetch(`https://rickandmortyapi.com/api/${type}?page=${indexPage}`)
    const responseToJson = await responsePromise.json()
    type === 'character' ? transformDataCharacter(responseToJson, type) : transformDataLocation(responseToJson, type)
  } catch (error) {
    console.log(error)
  }
}

const transformDataCharacter = (response, type) => {
  let dataTransformed = response.results.map((data) => {
    return {
      name: data.name,
      image: data.image,
      species: data.species,
      status: data.status
    }
  })
  insertData(dataTransformed, type)
}

const transformDataLocation = (response, type) => {
  let dataTransformed = response.results.map((data) => {
    return {
      name: data.name,
      image: 'https://media.giphy.com/media/RdizsB3uw9Af57YnAQ/giphy.gif',
      type: data.type,
      dimension: data.dimension
    }
  })
  insertData(dataTransformed, type)
}

const insertData = (data, type) => {
  let characterContainer = document.createElement('div')
  // let title = document.createElement('h1')
  // title.innerHTML = type

  characterContainer.classList.add('character-container')
  document.querySelector('#app').innerHTML = ''
  // document.querySelector('#app').append(title)
  document.querySelector('#app').append(characterContainer)


  data.forEach(element => {
    const printed = initCard(element, type)
    characterContainer.innerHTML += printed
  })

  document.querySelector('#app').innerHTML += initButton({
    name: '🚀',
    class: 'rounded',
    id: 'homeButton'
  })

  buttonListener()
}

export const buttonListener = () => {
  document.querySelector('#homeButton').
    addEventListener('click',
      () => createHome())
}