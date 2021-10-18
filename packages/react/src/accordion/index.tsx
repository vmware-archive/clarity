import { CdsAccordion as Accordion } from '@cds/core/accordion';
import { CdsAccordionContent as AccordionContent } from '@cds/core/accordion';
import { CdsAccordionHeader as AccordionHeader } from '@cds/core/accordion';
import { CdsAccordionPanel as AccordionPanel } from '@cds/core/accordion';
import '@cds/core/accordion/register';
import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { logReactVersion } from '../utils/index';

// add react util here in all components.
// Document that it needs to be part of each component in React.

export const CdsAccordion = createComponent(React, 'cds-accordion', Accordion);
export const CdsAccordionPanel = createComponent(React, 'cds-accordion-panel', AccordionPanel, {
  onExpandedChange: 'expandedChange',
  onCdsMotionChange: 'cdsMotionChange',
});
export const CdsAccordionHeader = createComponent(React, 'cds-accordion-header', AccordionHeader);
export const CdsAccordionContent = createComponent(React, 'cds-accordion-content', AccordionContent);

/**
 * Setting displayName on the prototype is a workaround for now.
 * See: https://github.com/lit/lit/issues/2154
 * Follow: https://github.com/lit/lit/pull/2155
 */
CdsAccordion.displayName = 'CdsAccordion';

logReactVersion(React);
