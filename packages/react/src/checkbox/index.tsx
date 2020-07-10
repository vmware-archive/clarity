import { CdsCheckbox as Checkbox } from '@clr/core/checkbox';
import { CdsCheckboxGroup as CheckboxGroup } from '@clr/core/checkbox';

import '@clr/core/checkbox/register';
import { createReactComponent } from '../converter/react-wrapper';

type CdsCheckboxType = Checkbox;
type CdsCheckboxGroupType = CheckboxGroup;

export const CdsCheckbox = createReactComponent<CdsCheckboxType>('cds-checkbox');
export const CdsCheckboxGroup = createReactComponent<CdsCheckboxGroupType>('cds-checkbox-group');
