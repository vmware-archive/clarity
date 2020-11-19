/*
 * Copyright (c) 2016-2020 VMware, Inc.
 * All Rights ReserveThis software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@clr/icons';
import { addDecorator, addParameters } from '@storybook/angular';
import { withCssResources } from '@storybook/addon-cssresources';
import darkTheme from '@clr/ui/clr-ui-dark.min.css';
import '!style-loader!css-loader!sass-loader!../src/styles.scss';

addDecorator(withCssResources); // Not sure why this is still needed. I thought SB6 got rid of need for decorators.
addParameters({
  cssresources: [
    {
      id: 'Dark Theme',
      code: `
        <style>
          ${darkTheme}
        </style>
      `,
      picked: false,
      hideCode: true,
    },
  ],
});
