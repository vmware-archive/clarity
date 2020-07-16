import { CdsProgressCircle as ProgressCircle } from '@clr/core/progress-circle';
import '@clr/core/progress-circle/register';
import { createReactComponent } from '../converter/react-wrapper';

type CdsProgressCircleType = ProgressCircle;
export class CdsProgressCircle extends createReactComponent<CdsProgressCircleType>('cds-progress-circle') {}
