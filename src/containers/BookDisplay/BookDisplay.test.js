import React, { Component } from 'react';
import { BookDisplay } from './WeeklyDisplay';
import { shallow } from 'enzyme';

const mockBookData = []


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

})
