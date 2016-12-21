/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
export const EXAMPLES = {
    stringFilterInterface: `
interface StringFilter<T> {
    accepts(item: T, search: string): boolean;
}
`,

    stringFilterInput: `
<-- In the columns declaration -->
<clr-dg-column>
    My column
    <clr-dg-string-filter [clrDgStringFilter]="myFilter"></clr-dg-string-filter>
</clr-dg-column>
`,

    stringFilterTS: `
import {StringFilter} from "clarity-angular";

class PokemonFilter implements StringFilter<User> {
    accepts(user: User, search: string):boolean {
        return "" + user.pokemon.number == search
            || user.pokemon.name.toLowerCase().indexOf(search) >= 0;
    }
}

@Component({ /* ... */ })
class MyComponent {
    private pokemonFilter = new PokemonFilter();
}
`,

    stringFilterHTML: `
<-- In the columns declaration -->
<clr-dg-column>
    Pokemon
    <clr-dg-string-filter [clrDgStringFilter]="pokemonFilter"></clr-dg-string-filter>
</clr-dg-column>
`
};