import {
  CdsControlMessage as ControlMessage,
  CdsControlAction as ControlAction,
  CdsInternalControlGroup as ControlGroup,
  CdsControl as Control,
  CdsFormGroup as FormGroup,
} from '@cds/core/forms';
import '@cds/core/forms/register';
import { createComponent } from '../converter/react-wrapper.js';

export const CdsControlMessage = createComponent('cds-control-message', ControlMessage);
export const CdsControlAction = createComponent('cds-control-action', ControlAction);
export const CdsControlGroup = createComponent('cds-control-group', ControlGroup);
export const CdsControl = createComponent('cds-control', Control);
export const CdsFormGroup = createComponent('cds-form-group', FormGroup);
