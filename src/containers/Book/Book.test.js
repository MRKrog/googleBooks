import React from 'react';
import { shallow } from 'enzyme';
import { Book, mapStateToProps, mapDispatchToProps } from './Book';
import { setSaveBook, setRemoveBook, updateBookDisplay } from '../../actions/index';

describe('Book', () => {

  describe('Book Component', () => {
    let wrapper;
    let mockId = "az8pDwAAQBAJ";
    let mockTitle = "The Science of Cooking";
    let mockAuthor = "Stuart Farrimond";
    let mockImage = "http://books.google.com/books/content?id=az8pDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api";
    let mockPublisher = "Penguin";
    let mockStatus = false;

    beforeEach(() => {
      wrapper = shallow(
        <Book id={mockId}
              author={mockAuthor}
              image={mockImage}
              publisher={mockPublisher}
              savedStatus={mockStatus}
              title={mockTitle}
        />
      )
    })

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    });

  });

  describe('mapDispatchToProps', () => {

  });

});
