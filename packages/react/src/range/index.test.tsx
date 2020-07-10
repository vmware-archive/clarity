import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { CdsRange } from './index';
import { CdsFormGroup, CdsControlMessage } from '../forms/index';

describe('CdsRange', () => {
  it('renders', () => {
    const wrapper = shallow(
      <div>
        <CdsRange>
          <label>label</label>
          <input type="range" />
          <CdsControlMessage>message text</CdsControlMessage>
        </CdsRange>
      </div>
    );

    const renderedComponent = wrapper.find('ReactWrapperComponent');
    expect(renderedComponent.at(0).html()).toBeDefined();
    expect(renderedComponent.at(1).html()).toMatch(/message text/);
  });

  it('snapshot', () => {
    const wrapper = mount(
      <div>
        <CdsFormGroup layout="horizontal">
          <CdsRange layout="horizontal">
            <label>label</label>
            <input type="range" />
            <CdsControlMessage>message text</CdsControlMessage>
          </CdsRange>

          <CdsRange layout="horizontal">
            <label>disabled</label>
            <input type="range" disabled />
            <CdsControlMessage>disabled message</CdsControlMessage>
          </CdsRange>

          <CdsRange layout="horizontal" status="error">
            <label>error</label>
            <input type="range" />
            <CdsControlMessage status="error">error message</CdsControlMessage>
          </CdsRange>

          <CdsRange layout="horizontal" status="success">
            <label>success</label>
            <input type="range" />
            <CdsControlMessage status="success">success message</CdsControlMessage>
          </CdsRange>
        </CdsFormGroup>
      </div>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
