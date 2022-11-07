import { useState } from "react";

const useCounter = (initalCount) => {
  const [count, setCount] = useState(initalCount);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1)
  }

  const handleDecrement = () => {
    setCount((prevCount) => Math.max(0, prevCount - 1))
  }

  return { count, handleIncrement, handleDecrement }
}

export { useCounter };