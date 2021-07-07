import { CdsAccordion as Accordion } from '@cds/core/accordion';
import { CdsAccordionContent as AccordionContent } from '@cds/core/accordion';
import { CdsAccordionHeader as AccordionHeader } from '@cds/core/accordion';
import { CdsAccordionSection as AccordionSection } from '@cds/core/accordion';
import '@cds/core/accordion/register';
import { createComponent } from '../converter/react-wrapper.js';

export const CdsAccordion = createComponent('cds-accordion', Accordion);
export const CdsAccordionSection = createComponent('cds-accordion-section', AccordionSection, {
  onExpandedChange: 'expandedChange',
  onCdsMotionChange: 'cdsMotionChange',
});
export const CdsAccordionHeader = createComponent('cds-accordion-header', AccordionHeader);
export const CdsAccordionContent = createComponent('cds-accordion-content', AccordionContent);
