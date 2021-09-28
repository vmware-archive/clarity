import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { CdsBreadcrumb } from './index';

describe('CdsBreadcrumb', () => {
  it('renders', () => {
    const wrapper = shallow(
      <div>
        <CdsBreadcrumb>
          <a href="#">link 1</a>
          <a href="#">link 2</a>
        </CdsBreadcrumb>
      </div>
    );
    const renderedComponent = wrapper.find(CdsBreadcrumb);
    expect(renderedComponent.at(0).html()).toMatch(/link 1/);
  });

  it('snapshot', () => {
    const wrapper = mount(
      <div>
        <CdsBreadcrumb>
          <a href="#">link 1</a>
          <a href="#">link 2</a>
        </CdsBreadcrumb>
      </div>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
