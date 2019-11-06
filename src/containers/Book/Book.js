import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

class Book extends Component {

  handleSave = (event) => {
    event.preventDefault();
    const { setSaveBook, setRemoveBook, updateBookDisplay, id, author, image, title, publisher, savedStatus } = this.props;
    if(!savedStatus) {
      setSaveBook({ id, author, image, title, publisher, savedStatus: true })
    } else {
      setRemoveBook(id)
    }
    updateBookDisplay(id)
  }

  render() {
    const { id, title, author, image, publisher, savedStatus } = this.props;
    return (
      <div className="Book">
        <div className="BookContent">
          <section className="BookImage">
            <img src={image} alt="background-books"/>
          </section>
          <section className="BookCopy">
          <button onClick={this.handleSave}>
            <i className={savedStatus ? "fas fa-star" : "far fa-star"}></i>
          </button>
          <h5><span>Title:</span> {title}</h5>
          <h5><span>Author:</span> {author === null ? 'N/A' : author}</h5>
          <h5><span>Publisher:</span> {publisher === null ? 'N/A' : publisher}</h5>
          </section>
        </div>
      </div>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  setSaveBook: (data) => dispatch(actions.setSaveBook(data)),
  setRemoveBook: (data) => dispatch(actions.setRemoveBook(data)),
  updateBookDisplay: (data) => dispatch(actions.updateBookDisplay(data)),
})

export default connect(null, mapDispatchToProps)(Book)
