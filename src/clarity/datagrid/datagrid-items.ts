/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {ChangeDetectorRef, Directive, DoCheck, Input, IterableDiffer, IterableDiffers,
    TemplateRef, TrackByFn, OnChanges, SimpleChanges} from "@angular/core";

import {Items} from "./providers/items";

@Directive({
    selector: "[clrDgItems][clrDgItemsOf]",
})
export class DatagridItems implements OnChanges, DoCheck {
    @Input("clrDgItemsOf") private rawItems: any[];

    private _differ: IterableDiffer;

    constructor(public template: TemplateRef<any>, private _differs: IterableDiffers,
                private _changeDetector: ChangeDetectorRef, private _items: Items) {
        _items.smartenUp();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if ("rawItems" in changes) {
            const currentItems = changes["rawItems"].currentValue;
            if (!this._differ && currentItems) {
                this._differ = this._differs.find(currentItems).create(this._changeDetector, this.trackBy);
            }
        }
    }

    /**
     * Tracking function to identify objects. Angular's default is reference equality.
     */
    @Input("clrDgItemsTrackBy") public trackBy: TrackByFn;

    ngDoCheck() {
        if (this._differ) {
            const changes = this._differ.diff(this.rawItems);
            if (changes) {
                // TODO: not very efficient right now,
                // but premature optimization is the root of all evil.
                this._items.all = this.rawItems;
            }
        }
    }
}