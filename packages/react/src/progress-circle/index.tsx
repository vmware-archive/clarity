import { CdsProgressCircle as ProgressCircle } from '@cds/core/progress-circle';
import '@cds/core/progress-circle/register';
import { createReactComponent } from '../converter/react-wrapper';

type CdsProgressCircleType = ProgressCircle;
export class CdsProgressCircle extends createReactComponent<CdsProgressCircleType>('cds-progress-circle') {}
