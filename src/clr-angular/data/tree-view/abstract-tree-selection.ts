/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

export abstract class AbstractTreeSelection {
    constructor(public parent: AbstractTreeSelection) {}

    abstract get children(): AbstractTreeSelection[];

    abstract selectedChanged(): void;
    abstract indeterminateChanged(): void;

    private _selected: boolean = false;
    private _indeterminate: boolean = false;

    public get selected(): boolean {
        return this._selected;
    }

    public set selected(value: boolean) {
        this._selected = value;
        this.indeterminate = false;
        this.children.forEach(child => child.parentChanged(value));
        if (this.parent) {
            this.parent.childChanged();
        }
        this.selectedChanged();
    }

    public get indeterminate(): boolean {
        return this._indeterminate;
    }

    public set indeterminate(value: boolean) {
        value = !!value;
        if (this._indeterminate !== value) {
            this._indeterminate = value;
            this.indeterminateChanged();
        }
    }

    childChanged(): void {
        let oneSelectedChild = false;
        const previousSelectedValue: boolean = this._selected;
        const previousIndeterminateValue: boolean = this._indeterminate;
        this._selected = true;
        this._indeterminate = false;

        for (const child of this.children) {
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

        if (this.parent &&
            (this._selected !== previousSelectedValue || this._indeterminate !== previousIndeterminateValue)) {
            this.parent.childChanged();
        }

        if (this.selected !== previousSelectedValue) {
            this.selectedChanged();
        }

        if (this.indeterminate !== previousIndeterminateValue) {
            this.indeterminateChanged();
        }
    }

    parentChanged(selected: boolean) {
        if (selected && !this.selected) {
            this._selected = true;
            this.indeterminate = false;
            this.children.forEach(child => child.parentChanged(true));
            this.selectedChanged();
        }
        if (!selected && (this.selected || this.indeterminate)) {
            this._selected = false;
            this.indeterminate = false;
            this.children.forEach(child => child.parentChanged(false));
            this.selectedChanged();
        }
    }
}
