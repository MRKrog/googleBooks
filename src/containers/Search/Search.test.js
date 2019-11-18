import React, { Component } from 'react';
import { Search } from './Search';
import { shallow } from 'enzyme';

describe('Search', () => {
  let wrapper;
  let mockHandleSearch = jest.fn()
  let mockSearch = "";
  let event = { preventDefault: () => {}};

  beforeEach(() => {
    wrapper = shallow(
      <Search search={mockSearch}
              handleSearch={mockHandleSearch}
      />
    )
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should have default state', () => {
    expect(wrapper.state()).toEqual({
      search: "",
    });
  });

  it('should change state when handleInput method is invoked', () => {
    const input = wrapper.find('input');
    const mockEvent = { target: { name: 'search', value: 'Cooking' } }
    input.simulate('change', mockEvent);
    expect(wrapper.state()).toEqual({search: 'Cooking'});
  });

  it('should invoke handleSubmit when search button is clicked', () => {
    const spy = jest.spyOn(wrapper.instance(), "handleSubmit");
    wrapper.instance().forceUpdate();
    wrapper.find(".btnClick").simulate("click", event, spy);
    expect(spy).toHaveBeenCalled();
  });

  it('should invoke handleSearch with search parameters set in state', () => {
    wrapper.setState({
      search: 'Lock & Key'
    })
    const instance = wrapper.instance();
    instance.handleSubmit(event);
    expect(mockHandleSearch).toHaveBeenCalledWith('Lock & Key');

  });

  it('should invoke handleSearch and pass typed searched and then reset search state string', () => {
    wrapper.setState({
      search: 'Lock & Key'
    })
    const instance = wrapper.instance();
    instance.handleSubmit(event);
    expect(wrapper.state()).toEqual({search: ""})
  });
})
