
export const cleanBooks = (books, savedBooks) => {
  console.log('filteredBooks', books);
  let filteredBooks = books.map(book => {
    console.log('book', book);
    return {
      // id: 1
      id: book.id,
      title: book.volumeInfo.title,
      author: book.volumeInfo.authors ? book.volumeInfo.authors[0] : null,
      // image: book.volumeInfo.imageLinks.thumbnail ? book.volumeInfo.imageLinks.thumbnail : null,
      // image: book.volumeInfo.imageLinks.thumbnail,
      // publisher: book.volumeInfo.publisher ? book.volumeInfo.publisher : null,
      // savedStatus: handleBookReload(book.id, savedBooks)
    }
  })
  console.log('filteredBooks', filteredBooks);
  return filteredBooks;
}

export const handleBookReload = (bookResultID, savedBooks) => {
  let bookSavedOnReload = savedBooks.find(book => {
    return book.id === bookResultID
  })

  if(bookSavedOnReload) return true
  return false
}
