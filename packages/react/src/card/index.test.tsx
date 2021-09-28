import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { CdsCard } from './index';

describe('CdsCard', () => {
  it('renders', () => {
    const wrapper = shallow(
      <div>
        <CdsCard>Placeholder</CdsCard>
      </div>
    );
    const renderedComponent = wrapper.find(CdsCard);
    expect(renderedComponent.at(0).html()).toMatch(/Placeholder/);
  });

  it('snapshot', () => {
    const wrapper = mount(
      <div>
        <CdsCard>Placeholder</CdsCard>
      </div>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
