/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";

@Injectable()
export class DatagridRenderOrganizer {
    public widths: {px: number, strict: boolean}[] = [];

    protected _clearWidths = new Subject<any>();
    public get clearWidths(): Observable<any> {
        return this._clearWidths.asObservable();
    }

    protected _tableMode = new Subject<boolean>();
    public get tableMode(): Observable<boolean> {
        return this._tableMode.asObservable();
    }

    protected _computeWidths = new Subject<any>();
    public get computeWidths(): Observable<any> {
        return this._computeWidths.asObservable();
    }

    protected _alignColumns = new Subject<any>();
    public get alignColumns(): Observable<any> {
        return this._alignColumns.asObservable();
    }

    public scrollbar = new Subject<any>();
    public scrollbarWidth = new Subject<number>();

    protected _done = new Subject<any>();
    public get done(): Observable<any> {
        return this._done.asObservable();
    }

    public resize() {
        this.widths.length = 0;
        this._clearWidths.next();
        this._tableMode.next(true);
        this._computeWidths.next();
        this._tableMode.next(false);
        this._alignColumns.next();
        this.scrollbar.next();
        this._done.next();
    }
}
