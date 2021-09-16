import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { CdsRadioPanel } from './index';

describe('CdsRadioPanel', () => {
  it('renders', () => {
    const wrapper = shallow(
      <div>
        <CdsRadioPanel>
          <label>Hello</label>
          <input type="checkbox" />
        </CdsRadioPanel>
      </div>
    );
    const renderedComponent = wrapper.find('CdsRadioPanel');
    expect(renderedComponent.html()).toMatch(/Hello/);
  });

  it('snapshot', () => {
    const wrapper = mount(
      <div>
        <CdsRadioPanel>
          <label>Hello</label>
          <input type="checkbox" />
        </CdsRadioPanel>
      </div>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
