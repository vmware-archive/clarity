import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { CdsTextarea } from './index';
import { CdsFormGroup, CdsControlMessage } from '../forms/index';

describe('CdsTextarea', () => {
  it('renders', () => {
    const wrapper = shallow(
      <div>
        <CdsFormGroup layout="vertical">
          <CdsTextarea layout="vertical">
            <label>label</label>
            <textarea></textarea>
            <CdsControlMessage>message text</CdsControlMessage>
          </CdsTextarea>
        </CdsFormGroup>
      </div>
    );

    const renderedComponent = wrapper.find(CdsTextarea);
    expect(renderedComponent.at(0).html()).toMatch(/label/);
    expect(renderedComponent.at(0).html()).toMatch(/message text/);
  });

  it('snapshot', () => {
    const wrapper = mount(
      <div>
        <h3>Vertical</h3>
        <CdsFormGroup layout="vertical">
          <CdsTextarea layout="vertical">
            <label>label</label>
            <textarea></textarea>
            <CdsControlMessage>message text</CdsControlMessage>
          </CdsTextarea>

          <CdsTextarea layout="vertical" status="error">
            <label>error status</label>
            <textarea></textarea>
            <CdsControlMessage status="error">error message</CdsControlMessage>
          </CdsTextarea>

          <CdsTextarea layout="vertical" status="success">
            <label>success status</label>
            <textarea></textarea>
            <CdsControlMessage status="success">success message</CdsControlMessage>
          </CdsTextarea>
        </CdsFormGroup>

        <h3>Horizontal</h3>
        <CdsFormGroup layout="horizontal">
          <CdsTextarea layout="horizontal">
            <label>label</label>
            <textarea></textarea>
            <CdsControlMessage>message text</CdsControlMessage>
          </CdsTextarea>

          <CdsTextarea layout="horizontal" status="error">
            <label>error status</label>
            <textarea></textarea>
            <CdsControlMessage status="error">error message</CdsControlMessage>
          </CdsTextarea>

          <CdsTextarea layout="horizontal" status="success">
            <label>success status</label>
            <textarea></textarea>
            <CdsControlMessage status="success">success message</CdsControlMessage>
          </CdsTextarea>
        </CdsFormGroup>
      </div>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
