/*
* Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
* This software is released under MIT license.
* The full license information can be found in LICENSE in the root directory of this project.
*/
import {Component} from "@angular/core";

@Component({
    selector: "clr-fighting-pokemon-demo",
    template: `
        <h4 class="demo-title">Fighting</h4>
        <p>
            Fighting Pokémon are strong and muscle-bound, often based on martial artists. 
            Fighting moves are super-effective against five other types (as is Ground), 
            making them very good offensively. Most Fighting type moves are in the Physical category, 
            for obvious reasons.
        </p>  
    `,
    styleUrls: ["../../vertical-nav.demo.scss"]
})
export class FightingPokemonDemo {
}
