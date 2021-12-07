import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { CdsButtonSort } from './index';

describe('CdsButtonSort', () => {
  it('renders', () => {
    const wrapper = shallow(
      <div>
        <CdsButtonSort></CdsButtonSort>
      </div>
    );
    const renderedComponent = wrapper.find(CdsButtonSort);
    expect(renderedComponent.at(0).html()).toMatch(/cds-button-sort/);
  });

  it('snapshot', () => {
    const wrapper = mount(
      <div>
        <CdsButtonSort></CdsButtonSort>
      </div>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
