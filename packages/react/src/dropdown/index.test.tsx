import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { CdsDropdown } from './index';

describe('CdsDropdown', () => {
  it('renders', () => {
    const wrapper = shallow(
      <div>
        <CdsDropdown></CdsDropdown>
      </div>
    );
    const renderedComponent = wrapper.find(CdsDropdown);
    expect(renderedComponent).toBeDefined();
  });

  it('snapshot', () => {
    const vertDivStyle = {
      height: '140px',
      marginTop: '24px',
    };
    const wrapper = mount(
      <div>
        <CdsDropdown></CdsDropdown>
        <div style={vertDivStyle}>
          <CdsDropdown orientation="vertical">1</CdsDropdown>
        </div>
      </div>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
