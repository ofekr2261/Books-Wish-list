import React, { useState, useEffect } from 'react'
import { BookList } from './cmps/BookList'
import bookdata from './data/listofBooks.json'
import './assets/scss/_main.scss'

function App() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    setBooks(bookdata.books)
  }, [])

  return (
    <div className="App">
      <h1>Books Wish List App</h1>
      <BookList books={books} />
    </div>
  )
}

export default App
