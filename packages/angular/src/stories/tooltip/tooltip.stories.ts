/*
 * Copyright (c) 2016-2020 VMware, Inc.
 * All Rights ReserveThis software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { moduleMetadata } from '@storybook/angular';
import { select } from '@storybook/addon-knobs';
import { ClarityModule } from '@clr/angular';
const basicTemplate = require('!!raw-loader!./basic.html'); // eslint-disable-line

import '@cds/core/icon/register.js';
import { ClarityIcons, infoCircleIcon } from '@cds/core/icon';

ClarityIcons.addIcons(infoCircleIcon);

export default {
  title: 'Tooltip',
  decorators: [
    moduleMetadata({
      imports: [ClarityModule],
    }),
  ],
};

export const Basic = () => {
  // sizes is  select
  // positions is select
  const position = select(
    'Position',
    {
      right: 'right',
      topRight: 'top-right',
      bottomRight: 'bottom-right',
      bottomLeft: 'bottom-left',
      left: 'left',
    },
    undefined
  );
  const size = select(
    'Size',
    {
      xs: 'xs',
      sm: 'sm',
      md: 'md',
      lg: 'lg',
    },
    'md'
  );
  return {
    title: 'Basic',
    template: basicTemplate.default,
    props: {
      position,
      size,
    },
  };
};
