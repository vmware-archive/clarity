/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import {LoadingListener} from "../../../utils/loading/loading-listener";

@Injectable()
export class Expand implements LoadingListener {

    public expandable: number = 0;
    public replace: boolean = false;

    private _loading: boolean = false;
    get loading(): boolean {
        return this._loading;
    }

    set loading(value: boolean) {
        value = !!value;
        if (value !== this._loading) {
            this._loading = value;
        }
    }

    private _expanded: boolean = false;
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

    //TODO: Move this to the datagrid RowExpand.
    //I spent some time doing this but ran into a couple of issues
    //Will take care of this later.
    private _animate: Subject<any> = new Subject<any>();
    public get animate(): Observable<boolean> {
        return this._animate.asObservable();
    }

    private _expandChange: Subject<boolean> = new Subject<boolean>();
    public get expandChange(): Observable<boolean> {
        return this._expandChange.asObservable();
    }


    startLoading(): void {
        this.loading = true;
    }

    doneLoading(): void {
        this.loading = false;
        this._animate.next();
    }
}
