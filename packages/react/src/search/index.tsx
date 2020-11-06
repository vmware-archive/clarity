import { CdsSearch as SearchInput } from '@cds/core/search';

import '@cds/core/search/register';
import { createReactComponent } from '../converter/react-wrapper';

type CdsSearchInputType = SearchInput;
export class CdsSearch extends createReactComponent<CdsSearchInputType>('cds-search') {}
