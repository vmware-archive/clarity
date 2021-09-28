import {
  CdsControlMessage as ControlMessage,
  CdsControlAction as ControlAction,
  CdsInternalControlGroup as ControlGroup,
  CdsControl as Control,
  CdsFormGroup as FormGroup,
} from '@cds/core/forms';
import '@cds/core/forms/register';
import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { logReactVersion } from '../utils';

export const CdsControlMessage = createComponent(React, 'cds-control-message', ControlMessage);
export const CdsControlAction = createComponent(React, 'cds-control-action', ControlAction);
export const CdsControlGroup = createComponent(React, 'cds-control-group', ControlGroup);
export const CdsControl = createComponent(React, 'cds-control', Control);
export const CdsFormGroup = createComponent(React, 'cds-form-group', FormGroup);

/**
 * Setting displayName on the prototype is a workaround for now.
 * See: https://github.com/lit/lit/issues/2154
 * Follow: https://github.com/lit/lit/pull/2155
 */
CdsControlMessage.displayName = 'CdsControlMessage';
CdsControlAction.displayName = 'CdsControlAction';
CdsControlGroup.displayName = 'CdsControlGroup';
CdsControl.displayName = 'CdsControl';
CdsFormGroup.displayName = 'CdsFormGroup';

logReactVersion(React);
