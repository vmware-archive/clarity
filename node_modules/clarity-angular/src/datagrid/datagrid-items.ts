/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {ChangeDetectorRef, Directive, DoCheck, Input, IterableDiffer, IterableDiffers,
    TemplateRef, TrackByFn} from "@angular/core";

import {Items} from "./providers/items";

@Directive({
    selector: "[clrDgItems][clrDgItemsOf]",
})
export class DatagridItems implements DoCheck {
    private _rawItems: any[];

    private _differ: IterableDiffer;

    constructor(public template: TemplateRef<any>, private _differs: IterableDiffers,
                private _changeDetector: ChangeDetectorRef, private _items: Items) {
        _items.smartenUp();
    }

    @Input("clrDgItemsOf")
    public set items(rawItems: any[]) {
        this._rawItems = rawItems;
        if (rawItems) {
            this._differ = this._differs.find(rawItems).create(this._changeDetector, this.trackBy);
        }
    }

    /**
     * Tracking function to identify objects. Angular's default is reference equality.
     */
    @Input("clrDgItemsTrackBy") public trackBy: TrackByFn;

    ngDoCheck() {
        if (this._differ) {
            const changes = this._differ.diff(this._rawItems);
            if (changes) {
                // TODO: not very efficient right now,
                // but premature optimization is the root of all evil.
                this._items.all = this._rawItems;
            }
        }
    }
}