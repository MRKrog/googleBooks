import React, { Component } from 'react';
import { Book } from '../Book/Book';
import PropTypes from 'prop-types';

export class BookDisplay extends Component {

  render() {
    const { searchedBooks } = this.props;
    return (
      <div className="BookDisplay">
        { searchedBooks.map(book => <Book key={book.id} {...book}/> ) }
      </div>
    )
  }
}

BookDisplay.propTypes = {
  searchedBooks: PropTypes.array.isRequired,
}

export default BookDisplay;
