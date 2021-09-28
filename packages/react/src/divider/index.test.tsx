import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { CdsDivider } from './index';

describe('CdsDivider', () => {
  it('renders', () => {
    const wrapper = shallow(
      <div>
        <CdsDivider></CdsDivider>
      </div>
    );
    const renderedComponent = wrapper.find(CdsDivider);
    expect(renderedComponent).toBeDefined();
  });

  it('snapshot', () => {
    const vertDivStyle = {
      height: '140px',
      marginTop: '24px',
    };
    const wrapper = mount(
      <div>
        <CdsDivider></CdsDivider>
        <div style={vertDivStyle}>
          <CdsDivider orientation="vertical">1</CdsDivider>
        </div>
      </div>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
