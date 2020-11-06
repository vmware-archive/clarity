/*
 * Copyright (c) 2016-2020 VMware, Inc.
 * All Rights ReserveThis software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { moduleMetadata } from '@storybook/angular';
import { boolean, select } from '@storybook/addon-knobs';
import { ClarityModule, ClrLoadingState, ClrIconModule } from '@clr/angular';

import '@cds/core/icon/register.js';
import { ClarityIcons, homeIcon } from '@cds/core/icon';

ClarityIcons.addIcons(homeIcon);

const basicTemplate = require('!!raw-loader!./basic.html'); // eslint-disable-line

export default {
  title: 'Button',
  decorators: [
    moduleMetadata({
      imports: [ClarityModule],
    }),
  ],
};

export const Basic = () => {
  console.log(ClrIconModule);
  const buttonSize = boolean('Small', false);

  const buttonType = select(
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
  const disabled = boolean('Disabled', false);
  const buttonBlock = boolean('Block', false);
  const buttonInverse = boolean('Inverse', false);
  const buttonIcon = boolean('Icon Button', false);
  // let validateBtnState = ClrLoadingState.DEFAULT;
  // let submitBtnState = ClrLoadingState.DEFAULT;

  return {
    title: 'Basic',
    template: basicTemplate.default,
    props: {
      buttonType,
      disabled,
      buttonSize,
      buttonBlock,
      buttonInverse,
      buttonIcon,
      validateDemo: () => {
        {
          // submitBtnState = ClrLoadingState.LOADING;
          setTimeout(() => ((this as any).submitBtnState = ClrLoadingState.DEFAULT), 1500);
        }
      },
      submitDemo: () => {
        // validateBtnState = ClrLoadingState.LOADING;
        setTimeout(() => ((this as any).validateBtnState = ClrLoadingState.SUCCESS), 1500);
      },
    },
  };
};
