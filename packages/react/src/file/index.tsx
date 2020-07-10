import { CdsFile as File } from '@clr/core/file';

import '@clr/core/file/register';
import { createReactComponent } from '../converter/react-wrapper';

type CdsFile = File;

export const CdsFile = createReactComponent<CdsFile>('cds-file');
