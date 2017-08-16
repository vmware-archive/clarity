/*
* Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
* This software is released under MIT license.
* The full license information can be found in LICENSE in the root directory of this project.
*/
import {Component} from "@angular/core";

const HTML_EXAMPLE = `
<clr-vertical-nav>
    <a clrVerticalNavLink routerLink="./normal" routerLinkActive="active">
        <clr-icon clrVerticalNavIcon shape="user"></clr-icon>
        Normal
    </a>
    <a clrVerticalNavLink routerLink="./electric" routerLinkActive="active">
        <clr-icon clrVerticalNavIcon shape="bolt"></clr-icon>
        Electric
    </a>
    <a clrVerticalNavLink routerLink="./poison" routerLinkActive="active">
        <clr-icon clrVerticalNavIcon shape="sad-face"></clr-icon>
        Poison
    </a>
    <a clrVerticalNavLink routerLink="./grass" routerLinkActive="active">
        <clr-icon clrVerticalNavIcon shape="bug"></clr-icon>
        Grass
    </a>
    <a clrVerticalNavLink routerLink="./fighting" routerLinkActive="active">
        <clr-icon clrVerticalNavIcon shape="shield"></clr-icon>
        Fighting
    </a>
    <a clrVerticalNavLink routerLink="./credit" routerLinkActive="active">
        <clr-icon clrVerticalNavIcon shape="certificate"></clr-icon>
        Credit
    </a>
</clr-vertical-nav>
`;

@Component({
    selector: "clr-icon-links-vertical-nav-demo",
    templateUrl: "./icons.html",
    styleUrls: ["../../vertical-nav.demo.scss"]
})
export class IconLinksDemo {
    htmlExample = HTML_EXAMPLE;
}
