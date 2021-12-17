import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { CdsSignpost } from './index';

describe('CdsSignpost', () => {
  it('renders', () => {
    const wrapper = shallow(
      <div>
        <CdsSignpost></CdsSignpost>
      </div>
    );
    const renderedComponent = wrapper.find(CdsSignpost);
    expect(renderedComponent).toBeDefined();
  });

  it('snapshot', () => {
    const vertDivStyle = {
      height: '140px',
      marginTop: '24px',
    };
    const wrapper = mount(
      <div>
        <CdsSignpost></CdsSignpost>
        <div style={vertDivStyle}>
          <CdsSignpost orientation="vertical">1</CdsSignpost>
        </div>
      </div>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
