/*
 * Copyright (c) 2016-2020 VMware, Inc.
 * All Rights ReserveThis software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { moduleMetadata } from '@storybook/angular';
import { select } from '@storybook/addon-knobs';
import { ClarityModule } from '@clr/angular';
const basicTemplate = require('!!raw-loader!./basic.html'); // eslint-disable-line

export default {
  title: 'Signpost',
  decorators: [
    moduleMetadata({
      imports: [ClarityModule],
    }),
  ],
};

export const Basic = () => {
  const position = select(
    'Position',
    {
      rightMiddle: 'right-middle',
      rightBottom: 'right-bottom',
      bottomRight: 'bottom-right',
      bottomMiddle: 'bottom-middle',
      bottomLeft: 'bottom-left',
      leftBottom: 'left-bottom',
      leftMiddle: 'left-middle',
      leftTop: 'left-top',
      topLeft: 'top-left',
      topMiddle: 'top-middle',
      topRight: 'top-right',
      rightTop: 'right-top',
    },
    undefined
  );
  return {
    title: 'Basic',
    template: basicTemplate.default,
    props: {
      position,
    },
  };
};
