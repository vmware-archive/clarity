import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { CdsTag } from './index';

describe('CdsTag', () => {
  it('renders', () => {
    const wrapper = shallow(
      <div>
        <CdsTag readonly status="info">
          Info
        </CdsTag>
        <CdsTag readonly status="success">
          Success
        </CdsTag>
      </div>
    );
    const renderedComponent = wrapper.find(CdsTag);
    expect(renderedComponent.at(0).html()).toMatch(/Info/);
    expect(renderedComponent.at(1).html()).toMatch(/Success/);
  });

  it('snapshot', () => {
    const wrapper = mount(
      <div>
        <CdsTag readonly status="info">
          Info
        </CdsTag>
        <CdsTag readonly status="success">
          Success
        </CdsTag>
      </div>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
