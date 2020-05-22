/*
 * Copyright (c) 2016-2020 VMware, Inc.
 * All Rights ReserveThis software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { moduleMetadata } from '@storybook/angular';
import { ClarityModule } from '@clr/angular';

const basicTemplate = require('!!raw-loader!./basic.html');
const fullTemplate = require('!!raw-loader!./full.html');
const checkboxTemplate = require('!!raw-loader!./checkbox.html');
const datalistTemplate = require('!!raw-loader!./datalist.html');
const inputTemplate = require('!!raw-loader!./input.html');
const labelTemplate = require('!!raw-loader!./label.html');
const passwordTemplate = require('!!raw-loader!./password.html');
const radioTemplate = require('!!raw-loader!./radio.html');
const rangeTemplate = require('!!raw-loader!./range.html');
const selectTemplate = require('!!raw-loader!./select.html');
const textareaTemplate = require('!!raw-loader!./textarea.html');
const toggleTemplate = require('!!raw-loader!./toggle.html');

export default {
  title: 'Forms',
  decorators: [
    moduleMetadata({
      imports: [ClarityModule],
    }),
  ],
};

// TODO: storybook doesn't update the inputs when user changes values.
export const Basic = () => {
  const model = {
    role: 'Design',
    name: 'BB8',
  };
  // const formLayout = select(
  //   'Form Layout',
  //   {
  //     default: undefined,
  //     compact: Layouts.COMPACT,
  //     horizontal: Layouts.HORIZONTAL,
  //     vertical: Layouts.VERTICAL,
  //   },
  //   undefined
  // );
  return {
    title: 'Basic',
    template: basicTemplate.default,
    props: {
      // formLayout,
      model,
    },
  };
};

export const ChecklistDemo = () => {
  return {
    name: 'Checkbox',
    template: checkboxTemplate.default,
  };
};

export const DatalistDemo = () => {
  return {
    name: 'Datalist',
    template: datalistTemplate.default,
  };
};

export const InputDemo = () => {
  return {
    name: 'Input',
    template: inputTemplate.default,
  };
};

export const LabelDemo = () => {
  return {
    name: 'Label',
    template: labelTemplate.default,
  };
};

export const PasswordDemo = () => {
  return {
    name: 'Password',
    template: passwordTemplate.default,
  };
};

export const RadioDemo = () => {
  return {
    name: 'Radio',
    template: radioTemplate.default,
  };
};

export const RangeDemo = () => {
  return {
    name: 'Range',
    template: rangeTemplate.default,
  };
};

export const SelectDemo = () => {
  return {
    name: 'Select',
    template: selectTemplate.default,
  };
};

export const TextareaDemo = () => {
  return {
    name: 'Textarea',
    template: textareaTemplate.default,
  };
};

export const ToggleDemo = () => {
  return {
    name: 'Toggle',
    template: toggleTemplate.default,
  };
};

export const FullDemo = () => {
  return {
    name: 'Full Demo',
    template: fullTemplate.default,
  };
};
