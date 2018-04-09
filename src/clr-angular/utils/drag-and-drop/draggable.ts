/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Directive, ElementRef, OnDestroy, OnInit} from "@angular/core";
import {Subscription} from "rxjs/Subscription";

import {ClrDragEvent} from "./interfaces/drag-event";
import {ClrDragEventListener} from "./providers/drag-event-listener";

@Directive({selector: "[clrDraggable]", providers: [ClrDragEventListener], host: {class: "draggable"}})
export class ClrDraggable<T> implements OnInit, OnDestroy {
    private draggableEl: Node;

    private subscriptions: Subscription[] = [];

    constructor(private el: ElementRef, private dragEventListener: ClrDragEventListener<T>) {
        this.draggableEl = this.el.nativeElement;
    }

    ngOnInit() {
        this.dragEventListener.attachDragListeners(this.draggableEl);

        this.subscriptions.push(
            this.dragEventListener.dragStarted.subscribe((event: ClrDragEvent<T>) => {
                                                             // TODO: dragstart handler logic will run here.
                                                         }));
        this.subscriptions.push(
            this.dragEventListener.dragMoved.subscribe((event: ClrDragEvent<T>) => {
                                                           // TODO: dragmove handler logic will run here.
                                                       }));
        this.subscriptions.push(
            this.dragEventListener.dragEnded.subscribe((event: ClrDragEvent<T>) => {
                                                           // TODO: dragend handler start logic will run here.
                                                       }));
    }

    ngOnDestroy() {
        this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
        this.dragEventListener.detachDragListeners();
    }
}
