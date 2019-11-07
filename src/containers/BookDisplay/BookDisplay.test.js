import React, { Component } from 'react';
import { BookDisplay, mapStateToProps } from './BookDisplay';
import { shallow } from 'enzyme';

const mockSearchedBooks = []

describe('BookDisplay', () => {

  describe('BookDisplay Component', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<BookDisplay />)
    })

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

  })

  describe('mapStateToProps', () => {

  });

})
