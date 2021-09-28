import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { CdsButton } from './index';

describe('CdsButton', () => {
  it('renders', () => {
    const wrapper = shallow(
      <div>
        <CdsButton status="primary">primary</CdsButton>
        <CdsButton status="success">success</CdsButton>
        <CdsButton status="danger">danger</CdsButton>
        <CdsButton status="danger" disabled>
          disabled
        </CdsButton>
      </div>
    );
    const renderedComponent = wrapper.find(CdsButton);
    expect(renderedComponent.at(0).html()).toMatch(/primary/);
    expect(renderedComponent.at(1).html()).toMatch(/success/);
    expect(renderedComponent.at(2).html()).toMatch(/danger/);
    expect(renderedComponent.at(3).html()).toMatch(/disabled/);
  });

  it('snapshot', () => {
    const wrapper = mount(
      <div>
        <CdsButton status="primary">primary</CdsButton>
        <CdsButton status="success">success</CdsButton>
        <CdsButton status="danger">danger</CdsButton>
        <CdsButton status="danger" disabled>
          disabled
        </CdsButton>
      </div>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
