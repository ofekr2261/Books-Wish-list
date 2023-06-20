export function WishList({ wishList, setWishList }) {
  const handleRemoveBook = (book) => {
    setWishList(wishList.filter((item) => item !== book))
  }

  const MAX_TITLE_LENGTH = 23
  return (
    <div className="wish-list">
      <ul>
        {wishList.map((book) => (
          <li className="wish-list-item" key={book.id}>
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
