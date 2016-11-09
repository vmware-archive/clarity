import {Comparator} from "../../index";
import {User} from "../inventory/user";

export class PokemonComparator implements Comparator<User> {
    compare(a: User, b: User) {
        return a.pokemon.number - b.pokemon.number;
    }
}