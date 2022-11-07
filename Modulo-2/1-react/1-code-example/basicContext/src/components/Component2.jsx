import React from 'react'
import Component3 from './Component3'

const Component2 = () => {
  return (
    <div>
      <h2>Soy el Componente 2 y no uso el state</h2>
      <Component3 />
    </div>
  )
}

export default Component2