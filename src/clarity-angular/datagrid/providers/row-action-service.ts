/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Injectable} from "@angular/core";
import {DatagridRenderOrganizer} from "../render/render-organizer";

@Injectable()
export class RowActionService {

    constructor(private renderOrganizer: DatagridRenderOrganizer) {}

    /**
     * false means no rows with action
     */
    public hasActionableRow: boolean  = false;
    /*
     * Ad-hoc dirty lock, handling only a single pending action
     */
    private locked = false;
    private waiting: () => void;

    public open(fn: () => void) {
        if (!this.locked) {
            this.locked = true;
            fn();
            // Scrollbar might have disappeared, we need to warn the renderers
            // TODO: A webkit bug prevents us from simply refreshing the scrollbar. Weird. Needs investigation.
            // this.renderOrganizer.scrollbar.next();
            this.renderOrganizer.resize();
        } else {
            this.waiting = fn;
        }
    }

    public close() {
        if (this.waiting) {
            this.waiting();
            delete this.waiting;
        } else {
            this.locked = false;
            // Scrollbar might have appeared, we need to warn the renderers
            // TODO: A webkit bug prevents us from simply refreshing the scrollbar. Weird. Needs investigation.
            // this.renderOrganizer.scrollbar.next();
            this.renderOrganizer.resize();
        }
    }
}
