import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { CdsSearch } from './index';
import { CdsFormGroup, CdsControlMessage } from '../forms/index';

describe('CdsSearch', () => {
  it('renders', () => {
    const wrapper = shallow(
      <div>
        <CdsFormGroup>
          <CdsSearch>
            <label>label</label>
            <input type="search" />
            <CdsControlMessage>message text</CdsControlMessage>
          </CdsSearch>
        </CdsFormGroup>
      </div>
    );
    const renderedComponent = wrapper.find(CdsSearch);
    expect(renderedComponent.at(0).html()).toMatch(/label/);
    expect(renderedComponent.at(0).html()).toMatch(/message text/);
  });

  it('snapshot', () => {
    const wrapper = mount(
      <div>
        <h3>Vertical</h3>
        <CdsFormGroup layout="vertical">
          <CdsSearch>
            <label>label</label>
            <input type="search" />
            <CdsControlMessage>message text</CdsControlMessage>
          </CdsSearch>

          <CdsSearch status="error">
            <label>error</label>
            <input type="search" />
            <CdsControlMessage status="error">error message</CdsControlMessage>
          </CdsSearch>

          <CdsSearch status="success">
            <label>success</label>
            <input type="search" />
            <CdsControlMessage status="success">success message</CdsControlMessage>
          </CdsSearch>
        </CdsFormGroup>

        <h3>Horizontal</h3>
        <CdsFormGroup layout="horizontal">
          <CdsSearch layout="horizontal">
            <label>label</label>
            <input type="search" />
            <CdsControlMessage>message text</CdsControlMessage>
          </CdsSearch>

          <CdsSearch layout="horizontal" status="error">
            <label>error</label>
            <input type="search" />
            <CdsControlMessage status="error">error message</CdsControlMessage>
          </CdsSearch>

          <CdsSearch layout="horizontal" status="success">
            <label>success</label>
            <input type="search" />
            <CdsControlMessage status="success">success message</CdsControlMessage>
          </CdsSearch>
        </CdsFormGroup>

        <h3>Compact</h3>
        <CdsFormGroup layout="compact">
          <CdsSearch layout="compact">
            <label>label</label>
            <input type="search" />
            <CdsControlMessage>message text</CdsControlMessage>
          </CdsSearch>

          <CdsSearch layout="compact" status="error">
            <label>error</label>
            <input type="search" />
            <CdsControlMessage status="error">error message</CdsControlMessage>
          </CdsSearch>

          <CdsSearch layout="compact" status="success">
            <label>success</label>
            <input type="search" />
            <CdsControlMessage status="success">success message</CdsControlMessage>
          </CdsSearch>
        </CdsFormGroup>
      </div>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
