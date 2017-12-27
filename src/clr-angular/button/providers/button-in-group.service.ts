/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";

import {ClrButton} from "../button-group/button";

@Injectable()
export class ButtonInGroupService {
    private _changes: Subject<ClrButton> = new Subject<ClrButton>();

    get changes(): Observable<ClrButton> {
        return this._changes.asObservable();
    }

    updateButtonGroup(button: ClrButton): void {
        this._changes.next(button);
    }
}
