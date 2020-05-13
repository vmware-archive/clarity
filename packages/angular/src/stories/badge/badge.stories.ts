import { moduleMetadata } from '@storybook/angular';
import { withDesign } from 'storybook-addon-designs';
import { ClrAlertModule } from '../../../projects/clr-angular/src/emphasis/alert/alert.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
const basicTemplate = require('!!raw-loader!./basic.html');

export default {
  title: 'Badge',
  decorators: [
    withDesign,
    moduleMetadata({
      imports: [ClrAlertModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }),
  ],
  parameters: {
    design: [
      {
        name: 'Figma Light',
        type: 'figma',
        url: 'https://www.figma.com/file/v2mkhzKQdhECXOx8BElgdA/Clarity-UI-Library---light-2.2.0?node-id=51%3A673',
      },
      {
        name: 'Figma Dark',
        type: 'figma',
        url: 'https://www.figma.com/file/wRYSrWSffZXcdQuiolwkym/Clarity-UI-Library---dark-2.2.0?node-id=15%3A5838',
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
