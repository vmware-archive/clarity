import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { CdsAction, CdsActionResize, CdsActionSort, CdsActionHandle, CdsActionExpand } from './index';

describe('CdsAction', () => {
  it('renders', () => {
    const wrapper = shallow(
      <div>
        <CdsAction aria-label="open options"></CdsAction>
        <CdsAction aria-label="open menu" shape="bars"></CdsAction>
        <CdsActionResize direction="cross" aria-label="resize column"></CdsActionResize>
        <CdsActionResize direction="main" aria-label="resize column"></CdsActionResize>
        <CdsActionSort aria-label="sort list"></CdsActionSort>
        <CdsActionHandle aria-label="move item"></CdsActionHandle>
        <CdsActionExpand aria-label="open item"></CdsActionExpand>
      </div>
    );
    const renderedComponent = wrapper.find('CdsAction');
    expect(renderedComponent.at(0).html()).toMatch(/<cds-action aria-label="open options"><\/cds-action>/);
  });

  it('snapshot', () => {
    const wrapper = mount(
      <div>
        <CdsAction aria-label="open options"></CdsAction>
        <CdsAction aria-label="open menu" shape="bars"></CdsAction>
        <CdsActionResize direction="cross" aria-label="resize column"></CdsActionResize>
        <CdsActionResize direction="main" aria-label="resize column"></CdsActionResize>
        <CdsActionSort aria-label="sort list"></CdsActionSort>
        <CdsActionHandle aria-label="move item"></CdsActionHandle>
        <CdsActionExpand aria-label="open item"></CdsActionExpand>
      </div>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
