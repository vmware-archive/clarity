/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ElementRef, Injectable, NgZone, Renderer2 } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable()
export class DragDispatcher {
  private _listeners: Function[];

  // Will be listening to Drag events on the following element
  handleRef: ElementRef;

  // Extra element to be used for tracking drag movements.
  handleTrackerRef: ElementRef;

  private _onDragStart: Subject<any> = new Subject<any>();
  private _onDragMove: Subject<any> = new Subject<any>();
  private _onDragEnd: Subject<any> = new Subject<any>();

  get onDragStart(): Observable<any> {
    return this._onDragStart;
  }

  get onDragMove(): Observable<any> {
    return this._onDragMove;
  }

  get onDragEnd(): Observable<any> {
    return this._onDragEnd;
  }

  constructor(private _ngZone: NgZone, private _renderer: Renderer2) {}

  addDragListener() {
    const handleEl = this.handleRef.nativeElement;
    this._listeners = [
      this.customDragEvent(handleEl, 'mousedown', 'mousemove', 'mouseup'),
      this.customDragEvent(handleEl, 'touchstart', 'touchmove', 'touchend'),
    ];
  }

  customDragEvent(element: HTMLElement, startOnEvent: string, moveOnEvent: string, endOnEvent: string): Function {
    let dragMoveListener: () => void;
    let dragEndListener: () => void;

    return this._renderer.listen(element, startOnEvent, (startEvent: any) => {
      this.notifyDragStart(startEvent);

      dragMoveListener = this._ngZone.runOutsideAngular(() => {
        return this._renderer.listen('document', moveOnEvent, (moveEvent: any) => {
          this.notifyDragMove(moveEvent);
        });
      });

      dragEndListener = this._renderer.listen('document', endOnEvent, (endEvent: any) => {
        // Unsubscribing from mouseMoveListener
        dragMoveListener();
        this.notifyDragEnd(endEvent);
        // Unsubscribing from itself
        dragEndListener();
      });
    });
  }

  notifyDragStart(event: any) {
    return this._onDragStart.next(event);
  }

  notifyDragMove(event: any) {
    return this._onDragMove.next(event);
  }

  notifyDragEnd(event: any) {
    return this._onDragEnd.next(event);
  }

  destroy() {
    if (this._listeners) {
      this._listeners.map(event => event());
    }
  }
}
