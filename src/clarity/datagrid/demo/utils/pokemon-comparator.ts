/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Comparator} from "../../index";
import {User} from "../inventory/user";

export class PokemonComparator implements Comparator<User> {
    compare(a: User, b: User) {
        return a.pokemon.number - b.pokemon.number;
    }
}