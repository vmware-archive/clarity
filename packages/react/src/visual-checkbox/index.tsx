import { CdsInternalVisualCheckbox as VisualCheckbox } from '@cds/core/internal-components/visual-checkbox';
import '@cds/core/internal-components/visual-checkbox/register';
import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { logReactVersion } from '../utils/index.js';

export const CdsInternalVisualCheckbox = createComponent(
  React,
  'cds-internal-visual-checkbox',
  VisualCheckbox,
  {},
  'CdsInternalVisualCheckbox'
);

logReactVersion(React);
