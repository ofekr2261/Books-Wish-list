import React, { useEffect, useState } from 'react'
import { Book } from './Book'

import { SlArrowLeft } from 'react-icons/sl'
import { SlArrowRight } from 'react-icons/sl'
import { WishList } from './WishList'

export function BookList({ books }) {
  const [currentPage, setCurrentPage] = useState(1)
  const [wishList, setWishList] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)

  const booksPerPage = 1
  const indexOfLastBook = currentPage * booksPerPage
  const indexOfFirstBook = indexOfLastBook - booksPerPage
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook)

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1)
  }

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1)
  }

  const handleToggleWishList = (book) => {
    if (wishList.includes(book)) {
      setWishList(wishList.filter((item) => item !== book))
    } else {
      setWishList([...wishList, book])
    }
  }

  useEffect(() => {
    const total = wishList.reduce(
      (accumulator, book) => accumulator + parseFloat(book.price),
      0
    )
    const roundedTotal = total.toFixed(2)
    setTotalPrice(roundedTotal)
  }, [wishList])

  const isLastPage = currentBooks.length < booksPerPage
  const isNextPageVisible =
    !isLastPage && currentPage < Math.ceil(books.length / booksPerPage)

  return (
    <div className="book-list">
      <ul>
        {currentBooks.map((book) => (
          <Book
            key={book.id}
            book={book}
            toggleWishList={handleToggleWishList}
            isChecked={wishList.includes(book)}
            rating={book.rating}
          />
        ))}
      </ul>
      <div className="arrows">
        <div className="arrow-back">
          {currentPage > 1 && (
            <span onClick={handlePrevPage} style={{ cursor: 'pointer' }}>
              <SlArrowLeft />
            </span>
          )}
        </div>
        <div className="arrow-next">
          {isNextPageVisible && (
            <span onClick={handleNextPage} style={{ cursor: 'pointer' }}>
              <SlArrowRight />
            </span>
          )}
        </div>
      </div>
      <div className="wish-list-container">
        <WishList wishList={wishList} setWishList={setWishList} />
        <p className="total-price">Total Price: ${totalPrice}</p>
      </div>
    </div>
  )
}
