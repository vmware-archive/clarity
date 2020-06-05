/*
 * Copyright (c) 2016-2020 VMware, Inc.
 * All Rights ReserveThis software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { action } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';
import { boolean } from '@storybook/addon-knobs';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const basicTemplate = require('!!raw-loader!./basic.html'); // eslint-disable-line
const bindingTemplate = require('!!raw-loader!./basic.html'); // eslint-disable-line

export default {
  title: 'Accordion',
  decorators: [
    moduleMetadata({
      imports: [BrowserAnimationsModule, ClarityModule],
    }),
  ],
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
