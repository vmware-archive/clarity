/*
* Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
* This software is released under MIT license.
* The full license information can be found in LICENSE in the root directory of this project.
*/
import {Component} from "@angular/core";

@Component({
    selector: "clr-electric-pokemon-demo",
    template: `
        <h4 class="demo-title">Electric</h4>
        <p>
            There are relatively few Electric Pokémon; in fact only four were added in the third generation. 
            Most are based on rodents or inanimate objects.
        </p>
        <p>
            Electric Pokémon are very good defensively, being weak only to Ground moves.
        </p>
    `,
    styleUrls: ["../../vertical-nav.demo.scss"]
})
export class ElectricPokemonDemo {
}
