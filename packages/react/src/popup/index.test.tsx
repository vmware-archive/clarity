import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { CdsInternalPointer, CdsInternalPopup } from './index';

describe('CdsModal', () => {
  it('renders', () => {
    const wrapper = shallow(
      <div>
        <CdsInternalPopup>
          <CdsInternalPointer type="angle"></CdsInternalPointer>
          Ohai
        </CdsInternalPopup>
      </div>
    );
    const renderedComponent = wrapper.find(CdsInternalPopup);
    expect(renderedComponent.at(0).html()).toMatch(/Ohai/);
  });

  it('snapshot', () => {
    const wrapper = mount(
      <div>
        <CdsInternalPopup>
          <CdsInternalPointer type="angle"></CdsInternalPointer>
          Ohai
        </CdsInternalPopup>
      </div>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
