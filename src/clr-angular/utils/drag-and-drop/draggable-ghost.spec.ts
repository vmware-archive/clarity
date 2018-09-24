/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { DomAdapter } from '../dom-adapter/dom-adapter';

import { ClrDraggableGhost } from './index';
import { ClrDragAndDropModule } from './drag-and-drop.module';
import { DragEventListenerService } from './providers/drag-event-listener.service';
import { MOCK_DRAG_EVENT_LISTENER_PROVIDER } from './providers/drag-event-listener.service.mock';
import { DraggableSnapshotService } from './providers/draggable-snapshot.service';

export default function(): void {
  describe('ClrDraggableGhost', function() {
    describe('Without Wrapping ClrDraggable', function() {
      it('should throw an error with a message', function() {
        TestBed.configureTestingModule({
          declarations: [WithNoWrappingDraggable, ClrDraggableGhost],
          providers: [DomAdapter],
        });

        expect(function() {
          TestBed.createComponent(WithNoWrappingDraggable);
        }).toThrowError('The clr-draggable-ghost component can only be used inside of a clrDraggable directive.');
      });
    });

    describe('With Wrapping ClrDraggable', function() {
      beforeEach(function() {
        TestBed.configureTestingModule({
          imports: [ClrDragAndDropModule, NoopAnimationsModule],
          declarations: [WithWrappingDraggable],
          providers: [MOCK_DRAG_EVENT_LISTENER_PROVIDER, DomAdapter, DraggableSnapshotService],
        });

        this.fixture = TestBed.createComponent(WithWrappingDraggable);
        this.fixture.detectChanges();

        this.testComponent = this.fixture.componentInstance;
        this.draggableGhostDebugElement = this.fixture.debugElement.query(By.directive(ClrDraggableGhost));
        this.ghostElement = this.draggableGhostDebugElement.nativeElement;
        this.dragEventListener = TestBed.get(DragEventListenerService);
      });

      afterEach(function() {
        this.fixture.destroy();
      });

      it('should have draggable-ghost class', function() {
        expect(this.ghostElement.classList.contains('draggable-ghost')).toBeTruthy();
      });

      it('should appear on the first drag move event', function() {
        const mockDragMoveEvent = { dragPosition: { pageX: 33, pageY: 44 } };
        this.dragEventListener.dragMoved.next(mockDragMoveEvent);

        expect(this.ghostElement.style.left).toBe(`${mockDragMoveEvent.dragPosition.pageX}px`);
        expect(this.ghostElement.style.top).toBe(`${mockDragMoveEvent.dragPosition.pageY}px`);
        expect(this.ghostElement.style.visibility).toBe('visible');
      });

      it('should be dragged from mouse position on page', function() {
        const mockDragMoveEvent1 = { dragPosition: { pageX: 120, pageY: 60 } };
        const mockDragMoveEvent2 = { dragPosition: { pageX: 180, pageY: 120 } };

        this.dragEventListener.dragMoved.next(mockDragMoveEvent1);
        expect(this.ghostElement.style.left).toBe(`${mockDragMoveEvent1.dragPosition.pageX}px`);
        expect(this.ghostElement.style.top).toBe(`${mockDragMoveEvent1.dragPosition.pageY}px`);

        this.dragEventListener.dragMoved.next(mockDragMoveEvent2);
        expect(this.ghostElement.style.left).toBe(`${mockDragMoveEvent2.dragPosition.pageX}px`);
        expect(this.ghostElement.style.top).toBe(`${mockDragMoveEvent2.dragPosition.pageY}px`);
      });
    });

    describe('With Wrapping ClrDraggable And Draggable Snapshot', function() {
      const mockDraggable = document.createElement('div');
      document.body.appendChild(mockDraggable);

      mockDraggable.style.position = 'absolute';
      mockDraggable.style.width = '100px';
      mockDraggable.style.height = '50px';
      mockDraggable.style.left = '90px';
      mockDraggable.style.top = '45px';

      const mockDragStartEvent = { dragPosition: { pageX: 110, pageY: 55 } };

      beforeEach(function() {
        TestBed.configureTestingModule({
          imports: [ClrDragAndDropModule, NoopAnimationsModule],
          declarations: [WithWrappingDraggable],
          providers: [MOCK_DRAG_EVENT_LISTENER_PROVIDER, DomAdapter, DraggableSnapshotService],
        });

        this.draggableSnapshot = TestBed.get(DraggableSnapshotService);
        this.draggableSnapshot.capture(mockDraggable, mockDragStartEvent);

        this.fixture = TestBed.createComponent(WithWrappingDraggable);
        this.fixture.detectChanges();

        this.draggableGhostDebugElement = this.fixture.debugElement.query(By.directive(ClrDraggableGhost));
        this.ghostElement = this.draggableGhostDebugElement.nativeElement;
        this.dragEventListener = TestBed.get(DragEventListenerService);
      });

      afterEach(function() {
        this.fixture.destroy();
      });

      it('should appear on the first drag move event', function() {
        const mockDragMoveEvent = { dragPosition: { pageX: 33, pageY: 44 } };
        this.dragEventListener.dragMoved.next(mockDragMoveEvent);

        const offsetLeft = mockDragStartEvent.dragPosition.pageX - this.draggableSnapshot.clientRect.left;
        const offsetTop = mockDragStartEvent.dragPosition.pageY - this.draggableSnapshot.clientRect.top;

        expect(this.ghostElement.style.left).toBe(`${mockDragMoveEvent.dragPosition.pageX - offsetLeft}px`);
        expect(this.ghostElement.style.top).toBe(`${mockDragMoveEvent.dragPosition.pageY - offsetTop}px`);
        expect(this.ghostElement.style.visibility).toBe('visible');
      });

      it('should be dragged from its first drag position on the draggable if draggable state is registered', function() {
        const mockDragMoveEvent1 = { dragPosition: { pageX: 120, pageY: 60 } };

        const offsetLeft = mockDragStartEvent.dragPosition.pageX - this.draggableSnapshot.clientRect.left;
        const offsetTop = mockDragStartEvent.dragPosition.pageY - this.draggableSnapshot.clientRect.top;

        const mockDragMoveEvent2 = { dragPosition: { pageX: 180, pageY: 120 } };

        this.dragEventListener.dragMoved.next(mockDragMoveEvent1);
        expect(this.ghostElement.style.left).toBe(`${mockDragMoveEvent1.dragPosition.pageX - offsetLeft}px`);
        expect(this.ghostElement.style.top).toBe(`${mockDragMoveEvent1.dragPosition.pageY - offsetTop}px`);

        this.dragEventListener.dragMoved.next(mockDragMoveEvent2);
        expect(this.ghostElement.style.left).toBe(`${mockDragMoveEvent2.dragPosition.pageX - offsetLeft}px`);
        expect(this.ghostElement.style.top).toBe(`${mockDragMoveEvent2.dragPosition.pageY - offsetTop}px`);
      });
    });
  });
}

@Component({ template: `<clr-draggable-ghost></clr-draggable-ghost>` })
class WithNoWrappingDraggable {}

@Component({ template: `<clr-draggable-ghost *ngIf="display"></clr-draggable-ghost>` })
class WithWrappingDraggable {
  display = true;
}
