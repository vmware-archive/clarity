import {
  CdsModal as Modal,
  CdsModalActions as ModalActions,
  CdsModalContent as ModalContent,
  CdsModalHeader as ModalHeader,
  CdsModalHeaderActions as ModalHeaderActions,
} from '@cds/core/modal';
import '@cds/core/modal/register';
import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { logReactVersion } from '../utils/index.js';

export const CdsModal = createComponent(
  React,
  'cds-modal',
  Modal,
  {
    onCloseChange: 'closeChange',
    onCdsMotionChange: 'cdsMotionChange',
  },
  'CdsModal'
);
export const CdsModalActions = createComponent(React, 'cds-modal-actions', ModalActions, {}, 'CdsModalActions');
export const CdsModalContent = createComponent(React, 'cds-modal-content', ModalContent, {}, 'CdsModalContent');
export const CdsModalHeader = createComponent(React, 'cds-modal-header', ModalHeader, {}, 'CdsModalHeader');
export const CdsModalHeaderActions = createComponent(
  React,
  'cds-modal-header-action',
  ModalHeaderActions,
  {},
  'CdsModalHeaderActions'
);

logReactVersion(React);
