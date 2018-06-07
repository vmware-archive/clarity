/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {animate, style, transition, trigger} from "@angular/animations";
import {Component, ElementRef, HostBinding, NgZone, OnDestroy, Optional, Renderer2} from "@angular/core";
import {Subscription} from "rxjs/Subscription";

import {ClrDragEvent} from "./interfaces/drag-event";
import {ClrDragEventListener} from "./providers/drag-event-listener";
import {ClrDraggableStateRegistrar} from "./providers/draggable-state-registrar";

const ANIMATION_DURATION = "0.2s ease-in-out";
@Component({
    selector: "clr-draggable-ghost",
    template: `<ng-content></ng-content>`,
    host: {class: "draggable-ghost"},
    animations: [trigger(
        "leaveAnimation",
        [transition(
            ":leave",
            [style({left: "*", top: "*"}), animate(ANIMATION_DURATION, style({top: "{{top}}", left: "{{left}}"}))])])]
})
export class ClrDraggableGhost<T> implements OnDestroy {
    private draggableGhostEl: Node;

    private subscriptions: Subscription[] = [];

    private initPosition: {pageX: number; pageY: number};
    private dragPosition: {pageX: number; pageY: number};
    private initDragDelta = {top: 0, left: 0};

    @HostBinding("@leaveAnimation") leaveAnimConfig = {value: 0, params: {top: "0px", left: "0px"}};

    constructor(private el: ElementRef, @Optional() private dragEventListener: ClrDragEventListener<T>,
                private renderer: Renderer2, private ngZone: NgZone,
                private draggableStateRegistrar: ClrDraggableStateRegistrar) {
        if (!this.dragEventListener) {
            throw new Error("The clr-draggable-ghost component can only be used inside of a clrDraggable directive.");
        }

        this.draggableGhostEl = this.el.nativeElement;
        this.renderer.addClass(document.body, "in-drag");


        this.subscriptions.push(this.dragEventListener.dragMoved.subscribe((event: ClrDragEvent<T>) => {
            if (!this.initPosition) {
                this.setupDraggableGhost(event);
            }
            this.moveGhostElement(event);
        }));
    }

    private setupDraggableGhost(event: ClrDragEvent<T>) {
        this.initPosition = {pageX: event.dragPosition.pageX, pageY: event.dragPosition.pageY};

        if (this.draggableStateRegistrar.hasDraggableState) {
            this.alignWithDraggable();
            const draggableClientRectLeft = this.draggableStateRegistrar.clientRect.left;
            const draggableClientRectTop = this.draggableStateRegistrar.clientRect.top;
            this.initDragDelta.left = this.initPosition.pageX - draggableClientRectLeft;
            this.initDragDelta.top = this.initPosition.pageY - draggableClientRectTop;
            this.animateToOnLeave(`${draggableClientRectTop}px`, `${draggableClientRectLeft}px`);
        } else {
            this.animateToOnLeave(`${this.initPosition.pageY}px`, `${this.initPosition.pageX}px`);
        }
    }

    private alignWithDraggable() {
        // Applying these negative margins is necessary as clientRect already accounts the margin space of the
        // draggable. Also, as the draggable ghost is the clone of the draggable it also inherits the draggable's margin
        // in itself resulting in unnecessarily applying the same margins spaces again, which creates misalignment with
        // the draggable.

        // So we have to apply these negative margins to the draggable ghost to
        // align it exactly with the original draggable.

        const draggableClientRectWidth = this.draggableStateRegistrar.clientRect.width;
        const draggableClientRectHeight = this.draggableStateRegistrar.clientRect.height;

        const draggableMarginLeft = this.draggableStateRegistrar.computedStyle.marginLeft;
        const draggableMarginTop = this.draggableStateRegistrar.computedStyle.marginTop;

        this.renderer.setStyle(this.draggableGhostEl, "margin-left", `-${draggableMarginLeft}`);
        this.renderer.setStyle(this.draggableGhostEl, "margin-top", `-${draggableMarginTop}`);

        this.renderer.setStyle(this.draggableGhostEl, "width", `${draggableClientRectWidth}px`);
        this.renderer.setStyle(this.draggableGhostEl, "height", `${draggableClientRectHeight}px`);
    }

    private animateToOnLeave(top: string, left: string) {
        this.ngZone.run(() => {
            this.leaveAnimConfig = {value: 0, params: {top: top, left: left}};
        });
    }

    private moveGhostElement(event: ClrDragEvent<T>) {
        this.dragPosition = {
            pageX: event.dragPosition.pageX - this.initDragDelta.left,
            pageY: event.dragPosition.pageY - this.initDragDelta.top
        };

        this.renderer.setStyle(this.draggableGhostEl, "left", `${this.dragPosition.pageX}px`);
        this.renderer.setStyle(this.draggableGhostEl, "top", `${this.dragPosition.pageY}px`);

        this.renderer.setStyle(this.draggableGhostEl, "visibility", "visible");
    }

    ngOnDestroy() {
        this.renderer.removeClass(document.body, "in-drag");
        this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
    }
}
