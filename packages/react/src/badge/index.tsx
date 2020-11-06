import { CdsBadge as Badge } from '@cds/core/badge';
import '@cds/core/badge/register';
import { createReactComponent } from '../converter/react-wrapper';

type CdsBadgeType = Badge;
export class CdsBadge extends createReactComponent<CdsBadgeType>('cds-badge') {}
