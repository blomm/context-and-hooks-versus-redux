import React from 'react'
import { v4 as uuidv4 } from 'uuid'

export const BookContext = React.createContext()

export const BookContextProvider = (props) => {
  const [books, setBooks] = React.useState([
    { id: '1', title: 'Name of the Game', author: 'John Wayne' },
    { id: '2', title: 'Big Time Charlie', author: 'Charlie Chaplin' },
    { id: '3', title: 'Play Ball', author: 'Joe Dimagio' },
  ])

  const addBook = (author, title) => {
    setBooks([...books, { id: uuidv4(), author, title }])
  }

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id))
  }

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  )
}
