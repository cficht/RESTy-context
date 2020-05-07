import React from 'react';
import { shallow } from 'enzyme';
import Display from './Display';
import { ResponseProvider } from '../../hooks/ResponseProvider';

describe('Display component', () => {
  it('renders Display', () => {
    const wrapper = shallow(
      <ResponseProvider>
        <Display />
      </ResponseProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
