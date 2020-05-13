import { withDesign } from 'storybook-addon-designs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { boolean, select } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';
import { ClrFormsModule } from '../../../projects/clr-angular/src/forms/forms.module';

const basicTemplate = require('!!raw-loader!./basic.html');

export default {
  title: 'Checkbox',
  decorators: [
    withDesign,
    moduleMetadata({
      imports: [ClrFormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }),
  ],
  parameters: {
    design: [
      {
        name: 'Figma Light',
        type: 'figma',
        url: 'https://www.figma.com/file/v2mkhzKQdhECXOx8BElgdA/Clarity-UI-Library---light-2.2.0?node-id=0%3A853',
      },
      {
        name: 'Figma Dark',
        type: 'figma',
        url: 'https://www.figma.com/file/wRYSrWSffZXcdQuiolwkym/Clarity-UI-Library---dark-2.2.0?node-id=364%3A4206',
      },
    ],
  },
};

export const Basic = () => {
  const showInline = boolean('Inline layout', false);
  const disableInput = boolean('Disable inputs', false);
  const indeterminateState = boolean('Indeterminate checkbox', false);
  return {
    title: 'Basic',
    template: basicTemplate.default,
    props: {
      disableInput,
      showInline,
      indeterminateState,
    },
  };
};
