/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "clr-button-group-angular-demo",
    // Note the .css extension here, not .scss. That's the best we can have at the moment.
    styleUrls: ["../button-group.demo.css"],
    template: `
        <h4>Angular Styles</h4>
        <ul>
            <li><a [routerLink]="['./basic-structure']">Basic Structure</a></li>
            <li><a [routerLink]="['./directions']">Menu Directions</a></li>
            <li><a [routerLink]="['./icon-button']">Icons</a></li>
            <li><a [routerLink]="['./hide-overflow']">Hide/Show Overflow Toggle</a></li>
            <li><a [routerLink]="['./mixed-buttons']">Mixed Buttons</a></li>
            <li><a [routerLink]="['./move-button-in-menu']">Move Button In Menu</a></li>
            <li><a [routerLink]="['./move-multiple-buttons-in-menu']">Move Multiple Buttons In Menu</a></li>
            <li><a [routerLink]="['./move-all-in-menu']">Move All Buttons In Menu</a></li>
            <li><a [routerLink]="['./projection-update-test-1']">Projection Update Test 1</a></li>
            <li><a [routerLink]="['./projection-update-test-2']">Projection Update Test 2</a></li>
            <li><a [routerLink]="['./projection-update-test-3']">Projection Update Test 3</a></li>
            <li><a [routerLink]="['./projection-update-test-4']">Projection Update Test 4</a></li>
            <li><a [routerLink]="['./projection-update-test-5']">Projection Update Test 5</a></li>
            <li><a [routerLink]="['./projection-update-test-6']">Projection Update Test 6</a></li>
        </ul>
        <router-outlet></router-outlet>
    `
})
export class ButtonGroupAngularDemo {}
