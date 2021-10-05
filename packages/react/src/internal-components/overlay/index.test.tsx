import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { CdsInternalOverlay } from './index';

describe('CdsInternalOverlay', () => {
  it('renders', () => {
    const wrapper = shallow(
      <div>
        <CdsInternalOverlay>Internal Overlay</CdsInternalOverlay>
      </div>
    );
    const renderedComponent = wrapper.find(CdsInternalOverlay);
    expect(renderedComponent.at(0).html()).toMatch(/Internal Overlay/);
  });

  it('snapshot', () => {
    const wrapper = mount(
      <div>
        <CdsInternalOverlay>Internal Overlay</CdsInternalOverlay>
      </div>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
