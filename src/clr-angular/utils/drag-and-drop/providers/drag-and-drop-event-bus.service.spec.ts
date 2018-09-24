/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { DragEventInterface, DragEventType } from '../interfaces/drag-event.interface';
import { DragAndDropEventBusService } from './drag-and-drop-event-bus.service';

type DragTransfer = {
  data: any;
};

export default function(): void {
  describe('Drag And Drop Event Bus Provider', function() {
    const dndEventBus = new DragAndDropEventBusService();
    const dragEventMockObj = (
      dragEventType: DragEventType,
      dragDataTransfer?: DragTransfer
    ): DragEventInterface<DragTransfer> => {
      return { type: dragEventType, dragPosition: { pageX: 0, pageY: 0 }, dragDataTransfer: dragDataTransfer };
    };
    let isEmitted: boolean;

    beforeEach(function() {
      isEmitted = false;
    });

    it('should broadcast from correct Observable on drag start event type', function() {
      dndEventBus.dragStarted.subscribe((event: DragEventInterface<DragTransfer>) => {
        isEmitted = true;
        expect(event.type).toBe(DragEventType.DRAG_START);
      });
      dndEventBus.broadcast(dragEventMockObj(DragEventType.DRAG_START));
      expect(isEmitted).toBeTruthy();
    });

    it('should broadcast from correct Observable on drag move event type', function() {
      dndEventBus.dragMoved.subscribe((event: DragEventInterface<DragTransfer>) => {
        isEmitted = true;
        expect(event.type).toBe(DragEventType.DRAG_MOVE);
      });
      dndEventBus.broadcast(dragEventMockObj(DragEventType.DRAG_MOVE));
      expect(isEmitted).toBeTruthy();
    });

    it('should broadcast from correct Observable on drag end event type', function() {
      dndEventBus.dragEnded.subscribe((event: DragEventInterface<DragTransfer>) => {
        isEmitted = true;
        expect(event.type).toBe(DragEventType.DRAG_END);
      });
      dndEventBus.broadcast(dragEventMockObj(DragEventType.DRAG_END));
      expect(isEmitted).toBeTruthy();
    });

    it('should broadcast from correct Observable on drop event type', function() {
      dndEventBus.dropped.subscribe((event: DragEventInterface<DragTransfer>) => {
        isEmitted = true;
        expect(event.type).toBe(DragEventType.DROP);
      });
      dndEventBus.broadcast(dragEventMockObj(DragEventType.DROP));
      expect(isEmitted).toBeTruthy();
    });
  });
}
