/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {
    AfterContentInit,
    Component,
    ContentChildren,
    EventEmitter,
    Input,
    Output,
    QueryList
} from "@angular/core";

import {TreeSelectionService} from "./providers/treeSelection.service";
import {TreeSelection} from "./tree-selection";
import {TreeNode} from "./tree-node";

@Component({
    selector: "clr-tree",
    templateUrl: "./tree-view.html",
    host: {"[class.clr-tree--compact]": "isCompact"},
    providers: [TreeSelectionService]
})
export class TreeView implements AfterContentInit {

    @ContentChildren(TreeNode) children: QueryList<TreeNode>;

    /*Note: Experimental Feature. Might be removed*/
    @Input("clrTreeCompact") isCompact: boolean = false;

    generateTreeSelection(): TreeSelection[] {
        let treeSelection: TreeSelection[] = [];
        this.children.forEach(child => treeSelection.push(child.toTreeSelection()));
        return treeSelection.filter(selection => !!selection);
    }

    /**
     * Verifies whether the input received is valid or not.
     * Throws an error if invalid.
     * @param selectionArray
     */
    verifyInput(selectionArray: TreeSelection[]): void {
        //Check if selection is of type array
        //http://stackoverflow.com/a/4775737/3538394
        if (Object.prototype.toString.call(selectionArray) !== "[object Array]") {
            throw "clrTreeSelection should be of type array. Received " + typeof selectionArray;
        }
        selectionArray.forEach(selection => this.treeSelectionService.verifyTreeSelection(selection));
    }

    populateTree(selectionArray: TreeSelection[]): void {
        if (this.children && selectionArray && selectionArray.length > 0) {
            this.children.toArray().forEach(child => child.matchTreeSelection(selectionArray));
        }
    }

    private initialInput: any[];

    @Input("clrTreeSelected")
    set selected(value: TreeSelection[]) {
        this.verifyInput(value);
        this.treeSelectionService.selectable = true;
        this.initialInput = value;
    }

    @Output("clrTreeSelectedChange") selectedChange: EventEmitter<TreeSelection[]>
        = new EventEmitter<TreeSelection[]>(true);

    constructor(private treeSelectionService: TreeSelectionService) {}

    ngAfterContentInit() {
        this.treeSelectionService.change.subscribe(() => {
            if (this.children) {
                this.selectedChange.emit(this.generateTreeSelection());
            }
        });
        this.populateTree(this.initialInput);
    }

}

