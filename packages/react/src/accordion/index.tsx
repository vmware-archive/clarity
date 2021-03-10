import { CdsAccordion as Accordion } from '@cds/core/accordion';
import { CdsAccordionContent as AccordionContent } from '@cds/core/accordion';
import { CdsAccordionHeader as AccordionHeader } from '@cds/core/accordion';
import { CdsAccordionPanel as AccordionPanel } from '@cds/core/accordion';
import '@cds/core/accordion/register';
import { createComponent } from '../converter/react-wrapper.js';

export const CdsAccordion = createComponent('cds-accordion', Accordion);
export const CdsAccordionPanel = createComponent('cds-accordion-panel', AccordionPanel, {
  onExpandedChange: 'expandedChange',
  onCdsMotionChange: 'cdsMotionChange',
});
export const CdsAccordionHeader = createComponent('cds-accordion-header', AccordionHeader);
export const CdsAccordionContent = createComponent('cds-accordion-content', AccordionContent);
