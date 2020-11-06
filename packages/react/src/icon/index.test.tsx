import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { CdsIcon } from './index';
import { ClarityIcons, userIcon, timesIcon } from '@cds/core/icon';

ClarityIcons.addIcons(userIcon, timesIcon);

describe('CdsIcon', () => {
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
    const renderedComponent = wrapper.find('CdsIcon');
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
