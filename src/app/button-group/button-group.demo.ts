/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "clr-button-group-demo",
    // Note the .css extension here, not .scss. That's the best we can have at the moment.
    styleUrls: ["./button-group.demo.css"],
    template: `
        <h2>Button Group</h2>
        <ul>
            <li><a [routerLink]="['./static']">Static styles</a></li>
            <li><a [routerLink]="['./angular']">Angular component</a></li>
        </ul>
        <router-outlet></router-outlet>
    `
})

export class ButtonGroupDemo {
}
