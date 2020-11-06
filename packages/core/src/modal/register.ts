/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@cds/core/internal-components/close-button/register.js';
import { registerElementSafely } from '@cds/core/internal';
import { CdsModal } from './modal.element.js';
import { CdsModalActions } from './modal-actions.element.js';
import { CdsModalContent } from './modal-content.element.js';
import { CdsModalHeader } from './modal-header.element.js';
import { CdsModalHeaderActions } from './modal-header-actions.element.js';

registerElementSafely('cds-modal-header-actions', CdsModalHeaderActions);
registerElementSafely('cds-modal-actions', CdsModalActions);
registerElementSafely('cds-modal-header', CdsModalHeader);
registerElementSafely('cds-modal-content', CdsModalContent);
registerElementSafely('cds-modal', CdsModal);

declare global {
  interface HTMLElementTagNameMap {
    'cds-modal-content': CdsModalContent;
    'cds-modal-actions': CdsModalActions;
    'cds-modal-header-actions': CdsModalHeaderActions;
    'cds-modal-header': CdsModalHeader;
    'cds-modal': CdsModal;
  }
}
