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
        <clr-icon shape="user" clrVerticalNavIcon></clr-icon>
        Normal
        <clr-vertical-nav-group-children>
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
        <clr-icon shape="flame" clrVerticalNavIcon></clr-icon>
        Fire
        <clr-vertical-nav-group-children>
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
        <clr-icon shape="bolt" clrVerticalNavIcon></clr-icon>
        Electric
        <clr-vertical-nav-group-children>
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
    path: "pokemon",
    component: ProjectPokemon,
    children: [
        {
            path: "",
            redirectTo: "normal/pidgey"
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
            path: "electric/pikachu",
            component: PikachuDemo
        },
        {
            path: "electric/raichu",
            component: RaichuDemo
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
    selector: "clr-vertical-nav-nav-groups-demo",
    templateUrl: "./nav-groups.html",
    styleUrls: ["../../vertical-nav.demo.scss"]
})
export class VerticalNavGroupsDemo {
    htmlExample = HTML_EXAMPLE;
    routesExample = ROUTES_EXAMPLE;
    demoCollapsible: boolean = true;
}
