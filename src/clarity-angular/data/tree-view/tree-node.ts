/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {animate, state, style, transition, trigger} from "@angular/animations";
import {Component, EventEmitter, Input, OnDestroy, Optional, Output, SkipSelf} from "@angular/core";

import {Expand} from "../../utils/expand/providers/expand";
import {LoadingListener} from "../../utils/loading/loading-listener";

import {AbstractTreeSelection} from "./abstract-tree-selection";
import {clrTreeSelectionProviderFactory} from "./providers/tree-selection.provider";
import {TreeSelectionService} from "./providers/tree-selection.service";

@Component({
    selector: "clr-tree-node",
    templateUrl: "./tree-node.html",
    providers: [
        Expand, {provide: LoadingListener, useExisting: Expand}, {
            provide: TreeSelectionService,
            useFactory: clrTreeSelectionProviderFactory,
            deps: [[new Optional(), new SkipSelf(), TreeSelectionService]]
        }
    ],
    animations: [trigger("childNodesState",
                         [
                             state("expanded", style({"height": "*", "overflow-y": "hidden"})),
                             state("collapsed", style({"height": 0, "overflow-y": "hidden"})),
                             transition("expanded <=> collapsed", animate("0.2s ease-in-out"))
                         ])]

})
export class TreeNode extends AbstractTreeSelection implements OnDestroy {
    constructor(public nodeExpand: Expand, @Optional() @SkipSelf() public parent: TreeNode,
                public treeSelectionService: TreeSelectionService) {
        super(parent);
        if (this.parent) {
            this.parent.register(this);
        }
    }

    private _children: TreeNode[] = [];

    get children(): TreeNode[] {
        return this._children;
    }

    /* Registration */

    checkIfChildNodeRegistered(node: TreeNode): boolean {
        return (this.children.indexOf(node) > -1);
    }

    // TODO: This should ideally be in AbstractTreeSelection
    // Tried doing this but ran into some issues and also ran out of time.
    // Will get this done later.
    register(node: TreeNode): void {
        if (!this.checkIfChildNodeRegistered(node)) {
            this.children.push(node);
            if (this.selectable) {
                if (this.selected) {
                    node.parentChanged(this.selected);
                }
            }
        }
    }

    // TODO: This should ideally be in AbstractTreeSelection
    // Tried doing this but ran into some issues and also ran out of time.
    // Will get this done later.
    unregister(node: TreeNode): void {
        const index = this.children.indexOf(node);
        if (index > -1) {
            this.children.splice(index, 1);
        }
    }

    /* Selection */

    activateSelection(): void {
        if (this.treeSelectionService && !this.treeSelectionService.selectable) {
            this.treeSelectionService.selectable = true;
        }
    }

    @Input("clrSelected")
    public set nodeSelected(value: boolean) {
        // required for recursive trees to discard unset inputs.
        this.activateSelection();
        if (value === undefined || value === null) {
            return;
        }
        if (this.selected !== value) {
            this.selected = value;
        }
    }

    @Output("clrSelectedChange") nodeSelectedChange: EventEmitter<boolean> = new EventEmitter<boolean>(true);

    selectedChanged(): void {
        this.nodeSelectedChange.emit(this.selected);
    }

    get selectable(): boolean {
        if (this.treeSelectionService) {
            return this.treeSelectionService.selectable;
        }
        return false;
    }

    @Input("clrIndeterminate")
    set nodeIndeterminate(value: boolean) {
        this.indeterminate = value;
        this.activateSelection();
    }

    @Output("clrIndeterminateChange") nodeIndeterminateChanged: EventEmitter<boolean> = new EventEmitter<boolean>(true);

    indeterminateChanged(): void {
        this.nodeIndeterminateChanged.emit(this.indeterminate);
    }

    /* Expansion */

    toggleExpand(): void {
        this.nodeExpand.expanded = !this.nodeExpand.expanded;
    }

    public get caretDirection(): string {
        return (this.nodeExpand.expanded) ? "down" : "right";
    }

    get expanded(): boolean {
        return this.nodeExpand.expanded;
    }

    set expanded(value: boolean) {
        value = !!value;
        if (this.nodeExpand.expanded !== value) {
            this.nodeExpand.expanded = value;
        }
    }

    get state(): string {
        return (this.expanded && !this.nodeExpand.loading) ? "expanded" : "collapsed";
    }

    /* Lifecycle */

    ngOnDestroy() {
        if (this.parent) {
            this.parent.unregister(this);
        }
    }
}
