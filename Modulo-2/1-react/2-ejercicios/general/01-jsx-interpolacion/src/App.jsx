import { useState } from 'react'
import './App.css'

const school = 'Rock{theCode}';
const chapters = 6;
const isAwesome = true;
const technologies = ['JavaScript', 'React', 'Node'];
const profile = {
  job: 'Web developer',
  description:
    '¡Me encanta la programación y el desarrollo web!',
};


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

      <h1>Estudio en {school}</h1>

      <p> 
        Veremos un total de {chapters} módulos de contenido 
      </p>

      <p>  
        Lo que estoy aprendiendo en <font color="green"><b>{school}</b></font> está siendo {isAwesome ? ("increible") : ("top")}
      </p>

      <ul>
        {technologies.map(technology => <div>Aprendemos a usar <b>{technology}</b></div>)}
      </ul>
      
      <h3> Quiero ser {profile.job} y {profile.description} </h3>

    </div>
  )
}

export default App
