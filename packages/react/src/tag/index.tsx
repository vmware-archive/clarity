import { CdsTag as Tag } from '@cds/core/tag';
import '@cds/core/tag/register';
import { createComponent } from '../converter/react-wrapper';

export const CdsTag = createComponent('cds-tag', Tag);
