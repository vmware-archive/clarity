/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";
import {TestBed} from "@angular/core/testing";
import {By} from "@angular/platform-browser";

import {ClrDragEventType} from "../interfaces/drag-event";
import {ClrDropTolerance} from "../interfaces/drop-tolerance";
import {ClrDragAndDropEventBus} from "../providers/drag-and-drop-event-bus";
import {MOCK_DRAG_DROP_EVENT_BUS} from "../providers/drag-and-drop-event-bus.mock";

import {ClrDroppable} from "./droppable";

export default function(): void {
    const basicDragEventMock = (dragEventType: ClrDragEventType) => {
        return {type: dragEventType};
    };

    const decorateEventWithDropPosition = (event, dropPointPosition: {pageX: number; pageY: number}) => {
        event.dropPointPosition = dropPointPosition;
    };

    const decorateEventWithGroup = (event, group: string|string[]) => {
        event.group = group;
    };

    const decorateEventWithGhost = (event, ghost: Node) => {
        event.ghostElement = ghost;
    };

    describe("Basic Droppable", function() {
        beforeEach(function() {
            TestBed.configureTestingModule(
                {declarations: [BasicDroppable, ClrDroppable], providers: [MOCK_DRAG_DROP_EVENT_BUS]});

            this.fixture = TestBed.createComponent(BasicDroppable);
            this.testComponent = this.fixture.componentInstance;
            this.testElement = this.fixture.nativeElement;
            this.droppable = this.fixture.debugElement.query(By.directive(ClrDroppable));
            this.eventBus = TestBed.get(ClrDragAndDropEventBus);
            this.fixture.detectChanges();
        });

        afterEach(function() {
            this.fixture.destroy();
        });

        it("should have droppable class", function() {
            expect(this.droppable.nativeElement.classList.contains("droppable")).toBeTruthy();
        });

        it("should emit on dragStart", function() {
            const dragStartEvent = basicDragEventMock(ClrDragEventType.DRAG_START);
            this.eventBus.broadcast(dragStartEvent);
            expect(this.testComponent.dragStartEvent).toEqual(dragStartEvent);
        });

        it("should have draggable-match class on dragStart", function() {
            const dragStartEvent = basicDragEventMock(ClrDragEventType.DRAG_START);
            this.eventBus.broadcast(dragStartEvent);
            this.fixture.detectChanges();
            expect(this.droppable.nativeElement.classList.contains("draggable-match")).toBeTruthy();
        });

        it("should not emit on dragMove if dragStart hasn't been registered", function() {
            const dragMoveEvent = basicDragEventMock(ClrDragEventType.DRAG_MOVE);
            this.eventBus.broadcast(dragMoveEvent);
            expect(this.testComponent.dragMoveEvent).toBeUndefined();
        });

        it("should emit on dragMove", function() {
            const dragStartEvent = basicDragEventMock(ClrDragEventType.DRAG_START);
            const dragMoveEvent = basicDragEventMock(ClrDragEventType.DRAG_MOVE);
            expect(dragStartEvent).not.toEqual(dragMoveEvent);

            this.eventBus.broadcast(dragStartEvent);
            this.eventBus.broadcast(dragMoveEvent);

            expect(this.testComponent.dragStartEvent).toEqual(dragStartEvent);
            expect(this.testComponent.dragMoveEvent).toEqual(dragMoveEvent);
        });

        it("should not emit on dragEnd if dragStart hasn't been registered", function() {
            const dragEndEvent = basicDragEventMock(ClrDragEventType.DRAG_END);
            this.eventBus.broadcast(dragEndEvent);
            expect(this.testComponent.dragEndEvent).toBeUndefined();
        });

        it("should emit on dragEnd", function() {
            const dragStartEvent = basicDragEventMock(ClrDragEventType.DRAG_START);
            const dragEndEvent = basicDragEventMock(ClrDragEventType.DRAG_END);
            this.eventBus.broadcast(dragStartEvent);
            expect(this.testComponent.dragStartEvent).toEqual(dragStartEvent);
            this.eventBus.broadcast(dragEndEvent);
            expect(this.testComponent.dragEndEvent).toEqual(dragEndEvent);
        });

        it("should remove draggable-match class on dragEnd", function() {
            const dragStartEvent = basicDragEventMock(ClrDragEventType.DRAG_START);
            const dragEndEvent = basicDragEventMock(ClrDragEventType.DRAG_END);
            this.eventBus.broadcast(dragStartEvent);
            this.fixture.detectChanges();
            expect(this.droppable.nativeElement.classList.contains("draggable-match")).toBeTruthy();
            this.eventBus.broadcast(dragEndEvent);
            this.fixture.detectChanges();
            expect(this.droppable.nativeElement.classList.contains("draggable-match")).toBeFalsy();
        });

        it("should emit on dragEnter", function() {
            const dragStartEvent = basicDragEventMock(ClrDragEventType.DRAG_START);
            const dragMoveEvent = basicDragEventMock(ClrDragEventType.DRAG_MOVE);
            this.eventBus.broadcast(dragStartEvent);
            decorateEventWithDropPosition(dragMoveEvent, {pageX: 500, pageY: 300});
            this.eventBus.broadcast(dragMoveEvent);
            expect(this.testComponent.dragStartEvent).toEqual(dragStartEvent);
            expect(this.testComponent.dragMoveEvent).toEqual(dragMoveEvent);
            expect(this.testComponent.dragEnterEvent).toEqual(dragMoveEvent);
            expect(this.testComponent.dragLeaveEvent).toBeUndefined();
        });

        it("should have draggable-over on dragEnter", function() {
            const dragStartEvent = basicDragEventMock(ClrDragEventType.DRAG_START);
            const dragMoveEvent = basicDragEventMock(ClrDragEventType.DRAG_MOVE);
            this.eventBus.broadcast(dragStartEvent);
            decorateEventWithDropPosition(dragMoveEvent, {pageX: 500, pageY: 300});
            this.eventBus.broadcast(dragMoveEvent);
            this.fixture.detectChanges();
            expect(this.droppable.nativeElement.classList.contains("draggable-over")).toBeTruthy();
        });

        it("should not emit on dragLeave if dragEnter hasn't been registered", function() {
            const dragStartEvent = basicDragEventMock(ClrDragEventType.DRAG_START);
            const dragMoveEvent = basicDragEventMock(ClrDragEventType.DRAG_MOVE);
            this.eventBus.broadcast(dragStartEvent);
            decorateEventWithDropPosition(dragMoveEvent, {pageX: 0, pageY: 0});
            this.eventBus.broadcast(dragMoveEvent);
            expect(this.testComponent.dragStartEvent).toEqual(dragStartEvent);
            expect(this.testComponent.dragMoveEvent).toEqual(dragMoveEvent);
            expect(this.testComponent.dragEnterEvent).not.toEqual(dragMoveEvent);
            this.eventBus.broadcast(dragMoveEvent);
            expect(this.testComponent.dragLeaveEvent).toBeUndefined();
        });

        it("should emit on dragLeave", function() {
            const dragStartEvent = basicDragEventMock(ClrDragEventType.DRAG_START);
            const dragMoveEvent = basicDragEventMock(ClrDragEventType.DRAG_MOVE);
            this.eventBus.broadcast(dragStartEvent);
            decorateEventWithDropPosition(dragMoveEvent, {pageX: 500, pageY: 300});
            this.eventBus.broadcast(dragMoveEvent);
            expect(this.testComponent.dragStartEvent).toEqual(dragStartEvent);
            expect(this.testComponent.dragMoveEvent).toEqual(dragMoveEvent);
            expect(this.testComponent.dragEnterEvent).toEqual(dragMoveEvent);
            dragMoveEvent.type = ClrDragEventType.DRAG_MOVE;
            decorateEventWithDropPosition(dragMoveEvent, {pageX: 0, pageY: 0});
            this.eventBus.broadcast(dragMoveEvent);
            expect(this.testComponent.dragLeaveEvent).toEqual(dragMoveEvent);
        });

        it("should remove draggable-over class on dragLeave", function() {
            const dragStartEvent = basicDragEventMock(ClrDragEventType.DRAG_START);
            const dragMoveEvent = basicDragEventMock(ClrDragEventType.DRAG_MOVE);
            this.eventBus.broadcast(dragStartEvent);
            decorateEventWithDropPosition(dragMoveEvent, {pageX: 500, pageY: 300});
            this.eventBus.broadcast(dragMoveEvent);
            this.fixture.detectChanges();
            expect(this.droppable.nativeElement.classList.contains("draggable-over")).toBeTruthy();
            dragMoveEvent.type = ClrDragEventType.DRAG_MOVE;
            decorateEventWithDropPosition(dragMoveEvent, {pageX: 0, pageY: 0});
            this.eventBus.broadcast(dragMoveEvent);
            this.fixture.detectChanges();
            expect(this.droppable.nativeElement.classList.contains("draggable-over")).toBeFalsy();
        });

        it("should not emit on drop if dragEnter hasn't been registered", function() {
            const dragStartEvent = basicDragEventMock(ClrDragEventType.DRAG_START);
            const dragMoveEvent = basicDragEventMock(ClrDragEventType.DRAG_MOVE);
            const dragEndEvent = basicDragEventMock(ClrDragEventType.DRAG_END);
            this.eventBus.broadcast(dragStartEvent);
            decorateEventWithDropPosition(dragMoveEvent, {pageX: 0, pageY: 0});
            this.eventBus.broadcast(dragMoveEvent);
            expect(this.testComponent.dragStartEvent).toEqual(dragStartEvent);
            expect(this.testComponent.dragMoveEvent).toEqual(dragMoveEvent);
            expect(this.testComponent.dragEnterEvent).not.toEqual(dragMoveEvent);
            this.eventBus.broadcast(dragEndEvent);
            expect(this.testComponent.dropEvent).toBeUndefined();
        });

        it("should emit on drop if dragEnter has been registered", function() {
            const dragStartEvent = basicDragEventMock(ClrDragEventType.DRAG_START);
            const dragMoveEvent = basicDragEventMock(ClrDragEventType.DRAG_MOVE);
            const dragEndEvent = basicDragEventMock(ClrDragEventType.DRAG_END);
            this.eventBus.broadcast(dragStartEvent);
            decorateEventWithDropPosition(dragMoveEvent, {pageX: 500, pageY: 300});
            this.eventBus.broadcast(dragMoveEvent);
            expect(this.testComponent.dragStartEvent).toEqual(dragStartEvent);
            expect(this.testComponent.dragMoveEvent).toEqual(dragMoveEvent);
            expect(this.testComponent.dragEnterEvent).toEqual(dragMoveEvent);
            this.eventBus.broadcast(dragEndEvent);
            expect(this.testComponent.dropEvent).toEqual(dragEndEvent);
        });

        it("should remove both draggable-match and draggable-over classes on drop", function() {
            const dragStartEvent = basicDragEventMock(ClrDragEventType.DRAG_START);
            const dragMoveEvent = basicDragEventMock(ClrDragEventType.DRAG_MOVE);
            const dragEndEvent = basicDragEventMock(ClrDragEventType.DRAG_END);
            this.eventBus.broadcast(dragStartEvent);
            this.fixture.detectChanges();
            expect(this.droppable.nativeElement.classList.contains("draggable-match")).toBeTruthy();
            decorateEventWithDropPosition(dragMoveEvent, {pageX: 500, pageY: 300});
            this.eventBus.broadcast(dragMoveEvent);
            this.fixture.detectChanges();
            expect(this.droppable.nativeElement.classList.contains("draggable-over")).toBeTruthy();
            expect(this.testComponent.dragStartEvent).toEqual(dragStartEvent);
            expect(this.testComponent.dragMoveEvent).toEqual(dragMoveEvent);
            expect(this.testComponent.dragEnterEvent).toEqual(dragMoveEvent);
            this.eventBus.broadcast(dragEndEvent);
            this.fixture.detectChanges();
            expect(this.droppable.nativeElement.classList.contains("draggable-match")).toBeFalsy();
            expect(this.droppable.nativeElement.classList.contains("draggable-over")).toBeFalsy();
            expect(this.testComponent.dropEvent).toEqual(dragEndEvent);
        });

        it("should remove both draggable-match and draggable-over classes on drop", function() {
            const dragStartEvent = basicDragEventMock(ClrDragEventType.DRAG_START);
            const dragMoveEvent = basicDragEventMock(ClrDragEventType.DRAG_MOVE);
            const dragEndEvent = basicDragEventMock(ClrDragEventType.DRAG_END);
            this.eventBus.broadcast(dragStartEvent);
            decorateEventWithDropPosition(dragMoveEvent, {pageX: 500, pageY: 300});
            this.eventBus.broadcast(dragMoveEvent);
            const elementOver = document.createElement("div");
            decorateEventWithGhost(dragEndEvent, elementOver);
            this.eventBus.broadcast(dragEndEvent);
            this.fixture.detectChanges();
            expect(this.droppable.nativeElement.classList.contains("draggable-match")).toBeFalsy();
            expect(this.droppable.nativeElement.classList.contains("draggable-over")).toBeFalsy();
            expect(this.testComponent.dropEvent).toEqual(dragEndEvent);
            expect(elementOver.classList.contains("dropped"))
                .toBeTruthy(`Element over droppable should have "dropped" class once Drop event is fired.`);
        });
    });

    describe("Droppable With clrGroup", function() {
        beforeEach(function() {
            TestBed.configureTestingModule(
                {declarations: [DroppableWithGroup, ClrDroppable], providers: [MOCK_DRAG_DROP_EVENT_BUS]});

            this.fixture = TestBed.createComponent(DroppableWithGroup);
            this.testComponent = this.fixture.componentInstance;
            this.testElement = this.fixture.nativeElement;
            this.droppable = this.fixture.debugElement.query(By.directive(ClrDroppable));
            this.eventBus = TestBed.get(ClrDragAndDropEventBus);
            this.fixture.detectChanges();
        });

        afterEach(function() {
            this.fixture.destroy();
        });

        it("should match if droppable without group keys registers dragStart event that has no  group keys",
           function() {
               const dragStartEvent = basicDragEventMock(ClrDragEventType.DRAG_START);
               this.eventBus.broadcast(dragStartEvent);
               this.fixture.detectChanges();
               expect(this.testComponent.dragStartEvent).toEqual(dragStartEvent);
               expect(this.droppable.nativeElement.classList.contains("draggable-match")).toBeTruthy();
           });

        it("should not match if droppable with no group keys registers dragStart event with defined group", function() {
            const dragStartEvent = basicDragEventMock(ClrDragEventType.DRAG_START);
            decorateEventWithGroup(dragStartEvent, "draggable-1");
            this.eventBus.broadcast(dragStartEvent);
            this.fixture.detectChanges();
            expect(this.testComponent.dragStartEvent)
                .not.toEqual(dragStartEvent, `shouldn't emit dragStart if groups don't match.`);
            expect(this.droppable.nativeElement.classList.contains("draggable-match")).toBeFalsy();
        });

        it("should match if droppable's group key match with dragStart event's group key", function() {
            this.testComponent.droppableGroup = "draggable-1";
            this.fixture.detectChanges();

            const dragStartEvent = basicDragEventMock(ClrDragEventType.DRAG_START);
            decorateEventWithGroup(dragStartEvent, "draggable-1");

            this.eventBus.broadcast(dragStartEvent);
            this.fixture.detectChanges();
            expect(this.testComponent.dragStartEvent).toEqual(dragStartEvent);
            expect(this.droppable.nativeElement.classList.contains("draggable-match")).toBeTruthy();
        });

        it("should match if droppable's group key match with one of dragStart event's group keys", function() {
            this.testComponent.droppableGroup = "draggable-1";
            this.fixture.detectChanges();

            const dragStartEvent = basicDragEventMock(ClrDragEventType.DRAG_START);
            decorateEventWithGroup(dragStartEvent, ["draggable-1", "draggable-2", "draggable-3"]);

            this.eventBus.broadcast(dragStartEvent);
            this.fixture.detectChanges();
            expect(this.testComponent.dragStartEvent).toEqual(dragStartEvent);
            expect(this.droppable.nativeElement.classList.contains("draggable-match")).toBeTruthy();
        });

        it("should not match if none of droppable's group keys match with any of dragStart event's group keys",
           function() {
               this.testComponent.droppableGroup = ["draggable-1", "draggable-2"];
               this.fixture.detectChanges();

               const dragStartEvent = basicDragEventMock(ClrDragEventType.DRAG_START);
               decorateEventWithGroup(dragStartEvent, ["draggable-3", "draggable-4", "draggable-5"]);

               this.eventBus.broadcast(dragStartEvent);
               this.fixture.detectChanges();
               expect(this.testComponent.dragStartEvent)
                   .not.toEqual(dragStartEvent, `shouldn't emit dragStart if groups don't match.`);
               expect(this.droppable.nativeElement.classList.contains("draggable-match")).toBeFalsy();
           });

        it("should match if one of droppable's group keys match with one of dragStart event's group keys", function() {
            this.testComponent.droppableGroup = ["draggable-1", "draggable-2", "draggable-3"];
            this.fixture.detectChanges();

            const dragStartEvent = basicDragEventMock(ClrDragEventType.DRAG_START);
            decorateEventWithGroup(dragStartEvent, ["draggable-3", "draggable-4", "draggable-5"]);

            this.eventBus.broadcast(dragStartEvent);
            this.fixture.detectChanges();
            expect(this.testComponent.dragStartEvent).toEqual(dragStartEvent);
            expect(this.droppable.nativeElement.classList.contains("draggable-match")).toBeTruthy();
        });
    });

    describe("Droppable With clrDropTolerance", function() {
        beforeEach(function() {
            TestBed.configureTestingModule(
                {declarations: [DroppableWithTolerance, ClrDroppable], providers: [MOCK_DRAG_DROP_EVENT_BUS]});

            this.fixture = TestBed.createComponent(DroppableWithTolerance);
            this.testComponent = this.fixture.componentInstance;
            this.testElement = this.fixture.nativeElement;
            this.droppable = this.fixture.debugElement.query(By.directive(ClrDroppable));
            this.eventBus = TestBed.get(ClrDragAndDropEventBus);
            this.fixture.detectChanges();

            this.broadcastEnterLeaveEventAt = function(_pageX, _pageY) {
                if (!this.testComponent.dragStartEvent) {
                    throw new Error("A drag start event should be broadcasted and registered first.");
                }
                delete this.testComponent.dragEnterEvent;
                delete this.testComponent.dragLeaveEvent;

                const dragEvent = basicDragEventMock(ClrDragEventType.DRAG_MOVE);
                decorateEventWithDropPosition(dragEvent, {pageX: _pageX, pageY: _pageY});
                this.eventBus.broadcast(dragEvent);
                return dragEvent;
            };
        });

        afterEach(function() {
            this.fixture.destroy();
        });

        it("can register dragEnter only if dropPointPosition is over dropppable when drop tolerance is not defined",
           function() {
               const dragStartEvent = basicDragEventMock(ClrDragEventType.DRAG_START);
               this.eventBus.broadcast(dragStartEvent);
               expect(this.testComponent.dragStartEvent).toEqual(dragStartEvent);

               expect(this.broadcastEnterLeaveEventAt(400, 200)).toEqual(this.testComponent.dragEnterEvent);
               expect(this.broadcastEnterLeaveEventAt(399, 199)).toEqual(this.testComponent.dragLeaveEvent);

               expect(this.broadcastEnterLeaveEventAt(600, 200)).toEqual(this.testComponent.dragEnterEvent);
               expect(this.broadcastEnterLeaveEventAt(601, 199)).toEqual(this.testComponent.dragLeaveEvent);

               expect(this.broadcastEnterLeaveEventAt(600, 600)).toEqual(this.testComponent.dragEnterEvent);
               expect(this.broadcastEnterLeaveEventAt(601, 601)).toEqual(this.testComponent.dragLeaveEvent);

               expect(this.broadcastEnterLeaveEventAt(400, 600)).toEqual(this.testComponent.dragEnterEvent);
               expect(this.broadcastEnterLeaveEventAt(399, 601)).toEqual(this.testComponent.dragLeaveEvent);
           });

        it("can register dragEnter if dropPointPosition is within drop tolerance added as number", function() {
            const tolerance = 20;
            this.testComponent.tolerance = tolerance;
            this.fixture.detectChanges();

            const dragStartEvent = basicDragEventMock(ClrDragEventType.DRAG_START);
            this.eventBus.broadcast(dragStartEvent);
            expect(this.testComponent.dragStartEvent).toEqual(dragStartEvent);

            expect(this.broadcastEnterLeaveEventAt(400 - tolerance, 200 - tolerance))
                .toEqual(this.testComponent.dragEnterEvent);
            expect(this.broadcastEnterLeaveEventAt(399 - tolerance, 199 - tolerance))
                .toEqual(this.testComponent.dragLeaveEvent);
            expect(this.broadcastEnterLeaveEventAt(600 + tolerance, 200 - tolerance))
                .toEqual(this.testComponent.dragEnterEvent);
            expect(this.broadcastEnterLeaveEventAt(601 + tolerance, 199 - tolerance))
                .toEqual(this.testComponent.dragLeaveEvent);
            expect(this.broadcastEnterLeaveEventAt(600 + tolerance, 600 + tolerance))
                .toEqual(this.testComponent.dragEnterEvent);
            expect(this.broadcastEnterLeaveEventAt(601 + tolerance, 601 + tolerance))
                .toEqual(this.testComponent.dragLeaveEvent);
            expect(this.broadcastEnterLeaveEventAt(400 - tolerance, 600 + tolerance))
                .toEqual(this.testComponent.dragEnterEvent);
            expect(this.broadcastEnterLeaveEventAt(399 - tolerance, 601 + tolerance))
                .toEqual(this.testComponent.dragLeaveEvent);
        });

        it("can register dragEnter if dropPointPosition is within drop tolerance added as object", function() {
            const tolerance = {top: 20, right: 40, bottom: 60, left: 80};
            this.testComponent.tolerance = tolerance;
            this.fixture.detectChanges();

            const dragStartEvent = basicDragEventMock(ClrDragEventType.DRAG_START);
            this.eventBus.broadcast(dragStartEvent);
            expect(this.testComponent.dragStartEvent).toEqual(dragStartEvent);

            expect(this.broadcastEnterLeaveEventAt(400 - tolerance.left, 200 - tolerance.top))
                .toEqual(this.testComponent.dragEnterEvent);
            expect(this.broadcastEnterLeaveEventAt(399 - tolerance.left, 199 - tolerance.top))
                .toEqual(this.testComponent.dragLeaveEvent);
            expect(this.broadcastEnterLeaveEventAt(600 + tolerance.right, 200 - tolerance.top))
                .toEqual(this.testComponent.dragEnterEvent);
            expect(this.broadcastEnterLeaveEventAt(601 + tolerance.right, 199 - tolerance.top))
                .toEqual(this.testComponent.dragLeaveEvent);
            expect(this.broadcastEnterLeaveEventAt(600 + tolerance.right, 600 + tolerance.bottom))
                .toEqual(this.testComponent.dragEnterEvent);
            expect(this.broadcastEnterLeaveEventAt(601 + tolerance.right, 601 + tolerance.bottom))
                .toEqual(this.testComponent.dragLeaveEvent);
            expect(this.broadcastEnterLeaveEventAt(400 - tolerance.left, 600 + tolerance.bottom))
                .toEqual(this.testComponent.dragEnterEvent);
            expect(this.broadcastEnterLeaveEventAt(399 - tolerance.left, 601 + tolerance.bottom))
                .toEqual(this.testComponent.dragLeaveEvent);
        });
    });
}

@Component({
    styles: [".basic-droppable { position: absolute; left: 400px; top: 200px; width: 200px; height: 400px; }"],
    template: `<div class="basic-droppable" clrDroppable
                    (clrDragStart)="dragStartEvent = $event;"
                    (clrDragMove)="dragMoveEvent = $event;"
                    (clrDragEnd)="dragEndEvent = $event;"
                    (clrDragLeave)="dragLeaveEvent = $event;"
                    (clrDragEnter)="dragEnterEvent = $event;"
                    (clrDrop)="dropEvent = $event;">Test</div>`
})
class BasicDroppable {
    public dragStartEvent: any;
    public dragMoveEvent: any;
    public dragEndEvent: any;
    public dragLeaveEvent: any;
    public dragEnterEvent: any;
    public dropEvent: any;
}

@Component({
    template:
        `<div class="droppable-with-group" clrDroppable [clrGroup]="droppableGroup" (clrDragStart)="dragStartEvent = $event;">Test</div>`
})
class DroppableWithGroup {
    public droppableGroup: string|string[];
    public dragStartEvent: any;
}

@Component({
    styles: [".droppable-with-tolerance { position: absolute; left: 400px; top: 200px; width: 200px; height: 400px; }"],
    template:
        `<div class="droppable-with-tolerance" clrDroppable [clrDropTolerance]="tolerance" (clrDragStart)="dragStartEvent = $event;" (clrDragLeave)="dragLeaveEvent = $event;"
        (clrDragEnter)="dragEnterEvent = $event;">Test</div>`
})
class DroppableWithTolerance {
    public tolerance: number|ClrDropTolerance;
    public dragStartEvent: any;
    public dragLeaveEvent: any;
    public dragEnterEvent: any;
}
