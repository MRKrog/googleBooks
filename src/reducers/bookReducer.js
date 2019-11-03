export const bookReducer = (state = [], action) => {
  switch (action.type) {
    case "BOOK_SEARCH":
      let foundBooks = action.books.items
      return [...foundBooks]
    default:
      return state
  }
}
