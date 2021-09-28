import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { CdsPassword } from './index';

describe('CdsPassword', () => {
  it('renders', () => {
    const wrapper = shallow(
      <div>
        <CdsPassword layout="vertical">
          <label>label</label>
          <input type="password" defaultValue="123456" />
        </CdsPassword>
      </div>
    );
    const renderedComponent = wrapper.find(CdsPassword);
    expect(renderedComponent.html()).toMatch(/label/);
  });

  it('snapshot', () => {
    const wrapper = mount(
      <div>
        <CdsPassword layout="vertical">
          <label>label</label>
          <input type="password" defaultValue="123456" />
        </CdsPassword>
      </div>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
