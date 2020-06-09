/*
 * Copyright (c) 2016-2020 VMware, Inc.
 * All Rights ReserveThis software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { boolean } from '@storybook/addon-knobs';

const basicTemplate = require('!!raw-loader!./basic.html'); // eslint-disable-line

export default {
  title: 'Table',
};

export const Basic = () => {
  const compact = boolean('Compact', false);
  const noBorder = boolean('No Border', false);
  const left = boolean('Left align', false);
  const multiline = boolean('Multi-line', false);

  return {
    title: 'Basic',
    template: basicTemplate.default,
    props: {
      compact,
      noBorder,
      left,
      multiline,
    },
  };
};
