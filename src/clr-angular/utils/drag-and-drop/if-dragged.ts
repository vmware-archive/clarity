/**
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Directive, Inject, OnDestroy, TemplateRef, ViewContainerRef} from "@angular/core";
import {Subscription} from "rxjs/Subscription";
import {DragDispatcher} from "./providers/drag-dispatcher";
import {CUSTOM_GHOST_STATE, CustomGhostState} from "./providers/draggable-tracker";

@Directive({selector: "[clrIfDragged]"})
export class IfDragged implements OnDestroy {
    private subscriptions: Subscription[] = [];

    constructor(private template: TemplateRef<any>, private container: ViewContainerRef,
                private dragDispatcher: DragDispatcher,
                @Inject(CUSTOM_GHOST_STATE) private draggableTracker: CustomGhostState) {
        this.subscriptions.push(dragDispatcher.onDragStart.subscribe(() => {
            this.container.createEmbeddedView(this.template);
        }));

        this.subscriptions.push(dragDispatcher.onDragEnd.subscribe(() => {
            this.container.clear();
        }));
    }

    get draggableId(): string {
        return this.draggableTracker.draggableId;
    }

    ngOnDestroy() {
        this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
    }
}
