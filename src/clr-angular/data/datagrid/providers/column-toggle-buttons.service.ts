/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Injectable, TemplateRef} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";

export type ColumnToggleButtons = "ok"|"selectAll";

@Injectable()
export class ColumnToggleButtonsService {
    buttons: TemplateRef<any> = null;
    selectAllDisabled: boolean = false;

    private _okButtonClicked = new Subject<any>();
    public get okButtonClicked(): Observable<any> {
        return this._okButtonClicked.asObservable();
    }

    private _selectAllButtonClicked = new Subject<any>();
    public get selectAllButtonClicked(): Observable<any> {
        return this._selectAllButtonClicked.asObservable();
    }

    public buttonClicked(type: ColumnToggleButtons): void {
        switch (type.toLowerCase()) {
            case "ok":
                this._okButtonClicked.next();
                break;
            case "selectall":
                this._selectAllButtonClicked.next();
                break;
            default:
                break;
        }
    }
}
