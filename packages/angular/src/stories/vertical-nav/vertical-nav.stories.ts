/*
 * Copyright (c) 2016-2020 VMware, Inc.
 * All Rights ReserveThis software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { moduleMetadata } from '@storybook/angular';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
const basicTemplate = require('!!raw-loader!./basic.html'); // eslint-disable-line

import '@cds/core/icon/register.js';
import { ClarityIcons, boltIcon } from '@cds/core/icon';

ClarityIcons.addIcons(boltIcon);

export default {
  title: 'Vertical Nav',
  decorators: [
    moduleMetadata({
      imports: [BrowserAnimationsModule, ClarityModule],
    }),
  ],
};

export const Basic = () => {
  return {
    title: 'Basic',
    template: basicTemplate.default,
  };
};
