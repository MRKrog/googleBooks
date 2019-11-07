import React, { Component } from 'react';
import Book from '../Book/Book';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class BookDisplay extends Component {
  render() {
    const { searchedBooks } = this.props;
    return (
      <div className="BookDisplay">
        {
          searchedBooks.map(singleBook => (
            <Book key={singleBook.id}
                  id={singleBook.id}
                  title={singleBook.title}
                  author={singleBook.author}
                  image={singleBook.image}
                  publisher={singleBook.publisher}
                  savedStatus={singleBook.savedStatus}
              />
            )
          )}
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  searchedBooks: state.searchedBooks,
})

BookDisplay.propTypes = {
  searchedBooks: PropTypes.array.isRequired,
}

export default connect(mapStateToProps, null)(BookDisplay);
