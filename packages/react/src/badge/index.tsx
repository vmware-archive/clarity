import { CdsBadge as Badge } from '@clr/core/badge';
import '@clr/core/badge/register';
import { createReactComponent } from '../converter/react-wrapper';

type CdsBadgeType = Badge;
export class CdsBadge extends createReactComponent<CdsBadgeType>('cds-badge') {}
