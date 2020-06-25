import * as React from 'react';
import { mount, shallow } from 'enzyme';
import TestComponent from './test-component.mock';
import { createReactComponent } from './react-wrapper';

describe('CdsTestComponent', () => {
  let CdsTestComponent: any;

  beforeEach(() => {
    type baseType = { nativeElement: Promise<typeof TestComponent> };
    type CdsTestComponentType = TestComponent &
      baseType & { onEvent1: (e: any) => string; onEvent2: (e: any) => number };
    CdsTestComponent = createReactComponent<CdsTestComponentType>('cds-test-component');
  });

  afterEach(() => {
    CdsTestComponent = null;
  });

  it('renders', () => {
    const wrapper = shallow(
      <div>
        <CdsTestComponent>Hello World</CdsTestComponent>
      </div>
    );
    const renderedComponent = wrapper.find('ReactWrapperComponent');
    expect(renderedComponent.html()).toMatch(/Hello World/);
  });

  it('creates custom properties', () => {
    const wrapper = shallow(
      <div>
        <CdsTestComponent prop1="val1" prop2={3}>
          Hello World
        </CdsTestComponent>
      </div>
    );
    const renderedComponent = wrapper.find('ReactWrapperComponent');

    expect(renderedComponent.prop('prop1')).toEqual('val1');
    expect(renderedComponent.prop('prop2')).toEqual(3);
  });

  it('creates custom events', () => {
    const event1Handler = () => 'event1';
    const event2Handler = () => 5;

    const wrapper = shallow(
      <div>
        <CdsTestComponent onEvent1={event1Handler} onEvent2={event2Handler}>
          Hello World
        </CdsTestComponent>
      </div>
    );
    const renderedComponent = wrapper.find('ReactWrapperComponent');

    const eventHandler1 = renderedComponent.prop('onEvent1');
    const eventHandler2 = renderedComponent.prop('onEvent2');

    expect(typeof eventHandler1).toBe('function');
    expect(typeof eventHandler2).toBe('function');
  });

  it('returns a ref through nativeElement getter', () => {
    const wrapper = shallow(
      <div>
        <CdsTestComponent>Hello World</CdsTestComponent>
      </div>
    );
    const renderedComponent = wrapper.find('ReactWrapperComponent');
    renderedComponent;
  });

  it('snapshot', () => {
    const wrapper = mount(
      <CdsTestComponent prop1="val1" prop2={3}>
        Hello World
      </CdsTestComponent>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
