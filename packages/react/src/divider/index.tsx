import { CdsDivider as Divider } from '@clr/core/divider';
import '@clr/core/divider/register';
import { createReactComponent } from '../converter/react-wrapper';

type CdsDividerType = Divider;
export class CdsDivider extends createReactComponent<CdsDividerType>('cds-divider') {}
