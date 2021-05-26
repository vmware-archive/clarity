import { CdsCard as Card } from '@cds/core/card';
import '@cds/core/card/register';
import { createComponent } from '../converter/react-wrapper.js';

export const CdsCard = createComponent('cds-card', Card);
