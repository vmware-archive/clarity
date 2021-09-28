import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { CdsControl, CdsControlMessage } from './index';

describe('CdsControl', () => {
  it('renders', () => {
    const wrapper = shallow(
      <div cds-layout="vertical gap:lg">
        <CdsControl layout="compact">
          <label>Foo</label>
          <input placeholder="some custom control" />
          <CdsControlMessage>message text</CdsControlMessage>
        </CdsControl>
      </div>
    );
    const renderedComponent = wrapper.find(CdsControl);
    expect(renderedComponent.at(0).html()).toMatch(/Foo/);
    expect(renderedComponent.at(0).html()).toMatch(/message text/);
  });

  it('snapshot', () => {
    const wrapper = mount(
      <div cds-layout="vertical gap:lg">
        <CdsControl layout="compact">
          <label>label</label>
          <input placeholder="some custom control" />
          <CdsControlMessage>message text</CdsControlMessage>
        </CdsControl>

        <CdsControl layout="compact" status="error">
          <label>label</label>
          <input placeholder="some custom control" />
          <CdsControlMessage status="error">error message</CdsControlMessage>
        </CdsControl>

        <CdsControl layout="compact" status="success">
          <label>label</label>
          <input placeholder="some custom control" />
          <CdsControlMessage status="success">success message</CdsControlMessage>
        </CdsControl>
      </div>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
