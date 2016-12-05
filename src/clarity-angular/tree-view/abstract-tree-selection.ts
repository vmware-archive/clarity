/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

/**
 * Author: Eudes
 */

import {TreeSelection} from "./tree-selection";
import {TreeSelectionService} from "./providers/treeSelection.service";

export abstract class AbstractTreeSelection {
    constructor(public parent: AbstractTreeSelection,
                public treeSelectionService: TreeSelectionService) {
    }

    public model: any;

    abstract get children(): AbstractTreeSelection[];

    //FIXME: Eudes comment from https://github.com/vmware/clarity/pull/382
    // I think that by registering TreeNodes as AbstractTreeSelection providers,
    // we can use @ContentChildren directly here and add more logic to this class
    // so we can reuse it more easily in other components
    // (in our case, at least Stack View and Datagrid).
    // Please don't fix this right now, we'll worry about it when we reuse the class.

    abstract selectedChanged(): void;

    private _selected: boolean = false;
    private _indeterminate: boolean = false;

    public get selected(): boolean {
        return this._selected;
    }

    public set selected(value: boolean) {
        this._selected = value;
        this._indeterminate = false;
        this.children.forEach(child => child.parentChanged(value));
        if (this.parent) {
            this.parent.childChanged();
        }
        this.treeSelectionService.notify();
        this.selectedChanged();
    }

    public get indeterminate(): boolean {
        return this._indeterminate;
    }

    childChanged(): void {
        let oneSelectedChild = false;
        let previousSelectedValue: boolean = this._selected;
        let previousIndeterminateValue: boolean = this._indeterminate;
        this._selected = true;
        this._indeterminate = false;

        for (let child of this.children) {
            if (child.indeterminate) {
                this._selected = false;
                this._indeterminate = true;
                break;
            }
            if (child.selected) {
                oneSelectedChild = true;
                if (this._selected === false) {
                    this._indeterminate = true;
                    break;
                }
            } else {
                this._selected = false;
                if (oneSelectedChild) {
                    this._indeterminate = true;
                    break;
                }
            }
        }

        if (this.parent
                && (this._selected !== previousSelectedValue
                    || this._indeterminate !== previousIndeterminateValue)) {
            this.parent.childChanged();
        }

        if (this.selected !== previousSelectedValue) {
            this.selectedChanged();
        }
    }

    parentChanged(selected: boolean) {
        if (selected && !this.selected) {
            this._selected = true;
            this._indeterminate = false;
            this.children.forEach(child => child.parentChanged(true));
            this.selectedChanged();
        }
        if (!selected && (this.selected || this.indeterminate)) {
            this._selected = false;
            this._indeterminate = false;
            this.children.forEach(child => child.parentChanged(false));
            this.selectedChanged();
        }
    }

    toTreeSelection(): TreeSelection {
        if (this.selected || this.indeterminate) {
            return {
                model: this.model,
                selected: this.selected,
                children: this.children.map(child => child.toTreeSelection())
                    .filter(child => !!child)
            };
        }
        return null;
    }

    matchTreeSelection(selectionArray: TreeSelection[]): void {
        for (let selection of selectionArray) {
            if (this.model === selection.model) {
                if (this.selected !== selection.selected) {
                    this.selected = selection.selected;
                }
                if (selection.children) {
                    this.children.forEach(child => child.matchTreeSelection(selection.children));
                }
                break;
            }
        }
    }
}