import * as React from 'react';
import { mount, shallow } from 'enzyme';
import TestComponent from './TestComponent.mock';
import { wrapCustomElement } from './wrapCustomElement';

describe('CdsTestComponent', () => {
  const setup = () =>
    wrapCustomElement<
      TestComponent & {
        onEvent1: TestComponent['event1'];
        onEvent2: TestComponent['event2'];
      }
    >('cds-test-component');

  it('renders', () => {
    const CdsTestComponent = setup();
    const wrapper = shallow(
      <div>
        <CdsTestComponent>Hello World</CdsTestComponent>
      </div>
    );
    const renderedComponent = wrapper.find('CustomElement(cds-test-component)');
    expect(renderedComponent.html()).toMatch(/Hello World/);
  });

  it('creates custom properties', () => {
    const CdsTestComponent = setup();
    const wrapper = shallow(
      <div>
        <CdsTestComponent prop1="val1" prop2={3}>
          Hello World
        </CdsTestComponent>
      </div>
    );
    const renderedComponent = wrapper.find('CustomElement(cds-test-component)');

    expect(renderedComponent.prop('prop1')).toEqual('val1');
    expect(renderedComponent.prop('prop2')).toEqual(3);
  });

  it('creates custom events', () => {
    const CdsTestComponent = setup();
    const event1Handler = () => 'event1';
    const event2Handler = () => 5;

    const wrapper = shallow(
      <div>
        <CdsTestComponent onEvent1={event1Handler} onEvent2={event2Handler}>
          Hello World
        </CdsTestComponent>
      </div>
    );
    const renderedComponent = wrapper.find('CustomElement(cds-test-component)');

    const eventHandler1 = renderedComponent.prop('onEvent1');
    const eventHandler2 = renderedComponent.prop('onEvent2');

    expect(typeof eventHandler1).toBe('function');
    expect(typeof eventHandler2).toBe('function');
  });

  it('returns a ref through nativeElement getter', () => {
    const CdsTestComponent = setup();
    const wrapper = shallow(
      <div>
        <CdsTestComponent>Hello World</CdsTestComponent>
      </div>
    );
    const renderedComponent = wrapper.find('CustomElement(cds-test-component)');
    renderedComponent;
  });

  it('snapshot', () => {
    const CdsTestComponent = setup();
    const wrapper = mount(
      <CdsTestComponent prop1="val1" prop2={3}>
        Hello World
      </CdsTestComponent>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
