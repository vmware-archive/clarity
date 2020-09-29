import { CdsAccordion as Accordion } from '@clr/core/accordion';
import { CdsAccordionContent as AccordionContent } from '@clr/core/accordion';
import { CdsAccordionHeader as AccordionHeader } from '@clr/core/accordion';
import { CdsAccordionPanel as AccordionPanel } from '@clr/core/accordion';
import '@clr/core/accordion/register';
import { createReactComponent } from '../converter/react-wrapper';

type CdsAccordionPanelType = AccordionPanel & { onExpandedChange: (e: any) => void };
type CdsAccordionContentType = AccordionContent;
type CdsAccordionHeaderType = AccordionHeader;
type CdsAccordionType = Accordion;

export class CdsAccordion extends createReactComponent<CdsAccordionType>('cds-accordion') {}
export class CdsAccordionPanel extends createReactComponent<CdsAccordionPanelType>('cds-accordion-panel') {}
export class CdsAccordionHeader extends createReactComponent<CdsAccordionHeaderType>('cds-accordion-header') {}
export class CdsAccordionContent extends createReactComponent<CdsAccordionContentType>('cds-accordion-content') {}
