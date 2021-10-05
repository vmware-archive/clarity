import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { CdsInternalCloseButton } from './index';

describe('CdsInternalCloseButton', () => {
  it('renders', () => {
    const wrapper = shallow(
      <div>
        <CdsInternalCloseButton />
      </div>
    );
    const renderedComponent = wrapper.find(CdsInternalCloseButton);
    expect(renderedComponent).toBeTruthy();
  });

  it('snapshot', () => {
    const wrapper = mount(
      <div>
        <CdsInternalCloseButton />
      </div>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
