import { CdsModal as Modal } from '@cds/core/modal';
import { CdsModalActions as ModalActions } from '@cds/core/modal';
import { CdsModalContent as ModalContent } from '@cds/core/modal';
import { CdsModalHeader as ModalHeader } from '@cds/core/modal';
import { CdsModalHeaderActions as ModalHeaderActions } from '@cds/core/modal';
import '@cds/core/modal/register';
import { createReactComponent } from '../converter/react-wrapper';

type CdsModalType = Modal & { onCloseChange: (e: any) => void };
type CdsModalActionsType = ModalActions;
type CdsModalContentType = ModalContent;
type CdsModalHeaderType = ModalHeader;
type CdsModalHeaderActionsType = ModalHeaderActions;

export class CdsModal extends createReactComponent<CdsModalType>('cds-modal') {}
export class CdsModalActions extends createReactComponent<CdsModalActionsType>('cds-modal-actions') {}
export class CdsModalContent extends createReactComponent<CdsModalContentType>('cds-modal-content') {}
export class CdsModalHeader extends createReactComponent<CdsModalHeaderType>('cds-modal-header') {}
export class CdsModalHeaderActions extends createReactComponent<CdsModalHeaderActionsType>('cds-modal-header-action') {}
