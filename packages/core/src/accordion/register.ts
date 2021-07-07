/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {
  ClarityMotion,
  AnimationAccordionPanelOpenName,
  AnimationAccordionPanelOpenConfig,
  registerElementSafely,
} from '@cds/core/internal';
import { CdsAccordion } from './accordion.element.js';
import { CdsAccordionSection } from './accordion-section.element.js';
import { CdsAccordionContent } from './accordion-content.element.js';
import { CdsAccordionHeader } from './accordion-header.element.js';
import { ClarityIcons } from '@cds/core/icon/icon.service.js';
import { angleIcon } from '@cds/core/icon/shapes/angle.js';
import '@cds/core/icon/register.js';

registerElementSafely('cds-accordion', CdsAccordion);
registerElementSafely('cds-accordion-section', CdsAccordionSection);
registerElementSafely('cds-accordion-content', CdsAccordionContent);
registerElementSafely('cds-accordion-header', CdsAccordionHeader);

ClarityIcons.addIcons(angleIcon);
ClarityMotion.add(AnimationAccordionPanelOpenName, AnimationAccordionPanelOpenConfig);
declare global {
  interface HTMLElementTagNameMap {
    'cds-accordion': CdsAccordion;
    'cds-accordion-section': CdsAccordionSection;
    'cds-accordion-content': CdsAccordionContent;
    'cds-accordion-header': CdsAccordionHeader;
  }
}
