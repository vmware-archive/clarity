import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { CdsModal, CdsModalActions, CdsModalContent, CdsModalHeader } from './index';

describe('CdsModal', () => {
  it('renders', () => {
    const wrapper = shallow(
      <div>
        <CdsModal>
          <CdsModalHeader>
            <h3 cds-text="title">My Modal</h3>
          </CdsModalHeader>
          <CdsModalContent>
            <div cds-layout="vertical gap:md p-y:xs">
              <p cds-text="body">Lorem Ipsum</p>
            </div>
          </CdsModalContent>
          <CdsModalActions>
            <div cds-layout="horizontal gap:sm align:right">Foo</div>
          </CdsModalActions>
        </CdsModal>
      </div>
    );
    const renderedComponent = wrapper.find(CdsModal);
    expect(renderedComponent.at(0).html()).toMatch(/My Modal/);
    expect(renderedComponent.at(0).html()).toMatch(/Lorem Ipsum/);
    expect(renderedComponent.at(0).html()).toMatch(/Foo/);
  });

  it('snapshot', () => {
    const wrapper = mount(
      <div>
        <CdsModal>
          <CdsModalHeader>
            <h3 cds-text="title">My Modal</h3>
          </CdsModalHeader>
          <CdsModalContent>
            <div cds-layout="vertical gap:md p-y:xs">
              <p cds-text="body">Lorem Ipsum</p>
            </div>
          </CdsModalContent>
          <CdsModalActions>
            <div cds-layout="horizontal gap:sm align:right">Foo</div>
          </CdsModalActions>
        </CdsModal>
      </div>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
