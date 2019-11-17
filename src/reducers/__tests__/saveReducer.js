import { saveReducer } from '../saveReducer';
import * as actions from '../../actions';

const mockBook = {
  id:"IFiIg7elnwIC",
  author:"Cathy K. Kaufman",
  image:"http://books.google.com/books/content?id=IFiIg7elnwIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  title:"Cooking in Ancient Civilizations",
  publisher:"Greenwood Publishing Group",
  savedStatus:true,
}

describe('saveReducer', () => {

  it('should return the initial state', () => {
    const expected = []
    const result = saveReducer([], {})
    expect(result).toEqual(expected)
  })

  it('should handle SET_BOOKS', () => {
    const mockAction = {
      type: "BOOK_SAVE",
      book: mockBook
    }
    const expected = [{
      id:"IFiIg7elnwIC",
      author:"Cathy K. Kaufman",
      image:"http://books.google.com/books/content?id=IFiIg7elnwIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      title:"Cooking in Ancient Civilizations",
      publisher:"Greenwood Publishing Group",
      savedStatus:true,
    }];
    const result = saveReducer([], mockAction)
    expect(result).toEqual(expected)
  })

})
