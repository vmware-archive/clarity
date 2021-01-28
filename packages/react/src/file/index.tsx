import { CdsFile as File } from '@cds/core/file';
import '@cds/core/file/register';
import { createComponent } from '../converter/react-wrapper';

export const CdsFile = createComponent('cds-file', File);
