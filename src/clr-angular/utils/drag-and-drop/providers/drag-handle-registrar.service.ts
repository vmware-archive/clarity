/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Injectable, Renderer2 } from '@angular/core';

import { DragEventListenerService } from './drag-event-listener.service';

// This provider registers the drag handle element.
// When it registers a element as a drag handle, it attaches that element to the listeners from ClrDragEventListener.
// Also, it adds the "drag-handle" css class to the registered element through Renderer.
@Injectable()
export class DragHandleRegistrarService<T> {
  private _customHandleEl: any;
  private _defaultHandleEl: any;

  get defaultHandleEl() {
    return this._defaultHandleEl;
  }

  set defaultHandleEl(el: Node) {
    this._defaultHandleEl = el; // defaultHandleEl will be usually the clrDraggable element.

    // If the customHandleEl has been registered,
    // don't make the defaultHandleEl the drag handle yet until the customHandleEl is unregistered.
    if (!this._customHandleEl) {
      this.makeElementHandle(this._defaultHandleEl);
    }
  }

  constructor(private dragEventListener: DragEventListenerService<T>, private renderer: Renderer2) {}

  private makeElementHandle(el: Node) {
    if (this._defaultHandleEl && this._defaultHandleEl !== el) {
      // Before making an element the custom handle element,
      // we should remove the existing drag-handle class from the draggable element.
      this.renderer.removeClass(this._defaultHandleEl, 'drag-handle');
    }
    this.dragEventListener.attachDragListeners(el);
    this.renderer.addClass(el, 'drag-handle');
  }

  get customHandleEl() {
    return this._customHandleEl;
  }

  public registerCustomHandle(el: Node) {
    this.dragEventListener.detachDragListeners(); // removes the existing listeners
    this._customHandleEl = el;
    this.makeElementHandle(this._customHandleEl);
  }

  public unregisterCustomHandle() {
    this.dragEventListener.detachDragListeners(); // removes the existing listeners
    this.renderer.removeClass(this._customHandleEl, 'drag-handle');
    delete this._customHandleEl;
    // if default handle is set, make that handle
    if (this._defaultHandleEl) {
      this.makeElementHandle(this._defaultHandleEl);
    }
  }
}
