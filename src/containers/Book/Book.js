import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Book extends Component {
  constructor(props) {
    super();

  }

  render() {
    console.log(this.props);
    
    return (
      <div className="Book">
        <a href="#" target="_blank">
          <h3>
            {this.props.volumeInfo.title}
          </h3>
          <img src={this.props.volumeInfo.imageLinks.thumbnail} />
        </a>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({

})

Book.propTypes = {

}

export default connect(mapStateToProps)(Book)

// Type in a query and display a list of 5 books matching that query.
// Each item in the list should include the book's author, title, and publishing company.
// A user should be able to select a book from the five displayed to save to a “Reading List”
// View a “Reading List” with all the books the user has selected from their queries -- this is a local reading list and not tied to Google Books’s account features.

//
// accessInfo: {country: "US", viewability: "PARTIAL", embeddable: true, publicDomain: false, textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY", …}
// etag: "7Av6lyirEWE"
// id: "pzzHQdIXlPYC"
// kind: "books#volume"
// saleInfo: {country: "US", saleability: "NOT_FOR_SALE", isEbook: false}
// searchInfo: {textSnippet: "Blending classic techniques with free-style Americ…tures eight hundred master recipes and variations"}
// selfLink: "https://www.googleapis.com/books/v1/volumes/pzzHQdIXlPYC"
// volumeInfo: {title: "The Way to Cook", authors:
