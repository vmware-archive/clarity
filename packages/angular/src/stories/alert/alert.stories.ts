import { action } from '@storybook/addon-actions';

import { moduleMetadata } from '@storybook/angular';
import { withDesign } from 'storybook-addon-designs';
import { boolean, select } from '@storybook/addon-knobs';
import { ClrAlertModule } from '../../../projects/clr-angular/src/emphasis/alert/alert.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

const basicTemplate = require('!!raw-loader!./basic.html');

export default {
  title: 'Alert',
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
        url: 'https://www.figma.com/file/v2mkhzKQdhECXOx8BElgdA/Clarity-UI-Library---light-2.2.0?node-id=1007%3A0',
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
  const alertStatus = select(
    "@Input('clrAlertType')",
    { 'none (default info)': undefined, info: 'info', warning: 'warning', danger: 'danger' },
    undefined
  );

  const closable = boolean("@Input('clrAlertClosable')", true);
  const alertLevel = boolean("@Input('clrAlertAppLevel')", false);
  const alertSize = boolean("@Input('clrAlertSizeSmall')", false);

  // TODO: Why is the clr-sr-only content visible?
  return {
    title: 'Basic',
    template: basicTemplate.default,
    props: {
      alertLevel,
      alertStatus,
      alertSize,
      closable,
    },
  };
};
