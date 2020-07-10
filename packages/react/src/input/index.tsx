import { CdsInput as Input } from '@clr/core/input';
import { CdsInputGroup as InputGroup } from '@clr/core/input';

import '@clr/core/input/register';
import { createReactComponent } from '../converter/react-wrapper';

type CdsInputype = Input;
type CdsInputGroupType = InputGroup;

export const CdsInput = createReactComponent<CdsInputype>('cds-input');
export const CdsInputGroup = createReactComponent<CdsInputGroupType>('cds-input-group');
