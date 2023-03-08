import './card.css'


/*
* Function Card
* Params: item { image, name, github-URL, link-URL, description, tech-[]}
* Return HTML5 -> Card - Div element
*/
export const Card = (item) => `
  <div class="card">
    <img src=${item.image} alt=${item.title} />
    <div class="card-header">
      <h2>${item.title}</h2>
      <div class="card-header-links">
        <a href=${item.github}>
          <img src="/public/icons/github.png" alt="github icon" />
        </a>
        <a href=${item.link}>
          <img src="/public/icons/enlace.png" alt="link icon" />
        </a>
      </div>
    </div>
    <div class="card-detail">
      <p>${item.description}</p>
      <p class="card-detail-tech">${item.tech.join("-")}</p>
    </div>
  </div>
`