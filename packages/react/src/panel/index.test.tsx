import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { CdsInternalPanel } from './index';

describe('CdsInternalPanel', () => {
  it('renders', () => {
    const wrapper = shallow(
      <div>
        <CdsInternalPanel>Hello!</CdsInternalPanel>
      </div>
    );
    const renderedComponent = wrapper.find(CdsInternalPanel);
    expect(renderedComponent.at(0).html()).toMatch('Hello!');
  });

  it('snapshot', () => {
    const wrapper = mount(
      <div>
        <CdsInternalPanel>Hello!</CdsInternalPanel>
      </div>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
