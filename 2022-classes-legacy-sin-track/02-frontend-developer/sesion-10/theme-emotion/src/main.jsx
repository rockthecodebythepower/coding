import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { ThemeProvider } from '@emotion/react'
import { theme } from './styles/theme'
import { Global } from './styles/ui/Global'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
