import { action } from '@storybook/addon-actions';

import { moduleMetadata } from '@storybook/angular';
import { withDesign } from 'storybook-addon-designs';
import { boolean } from '@storybook/addon-knobs';
import { ClrDatagridModule } from '../../../projects/clr-angular/src/data/datagrid/datagrid.module';
import { ClrDropdownModule } from '../../../projects/clr-angular/src/popover/dropdown/dropdown.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EmployeeGenerator } from './data/employees';

const basicTemplate = require('!!raw-loader!./basic.html');

export default {
  title: 'Datagrid',
  decorators: [
    withDesign,
    moduleMetadata({
      imports: [BrowserAnimationsModule, ClrDatagridModule, ClrDropdownModule],
    }),
  ],
  parameters: {
    design: [
      {
        name: 'Figma Light',
        type: 'figma',
        url: 'https://www.figma.com/file/v2mkhzKQdhECXOx8BElgdA/Clarity-UI-Library---light-2.2.0?node-id=0%3A666',
      },
      {
        name: 'Figma Dark',
        type: 'figma',
        url: 'https://www.figma.com/file/wRYSrWSffZXcdQuiolwkym/Clarity-UI-Library---dark-2.2.0?node-id=68%3A2',
      },
    ],
  },
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
