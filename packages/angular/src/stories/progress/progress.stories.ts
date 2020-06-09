/*
 * Copyright (c) 2016-2020 VMware, Inc.
 * All Rights ReserveThis software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { moduleMetadata } from '@storybook/angular';
import { boolean, text } from '@storybook/addon-knobs';
import { ClarityModule } from '@clr/angular';
const basicTemplate = require('!!raw-loader!./basic.html'); // eslint-disable-line

export default {
  title: 'Progress',
  decorators: [
    moduleMetadata({
      imports: [ClarityModule],
    }),
  ],
};

export const Basic = () => {
  /**
   * clrValue (0-100)
   * clrLabeled
   * clrDisplayval
   * clrLoop
   * clrFade
   */

  const loop = boolean('Loop', false);
  const value = text('Value', '25');
  const labeled = boolean('Labeled', false);
  const customLabel = boolean('Custom label', false);
  const fadeOut = boolean('Fade (value > 100)', false);
  return {
    title: 'Basic',
    template: basicTemplate.default,
    props: {
      customLabel,
      fadeOut,
      labeled,
      loop,
      value,
    },
  };
};
