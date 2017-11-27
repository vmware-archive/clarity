/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";

@Injectable()

/*********
 * @class IfOpenService
 *
 * @description
 * An injectable service used by IfOpen structural directives and the components that implemnt IfOpen in their
 * templates. It holds the value of the open state and provides an Observable that both the directive and the
 * implementing component can subscribe to in order to take action on open value changes.
 *
 */
export class IfOpenService {
    /********
     * @property _openChange
     *
     * @description
     * A RXJS Subject that updates and provides subscriptions to for the current open state of a component template
     * implemting the IfOpen structural directive.
     *
     * @type {Subject<boolean>}
     * @private
     */
    private _openChange: Subject<boolean> = new Subject<boolean>();

    /*********
     * @property _open
     *
     * @description
     * A property holding the current value for open/closed state of an IfOpen structural directive.
     *
     * @type {boolean}
     * @private
     */
    private _open: boolean;

    /*********
     * @function openChange
     *
     * @description
     * A getter function that provides an observable for the _opened Subject.
     *
     * @returns {Observable<boolean>}
     */
    public get openChange(): Observable<boolean> {
        return this._openChange.asObservable();
    }

    /*********
     * @function open
     *
     * @description
     * A setter function that updates the current state of _open for this instance of IfOpen structural directive. And,
     * broadcasts the new value to all subscribers.
     *
     * @param value
     */
    public set open(value: boolean) {
        value = !!value;
        if (this._open !== value) {
            this._open = value;
            this._openChange.next(value);
        }
    }

    /*********
     *
     * @function open
     *
     * @description
     * A getter that returns the current value of this IfOpen instance.
     * @returns {boolean}
     */
    public get open(): boolean {
        return this._open;
    }

    /**
     * Sometimes, we need to remember the event that triggered the toggling to avoid loops.
     * This is for instance the case of components that open on a click, but close on a click outside.
     */
    public originalEvent: any;
    public toggleWithEvent(event: any) {
        this.originalEvent = event;
        this.open = !this.open;
        delete this.originalEvent;
    }
}
