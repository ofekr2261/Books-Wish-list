import React, { useState } from 'react'

export function WishList({ wishList, setWishList }) {
  const handleRemoveBook = (book) => {
    setWishList(wishList.filter((item) => item !== book))
  }

  const MAX_TITLE_LENGTH = 23

  const [sortOption, setSortOption] = useState('')

  const handleSortOptionChange = (e) => {
    setSortOption(e.target.value)
  }

  const sortedWishList = [...wishList]

  // Sort the wishList based on the selected sortOption
  if (sortOption === 'title') {
    sortedWishList.sort((a, b) => a.title.localeCompare(b.title))
  } else if (sortOption === 'price') {
    sortedWishList.sort((a, b) => a.price - b.price)
  } else if (sortOption === 'rating') {
    sortedWishList.sort((a, b) => a.rating - b.rating)
  }

  return (
    <div className="wish-list">
      <h3>Wish List</h3>
      <div className="radio-inputs">
        <label className={`radio ${sortOption === 'title' ? 'checked' : ''}`}>
          <input
            type="radio"
            name="radio"
            checked={sortOption === 'title'}
            onChange={handleSortOptionChange}
            value="title"
          />
          <span className="name">Title</span>
        </label>
        <label className={`radio ${sortOption === 'price' ? 'checked' : ''}`}>
          <input
            type="radio"
            name="radio"
            checked={sortOption === 'price'}
            onChange={handleSortOptionChange}
            value="price"
          />
          <span className="name">Price</span>
        </label>
        <label className={`radio ${sortOption === 'rating' ? 'checked' : ''}`}>
          <input
            type="radio"
            name="radio"
            checked={sortOption === 'rating'}
            onChange={handleSortOptionChange}
            value="rating"
          />
          <span className="name">Rating</span>
        </label>
      </div>
      <ul>
        {sortedWishList.map((book) => (
          <li className="wish-list-item" key={book.id}>
            <div className="item-mark"></div>
            <div className="wish-list-title">
              {book.title.length > MAX_TITLE_LENGTH ? (
                <>{book.title.substring(0, MAX_TITLE_LENGTH)}...</>
              ) : (
                book.title
              )}
            </div>
            <button onClick={() => handleRemoveBook(book)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
