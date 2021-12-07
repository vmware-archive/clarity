import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { CdsButtonHandle } from './index';

describe('CdsButtonAction', () => {
  it('renders', () => {
    const wrapper = shallow(
      <div>
        <CdsButtonHandle></CdsButtonHandle>
      </div>
    );
    const renderedComponent = wrapper.find(CdsButtonHandle);
    expect(renderedComponent.at(0).html()).toMatch(/cds-button-handle/);
  });

  it('snapshot', () => {
    const wrapper = mount(
      <div>
        <CdsButtonHandle></CdsButtonHandle>
      </div>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
