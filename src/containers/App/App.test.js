import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { setLoading, setError, setBookSearch } from '../../actions/index';

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

const mockSavedBooks = [{
  id:"IFiIg7elnwIC",
  author:"Cathy K. Kaufman",
  image:"http://books.google.com/books/content?id=IFiIg7elnwIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  title:"Cooking in Ancient Civilizations",
  publisher:"Greenwood Publishing Group",
  savedStatus:true,
}]

describe('App', () => {

  describe('App Component', () => {
    let wrapper;
    let mockLoading = false
    let mockSetError = jest.fn();
    let mockSetLoading = jest.fn();
    let mockSetBookSearch = jest.fn();

    beforeEach(() => {
      wrapper = shallow(
        <App modal={false}
             loading={mockLoading}
             savedBooks={mockSavedBooks}
             searchedBooks={mockSearchedBooks}
             setBookSearch={mockSetBookSearch}
             setError={mockSetError}
             setLoading={mockSetLoading}
        />
      )

      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockData)
      }))

    })

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    });

  });

  describe('mapStateToProps', () => {

  });

  describe('mapDispatchToProps', () => {

  });

});
