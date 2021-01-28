import { CdsSearch as SearchInput } from '@cds/core/search';
import '@cds/core/search/register';
import { createComponent } from '../converter/react-wrapper';

export const CdsSearch = createComponent('cds-search', SearchInput);
