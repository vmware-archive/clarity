import {AfterViewChecked} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";

/*
 * After a conversation with the Angular core team, it turns out we don't have much of a choice for our
 * declarative API, we need to fight against change detection and its one-way flow. This is
 * currently the least dirty solution to do what we want.
 *
 * Do not modify or even use this class unless you know exactly what you're doing.
 * It has the potential to trigger change detection loops or kill app performances.
 */
export class WillyWonka implements AfterViewChecked {
    private _chocolate = new Subject<void>();

    public get chocolate(): Observable<void> {
        return this._chocolate.asObservable();
    }

    ngAfterViewChecked() {
        this._chocolate.next();
    }
}
