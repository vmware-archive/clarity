import { CdsInternalOverlay as Overlay } from '@cds/core/internal-components/overlay';
import '@cds/core/internal-components/overlay/register';
import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { logReactVersion } from '../../utils/index.js';

export const CdsInternalOverlay = createComponent(
  React,
  'cds-internal-overlay',
  Overlay,
  {
    onCloseChange: 'closeChange',
    onCdsMotionChange: 'cdsMotionChange',
  },
  'CdsInternalOverlay'
);

logReactVersion(React);
