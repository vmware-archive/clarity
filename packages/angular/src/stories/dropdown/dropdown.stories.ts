/*
 * Copyright (c) 2016-2020 VMware, Inc.
 * All Rights ReserveThis software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { withDesign } from 'storybook-addon-designs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { boolean, select } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';
import { ClrDropdownModule } from '@clr/angular';

const basicTemplate = require('!!raw-loader!./basic.html');

export default {
  title: 'Dropdown',
  decorators: [
    withDesign,
    moduleMetadata({
      imports: [ClrDropdownModule],
    }),
  ],
  parameters: {
    design: [
      {
        name: 'Figma Light',
        type: 'figma',
        url: 'https://www.figma.com/file/v2mkhzKQdhECXOx8BElgdA/Clarity-UI-Library---light-2.2.0?node-id=51%3A665',
      },
      {
        name: 'Figma Dark',
        type: 'figma',
        url: 'https://www.figma.com/file/wRYSrWSffZXcdQuiolwkym/Clarity-UI-Library---dark-2.2.0?node-id=15%3A5836',
      },
    ],
  },
};

// TODO: storybook doesn't update the inputs when user changes values.
export const Basic = () => {
  const disableDropdown = boolean('Disable First Item', false);
  const ddPosition = select(
    'Menu Position',
    {
      default: undefined,
      topLeft: 'top-left',
      topRight: 'top-right',
      bottomLeft: 'bottom-left',
      bottomRight: 'bottom-right',
    },
    undefined
  );
  // const disableInput = boolean('Disable inputs', false);
  // const minDate = text('Min date', '2020-05-05');
  // const maxDate = text('Max date', '2020-05-25');
  // const model = text('Current date (MM/DD/YYYY)', undefined);
  return {
    title: 'Basic',
    template: basicTemplate.default,
    props: {
      disableDropdown,
    },
  };
};
