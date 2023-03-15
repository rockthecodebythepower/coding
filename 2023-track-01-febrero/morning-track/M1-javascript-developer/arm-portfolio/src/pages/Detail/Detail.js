import './detail.css'
import { cleanPage } from '../../utils/cleanPage'
import { Divider } from '../../components/Divider/Divider'

import { PROJECTS } from '../../data/projects'

const main = document.querySelector('main')

export const Detail = (id) => {
  cleanPage(main)
  main.innerHTML = `
  <section class="project Detail">

    <div class="project-container"></div>
  </section>
`
  console.log(id)
  const project = PROJECTS.find((detail => detail.id === id))
  console.log(project)
  const container = document.querySelector('.project-container')
  container.innerHTML += `
    <h2>${project.detail.titlePost}</h2>
    ${Divider()}
    <div class="detail-img-container"><img src=${project.detail.imagePost} alt=${project.detail.titlePost} /></div>
    <h3>${project.detail.heroPost}</h3>
    <p>${project.detail.sectionPost}</p>
  `
}
