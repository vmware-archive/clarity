import { CdsIcon as Icon } from '@cds/core/icon';
import '@cds/core/icon/register';
import { createReactComponent } from '../converter/react-wrapper';

type CdsIconType = Icon;
export class CdsIcon extends createReactComponent<CdsIconType>('cds-icon') {}
