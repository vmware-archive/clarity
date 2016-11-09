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
    private pokemonComparator = new PokemonComparator();
}
`,

    sortingHTML: `
<-- In the columns declaration -->
<clr-dg-column [clrDgField]="'pokemon.name'"
               [clrDgSortBy]="pokemonComparator">Pokemon</clr-dg-column>
`
};