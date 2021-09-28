import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { CdsTime } from './index';
import { CdsControlMessage } from '../forms/index';

describe('CdsTime', () => {
  it('renders', () => {
    const wrapper = shallow(
      <div>
        <CdsTime control-width="shrink">
          <label>Time input</label>
          <input type="time" min="09:00" max="18:00" defaultValue="11:00" />
          <CdsControlMessage>message text</CdsControlMessage>
        </CdsTime>
      </div>
    );

    const renderedComponent = wrapper.find(CdsTime);
    expect(renderedComponent.at(0).html()).toMatch(/Time input/);
    expect(renderedComponent.at(0).html()).toMatch(/message text/);
  });

  it('snapshot', () => {
    const wrapper = mount(
      <div>
        <CdsTime control-width="shrink">
          <label>Time input</label>
          <input type="time" min="09:00" max="18:00" defaultValue="11:00" />
          <CdsControlMessage>message text</CdsControlMessage>
        </CdsTime>
      </div>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
