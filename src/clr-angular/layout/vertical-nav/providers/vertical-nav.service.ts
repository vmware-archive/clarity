/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable()
export class VerticalNavService {
  private _animateOnCollapsed: Subject<boolean> = new Subject<boolean>();

  get animateOnCollapsed(): Observable<boolean> {
    return this._animateOnCollapsed.asObservable();
  }

  private _collapsedChanged: Subject<boolean> = new Subject<boolean>();

  get collapsedChanged(): Observable<boolean> {
    return this._collapsedChanged.asObservable();
  }

  private _collapsed: boolean = false;

  get collapsed(): boolean {
    return this._collapsed;
  }

  set collapsed(value: boolean) {
    value = !!value;
    if (this.collapsible && this._collapsed !== value) {
      this.updateCollapseBehavior(value);
    }
  }

  private _collapsible: boolean = false;

  get collapsible(): boolean {
    return this._collapsible;
  }

  set collapsible(value: boolean) {
    value = !!value;
    if (this._collapsible !== value) {
      if (!value && this.collapsed) {
        this.updateCollapseBehavior(false);
      }
      this._collapsible = value;
    }
  }

  private updateCollapseBehavior(value: boolean): void {
    this._animateOnCollapsed.next(value);
    this._collapsed = value;
    this._collapsedChanged.next(value);
  }
}
