import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { CdsButtonAction } from './index';

describe('CdsButtonAction', () => {
  it('renders', () => {
    const wrapper = shallow(
      <div>
        <CdsButtonAction shape="close"></CdsButtonAction>
      </div>
    );
    const renderedComponent = wrapper.find(CdsButtonAction);
    expect(renderedComponent.at(0).html()).toMatch(/cds-button-action/);
  });

  it('snapshot', () => {
    const wrapper = mount(
      <div>
        <CdsButtonAction shape="close"></CdsButtonAction>
      </div>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
