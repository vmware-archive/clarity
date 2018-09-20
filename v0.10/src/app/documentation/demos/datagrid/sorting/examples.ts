/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
export const EXAMPLES = {
    sortingTS: `
import {Comparator} from "clarity-angular";

class PokemonComparator implements Comparator<User> {
    compare(a: User, b: User) {
        return a.pokemon.number - b.pokemon.number;
    }
}

@Component({ /* ... */ })
class MyComponent {
    public pokemonComparator = new PokemonComparator();
}
`,

    sortingHTML: `
<-- In the columns declaration -->
<clr-dg-column [clrDgField]="'pokemon.name'"
               [clrDgSortBy]="pokemonComparator">Pokemon</clr-dg-column>
`,
    preSortTS: `
    import {SortOrder} from 'clarity-angular';
    ...
    @Component({ /* ... */ })
    class MyComponent {
        this.descSort = SortOrder.Desc;
    }
`,
    preSortHTML: `
    <clr-dg-column [clrDgField]="'name'" [clrDgSortOrder]="descSort">Name</clr-dg-column>
`
};
