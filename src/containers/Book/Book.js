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
    const { setSaveBook, setRemoveBook, id, author, image, title, publisher } = this.props;

    if(!saved) {
      setSaveBook({ id, author, image, title, publisher })
    } else {
      setRemoveBook(id)
    }

    this.setState({
      saved: !this.state.saved
    })
  }

  render() {
    const { saved } = this.state;
    const { author, image, title, publisher } = this.props;

    return (
      <div className="Book">
        <div className="BookContent">
          <section className="BookImage">
            <img src={image.thumbnail} alt="background-books"/>
          </section>
          <section className="BookCopy">
          <button onClick={this.handleSave}>
            <i className={saved ? "fas fa-star" : "far fa-star"}></i>
          </button>
          <h5><span>Title:</span> {title}</h5>
          <h5><span>Author:</span> {author == null ? 'N/A' : author}</h5>
          <h5><span>Publisher:</span> {publisher}</h5>
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
})

export default connect(mapStateToProps, mapDispatchToProps)(Book)
