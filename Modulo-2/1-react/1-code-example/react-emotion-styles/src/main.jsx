import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'


import { ThemeProvider } from '@emotion/react'
import { themeDark, themeLight } from './styles/theme'

import GlobalStyles from './styles/globalStyles'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={themeDark} >
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
