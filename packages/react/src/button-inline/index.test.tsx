import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { CdsButtonInline } from './index';

describe('CdsButtonInline', () => {
  it('renders', () => {
    const wrapper = shallow(
      <div>
        <CdsButtonInline></CdsButtonInline>
      </div>
    );
    const renderedComponent = wrapper.find(CdsButtonInline);
    expect(renderedComponent.at(0).html()).toMatch(/cds-button-inline/);
  });

  it('snapshot', () => {
    const wrapper = mount(
      <div>
        <CdsButtonInline></CdsButtonInline>
      </div>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
