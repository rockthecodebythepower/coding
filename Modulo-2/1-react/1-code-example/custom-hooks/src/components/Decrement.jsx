import React from 'react'
import { useCounter } from '../hooks/useCounter'

const Decrement = () => {
  const { count, handleDecrement } = useCounter(10);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleDecrement}>-</button>
    </div>
  )
}

export default Decrement