import * as React from 'react';
import { mount, shallow } from 'enzyme';
import TestComponent from './test-component.mock';
import { createComponent } from './react-wrapper';

describe('CdsTestComponent', () => {
  let CdsTestComponent: any;

  beforeEach(() => {
    CdsTestComponent = createComponent('cds-test-component', TestComponent, { onEvent1: 'event1', onEvent2: 'event2' });
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
    const renderedComponent = wrapper.find('CdsTestComponent');
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
    const renderedComponent = wrapper.find('CdsTestComponent');

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
    const renderedComponent = wrapper.find('CdsTestComponent');

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
    const renderedComponent = wrapper.find('CdsTestComponent');
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

  it('correctly passes down className to the underlying web component', () => {
    const wrapper = mount(
      <div>
        <CdsTestComponent className="test-classname">Hello World</CdsTestComponent>
      </div>
    );

    const { classList } = wrapper.find('CdsTestComponent').getDOMNode();
    expect(classList).toHaveLength(1);
    expect(classList).toContain('test-classname');
  });
});
