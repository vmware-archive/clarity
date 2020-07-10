import { CdsControlMessage as ControlMessage } from '@clr/core/forms';
import { CdsControlAction as ControlAction } from '@clr/core/forms';
import { CdsInternalControlGroup as ControlGroup } from '@clr/core/forms';
import { CdsControl as Control } from '@clr/core/forms';
import { CdsFormGroup as FormGroup } from '@clr/core/forms';

import '@clr/core/forms/register';
import { createReactComponent } from '../converter/react-wrapper';

type CdsControlMessageType = ControlMessage;
type CdsControlActionType = ControlAction;
type CdsControlGroupType = ControlGroup;
type CdsControlType = Control;
type CdsFormGroupType = FormGroup;

export const CdsControlMessage = createReactComponent<CdsControlMessageType>('cds-control-message');
export const CdsControlAction = createReactComponent<CdsControlActionType>('cds-control-action');
export const CdsControlGroup = createReactComponent<CdsControlGroupType>('cds-control-group');
export const CdsControl = createReactComponent<CdsControlType>('cds-control');
export const CdsFormGroup = createReactComponent<CdsFormGroupType>('cds-form-group');
