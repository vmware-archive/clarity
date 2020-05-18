/*
 * Copyright (c) 2016-2020 VMware, Inc.
 * All Rights ReserveThis software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@clr/icons';
import { addParameters } from '@storybook/angular';
import darkTheme from '!style-loader!css-loader!sass-loader!../projects/clr-angular/src/dark-theme.scss';

addParameters({
  cssresources: [
    {
      id: 'darktheme',
      code: `
        <style>body { background-color: #232323; }</style>
        <style>
          ${darkTheme}
        </style>
      `,
      picked: false,
      hideCode: false,
    },
  ],
});
