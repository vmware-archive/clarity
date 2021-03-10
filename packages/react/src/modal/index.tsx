import {
  CdsModal as Modal,
  CdsModalActions as ModalActions,
  CdsModalContent as ModalContent,
  CdsModalHeader as ModalHeader,
  CdsModalHeaderActions as ModalHeaderActions,
} from '@cds/core/modal';
import '@cds/core/modal/register';
import { createComponent } from '../converter/react-wrapper.js';

export const CdsModal = createComponent('cds-modal', Modal, {
  onCloseChange: 'closeChange',
  onCdsMotionChange: 'cdsMotionChange',
});
export const CdsModalActions = createComponent('cds-modal-actions', ModalActions);
export const CdsModalContent = createComponent('cds-modal-content', ModalContent);
export const CdsModalHeader = createComponent('cds-modal-header', ModalHeader);
export const CdsModalHeaderActions = createComponent('cds-modal-header-action', ModalHeaderActions);
