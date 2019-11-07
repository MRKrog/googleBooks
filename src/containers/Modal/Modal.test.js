import React, { Component } from 'react';
import { Modal, mapStateToProps } from './Modal';
import { shallow } from 'enzyme';

const mockSavedBooks = []

describe('Modal', () => {

  describe('Modal Component', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Modal />)
    })

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

  })

  describe('mapStateToProps', () => {

  });

})
