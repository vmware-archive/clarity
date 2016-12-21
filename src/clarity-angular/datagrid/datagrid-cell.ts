/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

@Component({
    selector: "clr-dg-cell",
    template: `
        <ng-content></ng-content>
    `,
    host: {
        "[class.datagrid-cell]": "true",
    }
})
export class DatagridCell {
}