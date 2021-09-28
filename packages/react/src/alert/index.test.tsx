import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { CdsAlert, CdsAlertActions, CdsAlertGroup } from './index';

describe('CdsAlert', () => {
  it('renders', () => {
    const wrapper = shallow(
      <div>
        <CdsAlert status="success">Foo</CdsAlert>

        <CdsAlertGroup status="info">
          <CdsAlert closable>
            Bar
            <CdsAlertActions>Baz</CdsAlertActions>
          </CdsAlert>
        </CdsAlertGroup>

        <CdsAlertGroup type="banner">
          <CdsAlert status="info">
            Foobar
            <CdsAlertActions>Test</CdsAlertActions>
          </CdsAlert>
        </CdsAlertGroup>
      </div>
    );
    const renderedComponent = wrapper.find(CdsAlert);
    expect(renderedComponent.at(0).html()).toMatch(/Foo/);
    expect(renderedComponent.at(1).html()).toMatch(/Bar/);
  });

  it('snapshot', () => {
    const wrapper = mount(
      <div>
        <CdsAlert status="success">Foo</CdsAlert>

        <CdsAlertGroup status="info">
          <CdsAlert closable>
            Bar
            <CdsAlertActions>Baz</CdsAlertActions>
          </CdsAlert>
        </CdsAlertGroup>

        <CdsAlertGroup type="banner">
          <CdsAlert status="info">
            Foobar
            <CdsAlertActions>Test</CdsAlertActions>
          </CdsAlert>
        </CdsAlertGroup>
      </div>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
