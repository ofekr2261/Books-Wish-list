export function SortingControl({ handleSort }) {
  return (
    <div>
      <h3>Sort By:</h3>
      <select onChange={(e) => handleSort(e.target.value)}>
        <option value="title">Title</option>
        <option value="price">Price</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  )
}
