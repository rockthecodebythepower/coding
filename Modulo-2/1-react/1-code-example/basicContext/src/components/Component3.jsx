import React, { useContext } from 'react'
import { UserContext } from './Component1'

const Component3 = () => {
  const user = useContext(UserContext)
  return (
    <div>
      <h2>Soy Component 3 - Hola {user}</h2>
    </div>
  )
}

export default Component3