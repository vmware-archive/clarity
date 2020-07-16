import { CdsIcon as Icon } from '@clr/core/icon';
import '@clr/core/icon/register';
import { createReactComponent } from '../converter/react-wrapper';

type CdsIconType = Icon;
export class CdsIcon extends createReactComponent<CdsIconType>('cds-icon') {}
