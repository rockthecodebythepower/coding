import './App.css'
import Decrement from './components/Decrement'
import Increment from './components/Increment'
import Toggeable from './components/Toggeable'

import useWindowSize from './hooks/useWindowSize'

import { useState, useEffect } from "react";

function App() {
  const [state, setState] = useState(false);
  const { widht, height } = useWindowSize();

  useEffect(() => {
    console.log('Me muevo', widht)
  }, [widht, height])

  return (
    <div className="App">
      <Increment />
      <Decrement />
      <Toggeable />
      <button onClick={() => { setState(!state) }}>Change State</button>

      <div>
        <h1>Window Size:</h1>
        <h3>widht: {widht}</h3>
        <h3>height:{height}</h3>
      </div>
    </div>
  )
}

export default App
