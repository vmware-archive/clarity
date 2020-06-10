/*
 * Copyright (c) 2016-2020 VMware, Inc.
 * All Rights ReserveThis software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { moduleMetadata } from '@storybook/angular';
import { boolean } from '@storybook/addon-knobs';
import { ClarityModule } from '@clr/angular';

const basicTemplate = require('!!raw-loader!./basic.html'); // eslint-disable-line

export default {
  title: 'List',
  decorators: [
    moduleMetadata({
      imports: [ClarityModule],
    }),
  ],
};

export const Basic = () => {
  const compact = boolean('Compact', false);
  const ordered = boolean('Ordered', false);
  const unstyled = boolean('Unstyled', false);
  return {
    title: 'Basic',
    template: basicTemplate.default,
    props: {
      compact,
      ordered,
      unstyled,
    },
  };
};
