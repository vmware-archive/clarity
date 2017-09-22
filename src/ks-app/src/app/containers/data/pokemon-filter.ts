/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {StringFilter} from "clarity-angular";
import {User} from "./user";

export class PokemonFilter implements StringFilter<User> {
    accepts(user: User, search: string): boolean {
        return "" + user.pokemon.number === search || user.pokemon.name.toLowerCase().indexOf(search) >= 0;
    }
}
