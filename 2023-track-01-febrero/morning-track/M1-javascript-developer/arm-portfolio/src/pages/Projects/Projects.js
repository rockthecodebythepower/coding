import './projects.css'

import { cleanPage } from '../../utils/cleanPage'
import { PROJECTS } from '../../data/projects'
import { Card } from '../../components/Card/Card'
import { Divider } from '../../components/Divider/Divider'
import { Detail } from '../Detail/Detail'

const main = document.querySelector('main')

export const Projects = () => {
  cleanPage(main)
  main.innerHTML = `
  <section class="projects">
    <h2>Projects</h2>
    ${Divider()}
    <div class="projects-container"></div>
  </section>
`
  const container = document.querySelector('.projects-container')
  for (const project of PROJECTS) {
    const figure = document.createElement('figure')
    figure.setAttribute("id", `project${project.id}`)
    figure.innerHTML = Card(project)
    container.appendChild(figure)
    addListenerProject(project.id)
  }
}

const addListenerProject = (id) => {
  const project = document.querySelector(`#project${id}`)
  project.addEventListener('click', () => {
    Detail(id)
  })
}


