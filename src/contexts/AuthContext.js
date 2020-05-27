import React, { useState } from 'react'

export const AuthContext = React.createContext()

const initialConfig = {
  isAuthenticated: false,
}
export const AuthContextProvider = (props) => {
  const [authState, setAuthState] = useState(initialConfig)

  function toggleAuth() {
    setAuthState(
      authState.isAuthenticated
        ? { ...authState, isAuthenticated: false }
        : { ...authState, isAuthenticated: true }
    )
  }

  return (
    <AuthContext.Provider value={{ ...authState, toggleAuth }}>
      {props.children}
    </AuthContext.Provider>
  )
}
