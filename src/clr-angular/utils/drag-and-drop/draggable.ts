/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {
    AfterViewInit,
    ComponentFactory,
    ComponentFactoryResolver,
    ContentChild,
    Directive,
    ElementRef,
    EventEmitter,
    Inject,
    Injector,
    Input,
    OnDestroy,
    Output,
    Renderer2,
    ViewContainerRef
} from "@angular/core";
import {Subscription} from "rxjs/Subscription";

import {DomAdapter} from "../../data/datagrid/render/dom-adapter";

import {DraggableGhost} from "./draggable-ghost";
import {DraggableHandle} from "./draggable-handle";
import {IfDragged} from "./if-dragged";
import {DragPosition} from "./interfaces/client-position";
import {DraggableEvent} from "./interfaces/draggable-event";
import {DragAndDropDispatcher} from "./providers/drag-and-drop-dispatcher";
import {DragDispatcher} from "./providers/drag-dispatcher";
import {CUSTOM_GHOST_STATE, CUSTOM_GHOST_STATE_PROVIDER, CustomGhostState} from "./providers/draggable-tracker";

@Directive({selector: "[clrDraggable]", providers: [DragDispatcher, DomAdapter, CUSTOM_GHOST_STATE_PROVIDER]})
export class Draggable implements AfterViewInit, OnDestroy {
    constructor(private dragDispatcher: DragDispatcher, private dragAndDrop: DragAndDropDispatcher,
                private domAdapter: DomAdapter, private renderer: Renderer2, private el: ElementRef,
                private viewContainerRef: ViewContainerRef, private componentFactoryResolver: ComponentFactoryResolver,
                private injector: Injector, @Inject(CUSTOM_GHOST_STATE) private customGhostState: CustomGhostState) {
        this.componentFactory = this.componentFactoryResolver.resolveComponentFactory(DraggableGhost);
    }

    private componentFactory: ComponentFactory<DraggableGhost>;

    private clientLeft: number;
    private clientTop: number;

    private initMoveX: number;
    private initMoveY: number;

    private initMoveXOnEl: number;
    private initMoveYOnEl: number;

    private isDragMoveStarted: boolean = false;

    @Output("clrDragStart") private dragStartedEmitter: EventEmitter<DraggableEvent> = new EventEmitter();
    @Output("clrDragMove") private dragMovedEmitter: EventEmitter<DraggableEvent> = new EventEmitter();
    @Output("clrDragEnd") private dragEndedEmitter: EventEmitter<DraggableEvent> = new EventEmitter();

    // This input is or transfering payload from draggable to dropppable
    // We probably need to have a definite type on it with an interface instead of having any.
    // TODO: rename to dataTransfer or transferData
    @Input("clrDraggable") private data: any;

    @Input("clrDragAndDropGroup") private groupKey: string;

    private subscriptions: Subscription[] = [];

    private dropSubscription: Subscription;

    private _customHandle: DraggableHandle;
    @ContentChild(DraggableHandle)
    set customHandle(draggableHandle: DraggableHandle) {
        if (draggableHandle) {
            this._customHandle = draggableHandle;
            this.setDraggableStyles(this._customHandle.draggableHandleEl);
            this.dragDispatcher.draggable.handle = this._customHandle.draggableHandleEl;
        }
    }

    @ContentChild(IfDragged)
    set ifDragged(nestedIfDragged: IfDragged) {
        if (nestedIfDragged && this.customGhostState.draggableId === nestedIfDragged.draggableId) {
            this.customGhostState.isDirectChild = true;
        }
    }

    private _customGhost: DraggableGhost;

    @ContentChild(DraggableGhost)
    set customGhost(customDraggableGhost: DraggableGhost) {
        // I don't like accessing this custom draggable here. Ideally, I wanted to access the custom draggable
        // in this.dragStart() method as we also create the default draggable there.
        // The reason why I cannot access it inside this.dragStart() method is that the custom draggable will be
        // embedded into the view only when DragDispatcher fires the dragStart event.
        // Also, at the exact same time, this.dragStart() method would be called.
        // So as both of these processes take place simultaneously by listening to the same event,
        // the custom draggable inside this.dragStart() will be always undefined.

        if (customDraggableGhost) {
            this._customGhost = customDraggableGhost;
            this.dragDispatcher.draggable.ghost = customDraggableGhost.draggableGhostEl;
        }
    }

    ngAfterViewInit() {
        this.dragDispatcher.draggable.self = this.el.nativeElement;
        if (!this._customHandle) {
            this.setDraggableStyles(this.dragDispatcher.draggable.self);
        }
        this.dragDispatcher.initialize();
        this.subscriptions.push(this.dragDispatcher.onDragStart.subscribe(($event) => this.dragStart($event)));
        this.subscriptions.push(this.dragDispatcher.onDragMove.subscribe(($event) => this.dragMove($event)));
        this.subscriptions.push(this.dragDispatcher.onDragEnd.subscribe(($event) => this.dragEnd($event)));
    }

    ngOnDestroy() {
        this.dragDispatcher.destroy();
        this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
    }

    private createDefaultGhost(originalNode: Node): Node {
        const draggableGhost = this.viewContainerRef.createComponent(this.componentFactory, 0, this.injector,
                                                                     [[originalNode.cloneNode(true)]]);
        return draggableGhost.instance.draggableGhostEl;
    }

    private setDraggableStyles(originalNode: Node) {
        this.renderer.addClass(originalNode, "draggable");
        this.renderer.setAttribute(originalNode, "tabindex", "0");
    }

    private generateDraggableEvent(event: MouseEvent|TouchEvent): DraggableEvent {
        let nativeEvent: any;
        if ((<TouchEvent>event).hasOwnProperty("changedTouches")) {
            nativeEvent = (<TouchEvent>event).changedTouches[0];
        } else {
            nativeEvent = event;
        }
        const positionOnPage: DragPosition = {x: nativeEvent.pageX, y: nativeEvent.pageY};
        return {
            draggable: this.dragDispatcher.draggable,
            dragPosition: positionOnPage,
            dragAndDropGroup: this.groupKey,
            data: this.data  // rename it as dataTransfer
        };
    }

    private dragStart(startEvent: MouseEvent|TouchEvent) {
        const draggableEvent = this.generateDraggableEvent(startEvent);

        this.dropSubscription = this.dragAndDrop.onDrop.subscribe(() => {
            // Only Draggable which dragStart event detected on should subscribe to the drop event.
            // That's why this subscription is set inside this method instead of AfterViewInit.
            // And it has to be unsubscribed not only inside this.ngOnDestroy() as well as this.dragEnd() method.
            this.drop();
        });
        this.subscriptions.push(this.dropSubscription);

        if (!this.customGhostState.isDirectChild) {
            this.dragDispatcher.draggable.ghost = this.createDefaultGhost(this.dragDispatcher.draggable.self);
        }


        this.dragAndDrop.dragStart(draggableEvent);

        this.dragStartedEmitter.emit(draggableEvent);
    }

    private dragMove(moveEvent: MouseEvent|TouchEvent): void {
        const draggableEvent = this.generateDraggableEvent(moveEvent);

        if (!this.isDragMoveStarted) {
            this.renderer.removeClass(this.dragDispatcher.draggable.ghost, "draggable-ghost--hidden");
            // very first mouse position
            this.initMoveX = draggableEvent.dragPosition.x;
            this.initMoveY = draggableEvent.dragPosition.y;

            // draggable element position
            this.clientLeft = this.domAdapter.clientRectLeft(this.dragDispatcher.draggable.self);
            this.clientTop = this.domAdapter.clientRectTop(this.dragDispatcher.draggable.self);

            if (this.customGhostState.isDirectChild) {
                this.initMoveXOnEl = 0;
                this.initMoveYOnEl = 0;
            } else {
                // delta between very first mouse position and draggable element position
                // which gives where on draggable element initial mousemove event is detected
                this.initMoveXOnEl = this.initMoveX - this.clientLeft;
                this.initMoveYOnEl = this.initMoveY - this.clientTop;
            }

            this.renderer.setStyle(this.dragDispatcher.draggable.ghost, "left", this.clientLeft + "px");
            this.renderer.setStyle(this.dragDispatcher.draggable.ghost, "top", this.clientTop + "px");

            this.renderer.addClass(document.body, "in-drag");

            this.isDragMoveStarted = true;
        }

        draggableEvent.ghostAnchorPosition = {
            x: draggableEvent.dragPosition.x - this.initMoveXOnEl,
            y: draggableEvent.dragPosition.y - this.initMoveYOnEl
        };

        this.renderer.setStyle(this.dragDispatcher.draggable.ghost, "left",
                               draggableEvent.ghostAnchorPosition.x + "px");
        this.renderer.setStyle(this.dragDispatcher.draggable.ghost, "top", draggableEvent.ghostAnchorPosition.y + "px");

        this.dragAndDrop.dragMove(draggableEvent);

        this.dragMovedEmitter.emit(draggableEvent);
    }

    private dragEnd(endEvent: MouseEvent|TouchEvent): void {
        const draggableEvent = this.generateDraggableEvent(endEvent);

        this.renderer.removeClass(document.body, "in-drag");

        this.viewContainerRef.clear();

        delete this.clientLeft;
        delete this.clientTop;

        delete this.initMoveX;
        delete this.initMoveY;

        delete this.initMoveXOnEl;
        delete this.initMoveYOnEl;

        this.isDragMoveStarted = false;

        this.dragAndDrop.dragEnd(draggableEvent);

        this.dragEndedEmitter.emit(draggableEvent);

        this.dropSubscription.unsubscribe();
    }

    private drop(): void {
        this.renderer.addClass(this.dragDispatcher.draggable.ghost, "draggable-ghost--hidden");
    }
}
