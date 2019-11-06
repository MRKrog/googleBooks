export const saveReducer = (state = [], action) => {
  switch (action.type) {
    case "BOOK_SAVE":
      state.push(action.book)
      return state
    case "BOOK_REMOVE":
      let updatedBooks = state.filter(savedBook => {
        return savedBook.id != action.bookID
      })
      return updatedBooks
    default:
      return state
  }
}
