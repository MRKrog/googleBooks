import React, { Component } from 'react';
import Book from '../Book/Book';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

export class Modal extends Component {
  render() {
    const { savedBooks, hideModal } = this.props;
    return (
      <div className="Modal">
        <button className="hideModalBtn" onClick={hideModal}>X</button>
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
    )
  }
}

export const mapStateToProps = (state) => ({
  savedBooks: state.savedBooks,
})

Modal.propTypes = {
  savedBooks: PropTypes.array.isRequired,
}

export default connect(mapStateToProps, null)(Modal);
