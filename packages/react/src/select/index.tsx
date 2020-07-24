import { CdsSelect as SelectInput } from '@clr/core/select';

import '@clr/core/select/register';
import { createReactComponent } from '../converter/react-wrapper';

type CdsSelectType = SelectInput;

export class CdsSelect extends createReactComponent<CdsSelectType>('cds-select') {}
