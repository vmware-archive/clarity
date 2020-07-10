import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { CdsInput, CdsInputGroup } from './index';

describe('CdsInput', () => {
  it('renders', () => {
    const wrapper = shallow(
      <div>
        <CdsInputGroup>
          <CdsInput layout="vertical">
            <label>label</label>
            <input placeholder="name" />
          </CdsInput>
          <CdsInput layout="vertical">
            <label>disabled</label>
            <input placeholder="name" disabled />
          </CdsInput>
        </CdsInputGroup>
      </div>
    );
    const renderedComponent = wrapper.find('ReactWrapperComponent');
    expect(renderedComponent.at(0).html()).toMatch(/label/);
  });

  it('snapshot', () => {
    const wrapper = mount(
      <div>
        <CdsInputGroup>
          <CdsInput layout="vertical">
            <label>label</label>
            <input placeholder="name" />
          </CdsInput>
          <CdsInput layout="vertical">
            <label>disabled</label>
            <input placeholder="name" disabled />
          </CdsInput>
        </CdsInputGroup>
      </div>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
