import React, { Component } from 'react';
import { Book } from '../Book/Book';
import PropTypes from 'prop-types';

export class BookDisplay extends Component {

  render() {
    const { searchedBooks } = this.props;
    return (
      <div className="BookDisplay">
        {
          searchedBooks.map(book => (
          <Book key={book.id}
                title={book.volumeInfo.title}
                author={book.volumeInfo.authors ? book.volumeInfo.authors[0] : null}
                image={book.volumeInfo.imageLinks}
                publisher={book.volumeInfo.publisher} />)

        )}
      </div>
    )
  }
}

BookDisplay.propTypes = {
  searchedBooks: PropTypes.array.isRequired,
}

export default BookDisplay;
