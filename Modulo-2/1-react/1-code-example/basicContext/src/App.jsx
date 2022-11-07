import { useContext } from 'react'
import './App.css'
import Component1 from './components/Component1'
import ThemeSwitcher from './components/ThemeSwitcher'
import { ThemeContext } from './context/ThemeContext'

function App() {

  const { theme } = useContext(ThemeContext)
  return (
    <div className={`App color-${theme}`}>
      <header>
        <ThemeSwitcher />
      </header>
      <div className="App">
        <Component1 />
      </div>
    </div>

  )
}

export default App
