/*
* Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
* This software is released under MIT license.
* The full license information can be found in LICENSE in the root directory of this project.
*/
import {Component} from "@angular/core";

const HTML_EXAMPLE = `
<clr-vertical-nav [clrVerticalNavCollapsible]="collapsible">
    <clr-vertical-nav-group
            routerLinkActive="active">
        <a clrVerticalNavLink
           routerLink="./normal"
           routerLinkActive="active"
           [routerLinkActiveOptions]="{exact:true}">
            <clr-icon shape="user" clrVerticalNavIcon></clr-icon>
            Normal
        </a>
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
        <a clrVerticalNavLink
           routerLink="./fire"
           routerLinkActive="active"
           [routerLinkActiveOptions]="{exact:true}">
            <clr-icon shape="flame" clrVerticalNavIcon></clr-icon>
            Fire
        </a>
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
        <a clrVerticalNavLink
           routerLink="./electric"
           routerLinkActive="active"
           [routerLinkActiveOptions]="{exact:true}">
            <clr-icon shape="bolt" clrVerticalNavIcon></clr-icon>
            Electric
        </a>
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
    path: "pokemon",
    component: ProjectPokemon,
    children: [
        {
            path: "",
            redirectTo: "normal"
        },
        {
            path: "normal",
            component: NormalPokemon
        },
        {
            path: "normal/snorlax",
            component: Snorlax
        },
        {
            path: "normal/pidgey",
            component: Pidgey
        },
        {
            path: "electric",
            component: ElectricPokemon
        },
        {
            path: "electric/pikachu",
            component: Pikachu
        },
        {
            path: "electric/raichu",
            component: Raichu
        },
        {
            path: "fire",
            component: FirePokemon
        },
        {
            path: "fire/charmander",
            component: Charmander
        },
        {
            path: "fire/charizard",
            component: Charizard
        },
        {
            path: "credit",
            component: Pokedex
        }
    ],
}
...
`;

@Component({
    selector: "clr-vertical-nav-nav-groups-parent-links-demo",
    templateUrl: "./nav-groups.html",
    styleUrls: ["../../vertical-nav.demo.scss"]
})
export class NavGroupsParentLinksVerticalNavDemo {
    htmlExample = HTML_EXAMPLE;
    routesExample = ROUTES_EXAMPLE;
    demoCollapsible: boolean = true;
}
