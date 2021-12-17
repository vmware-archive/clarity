import { CdsSignpost as Signpost } from '@cds/core/signpost';
import '@cds/core/signpost/register';
import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { logReactVersion } from '../utils/index.js';

export const CdsSignpost = createComponent(
  React,
  'cds-signpost',
  Signpost,
  {
    onCloseChange: 'closeChange',
    onCdsMotionChange: 'cdsMotionChange',
  },
  'CdsSignpost'
);

logReactVersion(React);
