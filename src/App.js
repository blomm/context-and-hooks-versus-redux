import React from 'react'
import { Navbar } from './components/Navbar'
import BookList from './components/BookList'
import { ThemeContextProvider } from './contexts/ThemeContext'
import ThemeToggle from './components/ThemeToggle'
import { AuthContextProvider } from './contexts/AuthContext'
import { BookContextProvider } from './contexts/BookContext'
import { BookForm } from './components/BookForm'

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <ThemeContextProvider>
          <BookContextProvider>
            <Navbar></Navbar>
            <BookList></BookList>
            <BookForm></BookForm>
            <ThemeToggle></ThemeToggle>
          </BookContextProvider>
        </ThemeContextProvider>
      </AuthContextProvider>
    </div>
  )
}

export default App
