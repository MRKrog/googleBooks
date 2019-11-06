export const bookReducer = (state = [], action) => {
  switch (action.type) {
    case "BOOK_SEARCH":
      let foundBooks = action.books
      return [...foundBooks]
    case "BOOK_UPDATE":
      let clickedBook = state.find(book => {
        return action.bookID === book.id
      })
      if(clickedBook) clickedBook.savedStatus = !clickedBook.savedStatus
      return [...state]
    default:
      return state
  }
}
