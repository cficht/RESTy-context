import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';
import { ResponseProvider } from '../../hooks/ResponseProvider';

describe('Form component', () => {
  it('renders Form', () => {
    const wrapper = shallow(
      <ResponseProvider>
        <Form />
      </ResponseProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
