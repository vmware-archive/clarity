/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "clr-tree-view-demo",
    // Note the .css extension here, not .scss. That's the best we can have at the moment.
    styleUrls: ["./tree-view.demo.css"],
    template: `
        <h2>TreeView</h2>

        <ul>
            <li><a [routerLink]="['./basic-tree-node']">Basic Tree Node Structure</a></li>
            <li><a [routerLink]="['./basic-tree-view']">Basic Tree View Structure</a></li>
            <li><a [routerLink]="['./tree-view-dynamic']">Dynamic Tree View</a></li>
            <li><a [routerLink]="['./lazy-loading']">Lazy Loading</a></li>
            <li><a [routerLink]="['./tree-node-label-change-expand']">Label Change on Expand</a></li>
            <li><a [routerLink]="['./tree-view-compact']">Compact Tree</a></li>
            <li><a [routerLink]="['./tree-node-selection']">Tree Node Selection</a></li>
            <li><a [routerLink]="['./tree-node-routing']">Tree Node Routing</a></li>
            <li><a [routerLink]="['./tree-node-prepopulate']">Pre-populating Trees</a></li>
        </ul>
        <router-outlet></router-outlet>
    `
})
export class TreeViewDemo {
}
