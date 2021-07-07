import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { CdsAccordion, CdsAccordionSection, CdsAccordionHeader, CdsAccordionContent } from './index';

describe('CdsAccordion', () => {
  it('renders', () => {
    const wrapper = shallow(
      <div>
        <CdsAccordion>
          <CdsAccordionSection expanded>
            <CdsAccordionHeader>Item 1</CdsAccordionHeader>
            <CdsAccordionContent>Content 1</CdsAccordionContent>
          </CdsAccordionSection>
        </CdsAccordion>
      </div>
    );
    const renderedComponent = wrapper.find('CdsAccordion');
    expect(renderedComponent.at(0).html()).toMatch(/Item 1/);
    expect(renderedComponent.at(0).html()).toMatch(/Content 1/);
  });

  it('snapshot', () => {
    const wrapper = mount(
      <div>
        <CdsAccordion>
          <CdsAccordionSection expanded>
            <CdsAccordionHeader>Item 1</CdsAccordionHeader>
            <CdsAccordionContent>Content 1</CdsAccordionContent>
          </CdsAccordionSection>
        </CdsAccordion>
      </div>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
