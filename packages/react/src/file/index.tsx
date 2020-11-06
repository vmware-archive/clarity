import { CdsFile as File } from '@cds/core/file';

import '@cds/core/file/register';
import { createReactComponent } from '../converter/react-wrapper';

type CdsFileType = File;

export class CdsFile extends createReactComponent<CdsFileType>('cds-file') {}
