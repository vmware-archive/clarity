/**
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */


import {AfterViewInit, Directive, ElementRef, EventEmitter, Input, OnDestroy, Output, Renderer2} from "@angular/core";
import {Subscription} from "rxjs/Subscription";
import {DomAdapter} from "../../data/datagrid/render/dom-adapter";
import {DraggableEvent} from "./interfaces/draggable-event";
import {DragAndDropDispatcher} from "./providers/drag-and-drop-dispatcher";

@Directive({selector: "[clrDroppable]", providers: [DomAdapter], host: {"class": "drop-area"}})
export class Droppable implements AfterViewInit, OnDestroy {
    private clientLeft: number;
    private clientTop: number;
    private clientBottom: number;
    private clientRight: number;

    private isDragMoveStarted: boolean = false;

    private droppableEl: Node;

    private _dropAllowed: boolean = false;

    private ghostElWidth: number;
    private ghostElHeight: number;

    set dropAllowed(value: boolean) {
        this._dropAllowed = value;
        this._dropAllowed ? this.draggableEnter() : this.draggableLeave();
    }

    private dragStartSubscription: Subscription;
    private dragMoveSubscription: Subscription;
    private dragEndSubscription: Subscription;

    @Output("clrDragOver") dragOverEmitter: EventEmitter<DraggableEvent> = new EventEmitter();
    @Output("clrDragEnter") dragEnterEmitter: EventEmitter<DraggableEvent> = new EventEmitter();
    @Output("clrDragLeave") dragLeaveEmitter: EventEmitter<DraggableEvent> = new EventEmitter();
    @Output("clrDrop") dropEmitter: EventEmitter<DraggableEvent> = new EventEmitter();

    @Input("clrDragAndDropGroup") groupKey: string|string[];

    private _dropMarginTop: number = 0;
    private _dropMarginBottom: number = 0;
    private _dropMarginLeft: number = 0;
    private _dropMarginRight: number = 0;

    @Input("clrDropMargin")
    set dropMargin(value: number|{top?: number, bottom?: number, left?: number, right?: number}) {
        if (typeof value === "number") {
            this._dropMarginTop = value;
            this._dropMarginBottom = value;
            this._dropMarginLeft = value;
            this._dropMarginRight = value;
        } else {
            this._dropMarginTop = value.top || 0;
            this._dropMarginBottom = value.bottom || 0;
            this._dropMarginLeft = value.left || 0;
            this._dropMarginRight = value.right || 0;
        }
    }

    constructor(private el: ElementRef, private dragAndDrop: DragAndDropDispatcher, private renderer: Renderer2,
                private domAdapter: DomAdapter) {
        this.droppableEl = this.el.nativeElement;
    }

    private onDragStart(startEvent: DraggableEvent) {
        // this dragStart event handler method should be only responsible for subscribing to dragMove events.
        if (typeof this.groupKey === "string" && startEvent.dragAndDropGroup === this.groupKey ||
            this.groupKey && this.groupKey.indexOf(startEvent.dragAndDropGroup) > -1 ||
            typeof this.groupKey === "undefined" && typeof startEvent.dragAndDropGroup === "undefined") {
            // Must subscribe to the dragmove events only when the linkValue's between draggables and droppables match.
            // Otherwise all droppable will try to listen to dragMove events.
            this.dragMoveSubscription =
                this.dragAndDrop.onDragMove.subscribe((moveEvent: DraggableEvent) => this.onDragMove(moveEvent));
        }
    }

    private onDragMove(moveEvent: DraggableEvent) {
        if (!this.isDragMoveStarted) {
            // Must subscribe  here to the dragEnd only when dragMove is detected.
            // Otherwise simple click(mousedown + mouseup) events will trigger dragEnd event on all droppables too.
            this.dragEndSubscription =
                this.dragAndDrop.onDragEnd.subscribe((endEvent: DraggableEvent) => this.onDragEnd(endEvent));

            this.ghostElWidth = this.domAdapter.clientRectWidth(moveEvent.draggable.ghost);
            this.ghostElHeight = this.domAdapter.clientRectHeight(moveEvent.draggable.ghost);

            this.getClientElState(this.droppableEl);
            this.renderer.addClass(this.droppableEl, "drop-enabled");
            this.isDragMoveStarted = true;
        }

        const ghostElCenterX = moveEvent.ghostAnchorPosition.x + this.ghostElWidth / 2;
        const ghostElCenterY = moveEvent.ghostAnchorPosition.y + this.ghostElHeight / 2;

        if (this.isWithinBoundaries(ghostElCenterX, ghostElCenterY)) {
            if (!this._dropAllowed) {
                this.dropAllowed = true;
            }
            this.dragOverEmitter.emit(moveEvent);
        } else {
            if (this._dropAllowed) {
                this.dropAllowed = false;
            }
        }
    }

    private onDragEnd(endEvent: DraggableEvent) {
        this.isDragMoveStarted = false;

        this.renderer.removeClass(this.droppableEl, "drop-enabled");

        if (this._dropAllowed) {
            this._dropAllowed = false;
            this.dragAndDrop.drop();
            this.renderer.removeClass(this.droppableEl, "drop-allowed");
            this.dropEmitter.emit(endEvent);
        }

        this.unsubscribeFrom(this.dragMoveSubscription);
        this.unsubscribeFrom(this.dragEndSubscription);
    }

    private draggableEnter(): void {
        this.renderer.addClass(this.droppableEl, "drop-allowed");
        this.dragEnterEmitter.emit();
    }

    private draggableLeave(): void {
        this.renderer.removeClass(this.droppableEl, "drop-allowed");
        this.dragLeaveEmitter.emit();
    }

    private getClientElState(element: Node) {
        this.clientLeft = this.domAdapter.clientRectLeft(element);
        this.clientTop = this.domAdapter.clientRectTop(element);
        this.clientBottom = this.domAdapter.clientRectBottom(element);
        this.clientRight = this.domAdapter.clientRectRight(element);
    }

    private isWithinBoundaries(x: number, y: number): boolean {
        if (this.clientLeft - this._dropMarginLeft > x || this.clientRight + this._dropMarginRight < x) {
            return false;
        }
        if (this.clientTop - this._dropMarginTop > y || this.clientBottom + this._dropMarginBottom < y) {
            return false;
        }

        return true;
    }

    private unsubscribeFrom(subscription: Subscription): void {
        if (subscription) {
            subscription.unsubscribe();
        }
    }

    ngAfterViewInit() {
        this.dragStartSubscription = this.dragAndDrop.onDragStart.subscribe((draggableEvent: DraggableEvent) =>
                                                                                this.onDragStart(draggableEvent));
    }

    ngOnDestroy() {
        this.unsubscribeFrom(this.dragStartSubscription);
        this.unsubscribeFrom(this.dragMoveSubscription);
        this.unsubscribeFrom(this.dragEndSubscription);
    }
}
