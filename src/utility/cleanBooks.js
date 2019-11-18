
export const cleanBooks = (books, savedBooks) => {
  let filteredBooks = books.map(book => {
    return {
      id: book.id,
      title: book.volumeInfo.title,
      author: book.volumeInfo.authors ? book.volumeInfo.authors[0] : null,
      image: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : '',
      publisher: book.volumeInfo.publisher ? book.volumeInfo.publisher : null,
      savedStatus: handleBookReload(book.id, savedBooks)
    }
  })
  return filteredBooks;
}

export const handleBookReload = (bookResultID, savedBooks) => {
  let bookSavedOnReload = savedBooks.find(book => {
    return book.id === bookResultID
  })

  if(bookSavedOnReload) return true
  return false
}
