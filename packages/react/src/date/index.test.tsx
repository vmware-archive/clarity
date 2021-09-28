import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { CdsDate } from './index';
import { CdsControlMessage } from '../forms/index';

describe('CdsDate', () => {
  it('renders', () => {
    const wrapper = shallow(
      <div>
        <CdsDate layout="horizontal" control-width="shrink">
          <label>Date input</label>
          <input type="date" defaultValue="2018-07-22" min="2018-01-01" max="2019-12-31" />
          <CdsControlMessage>message text</CdsControlMessage>
        </CdsDate>
      </div>
    );

    const renderedComponent = wrapper.find(CdsDate);
    expect(renderedComponent.at(0).html()).toMatch(/Date input/);
  });

  it('snapshot', () => {
    const wrapper = mount(
      <div>
        <CdsDate layout="horizontal" control-width="shrink">
          <label>Date input</label>
          <input type="date" defaultValue="2018-07-22" min="2018-01-01" max="2019-12-31" />
          <CdsControlMessage>message text</CdsControlMessage>
        </CdsDate>
      </div>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
