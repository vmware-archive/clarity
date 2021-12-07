import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { CdsButtonExpand } from './index';

describe('CdsButtonAction', () => {
  it('renders', () => {
    const wrapper = shallow(
      <div>
        <CdsButtonExpand></CdsButtonExpand>
      </div>
    );
    const renderedComponent = wrapper.find(CdsButtonExpand);
    expect(renderedComponent.at(0).html()).toMatch(/cds-button-expand/);
  });

  it('snapshot', () => {
    const wrapper = mount(
      <div>
        <CdsButtonExpand></CdsButtonExpand>
      </div>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
