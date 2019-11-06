import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

class Book extends Component {
  constructor(props) {
    super();
    this.state = {
      saved: false,
    }
  }

  handleSave = (event) => {
    event.preventDefault();
    const { saved } = this.state;
    const { setSaveBook, setRemoveBook, updateBookDisplay, id, author, image, title, publisher } = this.props;

    if(!saved) {
      console.log('in save');
      setSaveBook({ id, author, image, title, publisher, savedStatus: true })
    } else {
      console.log('in remove');
      setRemoveBook(id)
    }

    updateBookDisplay(id)

    this.setState({
      saved: !this.state.saved
    })
  }

  render() {
    const { saved } = this.state;
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

export const mapStateToProps = (state) => ({
  loading: state.loading,
})

export const mapDispatchToProps = (dispatch) => ({
  setLoading: (data) => dispatch(actions.setLoading(data)),
  setSaveBook: (data) => dispatch(actions.setSaveBook(data)),
  setRemoveBook: (data) => dispatch(actions.setRemoveBook(data)),
  updateBookDisplay: (data) => dispatch(actions.updateBookDisplay(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Book)
