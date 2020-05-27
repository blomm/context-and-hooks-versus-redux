import React from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { BookContext } from '../contexts/BookContext'

const BookList = () => {
  const { isLightTheme, light, dark } = React.useContext(ThemeContext)
  const { books, removeBook } = React.useContext(BookContext)
  const theme = isLightTheme ? light : dark

  const handleBookDelete = (id) => {
    removeBook(id)
  }

  return books.length ? (
    <div
      className="book-list"
      style={{ background: theme.bg, color: theme.syntax }}
    >
      <ul>
        {books.map((book) => (
          <li key={book.id} style={{ background: theme.ui }}>
            {book.title}
            <button onClick={() => handleBookDelete(book.id)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <div className="book-empty">No books</div>
  )
}

export default BookList
