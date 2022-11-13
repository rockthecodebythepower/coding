
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <h2>Home Page</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, iure rerum, architecto quas neque sit similique est dolorem, possimus recusandae adipisci deleniti dolorum vel quo hic incidunt quaerat facere fuga!
      </p>

      <p>
        <span>Visita la página de héroes 🦸🏻‍♂️</span>
        <Link to="heroes">Heroes</Link>
      </p>

    </>
  )
}

export default Home