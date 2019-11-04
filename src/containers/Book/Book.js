import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Book extends Component {
  constructor(props) {
    super();
    this.state = {
      saved: false,
    }
  }

  handleSave = (event) => {
    event.preventDefault();
    let bookId = this.props.id;
    // let currentStatus = this.state.saved
    this.setState({
      saved: !this.state.saved
    })
    console.log('bookId', bookId);
  }

  render() {
    const { saved } = this.state;
    let savedBtn;
    if(saved){
      savedBtn = "fas fa-star"
    } else {
      savedBtn = "far fa-star"
    }

    return (
      <div className="Book">
        <div className="BookContent">
          <section className="BookImage">
            <img src={this.props.volumeInfo.imageLinks.thumbnail} />
          </section>
          <section className="BookCopy">
          <button onClick={this.handleSave}>
            <i className={savedBtn}></i>
          </button>
          <h5><span>Title:</span> {this.props.volumeInfo.title}</h5>
          <h5><span>Author:</span> {this.props.volumeInfo.authors[0]}</h5>
          <h5><span>Publisher:</span> {this.props.volumeInfo.publisher}</h5>
          </section>
        </div>
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

// allowAnonLogging: false
// authors: ["Eduardo Machado"]
// canonicalVolumeLink: "https://books.google.com/books/about/The_Cook.html?hl=&id=FaxSl66kiSYC"
// categories: ["Drama"]
// contentVersion: "0.4.3.0.preview.3"
// description: "As Fidel Castro storms Habana, a wealthy Batistlano is forced to flee to America with her husband and unborn child. Adria begs her cook, a proud and loyal woman who values her mistress's friendship, to promise she will protect the mansion from the communist upheaval. Over the next forty years Gladys keeps this promise, despite tremendous emotional and physical loss. When Adria's daughter vacations in Cuba and comes to see her mother's old house, Gladys is forced to confront harsh truths. Not only has Adria forgotten her, but now Gladys is accused of leading a life of betrayal in a house that isn't hers. Gladys's struggle mirrors the cultural divide in Cuba that separates the delicately preserved past from the need to survive that is molding a rough-hewed future from the majestic determination and nobility of the Cuban people."
// imageLinks: {smallThumbnail: "http://books.google.com/books/content?id=FaxSl66ki…=frontcover&img=1&zoom=5&edge=curl&source=gbs_api", thumbnail: "http://books.google.com/books/content?id=FaxSl66ki…=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"}
// industryIdentifiers: (2) [{…}, {…}]
// infoLink: "http://books.google.com/books?id=FaxSl66kiSYC&dq=cook&hl=&source=gbs_api"
// language: "en"
// maturityRating: "NOT_MATURE"
// pageCount: 79
// panelizationSummary: {containsEpubBubbles: false, containsImageBubbles: false}
// previewLink: "http://books.google.com/books?id=FaxSl66kiSYC&printsec=frontcover&dq=cook&hl=&cd=1&source=gbs_api"
// printType: "BOOK"
// publishedDate: "2004"
// publisher: "Samuel French, Inc."
// readingModes: {text: true, image: true}
// title: "The Cook"
