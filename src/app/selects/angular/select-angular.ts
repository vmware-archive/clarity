/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "clr-select-angular-demo",
    template: `
        <h4>Angular Styles</h4>
        <ul>
            <li><a [routerLink]="['./basic']">Basic</a></li>
        </ul>
        <router-outlet></router-outlet>
    `
})
export class SelectAngularDemo {
}
