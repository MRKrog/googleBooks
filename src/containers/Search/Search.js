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
    const { search } = this.state;
    event.preventDefault();
    this.props.handleSearch(search)
    this.setState({
      search: ''
    })
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
        <form onSubmit={this.handleSubmit}>
           <label>
             <span>Search for books</span>
             <input
               type="search"
               placeholder="Search For Books"
               name="search"
               value={this.state.search}
               onChange={this.handleInput}
             />
             <button type="submit">Search Books</button>
           </label>
         </form>
      </div>
    );
  }
}

Search.propTypes = {

}
