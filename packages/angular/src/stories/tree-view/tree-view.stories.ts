/*
 * Copyright (c) 2016-2020 VMware, Inc.
 * All Rights ReserveThis software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { boolean, radios } from '@storybook/addon-knobs';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const basicTemplate = require('!!raw-loader!./basic.html'); // eslint-disable-line

const demoTree: any[] = [
  {
    name: 'Users',
    icon: 'folder',
    expanded: true,
    files: [
      {
        icon: 'calendar',
        name: 'Calendar',
        active: true,
      },
      {
        icon: 'user',
        name: 'Accounts',
        active: false,
      },
    ],
  },
  {
    name: 'Services',
    icon: 'cog',
    expanded: false,
    files: [
      {
        icon: 'bell',
        name: 'Alerts',
        active: false,
      },
      {
        icon: 'cloud',
        name: 'Clouds',
        active: false,
      },
    ],
  },
  {
    name: 'Images',
    icon: 'image',
    expanded: false,
    files: [
      {
        icon: 'image',
        name: 'Screenshot.png',
        active: false,
      },
      {
        icon: 'image',
        name: 'Pic.png',
        active: false,
      },
      {
        icon: 'image',
        name: 'Portfolio.jpg',
        active: false,
      },
    ],
  },
];

export default {
  title: 'Tree View',
  decorators: [
    moduleMetadata({
      imports: [BrowserAnimationsModule, ClarityModule],
    }),
  ],
};

export const Basic = () => {
  const expanded = false;
  const selectable = boolean('Checkbox', false);
  const icon = boolean('Icon', false);
  return {
    title: 'Basic',
    template: basicTemplate.default,
    props: {
      icon,
      demoTree,
      expanded,
      selectable,
      openFile: event => {
        action('File to open: ')(event);
      },
    },
  };
};
