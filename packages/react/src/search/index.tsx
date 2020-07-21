import { CdsSearch as SearchInput } from '@clr/core/search';

import '@clr/core/search/register';
import { createReactComponent } from '../converter/react-wrapper';

type CdsSearchInputType = SearchInput;
export class CdsSearch extends createReactComponent<CdsSearchInputType>('cds-search') {}
