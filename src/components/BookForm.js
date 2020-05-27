import React from 'react'
import { BookContext } from '../contexts/BookContext'

export const BookForm = () => {
  const { dispatch } = React.useContext(BookContext)
  const [title, setTitle] = React.useState('')
  const [author, setAuthor] = React.useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({ type: 'ADD_BOOK', book: { title, author } })
    // below using context with functions
    // addBook(author, title)
    setTitle('')
    setAuthor('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Author:</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <input type="submit" value="add book" />
    </form>
  )
}
