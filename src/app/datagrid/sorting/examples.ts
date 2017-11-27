/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
export const EXAMPLES = {
    sortingTS: `
import {Comparator} from "@clr/ng";

class PokemonComparator implements Comparator<User> {
    compare(a: User, b: User) {
        return a.pokemon.number - b.pokemon.number;
    }
}

@Component({ /* ... */ })
class MyComponent {
    private pokemonComparator = new PokemonComparator();
}
`,

    sortingHTML: `
<-- In the columns declaration -->
<clr-dg-column [clrDgField]="'pokemon.name'"
    [clrDgSortBy]="pokemonComparator">Pokemon</clr-dg-column>

<-- Or, default propery comparator created by shortcut on clrDgSortBy -->
<clr-dg-column [clrDgSortBy]="'pokemon.name'">Pokemon</clr-dg-column>
`
};
