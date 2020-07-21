import { CdsTextarea as Textarea } from '@clr/core/textarea';

import '@clr/core/textarea/register';
import { createReactComponent } from '../converter/react-wrapper';

type CdsTextareaType = Textarea;

export class CdsTextarea extends createReactComponent<CdsTextareaType>('cds-textarea') {}
