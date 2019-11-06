export const bookReducer = (state = [], action) => {
  switch (action.type) {
    case "BOOK_SEARCH":
      let foundBooks = action.books
      return [...foundBooks]
    case "BOOK_UPDATE":
      // let clickedBook = action.bookID
      let clickedBook = state.find(book => {
        return action.bookID === book.id
      })
      clickedBook.savedStatus = !clickedBook.savedStatus
      console.log(clickedBook);
      return [...state]
    default:
      return state
  }
}
