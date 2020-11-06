import { CdsControlMessage as ControlMessage } from '@cds/core/forms';
import { CdsControlAction as ControlAction } from '@cds/core/forms';
import { CdsInternalControlGroup as ControlGroup } from '@cds/core/forms';
import { CdsControl as Control } from '@cds/core/forms';
import { CdsFormGroup as FormGroup } from '@cds/core/forms';

import '@cds/core/forms/register';
import { createReactComponent } from '../converter/react-wrapper';

type CdsControlMessageType = ControlMessage;
type CdsControlActionType = ControlAction;
type CdsControlGroupType = ControlGroup;
type CdsControlType = Control;
type CdsFormGroupType = FormGroup;

export class CdsControlMessage extends createReactComponent<CdsControlMessageType>('cds-control-message') {}
export class CdsControlAction extends createReactComponent<CdsControlActionType>('cds-control-action') {}
export class CdsControlGroup extends createReactComponent<CdsControlGroupType>('cds-control-group') {}
export class CdsControl extends createReactComponent<CdsControlType>('cds-control') {}
export class CdsFormGroup extends createReactComponent<CdsFormGroupType>('cds-form-group') {}
