import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { CdsProgressCircle } from './index';

describe('CdsProgressCircle', () => {
  it('renders', () => {
    const wrapper = shallow(
      <div>
        <CdsProgressCircle status="info" value={49}></CdsProgressCircle>
        <CdsProgressCircle value={0}></CdsProgressCircle>
        <CdsProgressCircle status="success" value={100}></CdsProgressCircle>
      </div>
    );
    const renderedComponent = wrapper.find(CdsProgressCircle);
    expect(renderedComponent.at(0)).toBeDefined();
    expect(renderedComponent.at(1)).toBeDefined();
    expect(renderedComponent.at(2)).toBeDefined();
  });

  it('snapshot', () => {
    const wrapper = mount(
      <div>
        <CdsProgressCircle status="info" value={49}></CdsProgressCircle>
        <CdsProgressCircle value={0}></CdsProgressCircle>
        <CdsProgressCircle status="success" value={100}></CdsProgressCircle>
      </div>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
