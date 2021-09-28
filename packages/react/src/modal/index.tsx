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
import { logReactVersion } from '../utils';

export const CdsModal = createComponent(React, 'cds-modal', Modal, {
  onCloseChange: 'closeChange',
  onCdsMotionChange: 'cdsMotionChange',
});
export const CdsModalActions = createComponent(React, 'cds-modal-actions', ModalActions);
export const CdsModalContent = createComponent(React, 'cds-modal-content', ModalContent);
export const CdsModalHeader = createComponent(React, 'cds-modal-header', ModalHeader);
export const CdsModalHeaderActions = createComponent(React, 'cds-modal-header-action', ModalHeaderActions);

/**
 * Setting displayName on the prototype is a workaround for now.
 * See: https://github.com/lit/lit/issues/2154
 * Follow: https://github.com/lit/lit/pull/2155
 */
CdsModalActions.displayName = 'CdsModalActions';
CdsModalContent.displayName = 'CdsModalContent';
CdsModalHeader.displayName = 'CdsModalHeader';
CdsModalHeaderActions.displayName = 'CdsModalHeaderActions';

logReactVersion(React);
