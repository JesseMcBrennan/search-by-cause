import React from 'react';
import { shallow } from 'enzyme';
import { ContactPdf, mapStateToProps  } from './ContactPdf';

describe('ContactPdf', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <ContactPdf />
    );
  });
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  describe('mapStateToProps', () => {
    it('should return an object', () => {
      const mockResult = { members: {} };

      const expected = {};

      const mappedProps = mapStateToProps(mockResult);

      expect(mappedProps).toEqual(expected);

    });
  });
});