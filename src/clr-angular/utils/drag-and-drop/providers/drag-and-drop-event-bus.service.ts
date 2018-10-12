/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { DragEventInterface, DragEventType } from '../interfaces/drag-event.interface';

@Injectable({ providedIn: 'root' })
export class DragAndDropEventBusService<T> {
  private dragStart: Subject<DragEventInterface<T>> = new Subject<DragEventInterface<T>>();
  private dragMove: Subject<DragEventInterface<T>> = new Subject<DragEventInterface<T>>();
  private dragEnd: Subject<DragEventInterface<T>> = new Subject<DragEventInterface<T>>();
  private drop: Subject<DragEventInterface<T>> = new Subject<DragEventInterface<T>>();

  get dragStarted(): Observable<DragEventInterface<T>> {
    return this.dragStart.asObservable();
  }

  get dragMoved(): Observable<DragEventInterface<T>> {
    return this.dragMove.asObservable();
  }

  get dragEnded(): Observable<DragEventInterface<T>> {
    return this.dragEnd.asObservable();
  }

  get dropped(): Observable<DragEventInterface<T>> {
    return this.drop.asObservable();
  }

  broadcast(event: DragEventInterface<T>): void {
    switch (event.type) {
      case DragEventType.DRAG_START:
        this.dragStart.next(event);
        break;
      case DragEventType.DRAG_MOVE:
        this.dragMove.next(event);
        break;
      case DragEventType.DRAG_END:
        this.dragEnd.next(event);
        break;
      case DragEventType.DROP:
        this.drop.next(event);
        break;
      default:
        break;
    }
  }
}
