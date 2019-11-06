import React, { Component } from 'react';
import Book from '../Book/Book';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

export class BookDisplay extends Component {
  render() {
    const { searchedBooks } = this.props;
    return (
      <div className="BookDisplay">
        {
          searchedBooks.map(book => (
            <Book key={book.id}
                  id={book.id}
                  title={book.volumeInfo.title}
                  author={book.volumeInfo.authors ? book.volumeInfo.authors[0] : null}
                  image={book.volumeInfo.imageLinks}
                  publisher={book.volumeInfo.publisher} />
            )
          )}
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  error: state.error,
  loading: state.loading,
})

export const mapDispatchToProps = (dispatch) => ({
  setError: (data) => dispatch(actions.setError(data)),
  setLoading: (data) => dispatch(actions.setLoading(data)),
})

BookDisplay.propTypes = {
  searchedBooks: PropTypes.array.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(BookDisplay);
