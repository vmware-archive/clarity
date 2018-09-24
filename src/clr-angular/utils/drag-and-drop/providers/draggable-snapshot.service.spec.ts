/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { DomAdapter } from '../../dom-adapter/dom-adapter';
import { DragEventType } from '../interfaces/drag-event.interface';

import { DraggableSnapshotService } from './draggable-snapshot.service';

export default function(): void {
  describe('Draggable Snapshot', function() {
    const mockDraggable = document.createElement('div');
    const mockDragMoveEvent = {
      dragPosition: { pageX: 11, pageY: 22 },
      draggableElement: mockDraggable,
      type: DragEventType.DRAG_START,
    };
    document.body.appendChild(mockDraggable);

    mockDraggable.style.position = 'absolute';
    mockDraggable.style.width = '100px';
    mockDraggable.style.height = '50px';
    mockDraggable.style.left = '90px';
    mockDraggable.style.top = '45px';

    const domAdapter = new DomAdapter();
    let draggableSnapshot;

    beforeEach(function() {
      draggableSnapshot = new DraggableSnapshotService(domAdapter);
    });

    it('registers element and sets clientRect and computedStyle', function() {
      expect(draggableSnapshot.clientRect).toBeUndefined();
      expect(draggableSnapshot.dragEvent).toBeUndefined();
      expect(draggableSnapshot.hasDraggableState).toBeFalsy();

      draggableSnapshot.capture(mockDraggable, mockDragMoveEvent);
      expect(draggableSnapshot.hasDraggableState).toBeTruthy();
      expect(draggableSnapshot.clientRect).toEqual(domAdapter.clientRect(mockDraggable));
      expect(draggableSnapshot.dragEvent).toEqual(mockDragMoveEvent);
    });

    it('unregisters element and deletes clientRect and computedStyle', function() {
      draggableSnapshot.capture(mockDraggable, mockDragMoveEvent);
      draggableSnapshot.discard();
      expect(draggableSnapshot.hasDraggableState).toBeFalsy();
      expect(draggableSnapshot.clientRect).toBeUndefined();
      expect(draggableSnapshot.dragEvent).toBeUndefined();
    });
  });
}
