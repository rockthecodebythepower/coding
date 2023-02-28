import { initCard } from '../../components/card/card'
import './details.css'

export const initDetails = (type) => {
  retrieveAllData(type)
}

const retrieveAllData = async (type) => {
  try {
    const responsePromise = await fetch(`https://rickandmortyapi.com/api/${type}`)
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
      image: 'https://static.posters.cz/image/1300/art-photo/rick-morty-planet-i112357.jpg',
      type: data.type,
      dimension: data.dimension
    }
  })
  insertData(dataTransformed, type)
}

const insertData = (data, type) => {
  let characterContainer = document.createElement('div')
  characterContainer.classList.add('character-container')
  document.querySelector('#app').innerHTML = ''
  document.querySelector('#app').append(characterContainer)

  data.forEach(element => {
    const printed = initCard(element, type)
    characterContainer.innerHTML += printed
  });

}
