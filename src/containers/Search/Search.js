import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
      search: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { search } = this.state;
    if(search.length > 0){
      this.props.handleSearch(search)
      this.setState({search: ''})
    }
  }

  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div className="Search">
        <section className="searchTitle">
           <h2>Google Books</h2>
        </section>
        <form className="searchForm">
           <input
             type="search"
             placeholder="Enter Your Search"
             name="search"
             value={this.state.search}
             onChange={this.handleInput}
           />
           <button type="submit" className="btnClick" onClick={this.handleSubmit}>Search</button>
         </form>
      </div>
    );
  }
}

Search.propTypes = {
  handleSearch: PropTypes.func,
}
