import { CdsTag as Tag } from '@clr/core/tag';
import '@clr/core/tag/register';
import { createReactComponent } from '../converter/react-wrapper';

type CdsTagType = Tag;
export class CdsTag extends createReactComponent<CdsTagType>('cds-tag') {}
