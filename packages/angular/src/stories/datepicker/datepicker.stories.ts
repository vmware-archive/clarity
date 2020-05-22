/*
 * Copyright (c) 2016-2020 VMware, Inc.
 * All Rights ReserveThis software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { boolean, text } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';
import { ClarityModule } from '@clr/angular';

const basicTemplate = require('!!raw-loader!./basic.html');

export default {
  title: 'Date Picker',
  decorators: [
    moduleMetadata({
      imports: [ClarityModule],
    }),
  ],
};

// TODO: storybook doesn't update the inputs when user changes values.
export const Basic = () => {
  const disableInput = boolean('Disable inputs', false);
  const minDate = text('Min date', '2020-05-05');
  const maxDate = text('Max date', '2020-05-25');
  const model = text('Current date (MM/DD/YYYY)', undefined);
  return {
    title: 'Basic',
    template: basicTemplate.default,
    props: {
      disableInput,
      model,
      minDate,
      maxDate,
    },
  };
};
