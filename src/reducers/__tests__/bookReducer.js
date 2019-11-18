import { bookReducer } from '../bookReducer';
import * as actions from '../../actions';

const mockSearchedBooks = [
  {
    id:"az8pDwAAQBAJ",
    title:"The Science of Cooking",
    author:"Stuart Farrimond",
    image:"http://books.google.com/books/content?id=az8pDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    publisher:"Penguin",
    savedStatus:false,
  },
  {
    id:"IFiIg7elnwIC",
    title:"Cooking in Ancient Civilizations",
    author:"Cathy K. Kaufman",
    image:"http://books.google.com/books/content?id=IFiIg7elnwIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    publisher:"Greenwood Publishing Group",
    savedStatus:false,
  }
]

describe('bookReducer', () => {

  it('should return the initial state', () => {
    const expected = []
    const result = bookReducer([], {})
    expect(result).toEqual(expected)
  })

  it('should handle BOOK_SEARCH', () => {
    const mockAction = {
      type: "BOOK_SEARCH",
      books: mockSearchedBooks,
    }
    const expected = [
      {
        id:"az8pDwAAQBAJ",
        title:"The Science of Cooking",
        author:"Stuart Farrimond",
        image:"http://books.google.com/books/content?id=az8pDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        publisher:"Penguin",
        savedStatus:false,
      },
      {
        id:"IFiIg7elnwIC",
        title:"Cooking in Ancient Civilizations",
        author:"Cathy K. Kaufman",
        image:"http://books.google.com/books/content?id=IFiIg7elnwIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        publisher:"Greenwood Publishing Group",
        savedStatus:false,
      }
    ];
    const result = bookReducer([], mockAction)
    expect(result).toEqual(expected)
  })

})
