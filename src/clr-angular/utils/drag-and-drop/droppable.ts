/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Directive, ElementRef, OnDestroy, OnInit} from "@angular/core";
import {Subscription} from "rxjs/Subscription";

import {ClrDragEvent} from "./interfaces/drag-event";
import {ClrDragAndDropEventBus} from "./providers/drag-and-drop-event-bus";

@Directive({selector: "[clrDraggable]", host: {class: "droppable"}})
export class ClrDroppable<T> implements OnInit, OnDestroy {
    private droppableEl: Node;

    private subscriptions: Subscription[] = [];

    constructor(private el: ElementRef, private eventBus: ClrDragAndDropEventBus<T>) {
        this.droppableEl = this.el.nativeElement;
    }

    ngOnInit() {
        this.subscriptions.push(this.eventBus.dragStarted.subscribe((event: ClrDragEvent<T>) => {
                                                                        // TODO: dragstart handler logic will run here.
                                                                    }));
        this.subscriptions.push(this.eventBus.dragMoved.subscribe((event: ClrDragEvent<T>) => {
                                                                      // TODO: dragmove handler logic will run here.
                                                                  }));
        this.subscriptions.push(
            this.eventBus.dragEnded.subscribe((event: ClrDragEvent<T>) => {
                                                  // TODO: dragend handler start logic will run here.
                                              }));
    }

    ngOnDestroy() {
        this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
    }
}
