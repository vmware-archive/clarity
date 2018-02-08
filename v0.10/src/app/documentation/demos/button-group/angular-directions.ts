/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const HTML_EXAMPLE = `
<clr-button-group [clrMenuPosition]="'bottom-right'">
    <clr-button class="btn">Add</clr-button>
    <clr-button class="btn">Edit</clr-button>
    <clr-button class="btn">Download</clr-button>
    <clr-button class="btn" [clrInMenu]="true">Assign</clr-button>
    <clr-button class="btn" [clrInMenu]="true">Move</clr-button>
    <clr-button class="btn" [clrInMenu]="true">Delete</clr-button>
</clr-button-group>
`;

@Component({
    selector: "clr-button-group-angular-directions-demo",
    templateUrl: "./angular-directions.html"
})
export class ButtonGroupAngularDirectionsDemo {
    htmlExample = HTML_EXAMPLE;
}
