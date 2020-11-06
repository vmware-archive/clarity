import { CdsDivider as Divider } from '@cds/core/divider';
import '@cds/core/divider/register';
import { createReactComponent } from '../converter/react-wrapper';

type CdsDividerType = Divider;
export class CdsDivider extends createReactComponent<CdsDividerType>('cds-divider') {}
