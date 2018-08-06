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
import {Input} from "@angular/core";
import {Subscription} from "rxjs/Subscription";

import {DomAdapter} from "../../dom-adapter/dom-adapter";
import {ClrDragEvent} from "../drag-event";
import {ClrDraggableGhost} from "../draggable-ghost";
import {ClrIfDragged} from "../if-dragged";
import {DragEvent} from "../interfaces/drag-event";
import {ClrDragEventListener} from "../providers/drag-event-listener";
import {ClrDragHandleRegistrar} from "../providers/drag-handle-registrar";
import {ClrDraggableSnapshot} from "../providers/draggable-snapshot";
import {ClrGlobalDragMode} from "../providers/global-drag-mode";

@Directive({
    selector: "[clrDraggable]",
    providers: [ClrDragEventListener, ClrDragHandleRegistrar, ClrDraggableSnapshot, ClrGlobalDragMode, DomAdapter],
    host: {"[class.draggable]": "true", "[class.being-dragged]": "dragOn"}
})
export class ClrDraggable<T> implements AfterContentInit, OnDestroy {
    private draggableEl: any;
    private subscriptions: Subscription[] = [];
    private componentFactory: ComponentFactory<ClrDraggableGhost<T>>;
    public dragOn: boolean = false;

    constructor(private el: ElementRef, private dragEventListener: ClrDragEventListener<T>,
                private dragHandleRegistrar: ClrDragHandleRegistrar<T>, private viewContainerRef: ViewContainerRef,
                private cfr: ComponentFactoryResolver, private injector: Injector,
                private draggableSnapshot: ClrDraggableSnapshot<T>, private globalDragMode: ClrGlobalDragMode) {
        this.draggableEl = this.el.nativeElement;
        this.componentFactory = this.cfr.resolveComponentFactory<ClrDraggableGhost<T>>(ClrDraggableGhost);
    }

    @ContentChild(ClrIfDragged) customGhost: ClrIfDragged<T>;

    @Input("clrDraggable")
    set dataTransfer(value: T) {
        this.dragEventListener.dragDataTransfer = value;
    }

    @Input("clrGroup")
    set group(value: string|string[]) {
        this.dragEventListener.group = value;
    }

    private createDefaultGhost(event: DragEvent<T>) {
        this.draggableSnapshot.capture(this.draggableEl, event);
        // NOTE: The default ghost element will appear
        // next to the clrDraggable in the DOM as a sibling element.
        this.viewContainerRef.createComponent(this.componentFactory, 0, this.injector,
                                              [[this.draggableEl.cloneNode(true)]]);
    }

    private destroyDefaultGhost() {
        this.viewContainerRef.clear();
        this.draggableSnapshot.discard();
    }

    @Output("clrDragStart") dragStartEmitter: EventEmitter<ClrDragEvent<T>> = new EventEmitter();
    @Output("clrDragMove") dragMoveEmitter: EventEmitter<ClrDragEvent<T>> = new EventEmitter();
    @Output("clrDragEnd") dragEndEmitter: EventEmitter<ClrDragEvent<T>> = new EventEmitter();

    ngAfterContentInit() {
        this.dragHandleRegistrar.defaultHandleEl = this.draggableEl;

        this.subscriptions.push(this.dragEventListener.dragStarted.subscribe((event: DragEvent<T>) => {
            this.globalDragMode.enter();
            this.dragOn = true;
            if (!this.customGhost) {
                this.createDefaultGhost(event);
            }

            this.dragStartEmitter.emit(new ClrDragEvent(event));
        }));
        this.subscriptions.push(this.dragEventListener.dragMoved.subscribe((event: DragEvent<T>) => {
            this.dragMoveEmitter.emit(new ClrDragEvent(event));
        }));
        this.subscriptions.push(this.dragEventListener.dragEnded.subscribe((event: DragEvent<T>) => {
            this.globalDragMode.exit();
            this.dragOn = false;
            if (!this.customGhost) {
                this.destroyDefaultGhost();
            }
            this.dragEndEmitter.emit(new ClrDragEvent(event));
        }));
    }

    ngOnDestroy() {
        this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
        this.dragEventListener.detachDragListeners();
    }
}
