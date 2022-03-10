import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { CdsAccordion, CdsAccordionPanel, CdsAccordionHeader, CdsAccordionContent } from './index';

describe('CdsAccordion', () => {
  it('renders', async () => {
    render(
      <CdsAccordion>
        <CdsAccordionPanel expanded>
          <CdsAccordionHeader>Item 1</CdsAccordionHeader>
          <CdsAccordionContent>Content 1</CdsAccordionContent>
        </CdsAccordionPanel>
      </CdsAccordion>
    );

    expect(await document.querySelector('cds-accordion')).toBeInTheDocument();
    expect(await screen.findByText(/item 1/i)).toBeInTheDocument();
    expect(await screen.findByText(/content 1/i)).toBeInTheDocument();
  });

  it('snapshot', () => {
    const { container } = render(
      <CdsAccordion>
        <CdsAccordionPanel expanded>
          <CdsAccordionHeader id="my-header">Item 1</CdsAccordionHeader>
          <CdsAccordionContent id="my-content">Content 1</CdsAccordionContent>
        </CdsAccordionPanel>
      </CdsAccordion>
    );
    expect(container).toMatchSnapshot();
  });
});
