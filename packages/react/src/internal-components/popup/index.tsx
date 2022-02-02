import { CdsInternalPopup as Popup, CdsInternalPointer as Pointer } from '@cds/core/internal-components/popup';
import '@cds/core/internal-components/popup/register';
import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { logReactVersion } from '../../utils/index.js';

export const CdsInternalPopup = createComponent(
  React,
  'cds-internal-popup',
  Popup,
  {
    onCloseChange: 'closeChange',
    onCdsMotionChange: 'cdsMotionChange',
  },
  'CdsInternalPopup'
);

export const CdsInternalPointer = createComponent(React, 'cds-internal-pointer', Pointer, {}, 'CdsInternalPointer');

logReactVersion(React);
