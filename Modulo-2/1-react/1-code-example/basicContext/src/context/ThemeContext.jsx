import { createContext, useCallback, useState, useEffect } from "react";

export const ThemeContext = createContext({
  theme: 'dark',
  toggleTheme: () => null
});

export const ThemeContextProvider = ({ children }) => {

  const [theme, setTheme] = useState(
    () => (localStorage.getItem('theme') || 'dark')
  )

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme])

  return (
    <ThemeContext.Provider value={{
      theme,
      toggleTheme
    }}>
      {children}
    </ThemeContext.Provider>
  )
}