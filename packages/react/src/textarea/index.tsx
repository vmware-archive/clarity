import { CdsTextarea as Textarea } from '@cds/core/textarea';
import '@cds/core/textarea/register';
import { createComponent } from '../converter/react-wrapper.js';

export const CdsTextarea = createComponent('cds-textarea', Textarea);
