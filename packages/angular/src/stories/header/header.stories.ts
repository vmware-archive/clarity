/*
 * Copyright (c) 2016-2020 VMware, Inc.
 * All Rights ReserveThis software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { select } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';
import { ClarityModule } from '@clr/angular';

const basicTemplate = require('!!raw-loader!./basic.html'); // eslint-disable-line

import '@cds/core/icon/register.js';
import { ClarityIcons, homeIcon } from '@cds/core/icon';

ClarityIcons.addIcons(homeIcon);

export default {
  title: 'Header',
  decorators: [
    moduleMetadata({
      imports: [ClarityModule],
    }),
  ],
};

export const Basic = () => {
  const headerType = select(
    'Type',
    {
      one: 'header-1',
      two: 'header-2',
      three: 'header-3',
      four: 'header-4',
      five: 'header-5',
      six: 'header-6',
      seven: 'header-7',
    },
    undefined
  );
  //class="header-6"
  return {
    title: 'Basic',
    template: basicTemplate.default,
    props: { headerType },
  };
};
