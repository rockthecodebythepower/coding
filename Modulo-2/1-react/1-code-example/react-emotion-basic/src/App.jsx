import { ThemeProvider } from '@emotion/react'
import { useState } from 'react';
import GlobalStyles from './styles/globalStyles';
import { themeLight, themeDark } from './styles/theme';

const App = () => {
  const [themeProvide, setThemeProvide] = useState(themeDark);

  const toggleTheme = () => {
    setThemeProvide(themeProvide === themeLight ? themeDark : themeLight);
  }

  return (
    <ThemeProvider theme={themeProvide}>
      <GlobalStyles />
      <button>
        <div onClick={toggleTheme} >Change Theme</div>
      </button>
    </ThemeProvider>
  )
}

export default App
