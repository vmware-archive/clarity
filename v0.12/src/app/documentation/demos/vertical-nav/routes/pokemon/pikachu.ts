/*
* Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
* This software is released under MIT license.
* The full license information can be found in LICENSE in the root directory of this project.
*/
import {Component} from "@angular/core";

@Component({
    selector: "clr-pikachu-demo",
    template: `
        <h4 class="demo-title">Pikachu</h4>
        <p>
            Whenever Pikachu comes across something new, it blasts it with a jolt of electricity.
            If you come across a blackened berry, it's evidence that
            this Pokémon mistook the intensity of its charge.
        </p>
    `,
    styleUrls: ["../../vertical-nav.demo.scss"]
})
export class PikachuDemo {
}
