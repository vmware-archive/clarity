/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 *
 */
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class ClrPopoverToggleService {
  /**
   *  Popovers might need to ignore click events on an element
   *  (eg: popover opens on focus on an input field. Clicks should be ignored in this case)
   */
  private _open = false;
  private _openChange: Subject<boolean> = new Subject<boolean>();
  private _openEvent: Event;
  private _openEventChange: Subject<Event> = new Subject<Event>();

  public get openChange(): Observable<boolean> {
    return this._openChange.asObservable();
  }

  public set openEvent(event: Event) {
    this._openEvent = event;
    this._openEventChange.next(event);
  }

  public get openEvent(): Event {
    return this._openEvent;
  }

  public getEventChange(): Observable<Event> {
    return this._openEventChange.asObservable();
  }

  public set open(value: boolean) {
    value = !!value;
    if (this._open !== value) {
      this._open = value;
      this._openChange.next(value);
    }
  }

  public get open(): boolean {
    return this._open;
  }

  get originalEvent(): Event {
    return this._openEvent;
  }

  /**
   * Sometimes, we need to remember the event that triggered the toggling to avoid loops.
   * This is for instance the case of components that open on a click, but close on a click outside.
   */
  public toggleWithEvent(event: any) {
    this.openEvent = event;
    this.open = !this.open;
  }
}
