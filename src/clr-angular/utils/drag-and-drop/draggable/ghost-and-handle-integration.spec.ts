/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { ClrIconModule } from '../../../icon/icon.module';
import { DomAdapter } from '../../dom-adapter/dom-adapter';
import { ClrDragAndDropModule } from '../drag-and-drop.module';
import { ClrDragHandle } from '../drag-handle';
import { DragEventInterface, DragEventType } from '../interfaces/drag-event.interface';
import { DragEventListenerService } from '../providers/drag-event-listener.service';
import { MOCK_DRAG_EVENT_LISTENER_PROVIDER } from '../providers/drag-event-listener.service.mock';
import { DragHandleRegistrarService } from '../providers/drag-handle-registrar.service';
import { DraggableSnapshotService } from '../providers/draggable-snapshot.service';
import { GlobalDragModeService } from '../providers/global-drag-mode.service';

import { ClrDraggable } from './draggable';

export default function(): void {
  describe('With Custom Draggable Ghost and Handle', function() {
    let mockDragStartEventInt: DragEventInterface<any>;
    let mockDragEndEventInt: DragEventInterface<any>;

    beforeEach(function() {
      mockDragStartEventInt = { type: DragEventType.DRAG_START, dragPosition: { pageX: 11, pageY: 22 } };
      mockDragEndEventInt = { type: DragEventType.DRAG_END, dragPosition: { pageX: 77, pageY: 88 } };

      TestBed.configureTestingModule({
        imports: [ClrDragAndDropModule, ClrIconModule, NoopAnimationsModule],
        declarations: [CustomGhostAndHandleTest],
      });
      TestBed.overrideComponent(ClrDraggable, {
        set: {
          providers: [
            DomAdapter,
            DragHandleRegistrarService,
            DraggableSnapshotService,
            GlobalDragModeService,
            MOCK_DRAG_EVENT_LISTENER_PROVIDER,
          ],
        },
      });

      this.fixture = TestBed.createComponent(CustomGhostAndHandleTest);
      this.draggable = this.fixture.debugElement.query(By.directive(ClrDraggable));
      this.dragEventListener = this.draggable.injector.get(DragEventListenerService);
      this.dragHandleRegistrar = this.draggable.injector.get(DragHandleRegistrarService);
      this.fixture.detectChanges();
    });

    afterEach(function() {
      this.fixture.destroy();
    });

    it('should have its nested handle as drag handle if it is present', function() {
      this.dragHandle = this.fixture.debugElement.query(By.directive(ClrDragHandle));
      expect(this.draggable.nativeElement.classList.contains('drag-handle')).toBeFalsy();
      expect(this.dragHandle.nativeElement.classList.contains('drag-handle')).toBeTruthy();
      expect(this.dragEventListener.draggableEl).toBe(this.dragHandle.nativeElement);
      expect(this.dragHandleRegistrar.customHandleEl).toBe(this.dragHandle.nativeElement);
    });

    it('should project custom ghost on drag start', function() {
      this.dragEventListener.dragStarted.next(mockDragStartEventInt);
      expect(this.fixture.nativeElement.querySelectorAll('clr-draggable-ghost').length).toBe(1);
      const draggableGhost = this.fixture.nativeElement.querySelector('clr-draggable-ghost');
      expect(draggableGhost.querySelectorAll('clr-icon').length).toBe(1);
    });

    it('should remove ghost on drag end', function() {
      this.dragEventListener.dragStarted.next(mockDragStartEventInt);
      expect(this.fixture.nativeElement.querySelectorAll('clr-draggable-ghost').length).toBe(1);
      this.dragEventListener.dragEnded.next(mockDragEndEventInt);
      expect(this.fixture.nativeElement.querySelectorAll('clr-draggable-ghost').length).toBe(0);
    });
  });
}

@Component({
  template: `<div clrDraggable>
                    Test
                    <clr-draggable-ghost *clrIfDragged>
                        <clr-icon shape="check"></clr-icon>
                    </clr-draggable-ghost>
                    <button clrDragHandle></button>
                </div>`,
})
class CustomGhostAndHandleTest {}
