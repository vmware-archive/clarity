/*
* Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
* This software is released under MIT license.
* The full license information can be found in LICENSE in the root directory of this project.
*/
import {Component} from "@angular/core";

const HTML_EXAMPLE = `
<div class="main-container">
    <header class="header">
        ...
    </header>
    <div class="content-container">
        <div class="content-area">
            <router-outlet></router-outlet>
        </div>
        <clr-vertical-nav>
            <a clrVerticalNavLink routerLink="./charmander" routerLinkActive="active">Charmander</a>
            <a clrVerticalNavLink routerLink="./jigglypuff" routerLinkActive="active">Jigglypuff</a>
            <a clrVerticalNavLink routerLink="./pikachu" routerLinkActive="active">Pikachu</a>
            <a clrVerticalNavLink routerLink="./raichu" routerLinkActive="active">Raichu</a>
            <a clrVerticalNavLink routerLink="./snorlax" routerLinkActive="active">Snorlax</a>
            <a clrVerticalNavLink routerLink="./credit" routerLinkActive="active">Credit</a>
        </clr-vertical-nav>
    </div>
</div>
`;

@Component({
    selector: "clr-basic-structure-vertical-nav-demo",
    templateUrl: "./basic-structure.html",
    styleUrls: ["../../vertical-nav.demo.scss"]
})
export class BasicNavStructureDemo {
    htmlExample = HTML_EXAMPLE;
}
