/*
 * Copyright (c) 2016-2020 VMware, Inc.
 * All Rights ReserveThis software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { moduleMetadata } from '@storybook/angular';
import { withDesign } from 'storybook-addon-designs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
const basicTemplate = require('!!raw-loader!./basic.html');

export default {
  title: 'Stack View',
  decorators: [
    withDesign,
    moduleMetadata({
      imports: [],
    }),
  ],
  parameters: {
    design: [
      {
        name: 'Figma Light',
        type: 'figma',
        url: 'https://www.figma.com/file/v2mkhzKQdhECXOx8BElgdA/Clarity-UI-Library---light-2.2.0?node-id=51%3A675',
      },
      {
        name: 'Figma Dark',
        type: 'figma',
        url: 'https://www.figma.com/file/wRYSrWSffZXcdQuiolwkym/Clarity-UI-Library---dark-2.2.0?node-id=16%3A4',
      },
    ],
  },
};

export const Basic = () => {
  return {
    title: 'Basic',
    template: basicTemplate.default,
  };
};
