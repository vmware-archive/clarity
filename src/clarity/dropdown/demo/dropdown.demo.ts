import {Component} from "@angular/core";

@Component({
    template: `
        <h2>Dropdowns</h2>
        <ul>
            <li><a [routerLink]="['./default']">Default Styles (Static)</a></li>
            <li><a [routerLink]="['./positioning']">Positioning with CSS Classnames (Static)</a></li>
            <li><a [routerLink]="['./fontawesome-toggle']">Icon Font Toggle (Static)</a></li>
            <li><a [routerLink]="['./buttonlink-toggle']">Button Link Toggle (Static)</a></li>
            <li><a [routerLink]="['./angular-positioning']">Positioning with Angular</a></li>
            <li><a [routerLink]="['./multi-click']">Stay Open After Click Event (Angular)</a></li>
        </ul>
        <router-outlet></router-outlet>
    `
})
export class DropdownDemo {
}
