/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "clr-tree-node-selection-demo",
    // Note the .css extension here, not .scss. That's the best we can have at the moment.
    styleUrls: ["../tree-view.demo.css"],
    templateUrl: "tree-node-selection.html"
})
export class TreeNodeSelectionDemo {
    selection: any[] = [];

    picturesNodeSelection: boolean = false;

    togglePicturesSelection() {
        this.picturesNodeSelection = !this.picturesNodeSelection;
    }
}
