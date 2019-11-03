import React, { Component } from 'react';
import { Search } from './Search';
import { shallow } from 'enzyme';

describe('Search', () => {
  let wrapper;
  let mockHandleSearch = jest.fn()

  beforeEach(() => {
    wrapper = shallow(<Search />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})
