/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { DomAdapter } from '../../dom-adapter/dom-adapter';
import { ClrDragAndDropModule } from '../drag-and-drop.module';
import { ClrDragEvent } from '../drag-event';
import { DragEventInterface, DragEventType } from '../interfaces/drag-event.interface';
import { DragEventListenerService } from '../providers/drag-event-listener.service';
import { MOCK_DRAG_EVENT_LISTENER_PROVIDER } from '../providers/drag-event-listener.service.mock';
import { DragHandleRegistrarService } from '../providers/drag-handle-registrar.service';
import { DraggableSnapshotService } from '../providers/draggable-snapshot.service';
import { GlobalDragModeService } from '../providers/global-drag-mode.service';
import { ClrDraggable } from './draggable';

export default function(): void {
  describe('Basic Draggable', function() {
    let mockDragStartEventInt: DragEventInterface<any>;
    let mockDragMoveEventInt: DragEventInterface<any>;
    let mockDragEndEventInt: DragEventInterface<any>;

    let mockDragStartEventExt: ClrDragEvent<any>;
    let mockDragMoveEventExt: ClrDragEvent<any>;
    let mockDragEndEventExt: ClrDragEvent<any>;

    beforeEach(function() {
      mockDragStartEventInt = { type: DragEventType.DRAG_START, dragPosition: { pageX: 11, pageY: 22 } };
      mockDragMoveEventInt = { type: DragEventType.DRAG_MOVE, dragPosition: { pageX: 33, pageY: 44 } };
      mockDragEndEventInt = { type: DragEventType.DRAG_END, dragPosition: { pageX: 77, pageY: 88 } };

      mockDragStartEventExt = new ClrDragEvent(mockDragStartEventInt);
      mockDragMoveEventExt = new ClrDragEvent(mockDragMoveEventInt);
      mockDragEndEventExt = new ClrDragEvent(mockDragEndEventInt);

      TestBed.configureTestingModule({
        imports: [ClrDragAndDropModule, NoopAnimationsModule],
        declarations: [BasicDraggableTest],
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
      this.fixture = TestBed.createComponent(BasicDraggableTest);
      this.testComponent = this.fixture.componentInstance;
      this.draggable = this.fixture.debugElement.query(By.directive(ClrDraggable));
      this.dragEventListener = this.draggable.injector.get(DragEventListenerService);
      this.dragHandleRegistrar = this.draggable.injector.get(DragHandleRegistrarService);
      this.globalDragMode = this.draggable.injector.get(GlobalDragModeService);
      this.fixture.detectChanges();
    });

    afterEach(function() {
      this.fixture.destroy();
    });

    it('should have draggable class', function() {
      expect(this.draggable.nativeElement.classList.contains('draggable')).toBeTruthy();
    });

    it('should emit event on drag start', function() {
      this.dragEventListener.dragStarted.next(mockDragStartEventInt);
      expect(this.testComponent.dragStartEvent).toEqual(mockDragStartEventExt);
      expect(this.testComponent.dragMoveEvent).toBeUndefined();
      expect(this.testComponent.dragEndEvent).toBeUndefined();
    });

    it('should add being-dragged class on drag start', function() {
      this.dragEventListener.dragStarted.next(mockDragStartEventInt);
      this.fixture.detectChanges();
      expect(this.draggable.nativeElement.classList.contains('being-dragged')).toBeTruthy();
    });

    it('should call GlobalDragMode.enter() on drag start', function() {
      spyOn(this.globalDragMode, 'enter');
      this.dragEventListener.dragStarted.next(mockDragStartEventInt);
      expect(this.testComponent.dragStartEvent).toEqual(mockDragStartEventExt);
      expect(this.globalDragMode.enter).toHaveBeenCalled();
    });

    it('should emit event on drag move', function() {
      this.dragEventListener.dragMoved.next(mockDragMoveEventInt);
      expect(this.testComponent.dragStartEvent).toBeUndefined();
      expect(this.testComponent.dragMoveEvent).toEqual(mockDragMoveEventExt);
      expect(this.testComponent.dragEndEvent).toBeUndefined();
    });

    it('should emit event on drag end', function() {
      this.dragEventListener.dragEnded.next(mockDragEndEventExt);
      expect(this.testComponent.dragStartEvent).toBeUndefined();
      expect(this.testComponent.dragMoveEvent).toBeUndefined();
      expect(this.testComponent.dragEndEvent).toEqual(mockDragEndEventExt);
    });

    it('should remove being-dragged class on drag end', function() {
      this.dragEventListener.dragEnded.next(mockDragEndEventExt);
      this.fixture.detectChanges();
      expect(this.draggable.nativeElement.classList.contains('being-dragged')).toBeFalsy();
    });

    it('should call GlobalDragMode.exit() on drag end', function() {
      spyOn(this.globalDragMode, 'exit');
      this.dragEventListener.dragEnded.next(mockDragEndEventExt);
      expect(this.globalDragMode.exit).toHaveBeenCalled();
    });

    it('should have its own element as default drag handle when there is no nested drag handle', function() {
      expect(this.draggable.nativeElement.classList.contains('drag-handle')).toBeTruthy();
      expect(this.dragEventListener.draggableEl).toBe(this.draggable.nativeElement);
      expect(this.dragHandleRegistrar.defaultHandleEl).toBe(this.draggable.nativeElement);
      expect(this.dragHandleRegistrar.customHandleEl).toBeUndefined();
    });

    it('should instantiate cloned version of draggable as ghost on drag start', function() {
      this.dragEventListener.dragStarted.next(mockDragStartEventInt);
      const draggableGhost = this.fixture.nativeElement.querySelectorAll('clr-draggable-ghost');
      expect(draggableGhost.length).toBe(1);
      expect(this.draggable.nativeElement.nextSibling).toBe(
        draggableGhost[0],
        `The default ghost appears next to the draggable element.`
      );
      expect(draggableGhost[0].querySelectorAll('.draggable').length).toBe(1);
      expect(draggableGhost[0].querySelector('.draggable').textContent).toBe('Test');
    });

    it('should create ghost as sibling', function() {
      this.dragEventListener.dragStarted.next(mockDragStartEventInt);
      const draggable = this.fixture.nativeElement.querySelector('.draggable');
      const draggableGhost = this.fixture.nativeElement.querySelector('clr-draggable-ghost');
      expect(draggable.nextSibling).toBe(draggableGhost);
    });

    it('should remove ghost on drag end', function() {
      this.dragEventListener.dragStarted.next(mockDragStartEventInt);
      expect(this.fixture.nativeElement.querySelectorAll('clr-draggable-ghost').length).toBe(1);
      this.dragEventListener.dragEnded.next(mockDragEndEventExt);
      expect(this.fixture.nativeElement.querySelectorAll('clr-draggable-ghost').length).toBe(0);
    });
  });
}

@Component({
  template: `<div clrDraggable (clrDragStart)="dragStartEvent=$event;" (clrDragMove)="dragMoveEvent=$event;" (clrDragEnd)="dragEndEvent=$event;">Test</div>`,
})
class BasicDraggableTest {
  dragStartEvent: ClrDragEvent<any>;
  dragMoveEvent: ClrDragEvent<any>;
  dragEndEvent: ClrDragEvent<any>;
}
