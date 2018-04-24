/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Subject} from "rxjs";

@Injectable()
export class DatagridRenderOrganizer {
    private alreadySized = false;

    public widths: {px: number, strict: boolean}[] = [];

    protected _noLayout = new Subject<boolean>();
    public get noLayout(): Observable<boolean> {
        return this._noLayout.asObservable();
    }

    protected _clearWidths = new Subject<any>();
    public get clearWidths(): Observable<any> {
        return this._clearWidths.asObservable();
    }

    protected _detectStrictWidths = new Subject<any>();
    public get detectStrictWidths(): Observable<any> {
        return this._detectStrictWidths.asObservable();
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
        this._noLayout.next(true);
        if (this.alreadySized) {
            this._clearWidths.next();
        }
        this._detectStrictWidths.next();
        this._tableMode.next(true);
        this._computeWidths.next();
        this._tableMode.next(false);
        this._alignColumns.next();
        this._noLayout.next(false);
        this.scrollbar.next();
        this.alreadySized = true;
        this._done.next();
    }
}
