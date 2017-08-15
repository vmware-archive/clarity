/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {AfterViewInit, Directive, ElementRef, EventEmitter, OnDestroy, Output, Renderer2} from "@angular/core";
import {Subscription} from "rxjs/Subscription";

import {DragDispatcher} from "../providers/drag-dispatcher";

import {DomAdapter} from "./dom-adapter";
import {DatagridRenderOrganizer} from "./render-organizer";

@Directive({selector: "clr-dg-column", providers: [DragDispatcher]})
export class DatagridColumnResizer implements AfterViewInit, OnDestroy {
    constructor(private el: ElementRef, private renderer: Renderer2, private organizer: DatagridRenderOrganizer,
                private domAdapter: DomAdapter, private dragDispatcher: DragDispatcher) {
        this.columnEl = el.nativeElement;
    }

    columnEl: any;
    columnRectWidth: number;
    columnResizeBy: number = 0;

    handleTrackerEl: ElementRef;

    pageStartPositionX: number;
    dragDistancePositionX: number;  // relative to pageStartPosition

    dragWithinMinWidth: boolean = false;

    columnMinWidth: number;

    @Output("clrDgColumnResize") resizeEmitter: EventEmitter<number> = new EventEmitter();

    private subscriptions: Subscription[] = [];

    ngOnDestroy() {
        this.dragDispatcher.destroy();
        this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
    }

    ngAfterViewInit() {
        this.columnMinWidth = this.domAdapter.minWidth(this.columnEl);
        this.handleTrackerEl = this.dragDispatcher.handleTrackerRef.nativeElement;

        this.dragDispatcher.addDragListener();
        this.subscriptions.push(this.dragDispatcher.onDragStart.subscribe(() => this.dragStartHandler()));
        this.subscriptions.push(this.dragDispatcher.onDragMove.subscribe(($event) => this.dragMoveHandler($event)));
        this.subscriptions.push(this.dragDispatcher.onDragEnd.subscribe(() => this.dragEndHandler()));
    }

    dragStartHandler(): void {
        this.renderer.setStyle(this.handleTrackerEl, "display", "block");
        this.renderer.setStyle(document.body, "cursor", "col-resize");
        this.dragDistancePositionX = 0;
        this.columnRectWidth = this.domAdapter.clientRectWidth(this.columnEl);
        this.pageStartPositionX = this.domAdapter.clientRectRight(this.columnEl);
    }

    dragMoveHandler(moveEvent: any): void {
        const pageMovePosition = moveEvent.pageX || moveEvent.changedTouches[0].pageX;
        this.dragDistancePositionX = this.getPositionWithinMax(pageMovePosition - this.pageStartPositionX);
        this.renderer.setStyle(this.handleTrackerEl, "right", -1 * this.dragDistancePositionX + "px");
    }

    dragEndHandler(): void {
        this.renderer.setStyle(this.handleTrackerEl, "right", "0px");
        this.renderer.setStyle(this.handleTrackerEl, "display", "none");
        this.renderer.setStyle(document.body, "cursor", "auto");

        if (this.dragDistancePositionX) {
            this.columnResizeBy = this.dragDistancePositionX;

            this.resizeEmitter.emit(this.columnRectWidth + this.columnResizeBy);

            this.organizer.resize();
        }
    }

    getPositionWithinMax(draggedDistance: number): number {
        if (draggedDistance < 0) {
            if (Math.abs(draggedDistance) < this.columnRectWidth - this.columnMinWidth) {
                if (this.dragWithinMinWidth) {
                    this.dragWithinMinWidth = false;
                    this.renderer.removeClass(this.handleTrackerEl, "exceeded-max");
                }
                return draggedDistance;
            } else {
                if (!this.dragWithinMinWidth) {
                    this.dragWithinMinWidth = true;
                    this.renderer.addClass(this.handleTrackerEl, "exceeded-max");
                }
                return this.columnMinWidth - this.columnRectWidth;
            }

        } else {
            if (this.dragWithinMinWidth) {
                this.dragWithinMinWidth = false;
                this.renderer.removeClass(this.handleTrackerEl, "exceeded-max");
            }

            return draggedDistance;
        }
    }
}