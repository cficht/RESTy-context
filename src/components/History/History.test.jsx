import React from 'react';
import { shallow } from 'enzyme';
import History from './History';
import { ResponseProvider } from '../../hooks/ResponseProvider';

describe('History component', () => {
  it('renders History', () => {
    const wrapper = shallow(
      <ResponseProvider>
        <History />
      </ResponseProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
