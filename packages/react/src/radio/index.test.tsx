import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { CdsRadio, CdsRadioGroup } from './index';

describe('CdsRadio', () => {
  it('renders', () => {
    const wrapper = shallow(
      <div>
        <CdsRadioGroup>
          <label>radio group</label>
          <CdsRadio>
            <label>radio 1</label>
            <input type="radio" defaultChecked />
          </CdsRadio>

          <CdsRadio>
            <label>radio 2</label>
            <input type="radio" />
          </CdsRadio>

          <CdsRadio>
            <label>radio 3</label>
            <input type="radio" />
          </CdsRadio>
        </CdsRadioGroup>
      </div>
    );
    const renderedComponent = wrapper.find(CdsRadio);
    expect(renderedComponent.at(0).html()).toMatch(/radio 1/);
    expect(renderedComponent.at(1).html()).toMatch(/radio 2/);
    expect(renderedComponent.at(2).html()).toMatch(/radio 3/);
  });

  it('snapshot', () => {
    const wrapper = mount(
      <div>
        <CdsRadioGroup>
          <label>radio group</label>
          <CdsRadio>
            <label>radio 1</label>
            <input type="radio" defaultChecked />
          </CdsRadio>

          <CdsRadio>
            <label>radio 2</label>
            <input type="radio" />
          </CdsRadio>

          <CdsRadio>
            <label>radio 3</label>
            <input type="radio" />
          </CdsRadio>
        </CdsRadioGroup>
      </div>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
