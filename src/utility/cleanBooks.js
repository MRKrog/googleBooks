export const cleanBooks = (books) => {
  let filteredBooks = books.map(book => {
    return {
      id: book.id,
      title: book.volumeInfo.title,
      author: book.volumeInfo.authors ? book.volumeInfo.authors[0] : null,
      image: book.volumeInfo.imageLinks.thumbnail,
      publisher: book.volumeInfo.publisher ? book.volumeInfo.publisher : null,
      savedStatus: false
    }
  })
  console.log('filteredBooks', filteredBooks);
  return filteredBooks;
}

export const handleBookReload = (book) => {
  let testBook = book;

  
  return book;
}
