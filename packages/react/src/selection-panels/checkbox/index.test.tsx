import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { CdsCheckboxPanel } from './index';

describe('CdsCheckboxPanel', () => {
  it('renders', () => {
    const wrapper = shallow(
      <div>
        <CdsCheckboxPanel>
          <label>Hello</label>
          <input type="checkbox" />
        </CdsCheckboxPanel>
      </div>
    );
    const renderedComponent = wrapper.find('CdsCheckboxPanel');
    expect(renderedComponent.html()).toMatch(/Hello/);
  });

  it('snapshot', () => {
    const wrapper = mount(
      <div>
        <CdsCheckboxPanel>
          <label>Hello</label>
          <input type="checkbox" />
        </CdsCheckboxPanel>
      </div>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
