import React from 'react';
import { shallow } from 'enzyme';
import { Book, mapStateToProps, mapDispatchToProps } from './Book';
import { setSaveBook, setRemoveBook, updateBookDisplay } from '../../actions/index';

describe('Book', () => {

  describe('Book Component', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(
        <Book />
      )
    })

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    });

  });

  describe('mapDispatchToProps', () => {

  });

});
