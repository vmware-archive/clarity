import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { CdsIcon } from './index';
import { ClarityIcons, userIcon, timesIcon } from '@clr/core/icon';

ClarityIcons.addIcons(userIcon, timesIcon);

describe('CdsBadge', () => {
  it('renders', () => {
    const wrapper = shallow(
      <div>
        <CdsIcon size="lg" shape="user"></CdsIcon>
        <CdsIcon size="lg" shape="user" badge="info"></CdsIcon>
        <CdsIcon size="lg" shape="user" badge="success"></CdsIcon>
        <CdsIcon size="lg" shape="user" badge="danger"></CdsIcon>
        <CdsIcon size="lg" shape="user" badge="warning-triangle"></CdsIcon>
      </div>
    );
    const renderedComponent = wrapper.find('ReactWrapperComponent');
    expect(renderedComponent.at(0).html()).toBeDefined();
    expect(renderedComponent.at(1).html()).toBeDefined();
    expect(renderedComponent.at(2).html()).toBeDefined();
    expect(renderedComponent.at(3).html()).toBeDefined();
    expect(renderedComponent.at(4).html()).toBeDefined();
  });

  it('snapshot', () => {
    const wrapper = mount(
      <div>
        <CdsIcon size="lg" shape="user"></CdsIcon>
        <CdsIcon size="lg" shape="user" badge="info"></CdsIcon>
        <CdsIcon size="lg" shape="user" badge="success"></CdsIcon>
        <CdsIcon size="lg" shape="user" badge="danger"></CdsIcon>
        <CdsIcon size="lg" shape="user" badge="warning-triangle"></CdsIcon>
      </div>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
