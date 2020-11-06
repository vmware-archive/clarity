import { CdsSelect as SelectInput } from '@cds/core/select';

import '@cds/core/select/register';
import { createReactComponent } from '../converter/react-wrapper';

type CdsSelectType = SelectInput;

export class CdsSelect extends createReactComponent<CdsSelectType>('cds-select') {}
