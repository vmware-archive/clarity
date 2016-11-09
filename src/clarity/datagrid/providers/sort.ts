import {Injectable} from "@angular/core";
import {Subject, Observable} from "rxjs";

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
    };

    /**
     * Sets a comparator as the current one, or toggles reverse if the comparator is already used.
     */
    public toggle(sortBy: Comparator<any>) {
        // We modify private properties directly, to batch the change event
        if (this.comparator === sortBy) {
            this._reverse = !this._reverse;
        } else {
            this._comparator = sortBy;
            this._reverse = false;
        }
        this.emitChange();
    }

    /**
     * Compares two objects according to the current comparator
     */
    public compare(a: any, b: any): number {
        return (this.reverse ? -1 : 1) * this.comparator.compare(a, b);
    }
}