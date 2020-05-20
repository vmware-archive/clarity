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
  title: 'Grid',
  decorators: [
    withDesign,
    moduleMetadata({
      imports: [],
    }),
  ],
  parameters: {
    // TODO: confirm if the design for grid is missing from figma
    // Ask Yu if this is an opportunity to contribute
    design: [
      {
        name: 'Figma Light',
        type: 'figma',
        url: '',
      },
      {
        name: 'Figma Dark',
        type: 'figma',
        url: '',
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
