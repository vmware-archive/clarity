/*
 * Copyright (c) 2016-2020 VMware, Inc.
 * All Rights ReserveThis software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { moduleMetadata } from '@storybook/angular';
import { boolean } from '@storybook/addon-knobs';
import { ClarityModule } from '@clr/angular';

const basicTemplate = require('!!raw-loader!./basic.html'); // eslint-disable-line
import '@cds/core/icon/register.js';
import { ClarityIcons, homeIcon } from '@cds/core/icon';

ClarityIcons.addIcons(homeIcon);

export default {
  title: 'Navigation',
  decorators: [
    moduleMetadata({
      imports: [ClarityModule],
    }),
  ],
};

export const Basic = () => {
  const subnav = boolean('Subnav', true);
  const sidenav = boolean('Sidenav', true);
  const activeRoute = boolean('Active route', true);
  return {
    title: 'Basic',
    template: basicTemplate.default,
    props: {
      activeRoute,
      sidenav,
      subnav,
    },
  };
};
