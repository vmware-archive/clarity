import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { CdsDatalist } from './index';

describe('CdsDatalist', () => {
  it('renders', () => {
    const wrapper = shallow(
      <div>
        <CdsDatalist>
          <label>datalist</label>
          <input placeholder="placeholder text" />
          <datalist>
            <option value="Item 1"></option>
            <option value="Item 2"></option>
            <option value="Item 3"></option>
          </datalist>
        </CdsDatalist>
      </div>
    );
    const renderedComponent = wrapper.find(CdsDatalist);
    expect(renderedComponent.html()).toMatch(/datalist/);
  });

  it('snapshot', () => {
    const wrapper = mount(
      <div>
        <CdsDatalist>
          <label>datalist</label>
          <input placeholder="placeholder text" />
          <datalist>
            <option value="Item 1"></option>
            <option value="Item 2"></option>
            <option value="Item 3"></option>
          </datalist>
        </CdsDatalist>
      </div>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
