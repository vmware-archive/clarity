import { CdsFile as File } from '@cds/core/file';
import '@cds/core/file/register';
import { createComponent } from '../converter/react-wrapper.js';

export const CdsFile = createComponent('cds-file', File);
