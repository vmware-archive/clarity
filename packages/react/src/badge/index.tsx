import { CdsBadge as Badge } from '@cds/core/badge';
import '@cds/core/badge/register';
import { createComponent } from '../converter/react-wrapper.js';

export const CdsBadge = createComponent('cds-badge', Badge);
