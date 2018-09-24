/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { animate, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, HostBinding, NgZone, OnDestroy, Optional, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';

import { DragEventInterface } from './interfaces/drag-event.interface';
import { DragEventListenerService } from './providers/drag-event-listener.service';
import { DraggableSnapshotService } from './providers/draggable-snapshot.service';

type PagePosition = {
  pageX: number;
  pageY: number;
};
type OffsetPosition = {
  top: number;
  left: number;
};

@Component({
  selector: 'clr-draggable-ghost',
  template: `<ng-content></ng-content>`,
  animations: [
    trigger('leaveAnimation', [
      transition(':leave', [
        style({ left: '*', top: '*' }),
        animate('0.2s ease-in-out', style({ top: '{{top}}', left: '{{left}}' })),
      ]),
    ]),
  ],
})
export class ClrDraggableGhost<T> implements OnDestroy {
  private draggableGhostEl: any;

  private subscriptions: Subscription[] = [];

  @HostBinding('@leaveAnimation') leaveAnimConfig = { value: 0, params: { top: '0px', left: '0px' } };

  constructor(
    private el: ElementRef,
    @Optional() private dragEventListener: DragEventListenerService<T>,
    @Optional() private draggableSnapshot: DraggableSnapshotService<T>,
    private renderer: Renderer2,
    private ngZone: NgZone
  ) {
    if (!this.dragEventListener || !this.draggableSnapshot) {
      throw new Error('The clr-draggable-ghost component can only be used inside of a clrDraggable directive.');
    }

    this.draggableGhostEl = this.el.nativeElement;

    // Need to use Renderer2 as it runs outside of NgZone
    this.renderer.addClass(this.draggableGhostEl, 'draggable-ghost');

    // Register the ghost element in DragEventListener to pass in a ClrDragEvent.
    this.dragEventListener.ghostElement = this.draggableGhostEl;

    // Default ghost size gets the size of ClrDraggable element.
    this.setDefaultGhostSize(this.draggableGhostEl);

    const offset: OffsetPosition = {
      top: this.draggableSnapshot.hasDraggableState
        ? this.draggableSnapshot.dragEvent.dragPosition.pageY - this.draggableSnapshot.clientRect.top
        : 0,
      left: this.draggableSnapshot.hasDraggableState
        ? this.draggableSnapshot.dragEvent.dragPosition.pageX - this.draggableSnapshot.clientRect.left
        : 0,
    };

    let isAnimationConfigured: boolean = false;

    this.subscriptions.push(
      this.dragEventListener.dragMoved.subscribe((event: DragEventInterface<T>) => {
        // On the first drag move event, we configure the animation as it's dependent on the first drag event.
        if (!isAnimationConfigured) {
          if (this.draggableSnapshot.hasDraggableState) {
            this.animateToOnLeave(
              `${this.draggableSnapshot.clientRect.top}px`,
              `${this.draggableSnapshot.clientRect.left}px`
            );
          } else {
            this.animateToOnLeave(`${event.dragPosition.pageY}px`, `${event.dragPosition.pageX}px`);
          }
          isAnimationConfigured = true;
        }

        // Position the draggable ghost.
        const topLeftPosition: PagePosition = this.findTopLeftPosition(event.dragPosition, offset);
        this.setPositionStyle(this.draggableGhostEl, topLeftPosition.pageX, topLeftPosition.pageY);
        this.dragEventListener.dropPointPosition = this.findDropPointPosition(topLeftPosition);
      })
    );
  }

  private setDefaultGhostSize(el: Node): void {
    if (this.draggableSnapshot.hasDraggableState) {
      this.setSizeStyle(el, this.draggableSnapshot.clientRect.width, this.draggableSnapshot.clientRect.height);
    }
  }

  private animateToOnLeave(top: string, left: string): void {
    this.ngZone.run(() => {
      this.leaveAnimConfig = { value: 0, params: { top: top, left: left } };
    });
  }

  private findTopLeftPosition(dragPosition: PagePosition, offset: OffsetPosition): PagePosition {
    return { pageX: dragPosition.pageX - offset.left, pageY: dragPosition.pageY - offset.top };
  }

  private findDropPointPosition(topLeftPosition: PagePosition): PagePosition {
    if (this.draggableSnapshot.hasDraggableState) {
      return {
        pageX: topLeftPosition.pageX + this.draggableSnapshot.clientRect.width / 2,
        pageY: topLeftPosition.pageY + this.draggableSnapshot.clientRect.height / 2,
      };
    } else {
      return topLeftPosition;
    }
  }

  private setSizeStyle(el: Node, width: number, height: number): void {
    this.renderer.setStyle(el, 'width', `${width}px`);
    this.renderer.setStyle(el, 'height', `${height}px`);
  }

  private setPositionStyle(el: Node, left: number, top: number): void {
    this.renderer.setStyle(el, 'left', `${left}px`);
    this.renderer.setStyle(el, 'top', `${top}px`);
    this.renderer.setStyle(el, 'visibility', 'visible');
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
