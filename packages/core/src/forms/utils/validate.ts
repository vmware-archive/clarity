/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { CdsControlMessage } from '../control-message/control-message.element';
import { CdsControl } from '../control/control.element';

// https://developer.mozilla.org/en-US/docs/Web/API/ValidityState
export type ValidityStateKey =
  | 'valueMissing'
  | 'badInput'
  | 'customError'
  | 'patternMismatch'
  | 'rangeOverflow'
  | 'rangeUnderflow'
  | 'stepMismatch'
  | 'tooLong'
  | 'tooShort'
  | 'typeMismatch'
  | 'valid';

export function syncHTML5Validation(control: CdsControl, messages: CdsControlMessage[]) {
  messages
    .filter(m => m.hasAttribute('error'))
    .forEach(m => {
      m.setAttribute('hidden', '');
      m.status = 'error';
    });

  control.inputControl.addEventListener('blur', () => control.inputControl.checkValidity());

  control.inputControl.addEventListener('invalid', () => {
    messages.forEach(message => message.setAttribute('hidden', ''));
    messages.find(message => control.inputControl.validity[message.error])?.removeAttribute('hidden');
    control.status = 'error';
  });

  control.inputControl.addEventListener('input', () => {
    control.status = control.inputControl.validity.valid ? 'neutral' : control.status;

    messages
      .filter(m => control.inputControl.validity.valid && m.error && !control.inputControl.validity[m.error])
      .forEach(message => message.setAttribute('hidden', ''));
  });
}
