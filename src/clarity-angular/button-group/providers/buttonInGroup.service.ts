/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";

import {Injectable} from "@angular/core";
import {Button} from "../button";

@Injectable()
export class ButtonInGroupService {
    private _changes: Subject<Button> = new Subject<Button>();

    get changes(): Observable<Button> {
        return this._changes.asObservable();
    }

    updateButtonGroup(button: Button): void {
        this._changes.next(button);
    }
}