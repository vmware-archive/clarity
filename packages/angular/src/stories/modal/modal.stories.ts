/*
 * Copyright (c) 2016-2020 VMware, Inc.
 * All Rights ReserveThis software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { moduleMetadata } from '@storybook/angular';
import { boolean, select } from '@storybook/addon-knobs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule } from '@clr/angular';
const basicTemplate = require('!!raw-loader!./basic.html'); // eslint-disable-line

export default {
  title: 'Modal',
  decorators: [
    moduleMetadata({
      imports: [BrowserAnimationsModule, ClarityModule],
    }),
  ],
};

export const Basic = () => {
  const closable = boolean('Closable', true);
  const modalState = boolean('Modal state', false);
  const size = select(
    'Sizes',
    {
      sm: 'sm',
      md: '',
      lg: 'lg,',
      xl: 'xl',
    },
    undefined
  );
  const staticBackdrop = boolean('Static backdrop', true);
  return {
    title: 'Basic',
    template: basicTemplate.default,
    props: {
      closable,
      modalState,
      size,
      staticBackdrop,
    },
  };
};
