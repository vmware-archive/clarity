/*
 * Copyright (c) 2016-2020 VMware, Inc.
 * All Rights ReserveThis software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { moduleMetadata } from '@storybook/angular';
import { ClarityModule } from '@clr/angular';
import { boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

// const fullTemplate = require('!!raw-loader!./full.html');
const checkboxTemplate = require('!!raw-loader!./checkbox.html');
const datalistTemplate = require('!!raw-loader!./datalist.html');
const inputTemplate = require('!!raw-loader!./input.html');
const passwordTemplate = require('!!raw-loader!./password.html');
const radioTemplate = require('!!raw-loader!./radio.html');
const rangeTemplate = require('!!raw-loader!./range.html');
const selectTemplate = require('!!raw-loader!./select.html');
const textareaTemplate = require('!!raw-loader!./textarea.html');
const toggleTemplate = require('!!raw-loader!./toggle.html');

const formSubmit = event => {
  action('Form values submitted')(event);
};

export default {
  title: 'Forms',
  decorators: [
    moduleMetadata({
      imports: [ClarityModule],
    }),
  ],
};

export const CheckboxDemo = () => {
  const model = {
    option1: false,
    option2: false,
  };
  const required = boolean('Required form controls', true);
  const disabled = boolean('Disable Checkboxes', false);
  const helper = boolean('Helper Text', true);
  const error = boolean('Error Text', true);
  const inline = boolean('Inline checkboxes', false);
  return {
    name: 'Checkbox',
    template: checkboxTemplate.default,
    props: {
      model,
      required,
      disabled,
      helper,
      error,
      inline,
      onSubmit: formSubmit,
    },
  };
};

export const DatalistDemo = () => {
  const model = {
    datalistOption: null,
  };
  const required = boolean('Required form controls', true);
  const disabled = boolean('Disable Datalist', false);
  const controlHelper = boolean('Helper Text', true);
  const items = ['Item1', 'Item2', 'Item3'];
  return {
    name: 'Datalist',
    template: datalistTemplate.default,
    props: {
      controlHelper,
      disabled,
      items,
      model,
      required,
      onSubmit: formSubmit,
    },
  };
};

export const InputDemo = () => {
  const model = {
    name: '',
    role: '',
  };
  const required = boolean('Required form controls', true);
  const controlHelper = boolean('Helper Text', true);
  const disabled = boolean('Disable Input', false);

  return {
    name: 'Input',
    template: inputTemplate.default,
    props: {
      controlHelper,
      disabled,
      model,
      required,
      onSubmit: formSubmit,
    },
  };
};

export const PasswordDemo = () => {
  const model = {
    radio: '',
  };
  const required = boolean('Required form controls', true);
  const controlHelper = boolean('Helper Text', true);
  const disabled = boolean('Disable Password', false);
  return {
    name: 'Password',
    template: passwordTemplate.default,
    props: {
      model,
      required,
      controlHelper,
      disabled,
      onSubmit: formSubmit,
    },
  };
};

export const RadioDemo = () => {
  const model = {
    options: '',
  };
  const required = boolean('Required form controls', true);
  const controlHelper = boolean('Helper Text', true);
  const disabled = boolean('Disable Radio', false);
  const inline = boolean('Inline layout', false);
  return {
    name: 'Password',
    template: radioTemplate.default,
    props: {
      model,
      required,
      controlHelper,
      disabled,
      inline,
      onSubmit: formSubmit,
    },
  };
};

export const RangeDemo = () => {
  const rangeValue = 50;
  const controlHelper = boolean('Helper Text', true);
  const disabled = boolean('Disable Range', false);
  return {
    name: 'Range',
    template: rangeTemplate.default,
    props: {
      rangeValue,
      controlHelper,
      disabled,
      onSubmit: formSubmit,
      change: event => {
        action('Range value change')(event.target.value);
      },
    },
  };
};

export const SelectDemo = () => {
  const required = boolean('Required form controls', true);
  const disabled = boolean('Disable Select', false);
  const helpers = boolean('Helper Text', true);
  const errors = boolean('Error Text', true);
  return {
    name: 'Select',
    template: selectTemplate.default,
    props: {
      required,
      disabled,
      helpers,
      errors,
      onSubmit: formSubmit,
    },
  };
};

export const TextareaDemo = () => {
  const required = boolean('Required form controls', true);
  const disabled = boolean('Disable Textarea', false);
  const helpers = boolean('Helper Text', true);
  const errors = boolean('Error Text', true);
  return {
    name: 'Textarea',
    template: textareaTemplate.default,
    props: {
      required,
      disabled,
      helpers,
      errors,
      onSubmit: formSubmit,
    },
  };
};

export const ToggleDemo = () => {
  const model = {
    option1: true,
  };
  const required = boolean('Required form controls', true);
  const disabled = boolean('Disable Toggles', false);
  const helpers = boolean('Helper Text', true);
  const errors = boolean('Error Text', true);
  return {
    name: 'Toggle',
    template: toggleTemplate.default,
    props: {
      required,
      disabled,
      helpers,
      errors,
      onSubmit: formSubmit,
    },
  };
};

// export const FullDemo = () => {
//   return {
//     name: 'Full Demo',
//     template: fullTemplate.default,
//   };
// };
