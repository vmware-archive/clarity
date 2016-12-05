/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {
    Component,
    ContentChildren,
    EventEmitter,
    Input,
    Output,
    QueryList,
    Optional,
    SkipSelf,
    trigger,
    animate,
    state,
    style,
    transition
} from "@angular/core";

import {AbstractTreeSelection} from "./abstract-tree-selection";
import {TreeSelectionService} from "./providers/treeSelection.service";

@Component({
    selector: "clr-tree-node",
    templateUrl: "./tree-node.html",
    animations: [trigger("collapse", [
        state("true", style({
            "height": 0,
            "overflow-y": "hidden"
        })),
        transition("true => false", [
            animate("0.2s ease-in-out", style({
                "height": "*",
                "overflow-y": "hidden"
            }))
        ]),
        transition("false => true", [
            style({
                "height": "*",
                "overflow-y": "hidden"
            }),
            animate("0.2s ease-in-out")
        ])
    ])],
    host: {"[class.clr-tree--compact]": "isCompact"}
})
export class TreeNode extends AbstractTreeSelection {

    constructor(@Optional() @SkipSelf() parent: TreeNode,
                @Optional() @SkipSelf() public treeSelectionService: TreeSelectionService) {
        super(parent, treeSelectionService);
    }

    @Input("clrTreeModel") model: any;

    @ContentChildren(TreeNode) _children: QueryList<TreeNode>;

    /**
     * Generates the child TreeNodes array from the ContentChildren QueryList
     * @returns {TreeNode[]|Array}
     */
    get children(): AbstractTreeSelection[] {
        return this._children ? this._children.toArray().filter(child => this !== child) : [];
    }

    get nodeSelected(): boolean {
        return this.selected;
    }

    @Input("clrTreeNodeSelected")
    set nodeSelected(value: boolean) {
        if (this.selected !== value) {
            this.selected = value;
        }
    }

    @Output("clrTreeNodeSelectedChange") nodeSelectedChange: EventEmitter<boolean>
        = new EventEmitter<boolean>(true);

    selectedChanged(): void {
        this.nodeSelectedChange.emit(this.selected);
    }

    /**
     * Returns true if a TreeNode contains child TreeNodes and false otherwise.
     * @returns {boolean}
     */
    public get hasChildren(): boolean {
        if (this.children && this.children.length > 0) {
            return true;
        }
        return false;
    }

    @Input("clrTreeNodeExpanded") expanded = false;
    @Output("clrTreeNodeExpandedChange") expandedChange: EventEmitter<boolean>
        = new EventEmitter<boolean>(true);

    /**
     * Determines the caret direction based on the expanded/collapsed
     * state of the TreeNode.
     *
     * Returns "down" when collapsed and "right" when expanded
     * @returns {string|string}
     */
    public get caretDirection(): string {
        return (this.expanded) ? "down" : "right";
    }

    @Input("clrTreeNodeExpandable") isExpandable = false;
    @Input("clrTreeNodeLoading") loading = false;

    /**
     * Clicking on the caret sign calls this method.
     * Toggles the expanded/collapsed state of the TreeNode
     */
    toggleExpand(): void {
        this.expanded = !this.expanded;
        this.expandedChange.emit(this.expanded);
    }

    /**
     * Returns if the TreeNode is selectable or not
     * @returns {boolean}
     */
    get selectable(): boolean {
        if (this.treeSelectionService) {
            return this.treeSelectionService.selectable;
        }
        return false;
    }

    /*Note: Experimental Feature. Might be removed*/
    @Input("clrTreeCompact") isCompact: boolean = false;

}
