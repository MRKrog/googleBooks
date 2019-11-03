import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { setLoading, setError } from '../../actions/index';

describe('App', () => {

  describe('App Component', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(
        <App />
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
