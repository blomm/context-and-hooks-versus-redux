import React from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { AuthContext } from '../contexts/AuthContext'

export const Navbar = () => {
  const { isLightTheme, light, dark } = React.useContext(ThemeContext)
  const { isAuthenticated, toggleAuth } = React.useContext(AuthContext)

  const theme = isLightTheme ? light : dark

  return (
    <nav style={{ background: theme.ui, color: theme.syntax }}>
      <h1>Context App</h1>
      <div onClick={toggleAuth}>
        {isAuthenticated ? 'logged in' : 'logged out'}
      </div>

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Help</li>
      </ul>
    </nav>
  )
}
