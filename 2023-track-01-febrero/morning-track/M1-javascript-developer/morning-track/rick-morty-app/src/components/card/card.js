import './card.css'

export const initCard = (data, type) => {
  return `      
  <div class="card">
    <h3 class="card-title">${data.name}</h3>
    <div class="card-image-container">
      <img src="${data.image}" alt=${data.name}/> 
    </div>
    <div class="card-description">
      <p>${type === 'character' ? data.species : data.type}</p>
      <p>${type === 'character' ? data.status : data.dimension}</p>
    </div>
  </div>`
}