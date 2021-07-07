import { CdsAccordion as Accordion } from '@cds/core/accordion';
import { CdsAccordionContent as AccordionContent } from '@cds/core/accordion';
import { CdsAccordionHeader as AccordionHeader } from '@cds/core/accordion';
import { CdsAccordionSection as AccordionSection } from '@cds/core/accordion';
import '@cds/core/accordion/register';
import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { logReactVersion } from '../utils';

// add react util here in all components.
// Document that it needs to be part of each component in React.

export const CdsAccordion = createComponent(React, 'cds-accordion', Accordion, {}, 'CdsAccordion');
export const CdsAccordionSection = createComponent(
  React,
  'cds-accordion-section',
  AccordionSection,
  {
    onExpandedChange: 'expandedChange',
    onCdsMotionChange: 'cdsMotionChange',
  },
  'CdsAccordionSection'
);
export const CdsAccordionHeader = createComponent(
  React,
  'cds-accordion-header',
  AccordionHeader,
  {},
  'CdsAccordionHeader'
);
export const CdsAccordionContent = createComponent(
  React,
  'cds-accordion-content',
  AccordionContent,
  {},
  'CdsAccordionContent'
);

logReactVersion(React);
