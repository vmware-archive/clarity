/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ClrDragAndDropModule } from '../drag-and-drop.module';
import { ClrDragHandle } from '../drag-handle';
import { DragEventListenerService } from '../providers/drag-event-listener.service';
import { DragHandleRegistrarService } from '../providers/drag-handle-registrar.service';

import { ClrDraggable } from './draggable';

export default function(): void {
  describe('With ClrDragHandle', function() {
    beforeEach(function() {
      TestBed.configureTestingModule({ imports: [ClrDragAndDropModule], declarations: [CustomHandleTest] });

      this.fixture = TestBed.createComponent(CustomHandleTest);
      this.testComponent = this.fixture.componentInstance;
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
  });
}

@Component({ template: `<div clrDraggable><button clrDragHandle></button></div>` })
class CustomHandleTest {}
