import { CdsFile as File } from '@clr/core/file';

import '@clr/core/file/register';
import { createReactComponent } from '../converter/react-wrapper';

type CdsFileType = File;

export class CdsFile extends createReactComponent<CdsFileType>('cds-file') {}
