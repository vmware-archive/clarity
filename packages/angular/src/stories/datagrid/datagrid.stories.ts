/*
 * Copyright (c) 2016-2020 VMware, Inc.
 * All Rights ReserveThis software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { action } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';
import { boolean } from '@storybook/addon-knobs';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EmployeeGenerator } from './data/employees';

const basicTemplate = require('!!raw-loader!./basic.html');

export default {
  title: 'Datagrid',
  decorators: [
    moduleMetadata({
      imports: [BrowserAnimationsModule, ClarityModule],
    }),
  ],
  props: {},
};

export const Basic = () => {
  const fixedHeight = boolean('Fixed Datagrid Height', true, 'Group 1');
  const loading = boolean('Loading', false, 'Group 1');
  const compactSize = boolean('Compact Size', false, 'Group 1');
  const employeeList = EmployeeGenerator.generateSeedData(25);
  const selectedEmployees = [];
  return {
    title: 'Basic',
    template: basicTemplate.default,
    props: {
      compactSize,
      employeeList,
      fixedHeight,
      loading,
      selectedEmployees,
    },
    onEdit: user => {
      console.log('Edit user: ', user);
      action('Single Row Action: onEdit')(user);
    },
    onDelete: user => {
      action('Single Row Action: onDelete')(user);
    },
    batchAction: user => {
      action('Batch action for userActions, selectedEmployees')(user);
    },
  };
};
