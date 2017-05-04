/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { LoadingListener } from "../../../utils/loading/loading-listener";

@Injectable()
export class RowExpand implements LoadingListener {

    public expandable = false;
    public replace = false;

    private _loading = false;
    get loading(): boolean {
        return this._loading;
    }

    set loading(value: boolean) {
        value = !!value;
        if (value !== this._loading) {
            this._loading = value;
        }
    }

    private _expanded = false;
    get expanded(): boolean {
        return this._expanded;
    }

    set expanded(value: boolean) {
        value = !!value;
        if (value !== this._expanded) {
            this._expanded = value;
            this._animate.next();
            this._expandChange.next(value);
        }
    }

    private _animate = new Subject<any>();
    public get animate(): Observable<boolean> {
        return this._animate.asObservable();
    }

    private _expandChange = new Subject<boolean>();
    public get expandChange(): Observable<boolean> {
        return this._expandChange.asObservable();
    }


    startLoading() {
        this.loading = true;
    }

    doneLoading() {
        this.loading = false;
        this._animate.next();
    }
}
