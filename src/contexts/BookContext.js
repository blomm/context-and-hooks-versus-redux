import React from 'react'
import { bookReducer } from '../reducers/bookReducer'

export const BookContext = React.createContext()

export const BookContextProvider = (props) => {
  // const [books, setBooks] = React.useState([
  //   { id: '1', title: 'Name of the Game', author: 'John Wayne' },
  //   { id: '2', title: 'Big Time Charlie', author: 'Charlie Chaplin' },
  //   { id: '3', title: 'Play Ball', author: 'Joe Dimagio' },
  // ])

  const [books, dispatch] = React.useReducer(bookReducer, [], () => {
    const localBooks = localStorage.getItem('books')
    return localBooks ? JSON.parse(localBooks) : []
  })

  // call this effect whenever the books array changes
  React.useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books))
  }, [books])

  // const addBook = (author, title) => {
  //   setBooks([...books, { id: uuidv4(), author, title }])
  // }

  // const removeBook = (id) => {
  //   setBooks(books.filter((book) => book.id !== id))
  // }

  return (
    // <BookContext.Provider value={{ books, addBook, removeBook }}>
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  )
}
