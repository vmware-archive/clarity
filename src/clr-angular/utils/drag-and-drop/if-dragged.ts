/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Directive, OnDestroy, Optional, SkipSelf, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';

import { DragEventInterface } from './interfaces/drag-event.interface';
import { DragEventListenerService } from './providers/drag-event-listener.service';

// This structural directive will be used mainly together with `clr-draggable-ghost` directive inside of clrDraggable
// directive. The directive is responsible for instantiating `clr-draggable-ghost` directive only during dragging so
// that Angular Change Detection is prevented from running if a component or directive is placed inside of the
// `clr-draggable-ghost` directive.

@Directive({ selector: '[clrIfDragged]' })
export class ClrIfDragged<T> implements OnDestroy {
  private subscriptions: Subscription[] = [];
  constructor(
    private template: TemplateRef<any>,
    @Optional()
    @SkipSelf()
    private container: ViewContainerRef,
    @Optional() private dragEventListener: DragEventListenerService<T>
  ) {
    if (!this.dragEventListener || !this.container) {
      throw new Error('The *clrIfDragged directive can only be used inside of a clrDraggable directive.');
    }

    this.subscriptions.push(
      this.dragEventListener.dragStarted.subscribe((event: DragEventInterface<T>) => {
        this.container.createEmbeddedView(this.template);
      })
    );
    this.subscriptions.push(
      this.dragEventListener.dragEnded.subscribe((event: DragEventInterface<T>) => {
        this.container.clear();
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
