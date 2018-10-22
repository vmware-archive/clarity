/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Injectable, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable()
export class ColumnToggleButtonsService {
  buttons: TemplateRef<any> = null;
  selectAllDisabled: boolean = false;

  private _selectAllButtonClicked = new Subject<void>();
  public get selectAllButtonClicked(): Observable<void> {
    return this._selectAllButtonClicked.asObservable();
  }

  public buttonClicked(): void {
    this._selectAllButtonClicked.next();
  }
}
