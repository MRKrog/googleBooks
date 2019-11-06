export const setError = (error) => ({
  type: "SET_ERROR",
  error
})

export const setLoading = (loading) => ({
  type: "SET_LOADING",
  loading
})

export const setBookSearch = (books) => ({
  type: "BOOK_SEARCH",
  books
})

export const setSaveBook = (book) => ({
  type: "BOOK_SAVE",
  book
})

export const setRemoveBook = (bookID) => ({
  type: "BOOK_REMOVE",
  bookID
})

export const updateBookDisplay = (bookID) => ({
  type: "BOOK_UPDATE",
  bookID
})
