import { CdsInput as Input } from '@cds/core/input';
import { CdsInputGroup as InputGroup } from '@cds/core/input';

import '@cds/core/input/register';
import { createReactComponent } from '../converter/react-wrapper';

type CdsInputype = Input;
type CdsInputGroupType = InputGroup;

export class CdsInput extends createReactComponent<CdsInputype>('cds-input') {}
export class CdsInputGroup extends createReactComponent<CdsInputGroupType>('cds-input-group') {}
