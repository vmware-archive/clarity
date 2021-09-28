import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { CdsToggle, CdsToggleGroup } from './index';
import { CdsControlMessage } from '../forms/index';

describe('CdsToggle', () => {
  it('renders', () => {
    const wrapper = shallow(
      <div>
        <CdsToggleGroup>
          <label>A toggle group</label>
          <CdsToggle>
            <label>Toggle 1</label>
            <input type="checkbox" />
          </CdsToggle>
          <CdsToggle>
            <label>Toggle 2</label>
            <input type="checkbox" />
          </CdsToggle>
          <CdsControlMessage>group message text</CdsControlMessage>
        </CdsToggleGroup>

        <CdsToggle>
          <label>Toggle</label>
          <input type="checkbox" />
          <CdsControlMessage>message text</CdsControlMessage>
        </CdsToggle>
      </div>
    );
    const renderedComponent = wrapper.find(CdsToggle);
    expect(renderedComponent.at(0).html()).toMatch(/Toggle 1/);
    expect(renderedComponent.at(1).html()).toMatch(/Toggle 2/);
    expect(renderedComponent.at(2).html()).toMatch(/Toggle/);
  });

  it('snapshot', () => {
    const wrapper = mount(
      <div>
        <CdsToggleGroup>
          <label>A toggle group</label>
          <CdsToggle>
            <label>Toggle 1</label>
            <input type="checkbox" />
          </CdsToggle>
          <CdsToggle>
            <label>Toggle 2</label>
            <input type="checkbox" />
          </CdsToggle>
          <CdsControlMessage>group message text</CdsControlMessage>
        </CdsToggleGroup>

        <CdsToggle>
          <label>Toggle</label>
          <input type="checkbox" />
          <CdsControlMessage>message text</CdsControlMessage>
        </CdsToggle>
      </div>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
