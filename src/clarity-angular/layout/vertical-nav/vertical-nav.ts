/**
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Component, EventEmitter, Input, OnDestroy, Output} from "@angular/core";
import {Subscription} from "rxjs/Subscription";

import {VerticalNavGroupService} from "./providers/vertical-nav-group.service";
import {VerticalNavIconService} from "./providers/vertical-nav-icon.service";
import {VerticalNavService} from "./providers/vertical-nav.service";

@Component({
    selector: "clr-vertical-nav",
    templateUrl: "./vertical-nav.html",
    providers: [VerticalNavService, VerticalNavIconService, VerticalNavGroupService],
    host: {
        "class": "clr-vertical-nav",
        "[class.is-collapsed]": "collapsed",
        "[class.has-nav-groups]": "hasNavGroups",
        "[class.has-icons]": "hasIcons"
    }
})
export class VerticalNav implements OnDestroy {
    get collapsible(): boolean {
        return this._verticalNavService.collapsible;
    }

    @Input("clrVerticalNavCollapsible")
    set collapsible(value: boolean) {
        this._verticalNavService.collapsible = value;
    }

    get collapsed(): boolean {
        return this._verticalNavService.collapsed;
    }

    @Input("clrVerticalNavCollapsed")
    set collapsed(value: boolean) {
        this._verticalNavService.collapsed = value;
    }

    @Output("clrVerticalNavCollapsedChange")
    private _collapsedChanged: EventEmitter<boolean> = new EventEmitter<boolean>(true);

    get hasNavGroups(): boolean {
        return this._verticalNavGroupService.navGroups.length > 0;
    }

    get hasIcons(): boolean {
        return this._verticalNavIconService.hasIcons;
    }

    private _sub: Subscription;

    constructor(private _verticalNavService: VerticalNavService,
                private _verticalNavIconService: VerticalNavIconService,
                private _verticalNavGroupService: VerticalNavGroupService) {
        this._sub = this._verticalNavService.collapsedChanged.subscribe(value => {
            this._collapsedChanged.emit(value);
        });
    }

    toggleByButton() {
        this.collapsed = !this.collapsed;
    }

    ngOnDestroy() {
        this._sub.unsubscribe();
    }
}
