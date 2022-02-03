import { CdsInternalCloseButton as CloseButton } from '@cds/core/internal-components/close-button';
import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { logReactVersion } from '../utils/index.js';

export const CdsInternalCloseButton = createComponent(
  React,
  'cds-internal-close-button',
  CloseButton,
  {},
  'CdsInternalCloseButton'
);

logReactVersion(React);
