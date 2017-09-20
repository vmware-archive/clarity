/*
* Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
* This software is released under MIT license.
* The full license information can be found in LICENSE in the root directory of this project.
*/
import {Component} from "@angular/core";

const HTML_EXAMPLE = `
<clr-vertical-nav [clrVerticalNavCollapsible]="demoCollapsible">
    <clr-vertical-nav-group
            routerLinkActive="active">
        <a routerLink="./normal" hidden aria-hidden="true">
        </a>
        <clr-icon shape="user" clrVerticalNavIcon></clr-icon>
        Normal
        <clr-vertical-nav-group-children *clrIfExpanded="true">
            <a clrVerticalNavLink
               routerLink="./normal/pidgey"
               routerLinkActive="active">
                Pidgey
            </a>
            <a clrVerticalNavLink
               routerLink="./normal/snorlax"
               routerLinkActive="active">
                Snorlax
            </a>
        </clr-vertical-nav-group-children>
    </clr-vertical-nav-group>
    <clr-vertical-nav-group
            routerLinkActive="active">
        <a routerLink="./fire" hidden aria-hidden="true">
        </a>
        <clr-icon shape="flame" clrVerticalNavIcon></clr-icon>
        Fire
        <clr-vertical-nav-group-children *clrIfExpanded>
            <a clrVerticalNavLink
               routerLink="./fire/charmander"
               routerLinkActive="active">
                Charmander
            </a>
            <a clrVerticalNavLink
               routerLink="./fire/charizard"
               routerLinkActive="active">
                Charizard
            </a>
        </clr-vertical-nav-group-children>
    </clr-vertical-nav-group>
    <clr-vertical-nav-group
            routerLinkActive="active">
        <a routerLink="./electric" hidden aria-hidden="true">
        </a>
        <clr-icon shape="bolt" clrVerticalNavIcon></clr-icon>
        Electric
        <clr-vertical-nav-group-children *clrIfExpanded>
            <a clrVerticalNavLink
               routerLink="./electric/pikachu"
               routerLinkActive="active">
                Pikachu
            </a>
            <a clrVerticalNavLink
               routerLink="./electric/raichu"
               routerLinkActive="active">
                Raichu
            </a>
        </clr-vertical-nav-group-children>
    </clr-vertical-nav-group>
    <a clrVerticalNavLink routerLinkActive="active" routerLink="./credit">
        <clr-icon shape="certificate" clrVerticalNavIcon></clr-icon>
        Credit
    </a>
</clr-vertical-nav>
`;

const ROUTES_EXAMPLE = `
...
{
    path: "pokemons",
    component: ProjectPokemon,
    children: [
        {
            path: "",
            redirectTo: "normal/pidgey"
        },
        {
            path: "normal",
            component: PidgeyDemo
        },
        {
            path: "normal/snorlax",
            component: SnorlaxDemo
        },
        {
            path: "normal/pidgey",
            component: PidgeyDemo
        },
        {
            path: "electric",
            component: PikachuDemo
        },
        {
            path: "electric/pikachu",
            component: PikachuDemo
        },
        {
            path: "electric/raichu",
            component: RaichuDemo
        },
        {
            path: "fire",
            component: CharmanderDemo
        },
        {
            path: "fire/charmander",
            component: CharmanderDemo
        },
        {
            path: "fire/charizard",
            component: CharizardDemo
        },
        {
            path: "credit",
            component: PokedexDemo
        }
    ],
    ...
}
...
`;

@Component({
    selector: "clr-vertical-nav-lazy-loading-nav-groups-demo",
    templateUrl: "./lazy-loading-nav-groups.html",
    styleUrls: ["../../vertical-nav.demo.scss"]
})
export class LazyLoadingNavGroupsVerticalNavDemo {
    htmlExample = HTML_EXAMPLE;
    routesExample = ROUTES_EXAMPLE;
    demoCollapsible: boolean = true;
}
