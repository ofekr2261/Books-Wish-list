import React from 'react'
import { FaStar, FaRegStar } from 'react-icons/fa'

export function Book({ book, toggleWishList, isChecked, rating }) {
  const roundedRating = Math.round(rating)

  const handleToggle = () => {
    toggleWishList(book)
  }

  const getCheckboxStyle = () => {
    if (book.title.length > 28) {
      return {
        position: 'absolute',
        right: '50px',
        top: '20px',
      }
    } else if (book.title.length > 25) {
      return {
        position: 'absolute',
        right: '50px',
        top: '50px',
      }
    } else {
      return {
        position: 'absolute',
        right: '50px',
        top: '20px',
      }
    }
  }

  return (
    <div className="book-preview">
      <h3>{book.title}</h3>
      <label className="checkbox" style={getCheckboxStyle()}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleToggle}
          className="checkbox-input"
        />
        <span className="checkbox-custom"></span>
      </label>
      <p className="author">{book.author}</p>
      <p className="description">{book.description}</p>
      <div className="rating">
        {[...Array(5)].map((_, index) => {
          const starIcon = index < roundedRating ? <FaStar /> : <FaRegStar />
          return <span key={index}>{starIcon}</span>
        })}
      </div>
      <p>Price: ${book.price}</p>
    </div>
  )
}
