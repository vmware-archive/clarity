import { CdsInput as Input, CdsInputGroup as InputGroup } from '@cds/core/input';
import '@cds/core/input/register';
import { createComponent } from '../converter/react-wrapper.js';

export const CdsInput = createComponent('cds-input', Input);
export const CdsInputGroup = createComponent('cds-input-group', InputGroup);
