import React, { Component } from 'react';
import Book from '../Book/Book';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class Modal extends Component {
  render() {
    const { savedBooks, hideModal } = this.props;
    return (
      <div className="Modal">
        <h2>Your Saved Books</h2>
        <button className="hideModalBtn" onClick={hideModal}>X</button>
        <div className="BookDisplay">
          {
            savedBooks.map(singleBook => (
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
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  savedBooks: state.savedBooks,
})

Modal.propTypes = {
  savedBooks: PropTypes.array,
  hideModal: PropTypes.func,
}

export default connect(mapStateToProps, null)(Modal);
