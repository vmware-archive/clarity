import { CdsDropdown as Dropdown } from '@cds/core/dropdown';
import '@cds/core/dropdown/register';
import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { logReactVersion } from '../utils/index.js';

export const CdsDropdown = createComponent(
  React,
  'cds-dropdown',
  Dropdown,
  {
    onCloseChange: 'closeChange',
    onCdsMotionChange: 'cdsMotionChange',
  },
  'CdsDropdown'
);

logReactVersion(React);
