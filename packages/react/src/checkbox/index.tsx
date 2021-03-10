import { CdsCheckbox as Checkbox, CdsCheckboxGroup as CheckboxGroup } from '@cds/core/checkbox';
import '@cds/core/checkbox/register';
import { createComponent } from '../converter/react-wrapper.js';

export const CdsCheckbox = createComponent('cds-checkbox', Checkbox);
export const CdsCheckboxGroup = createComponent('cds-checkbox-group', CheckboxGroup);
