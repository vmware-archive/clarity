import { CdsTag as Tag } from '@cds/core/tag';
import '@cds/core/tag/register';
import { createReactComponent } from '../converter/react-wrapper';

type CdsTagType = Tag;
export class CdsTag extends createReactComponent<CdsTagType>('cds-tag') {}
