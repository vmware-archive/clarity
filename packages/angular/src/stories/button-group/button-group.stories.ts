/*
 * Copyright (c) 2016-2020 VMware, Inc.
 * All Rights ReserveThis software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { moduleMetadata } from '@storybook/angular';
import { withDesign } from 'storybook-addon-designs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { boolean, select } from '@storybook/addon-knobs';
import { ClrButtonModule } from '@clr/angular';

const basicTemplate = require('!!raw-loader!./basic.html');

export default {
  title: 'Button Group',
  decorators: [
    withDesign,
    moduleMetadata({
      imports: [ClrButtonModule],
    }),
  ],
  parameters: {
    design: [
      {
        name: 'Figma Light',
        type: 'figma',
        url: 'https://www.figma.com/file/v2mkhzKQdhECXOx8BElgdA/Clarity-UI-Library---light-2.2.0?node-id=20%3A0',
      },
      {
        name: 'Figma Dark',
        type: 'figma',
        url: 'https://www.figma.com/file/wRYSrWSffZXcdQuiolwkym/Clarity-UI-Library---dark-2.2.0?node-id=15%3A5832',
      },
    ],
  },
};

export const Basic = () => {
  const menuPosition = select(
    'Menu position',
    {
      default: 'top-left',
      topLeft: 'top-left',
      bottomRight: 'bottom-right',
      bottomLeft: 'bottomLeft',
      topRight: 'top-right',
      rightBottom: 'right-bottom',
      leftTop: 'left-top',
      leftBottom: 'left-bottom',
    },
    undefined
  );
  const groupType = select(
    'Type',
    {
      default: undefined,
      solidPrimary: 'btn-primary',
      solidSuccess: 'btn-success',
      solidWarning: 'btn-warning',
      solidDanger: 'btn-danger',
      outlineDefault: 'btn-outline',
      outlineSuccess: 'btn-success-outline',
      outlineInfo: 'btn-info-outline',
      outlineWarning: 'btn-warning-outline',
      outlineDanger: 'btn-danger-outline',
      flatButton: 'btn-link',
    },
    undefined
  );
  const btnInMenu = boolean('Overflow Menu', true);
  const disableAll = boolean('Disable All', false);
  const disableFirstButton = boolean('Disable first button', false);
  const disableThirdButton = boolean('Disable third button', false);
  return {
    title: 'Basic',
    template: basicTemplate.default,
    props: {
      groupType,
      menuPosition,
      btnInMenu,
      disableAll,
      disableFirstButton,
      disableThirdButton,
    },
  };
};
