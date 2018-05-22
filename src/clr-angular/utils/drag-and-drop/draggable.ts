/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {AfterContentInit, Directive, ElementRef, OnDestroy} from "@angular/core";
import {Subscription} from "rxjs/Subscription";
import {ClrDragEvent} from "./interfaces/drag-event";
import {ClrDragEventListener} from "./providers/drag-event-listener";
import {ClrDragHandleRegistrar} from "./providers/drag-handle-registrar";


@Directive(
    {selector: "[clrDraggable]", providers: [ClrDragEventListener, ClrDragHandleRegistrar], host: {class: "draggable"}})
export class ClrDraggable<T> implements AfterContentInit, OnDestroy {
    private draggableEl: Node;

    private subscriptions: Subscription[] = [];

    constructor(private el: ElementRef, private dragEventListener: ClrDragEventListener<T>,
                private dragHandleRegistrar: ClrDragHandleRegistrar<T>) {
        this.draggableEl = this.el.nativeElement;
    }

    ngAfterContentInit() {
        this.dragHandleRegistrar.defaultHandleEl = this.draggableEl;

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
