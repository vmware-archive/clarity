import { CdsIcon as Icon, ClarityIcons as ClrIcons } from '@clr/core/icon';
import '@clr/core/icon/register';
import { createReactComponent } from '../converter/react-wrapper';

type CdsIconType = Icon;
export const CdsIcon = createReactComponent<CdsIconType>('cds-icon');
export const ClarityIcons = ClrIcons;
