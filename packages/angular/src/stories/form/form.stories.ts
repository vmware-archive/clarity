/*
 * Copyright (c) 2016-2020 VMware, Inc.
 * All Rights ReserveThis software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { withDesign } from 'storybook-addon-designs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { select } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';
import { ClrFormsModule } from '@clr/angular';

const basicTemplate = require('!!raw-loader!./basic.html');
const fullTemplate = require('!!raw-loader!./full.html');
const checkboxTemplate = require('!!raw-loader!./checklist.html');
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
    withDesign,
    moduleMetadata({
      imports: [ClrFormsModule],
    }),
  ],
  parameters: {
    // TODO(matt): I think I should combine all form elements into on story
    // But I started this way and will keep it for now.
    design: [
      {
        name: 'Figma Light',
        type: 'figma',
        url: 'https://www.figma.com/file/v2mkhzKQdhECXOx8BElgdA/Clarity-UI-Library---light-2.2.0?node-id=0%3A853',
      },
      {
        name: 'Figma Dark',
        type: 'figma',
        url: 'https://www.figma.com/file/wRYSrWSffZXcdQuiolwkym/Clarity-UI-Library---dark-2.2.0?node-id=364%3A4206',
      },
    ],
  },
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
