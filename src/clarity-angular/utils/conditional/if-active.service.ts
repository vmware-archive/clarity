/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Injectable, InjectionToken} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";

let activeCounter = 0;

export const IF_ACTIVE_ID = new InjectionToken<number>("IF_ACTIVE_ID");

export function tokenFactory() {
    return ++activeCounter;
}

export const IF_ACTIVE_ID_PROVIDER = {
    provide: IF_ACTIVE_ID,
    useFactory: tokenFactory
};

@Injectable()

/*********
 * @class IfActiveService
 *
 * @description
 * An injectable service used by IfActive structural directives and the components that implement IfActive in their
 * templates. It holds the value of the current state and provides an Observable that both the directive and the
 * implementing component can subscribe to in order to take action on current value changes.
 *
 */
export class IfActiveService {
    /********
     * @property _currentChange
     *
     * @description
     * A RXJS Subject that updates and provides subscriptions to for the current current state of a component template
     * implemting the IfActive structural directive.
     *
     * @type {Subject<any>}
     * @private
     */
    private _currentChange: Subject<number> = new Subject<number>();

    /*********
     * @property _current
     *
     * @description
     * A property holding the current value for current/closed state of an IfActive structural directive.
     *
     * @type {number}
     * @private
     */
    private _current: number;

    /*********
     * @function currentChange
     *
     * @description
     * A getter function that provides an observable for the _current Subject.
     *
     * @returns {Observable<number>}
     */
    public get currentChange(): Observable<number> {
        return this._currentChange.asObservable();
    }

    /*********
     * @function current
     *
     * @description
     * A setter function that updates the current state of _current for this instance of IfActive structural directive.
     * And, broadcasts the new value to all subscribers.
     *
     * @param value
     */
    public set current(value: number) {
        if (this._current !== value) {
            this._current = value;
            this._currentChange.next(value);
        }
    }

    /*********
     *
     * @function current
     *
     * @description
     * A getter that returns the current value of this IfActive instance.
     * @returns {number}
     */
    public get current(): number {
        return this._current;
    }
}
