import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { CdsBadge } from './index';

describe('CdsBadge', () => {
  it('renders', () => {
    const wrapper = shallow(
      <div>
        <CdsBadge status="info">2</CdsBadge>
        <CdsBadge color="gray">1</CdsBadge>
      </div>
    );
    const renderedComponent = wrapper.find(CdsBadge);
    expect(renderedComponent.at(0).html()).toMatch(/2/);
    expect(renderedComponent.at(1).html()).toMatch(/1/);
  });

  it('snapshot', () => {
    const wrapper = mount(
      <div>
        <CdsBadge status="info">2</CdsBadge>
        <CdsBadge status="success">3</CdsBadge>
        <CdsBadge status="warning">12</CdsBadge>
        <CdsBadge status="danger">15</CdsBadge>
        <CdsBadge color="gray">1</CdsBadge>
        <CdsBadge color="purple">6</CdsBadge>
        <CdsBadge color="blue">15</CdsBadge>
        <CdsBadge color="orange">2</CdsBadge>
        <CdsBadge color="light-blue">3</CdsBadge>
      </div>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
