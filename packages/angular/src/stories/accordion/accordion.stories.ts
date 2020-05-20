/*
 * Copyright (c) 2016-2020 VMware, Inc.
 * All Rights ReserveThis software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { action } from '@storybook/addon-actions';

import { moduleMetadata } from '@storybook/angular';
import { withDesign } from 'storybook-addon-designs';
import { boolean } from '@storybook/addon-knobs';
import { ClrAccordionModule, ClrConditionalModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const basicTemplate = require('!!raw-loader!./basic.html');
const bindingTemplate = require('!!raw-loader!./basic.html');

export default {
  title: 'Accordion',
  decorators: [
    withDesign,
    moduleMetadata({
      imports: [BrowserAnimationsModule, ClrAccordionModule, ClrConditionalModule],
    }),
  ],
  parameters: {
    design: [
      {
        name: 'Figma Light',
        type: 'figma',
        url: 'https://www.figma.com/file/v2mkhzKQdhECXOx8BElgdA/Clarity-UI-Library---light-2.2.0?node-id=1007%3A0',
      },
      {
        name: 'Figma Dark',
        type: 'figma',
        url: 'https://www.figma.com/file/wRYSrWSffZXcdQuiolwkym/Clarity-UI-Library---dark-2.2.0?node-id=379%3A1',
      },
    ],
  },
  props: {
    clrAccordionMultiPanel: false,
  },
};

export const Basic = () => {
  return {
    title: 'Basic',
    template: basicTemplate.default,
    props: {
      panelChange: event => {
        action("@Output('clrAccordionPanelOpenChange'):")(event);
      },
    },
  };
};

export const Bindings = () => {
  const multiPanel = boolean("@Input('clrAccordionMultiPanel')", false);
  const p1Disabled = boolean("@Input('clrAccordionPanelDisabled')", true);
  const p1Open = boolean("@Input('clrAccordionPanelOpen')", false);

  return {
    title: 'Binding',
    template: bindingTemplate.default,
    props: {
      clrAccordionMultiPanel: multiPanel,
      clrAccordionPanelDisabled: p1Disabled,
      clrAccordionPanelOpen: p1Open,
      panelChange: event => {
        action("@Output('clrAccordionPanelOpenChange'):")(event);
      },
    },
  };
};
