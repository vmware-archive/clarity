/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {
    AfterContentInit,
    ComponentFactory,
    ComponentFactoryResolver,
    ContentChild,
    Directive,
    ElementRef,
    EventEmitter,
    Injector,
    OnDestroy,
    Output,
    ViewContainerRef
} from "@angular/core";
import {Subscription} from "rxjs/Subscription";

import {DomAdapter} from "../dom-adapter/dom-adapter";
import {ClrDraggableGhost} from "./draggable-ghost";
import {ClrIfDragged} from "./if-dragged";
import {ClrDragEvent} from "./interfaces/drag-event";
import {ClrDragEventListener} from "./providers/drag-event-listener";
import {ClrDragHandleRegistrar} from "./providers/drag-handle-registrar";
import {ClrDraggableStateRegistrar} from "./providers/draggable-state-registrar";

@Directive({
    selector: "[clrDraggable]",
    providers: [ClrDragEventListener, ClrDragHandleRegistrar, ClrDraggableStateRegistrar, DomAdapter],
    host: {class: "draggable"}
})
export class ClrDraggable<T> implements AfterContentInit, OnDestroy {
    private draggableEl: Node;
    private subscriptions: Subscription[] = [];
    private componentFactory: ComponentFactory<ClrDraggableGhost<T>>;

    constructor(private el: ElementRef, private dragEventListener: ClrDragEventListener<T>,
                private dragHandleRegistrar: ClrDragHandleRegistrar<T>, private viewContainerRef: ViewContainerRef,
                private cfr: ComponentFactoryResolver, private injector: Injector,
                private draggableStateRegistrar: ClrDraggableStateRegistrar) {
        this.draggableEl = this.el.nativeElement;
        this.componentFactory = this.cfr.resolveComponentFactory<ClrDraggableGhost<T>>(ClrDraggableGhost);
    }

    @ContentChild(ClrIfDragged) customGhost: ClrDraggableGhost<T>;

    private createDefaultGhost() {
        this.draggableStateRegistrar.register(this.draggableEl);
        this.viewContainerRef.createComponent(this.componentFactory, 0, this.injector,
                                              [[this.draggableEl.cloneNode(true)]]);
    }

    private destroyDefaultGhost() {
        this.viewContainerRef.clear();
        this.draggableStateRegistrar.unregister();
    }

    @Output("clrDragStart") dragStartEmitter: EventEmitter<ClrDragEvent<T>> = new EventEmitter();
    @Output("clrDragMove") dragMoveEmitter: EventEmitter<ClrDragEvent<T>> = new EventEmitter();
    @Output("clrDragEnd") dragEndEmitter: EventEmitter<ClrDragEvent<T>> = new EventEmitter();

    ngAfterContentInit() {
        this.dragHandleRegistrar.defaultHandleEl = this.draggableEl;

        this.subscriptions.push(this.dragEventListener.dragStarted.subscribe((event: ClrDragEvent<T>) => {
            if (!this.customGhost) {
                this.createDefaultGhost();
            }
            this.dragStartEmitter.emit(event);
        }));
        this.subscriptions.push(this.dragEventListener.dragMoved.subscribe((event: ClrDragEvent<T>) => {
            this.dragMoveEmitter.emit(event);
        }));
        this.subscriptions.push(this.dragEventListener.dragEnded.subscribe((event: ClrDragEvent<T>) => {
            if (!this.customGhost) {
                this.destroyDefaultGhost();
            }
            this.dragEndEmitter.emit(event);
        }));
    }

    ngOnDestroy() {
        this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
        this.dragEventListener.detachDragListeners();
    }
}
