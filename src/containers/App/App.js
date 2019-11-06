import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, NavLink } from 'react-router-dom';

import { Search } from '../Search/Search';
import BookDisplay from '../BookDisplay/BookDisplay';
import { Loading } from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';

import * as actions from '../../actions/index';

export class App extends Component {

  handleSearch = async (search) => {
    const { setBookSearch, setLoading } = this.props;
    const url = "https://www.googleapis.com/books/v1/volumes";
    try {
      setLoading(true)
      const response = await fetch(`${url}?q=${search}`)
      if(!response.ok) { throw new Error('Fetch Call Cannot Be Made')}
      const data = await response.json()
      await setBookSearch(data)
    } catch(error){
      this.props.setError(error.message)
    }
    setLoading(false)
  }

  // <Route path="/Search" render={() => {
  //   return <Search handleSearch={this.handleSearch} />
  // }}/>

  // <NavLink className="Button-Container" to="/WeatherDetails">
  //   <div className="Details-Button">
  //     <i className="fas fa-plus-square"></i>
  //   </div>
  // </NavLink>

  render() {
    const { loading, searchedBooks } = this.props;
    return (
      <div className="App">
      <Search handleSearch={this.handleSearch} />
      {
        loading ?
        <Loading /> :
        <div className="BookResults">
          {
            searchedBooks.length > 0 &&
            <BookDisplay searchedBooks={searchedBooks}/>
          }
        </div>
      }
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  error: state.error,
  loading: state.loading,
  searchedBooks: state.searchedBooks,
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
