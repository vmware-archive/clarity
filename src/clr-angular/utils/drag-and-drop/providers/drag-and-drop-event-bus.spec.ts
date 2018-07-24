/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {ClrDragEvent, ClrDragEventType} from "../interfaces/drag-event";
import {ClrDragAndDropEventBus} from "./drag-and-drop-event-bus";

type DragTransfer = {
    data: any;
};

export default function(): void {
    describe("Drag And Drop Event Bus Provider", function() {
        const dndEventBus = new ClrDragAndDropEventBus();
        const dragEventMockObj =
            (dragEventType: ClrDragEventType, dragDataTransfer?: DragTransfer): ClrDragEvent<DragTransfer> => {
                return {type: dragEventType, dragPosition: {pageX: 0, pageY: 0}, dragDataTransfer: dragDataTransfer};
            };
        let isEmitted: boolean;

        beforeEach(function() {
            isEmitted = false;
        });

        it("should broadcast from correct Observable on drag start event type", function() {
            dndEventBus.dragStarted.subscribe((event: ClrDragEvent<DragTransfer>) => {
                isEmitted = true;
                expect(event.type).toBe(ClrDragEventType.DRAG_START);
            });
            dndEventBus.broadcast(dragEventMockObj(ClrDragEventType.DRAG_START));
            expect(isEmitted).toBeTruthy();
        });

        it("should broadcast from correct Observable on drag move event type", function() {
            dndEventBus.dragMoved.subscribe((event: ClrDragEvent<DragTransfer>) => {
                isEmitted = true;
                expect(event.type).toBe(ClrDragEventType.DRAG_MOVE);
            });
            dndEventBus.broadcast(dragEventMockObj(ClrDragEventType.DRAG_MOVE));
            expect(isEmitted).toBeTruthy();
        });

        it("should broadcast from correct Observable on drag end event type", function() {
            dndEventBus.dragEnded.subscribe((event: ClrDragEvent<DragTransfer>) => {
                isEmitted = true;
                expect(event.type).toBe(ClrDragEventType.DRAG_END);
            });
            dndEventBus.broadcast(dragEventMockObj(ClrDragEventType.DRAG_END));
            expect(isEmitted).toBeTruthy();
        });

        it("should broadcast from correct Observable on drop event type", function() {
            dndEventBus.dropped.subscribe((event: ClrDragEvent<DragTransfer>) => {
                isEmitted = true;
                expect(event.type).toBe(ClrDragEventType.DROP);
            });
            dndEventBus.broadcast(dragEventMockObj(ClrDragEventType.DROP));
            expect(isEmitted).toBeTruthy();
        });
    });
}
