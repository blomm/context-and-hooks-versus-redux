import React, { useState } from 'react'

const theConfig = {
  isLightTheme: true,
  light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
  dark: { syntax: '#ddd', ui: '#333', bg: '#555' },
}

export const ThemeContext = React.createContext()

export const ThemeContextProvider = (props) => {
  const [themeState, setThemeState] = useState(theConfig)

  const toggleTheme = () => {
    setThemeState(
      themeState.isLightTheme
        ? { ...themeState, isLightTheme: false }
        : { ...themeState, isLightTheme: true }
    )
  }

  return (
    <ThemeContext.Provider value={{ ...themeState, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  )
}
