/*
 * Copyright (c) 2016-2020 VMware, Inc.
 * All Rights ReserveThis software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { moduleMetadata } from '@storybook/angular';
import { boolean, select } from '@storybook/addon-knobs';
import { ClarityModule } from '@clr/angular';

const basicTemplate = require('!!raw-loader!./basic.html'); // eslint-disable-line

export default {
  title: 'Button Group',
  decorators: [
    moduleMetadata({
      imports: [ClarityModule],
    }),
  ],
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
