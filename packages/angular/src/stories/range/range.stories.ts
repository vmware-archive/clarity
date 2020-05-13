import { moduleMetadata } from '@storybook/angular';
import { withDesign } from 'storybook-addon-designs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
const basicTemplate = require('!!raw-loader!./basic.html');

export default {
  title: 'Range',
  decorators: [
    withDesign,
    moduleMetadata({
      imports: [],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }),
  ],
  parameters: {
    // TODO: confirm where the design for range input is missing from figma
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
