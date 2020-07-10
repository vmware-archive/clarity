import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { CdsFile } from './index';

describe('CdsFile', () => {
  it('renders', () => {
    const wrapper = shallow(
      <div>
        <CdsFile layout="vertical">
          <label>label</label>
          <input type="file" multiple />
        </CdsFile>
      </div>
    );
    const renderedComponent = wrapper.find('ReactWrapperComponent');
    expect(renderedComponent.html()).toMatch(/label/);
  });

  it('snapshot', () => {
    const wrapper = mount(
      <div>
        <CdsFile layout="vertical">
          <label>label</label>
          <input type="file" multiple />
        </CdsFile>
      </div>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
