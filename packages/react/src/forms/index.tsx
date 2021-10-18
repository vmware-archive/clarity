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
import { logReactVersion } from '../utils/index';

export const CdsControlMessage = createComponent(React, 'cds-control-message', ControlMessage);
export const CdsControlAction = createComponent(React, 'cds-control-action', ControlAction);
export const CdsControlGroup = createComponent(React, 'cds-control-group', ControlGroup);
export const CdsControl = createComponent(React, 'cds-control', Control);
export const CdsFormGroup = createComponent(React, 'cds-form-group', FormGroup);

logReactVersion(React);
