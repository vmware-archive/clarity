/*
* Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
* This software is released under MIT license.
* The full license information can be found in LICENSE in the root directory of this project.
*/
import {Component} from "@angular/core";

@Component({
    selector: "clr-normal-pokemon-demo",
    template: `
        <h4 class="demo-title">Normal</h4>
        <p>
            The Normal type is the most basic type of Pokémon. 
            They are very common and appear from the very first route you visit. 
            Most Normal Pokémon are single type, but there is a large contingent having a second type of Flying.
        </p>
    `,
    styleUrls: ["../../vertical-nav.demo.scss"]
})
export class NormalPokemonDemo {
}
