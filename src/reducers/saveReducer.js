export const saveReducer = (state = [], action) => {
  switch (action.type) {
    case "BOOK_SAVE":
      console.log('savedBook', action.book);
      state.push(action.book)
      return state
    case "BOOK_REMOVE":
      console.log('removeBook', action.bookID);
      let updatedBooks = state.filter(savedBook => {
        return savedBook.id != action.bookID
      })
      return updatedBooks
    default:
      return state
  }
}
