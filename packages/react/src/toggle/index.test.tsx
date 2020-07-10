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
    const renderedComponent = wrapper.find('ReactWrapperComponent');
    expect(renderedComponent.at(0).html()).toBeDefined();
    expect(renderedComponent.at(1).html()).toBeDefined();
    expect(renderedComponent.at(2).html()).toBeDefined();
    expect(renderedComponent.at(3).html()).toMatch(/group message text/);
    expect(renderedComponent.at(4).html()).toBeDefined();
    expect(renderedComponent.at(5).html()).toMatch(/message text/);
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
