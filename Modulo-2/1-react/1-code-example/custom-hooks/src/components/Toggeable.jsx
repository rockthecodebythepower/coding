import React from 'react'

import useToggle from '../hooks/useToggle'

const Toggeable = () => {
  const [toggleState, handleToggle] = useToggle();

  return (
    <div>
      <h3>Toggle: {toggleState.toString()}</h3>
      <button onClick={handleToggle}>Toggle</button>
    </div>
  )
}

export default Toggeable