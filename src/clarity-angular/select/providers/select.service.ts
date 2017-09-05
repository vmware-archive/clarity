/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Injectable, Optional, SkipSelf} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";

import {Option} from "./../option";

@Injectable()
export class RootSelectService {
    private _changes: Subject<boolean> = new Subject<boolean>();
    private _input: Subject<string> = new Subject<string>();
    private _specialKey: Subject<string> = new Subject<string>();
    private _highlightedChange: Subject<Option> = new Subject<Option>();
    public _highlighted: Option;
    public _selected: Option;
    private _selectedChange: Subject<Option> = new Subject<Option>();


    get changes(): Observable<boolean> {
        return this._changes.asObservable();
    }
    get input(): any {
        return this._input.asObservable();
    }
    set input(input: any) {
        this._input.next(input);
    }

    get specialKey(): any {
        return this._specialKey.asObservable();
    }

    set specialKey(specialKey: any) {
        this._specialKey.next(specialKey);
    }

    get highlighted(): Option {
        return this._highlighted;
    }
    public get highlightedChange(): Observable<Option> {
        return this._highlightedChange.asObservable();
    }

    set highlighted(highlighted: Option) {
        this._highlighted = highlighted;
        this._highlightedChange.next(this._highlighted);
    }

    get selected(): any {
        return this._selected;
    }
    public get selectedChange(): any {
        return this._selectedChange.asObservable();
    }

    set selected(selected: any) {
        this._selected = selected;
        this._selectedChange.next(this._selected);
    }

    closeMenus(): void {
        this._changes.next(false);
    }
}

export function clrRootSelectFactory(existing: RootSelectService) {
    return existing || new RootSelectService();
}

export const ROOT_SELECT_PROVIDER = {
    provide: RootSelectService,
    useFactory: clrRootSelectFactory,
    deps: [[new Optional(), new SkipSelf(), RootSelectService]]
};
