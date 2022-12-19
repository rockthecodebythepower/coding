import { ThemeProvider } from '@emotion/react'
import { themeDark, themeLight } from './styles/theme'

import GlobalStyles from './styles/globalStyles'

import { useState } from 'react'
import Button from './components/Button'
import UiDivider from './styles/components/UiDivider'
import UiTitle from './styles/components/UiTilte'



const App = () => {

  const [themeProvide, setThemeProvide] = useState(themeDark)

  const toggleTheme = () => {
    setThemeProvide(themeProvide === themeLight ? themeDark : themeLight)
  }

  return (
    <UiDivider>
      <ThemeProvider theme={themeProvide} >
        <GlobalStyles />
        <UiTitle>Welcome to Emotion</UiTitle>
        <Button action={toggleTheme} />
      </ThemeProvider>
    </UiDivider>

  )
}

export default App
