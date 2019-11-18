import React, { Component } from 'react';
import { Modal, mapStateToProps } from './Modal';
import { shallow } from 'enzyme';

const mockSavedBooks = [{
  id:"IFiIg7elnwIC",
  author:"Cathy K. Kaufman",
  image:"http://books.google.com/books/content?id=IFiIg7elnwIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  title:"Cooking in Ancient Civilizations",
  publisher:"Greenwood Publishing Group",
  savedStatus:true,
}]

describe('Modal', () => {

  describe('Modal Component', () => {
    let wrapper;
    let mockHideModal = jest.fn();

    beforeEach(() => {
      wrapper = shallow(
        <Modal savedBooks={mockSavedBooks}
               hideModal={mockHideModal}
        />
      )
    })

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

  })

  describe('mapStateToProps', () => {

  });

})
