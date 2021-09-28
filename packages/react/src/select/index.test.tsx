import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { CdsSelect } from './index';
import { CdsFormGroup, CdsControlMessage } from '../forms/index';

describe('CdsSelect', () => {
  it('renders', () => {
    const wrapper = shallow(
      <div>
        <CdsFormGroup>
          <CdsSelect>
            <label>label</label>
            <select>
              <option>option one</option>
              <option>option two</option>
              <option>option three</option>
            </select>
            <CdsControlMessage>message text</CdsControlMessage>
          </CdsSelect>
        </CdsFormGroup>
      </div>
    );

    const renderedComponent = wrapper.find(CdsSelect);
    expect(renderedComponent.at(0).html()).toMatch(/label/);
    expect(renderedComponent.at(0).html()).toMatch(/message text/);
  });

  it('snapshot', () => {
    const wrapper = mount(
      <div>
        <h3>Selects</h3>

        <CdsFormGroup layout="horizontal">
          <CdsSelect>
            <label>label</label>
            <select>
              <option>option one</option>
              <option>option two</option>
              <option>option three</option>
            </select>
            <CdsControlMessage>message text</CdsControlMessage>
          </CdsSelect>

          <CdsSelect status="error">
            <label>error</label>
            <select>
              <option>option one</option>
              <option>option two</option>
              <option>option three</option>
            </select>
            <CdsControlMessage status="error">error message</CdsControlMessage>
          </CdsSelect>

          <CdsSelect status="success">
            <label>success</label>
            <select>
              <option>option one</option>
              <option>option two</option>
              <option>option three</option>
            </select>
            <CdsControlMessage status="success">success message</CdsControlMessage>
          </CdsSelect>
        </CdsFormGroup>

        <h3>Multi-selects</h3>
        <CdsSelect>
          <label>label</label>
          <select multiple>
            <option>Option One</option>
            <option>Option Two</option>
            <option>Option Three</option>
            <option>Option Four</option>
            <option>Option Five</option>
          </select>
          <CdsControlMessage>message text</CdsControlMessage>
        </CdsSelect>
      </div>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
