/*
 * Copyright (c) 2016-2020 VMware, Inc.
 * All Rights ReserveThis software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { moduleMetadata } from '@storybook/angular';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const basicTemplate = require('!!raw-loader!./basic.html'); // eslint-disable-line

export default {
  title: 'Combobox',
  decorators: [
    moduleMetadata({
      imports: [BrowserAnimationsModule, ClarityModule],
    }),
  ],
  props: {
    clrMulti: false,
  },
};

export const Basic = () => {
  return {
    title: 'Basic',
    template: basicTemplate.default,
    props: {
      selected: null,
      disabled: false,
    },
  };
};
