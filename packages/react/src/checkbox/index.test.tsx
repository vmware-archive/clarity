import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { CdsCheckbox } from './index';

describe('CdsCheckbox', () => {
  it('renders', () => {
    const wrapper = shallow(
      <div>
        <CdsCheckbox>
          <label>Hello</label>
          <input type="checkbox" />
        </CdsCheckbox>
      </div>
    );
    const renderedComponent = wrapper.find(CdsCheckbox);
    expect(renderedComponent.html()).toMatch(/Hello/);
  });

  it('snapshot', () => {
    const wrapper = mount(
      <div>
        <CdsCheckbox>
          <label>Hello</label>
          <input type="checkbox" />
        </CdsCheckbox>
      </div>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
