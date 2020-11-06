import { CdsCheckbox as Checkbox } from '@cds/core/checkbox';
import { CdsCheckboxGroup as CheckboxGroup } from '@cds/core/checkbox';

import '@cds/core/checkbox/register';
import { createReactComponent } from '../converter/react-wrapper';

type CdsCheckboxType = Checkbox;
type CdsCheckboxGroupType = CheckboxGroup;

export class CdsCheckbox extends createReactComponent<CdsCheckboxType>('cds-checkbox') {}
export class CdsCheckboxGroup extends createReactComponent<CdsCheckboxGroupType>('cds-checkbox-group') {}
