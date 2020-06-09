/*
 * Copyright (c) 2016-2020 VMware, Inc.
 * All Rights ReserveThis software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { moduleMetadata } from '@storybook/angular';
import { boolean, select } from '@storybook/addon-knobs';
import { ClarityModule } from '@clr/angular';
const basicTemplate = require('!!raw-loader!./basic.html'); // eslint-disable-line

export default {
  title: 'Spinner',
  decorators: [
    moduleMetadata({
      imports: [ClarityModule],
    }),
  ],
};

export const Basic = () => {
  /**
   * clrInline
   * clrInverse
   * clrSmall
   * clrMedium
   * clrLarge
   */

  const size = select(
    'Size',
    {
      Small: 'small',
      Medium: 'medium',
      Large: 'large',
    },
    'medium'
  );

  const inline = boolean('Inline', false);
  const inverse = boolean('Inverse', false);

  return {
    title: 'Basic',
    template: basicTemplate.default,
    props: {
      inline,
      inverse,
      size,
    },
  };
};
