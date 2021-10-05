import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { CdsInternalVisualCheckbox } from './index';

describe('CdsInternalVisualCheckbox', () => {
  it('renders', () => {
    const wrapper = shallow(
      <div>
        <CdsInternalVisualCheckbox />
      </div>
    );
    const renderedComponent = wrapper.find(CdsInternalVisualCheckbox);
    expect(renderedComponent).toBeTruthy();
  });

  it('snapshot', () => {
    const wrapper = mount(
      <div>
        <CdsInternalVisualCheckbox />
      </div>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
