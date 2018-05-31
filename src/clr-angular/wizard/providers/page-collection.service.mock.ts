/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

export class PageCollectionMock {
  private _pagesReset = new Subject<boolean>();
  public get pagesReset(): Observable<boolean> {
    return this._pagesReset.asObservable();
  }

  private _stepItemIdWasCalled = false;
  public getStepItemIdForPage(): string {
    this._stepItemIdWasCalled = true;
    return 'mock-id';
  }

  public get stepItemIdWasCalled(): boolean {
    return this._stepItemIdWasCalled;
  }

  public _previousPageIsCompleted = true;
  public previousPageIsCompleted(page: any = null): boolean {
    return this._previousPageIsCompleted;
  }
}
