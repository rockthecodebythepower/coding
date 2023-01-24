import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [text, setText] = useState('')
  const handleInput = (e) => setText(e.target.value)

  return (
    <div className="App">

      <img data-testid="giphy" src="https://media.giphy.com/media/CuuSHzuc0O166MRfjt/giphy.gif" alt="giphy" />
      <div>
        <input type="text" onChange={handleInput} placeholder="Type your name" />
        <h1>Hello, {text}</h1>
      </div>
    </div>
  )
}

export default App
