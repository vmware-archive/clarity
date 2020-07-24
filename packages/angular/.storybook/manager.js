/*
 * Copyright (c) 2016-2020 VMware, Inc.
 * All Rights ReserveThis software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'Clarity Design',
    brandUrl: 'https://clarity.design',
    brandImage: '/assets/images/clarity-logo.png',
  }),
  isFullscreen: false, // when true, add on panel doesn't open.
  showPanel: true,
  panelPosition: 'bottom',
  showNav: false,
  selectedPanel: 'storybookjs/knobs/panel',
  enableShortcuts: false,
});
