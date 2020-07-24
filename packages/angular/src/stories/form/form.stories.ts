/*
 * Copyright (c) 2016-2020 VMware, Inc.
 * All Rights ReserveThis software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { moduleMetadata } from '@storybook/angular';
import { ClarityModule } from '@clr/angular';
import { boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

const fullTemplate = require('!!raw-loader!./full.html'); // eslint-disable-line
const checkboxTemplate = require('!!raw-loader!./checkbox.html'); // eslint-disable-line
const datalistTemplate = require('!!raw-loader!./datalist.html'); // eslint-disable-line
const inputTemplate = require('!!raw-loader!./input.html'); // eslint-disable-line
const passwordTemplate = require('!!raw-loader!./password.html'); // eslint-disable-line
const radioTemplate = require('!!raw-loader!./radio.html'); // eslint-disable-line
const rangeTemplate = require('!!raw-loader!./range.html'); // eslint-disable-line
const selectTemplate = require('!!raw-loader!./select.html'); // eslint-disable-line
const textareaTemplate = require('!!raw-loader!./textarea.html'); // eslint-disable-line
const toggleTemplate = require('!!raw-loader!./toggle.html'); // eslint-disable-line

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

export const Checkbox = () => {
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
    name: 'Basic Checkbox',
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

export const Datalist = () => {
  const model = {
    datalistOption: null,
  };
  const required = boolean('Required form controls', true);
  const disabled = boolean('Disable Datalist', false);
  const controlHelper = boolean('Helper Text', true);
  const items = ['Item1', 'Item2', 'Item3'];
  return {
    name: 'Basic Datalist',
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

export const Input = () => {
  const model = {
    name: '',
    role: '',
  };
  const required = boolean('Required form controls', true);
  const controlHelper = boolean('Helper Text', true);
  const disabled = boolean('Disable Input', false);

  return {
    name: 'Basic Input',
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

export const Password = () => {
  const model = {
    radio: '',
  };
  const required = boolean('Required form controls', true);
  const controlHelper = boolean('Helper Text', true);
  const disabled = boolean('Disable Password', false);
  return {
    name: 'Basic Password',
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

export const Radio = () => {
  const model = {
    options: '',
  };
  const required = boolean('Required form controls', true);
  const controlHelper = boolean('Helper Text', true);
  const disabled = boolean('Disable Radio', false);
  const inline = boolean('Inline layout', false);
  return {
    name: 'Basic Password',
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

export const Range = () => {
  const rangeValue = 50;
  const controlHelper = boolean('Helper Text', true);
  const disabled = boolean('Disable Range', false);
  return {
    name: 'Basic Range',
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

export const Select = () => {
  const required = boolean('Required form controls', true);
  const disabled = boolean('Disable Select', false);
  const helpers = boolean('Helper Text', true);
  const errors = boolean('Error Text', true);
  return {
    name: 'Basic Select',
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

export const Textarea = () => {
  const required = boolean('Required form controls', true);
  const disabled = boolean('Disable Textarea', false);
  const helpers = boolean('Helper Text', true);
  const errors = boolean('Error Text', true);
  return {
    name: 'Basic Textarea',
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

export const Toggle = () => {
  const model = {
    option1: true,
  };
  const required = boolean('Required form controls', true);
  const disabled = boolean('Disable Toggles', false);
  const helpers = boolean('Helper Text', true);
  const errors = boolean('Error Text', true);
  return {
    name: 'Basic Toggle',
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

export const Full = () => {
  const model = {
    option1: false,
    option2: false,
    datalistOption: null,
    name: '',
    options: '',
    radio: '',
    role: '',
  };
  const required = boolean('Require form controls', true);
  const disabled = boolean('Disable form controls', false);
  const helper = boolean('Display helper text', true);
  const error = boolean('Display error text', true);
  const inline = boolean('Use inline controls', false);
  const items = ['Item1', 'Item2', 'Item3'];
  const rangeValue = 50;

  return {
    name: 'Basic',
    template: fullTemplate.default,
    props: {
      model,
      required,
      disabled,
      helper,
      error,
      inline,
      items,
      rangeValue,
      onSubmit: formSubmit,
    },
  };
};
