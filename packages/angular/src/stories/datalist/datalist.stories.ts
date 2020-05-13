import { withDesign } from 'storybook-addon-designs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { boolean, select } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';
import { ClrFormsModule } from '@clr/angular';

const basicTemplate = require('!!raw-loader!./basic.html');

export default {
  title: 'Datalist',
  decorators: [
    withDesign,
    moduleMetadata({
      imports: [ClrFormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }),
  ],
  parameters: {
    // TODO: this was external contribution, missing from Figma
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
  const disableInput = boolean('Disable inputs', false);
  return {
    title: 'Basic',
    template: basicTemplate.default,
    props: {
      disableInput,
    },
  };
};
