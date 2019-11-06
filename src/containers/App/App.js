import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Search } from '../Search/Search';
import BookDisplay from '../BookDisplay/BookDisplay';
import Modal from '../Modal/Modal';
import { Loading } from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import { cleanBooks } from '../../utility/cleanBooks'

import * as actions from '../../actions/index';

export class App extends Component {
  constructor(props) {
    super();
    this.state = {
      modal: false,
    }
  }

  handleSearch = async (search) => {
    const { setBookSearch, setLoading } = this.props;
    const url = "https://www.googleapis.com/books/v1/volumes";
    try {
      setLoading(true)
      const response = await fetch(`${url}?q=${search}`)
      if(!response.ok) { throw new Error('Fetch Call Cannot Be Made')}
      const data = await response.json()
      console.log(data);
      let updatedBooks = cleanBooks(data.items)
      await setBookSearch(updatedBooks)
    } catch(error){
      this.props.setError(error.message)
    }
    setLoading(false)
  }

  showModal = () => {
    this.setState({
      modal: true
    })
  }

  hideModal = () => {
    this.setState({
      modal: false
    })
  }

  render() {
    const { loading, searchedBooks, savedBooks } = this.props;
    const { modal } = this.state;
    return (
      <div className="App">
      { savedBooks.length > 0 &&
        <button className="modal-button" onClick={this.showModal}>
          View Saved Books <i className="fas fa-eye"></i>
        </button>
      }
      <Search handleSearch={this.handleSearch} />
      {
        loading ?
        <Loading /> :
        <div className="BookResults">
          {
            searchedBooks.length > 0 &&
            <BookDisplay />
          }
        </div>
      }
      {
        modal &&
        <Modal hideModal={this.hideModal} />
      }
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  error: state.error,
  loading: state.loading,
  searchedBooks: state.searchedBooks,
  savedBooks: state.savedBooks,
})

export const mapDispatchToProps = (dispatch) => ({
  setError: (data) => dispatch(actions.setError(data)),
  setLoading: (data) => dispatch(actions.setLoading(data)),
  setBookSearch: (data) => dispatch(actions.setBookSearch(data)),
})

App.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
