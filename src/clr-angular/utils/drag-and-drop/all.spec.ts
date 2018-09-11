/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import ClrDragAndDropIntegratedSpecs from './drag-and-drop-integrated.spec';
import ClrDragHandleSpecs from './drag-handle.spec';
import ClrDraggableGhostSpecs from './draggable-ghost.spec';
import ClrDraggableWithCustomGhostSpecs from './draggable/custom-ghost-integration.spec';
import ClrDraggableWithDragHandleSpecs from './draggable/drag-handle-integration.spec';
import ClrDraggableSpecs from './draggable/draggable.spec';
import ClrDraggableWithGhostAndHandleSpecs from './draggable/ghost-and-handle-integration.spec';
import ClrDroppableSpecs from './droppable/droppable.spec';
import ClrIfDraggedSpecs from './if-dragged.spec';
import ClrDragAndDropEventBusSpecs from './providers/drag-and-drop-event-bus.service.spec';
import ClrDragEventListenerSpecs from './providers/drag-event-listener.service.spec';
import ClrDragHandleRegistrarSpecs from './providers/drag-handle-registrar.service.spec';
import ClrDraggableSnapshotSpecs from './providers/draggable-snapshot.service.spec';
import ClrGlobalDragModeSpecs from './providers/global-drag-mode.service.spec';

describe('Drag And Drop', function() {
  describe('Providers', function() {
    ClrDragAndDropEventBusSpecs();
    ClrDragEventListenerSpecs();
    ClrDragHandleRegistrarSpecs();
    ClrDraggableSnapshotSpecs();
    ClrGlobalDragModeSpecs();
  });
  describe('Components And Directives', function() {
    ClrIfDraggedSpecs();
    ClrDragHandleSpecs();
    ClrDraggableGhostSpecs();
    ClrDragAndDropIntegratedSpecs();
    describe('ClrDraggable', function() {
      ClrDraggableSpecs();
      ClrDraggableWithCustomGhostSpecs();
      ClrDraggableWithDragHandleSpecs();
      ClrDraggableWithGhostAndHandleSpecs();
    });
    describe('ClrDroppable', function() {
      ClrDroppableSpecs();
    });
  });
});
