/*
 * Copyright (c) 2016-2020 VMware, Inc.
 * All Rights ReserveThis software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ClarityModule } from '@clr/angular';
import { moduleMetadata } from '@storybook/angular';
import { boolean, select } from '@storybook/addon-knobs';

const basicTemplate = require('!!raw-loader!./basic.html'); // eslint-disable-line

export default {
  title: 'Alert',
  decorators: [
    moduleMetadata({
      imports: [ClarityModule],
    }),
  ],
};

export const Basic = () => {
  const alertStatus = select(
    "@Input('clrAlertType')",
    { 'none (default info)': undefined, info: 'info', warning: 'warning', danger: 'danger' },
    undefined
  );

  const closable = boolean("@Input('clrAlertClosable')", true);
  const alertLevel = boolean("@Input('clrAlertAppLevel')", false);
  const alertSize = boolean("@Input('clrAlertSizeSmall')", false);

  // TODO: Why is the clr-sr-only content visible?
  return {
    title: 'Basic',
    template: basicTemplate.default,
    props: {
      alertLevel,
      alertStatus,
      alertSize,
      closable,
    },
  };
};
