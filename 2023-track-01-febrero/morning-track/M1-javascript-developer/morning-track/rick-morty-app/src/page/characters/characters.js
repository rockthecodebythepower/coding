import './characters.css'

export const initCharacters = () => {
  retrieveAllCharacters()
}

const retrieveAllCharacters = async () => {
  try {
    const responsePromise = await fetch('https://rickandmortyapi.com/api/character')
    const responseToJson = await responsePromise.json()
    transformData(responseToJson)
  } catch (error) {
    console.log(error)
  }
}

const transformData = (response) => {
  let dataTransformed = response.results.map((data) => {
    return {
      name: data.name,
      image: data.image
    }
  })
  insertData(dataTransformed)
}

const insertData = (data) => {
  document.querySelector('#app').innerHTML = ''
  data.forEach(element => {
    const printed = `
      <div>
        <h3>${element.name}</h3>    
      </div>
    `
    document.querySelector('#app').innerHTML += printed
  });

}
