/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";

export class PageCollectionMock {
    private _pagesReset = new Subject<boolean>();
    public get pagesReset(): Observable<boolean> {
        return this._pagesReset.asObservable();
    }

    private _stepItemIdWasCalled = false;
    public getStepItemIdForPage(): string {
        this._stepItemIdWasCalled = true;
        return "mock-id";
    }

    public get stepItemIdWasCalled(): boolean {
        return this._stepItemIdWasCalled;
    }
}
