/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
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
import { DragEventInterface, DragEventType } from '../interfaces/drag-event.interface';
import { DragEventListenerService } from '../providers/drag-event-listener.service';
import { MOCK_DRAG_EVENT_LISTENER_PROVIDER } from '../providers/drag-event-listener.service.mock';
import { DragHandleRegistrarService } from '../providers/drag-handle-registrar.service';
import { DraggableSnapshotService } from '../providers/draggable-snapshot.service';
import { GlobalDragModeService } from '../providers/global-drag-mode.service';

import { ClrDraggable } from './draggable';
import { generateDragPosition } from '../helpers.spec';

export default function(): void {
  // @TODO Waiting on Angular to fix https://github.com/angular/angular/issues/34066
  xdescribe('With Custom Draggable Ghost', function() {
    let mockDragStartEventInt: DragEventInterface<any>;
    let mockDragEndEventInt: DragEventInterface<any>;

    beforeEach(function() {
      mockDragStartEventInt = { type: DragEventType.DRAG_START, dragPosition: generateDragPosition([5, 10], [6, 11]) };
      mockDragEndEventInt = { type: DragEventType.DRAG_END, dragPosition: generateDragPosition([5, 10], [77, 88]) };

      TestBed.configureTestingModule({
        imports: [ClrDragAndDropModule, ClrIconModule, NoopAnimationsModule],
        declarations: [CustomGhostTest],
      });
      TestBed.overrideDirective(ClrDraggable, {
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

      this.fixture = TestBed.createComponent(CustomGhostTest);
      this.draggable = this.fixture.debugElement.query(By.directive(ClrDraggable));
      this.dragEventListener = this.draggable.injector.get(DragEventListenerService);
      this.fixture.detectChanges();
    });

    afterEach(function() {
      this.fixture.destroy();
    });

    it('should project custom ghost on drag start', function() {
      this.dragEventListener.dragStarted.next(mockDragStartEventInt);
      const draggableGhosts = this.fixture.nativeElement.querySelectorAll('clr-draggable-ghost');
      expect(draggableGhosts.length).toBe(1);
      expect(draggableGhosts[0].querySelectorAll('clr-icon').length).toBe(1);
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
  template: `<div clrDraggable>Test
            <clr-draggable-ghost *clrIfDragged>
                <clr-icon shape="check"></clr-icon>
            </clr-draggable-ghost>
        </div>
    `,
})
class CustomGhostTest {}
