import { CdsTextarea as Textarea } from '@cds/core/textarea';

import '@cds/core/textarea/register';
import { createReactComponent } from '../converter/react-wrapper';

type CdsTextareaType = Textarea;

export class CdsTextarea extends createReactComponent<CdsTextareaType>('cds-textarea') {}
