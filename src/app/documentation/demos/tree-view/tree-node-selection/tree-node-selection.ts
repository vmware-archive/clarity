/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const EXAMPLE_HTML = `
<clr-tree-node [(clrSelected)]="selected">
    Home
    <ng-template [clrIfExpanded]="true">
        <clr-tree-node>
            Documents
            <ng-template [clrIfExpanded]="true">
                <clr-tree-node>Document1.txt</clr-tree-node>
                <clr-tree-node>Document2.txt</clr-tree-node>
                <clr-tree-node>Document3.txt</clr-tree-node>
            </ng-template>
        </clr-tree-node>

        <clr-tree-node [(clrSelected)]="picturesNodeSelection">
            Pictures
            <ng-template [clrIfExpanded]="true">
                <clr-tree-node>pic1.png</clr-tree-node>
                <clr-tree-node>pic2.png</clr-tree-node>
                <clr-tree-node>pic3.png</clr-tree-node>
            </ng-template>
        </clr-tree-node>
    </ng-template>
</clr-tree-node>

<button class="btn btn-sm" type="button" (click)="togglePicturesSelection()">Toggle Pictures</button>
`;

const EXAMPLE_TS = `
export class TreeNodeSelectionDemo {
    selected: boolean = false;
    picturesNodeSelection: boolean = false;

    togglePicturesSelection() {
        this.picturesNodeSelection = !this.picturesNodeSelection;
    }
}
`;

@Component({
    selector: "clr-tree-node-selection-demo",
    // Note the .css extension here, not .scss. That's the best we can have at the moment.
    styleUrls: ["../tree-view.demo.scss"],
    templateUrl: "tree-node-selection.html"
})
export class TreeNodeSelectionDemo {
    example_html = EXAMPLE_HTML;
    example_ts = EXAMPLE_TS;

    selected: boolean = false;
    picturesNodeSelection: boolean = false;

    togglePicturesSelection() {
        this.picturesNodeSelection = !this.picturesNodeSelection;
    }
}
