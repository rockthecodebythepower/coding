export const initLocations = () => {
  retrieveAllLocations()
}

const retrieveAllLocations = async () => {
  try {
    const responsePromise = await fetch('https://rickandmortyapi.com/api/location')
    const responseToJson = await responsePromise.json()
    console.log(responseToJson)
  } catch (error) {
    console.log(error)
  }
}