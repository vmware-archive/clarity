/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";

import {Comparator} from "../interfaces/comparator";

@Injectable()
export class Sort {
    /**
     * Currently active comparator
     */
    private _comparator: Comparator<any>;
    public get comparator(): Comparator<any> {
        return this._comparator;
    }
    public set comparator(value: Comparator<any>) {
        this._comparator = value;
        this.emitChange();
    }

    /**
     * Ascending order if false, descending if true
     */
    private _reverse: boolean = false;
    public get reverse(): boolean {
        return this._reverse;
    }
    public set reverse(value: boolean) {
        this._reverse = value;
        this.emitChange();
    }

    /**
     * The Observable that lets other classes subscribe to sort changes
     */
    private _change = new Subject<Sort>();
    private emitChange() {
        this._change.next(this);
    }
    // We do not want to expose the Subject itself, but the Observable which is read-only
    public get change(): Observable<Sort> {
        return this._change.asObservable();
    }

    /**
     * Sets a comparator as the current one, or toggles reverse if the comparator is already used. The
     * optional forceReverse input parameter allows to override that toggling behavior by sorting in
     * reverse order if `true`.
     *
     * @param {Comparator<any>} sortBy the comparator to use for sorting
     * @param {boolean} [forceReverse] `true` to force sorting descendingly
     *
     * @memberof Sort
     */
    public toggle(sortBy: Comparator<any>, forceReverse?: boolean) {
        // We modify private properties directly, to batch the change event
        if (this.comparator === sortBy) {
            this._reverse = typeof forceReverse !== "undefined" ? forceReverse || !this._reverse : !this._reverse;
        } else {
            this._comparator = sortBy;
            this._reverse = typeof forceReverse !== "undefined" ? forceReverse : false;
        }
        this.emitChange();
    }

    /**
     * Clears the current sorting order
     */
    public clear() {
        this.comparator = null;
    }

    /**
     * Compares two objects according to the current comparator
     */
    public compare(a: any, b: any): number {
        return (this.reverse ? -1 : 1) * this.comparator.compare(a, b);
    }
}