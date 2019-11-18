import React, { Component } from 'react';
import { BookDisplay, mapStateToProps } from './BookDisplay';
import { shallow } from 'enzyme';

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

describe('BookDisplay', () => {

  describe('BookDisplay Component', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(
        <BookDisplay searchedBooks={mockSearchedBooks}/>
      )
    })

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

  })

  describe('mapStateToProps', () => {

  });

})
