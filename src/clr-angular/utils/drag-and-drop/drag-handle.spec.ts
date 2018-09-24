/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ClrDragHandle } from './drag-handle';
import { DragHandleRegistrarService } from './providers/drag-handle-registrar.service';
import { MOCK_DRAG_HANDLE_REGISTRAR_PROVIDER } from './providers/drag-handle-registrar.service.mock';

export default function(): void {
  describe('ClrDragHandle', function() {
    describe('Without ClrDragHandleRegistrar', function() {
      it('should throw an error with a message', function() {
        TestBed.configureTestingModule({ declarations: [NoDragHandleRegistrar, ClrDragHandle] });

        expect(function() {
          this.fixture = TestBed.createComponent(NoDragHandleRegistrar);
        }).toThrowError('The clrDragHandle directive can only be used inside of a clrDraggable directive.');
      });
    });
    describe('With ClrDragHandleRegistrar', function() {
      beforeEach(function() {
        TestBed.configureTestingModule({
          declarations: [ClrDragHandle, DragHandleTest],
          providers: [MOCK_DRAG_HANDLE_REGISTRAR_PROVIDER],
        });

        this.fixture = TestBed.createComponent(DragHandleTest);
        this.testComponent = this.fixture.componentInstance;
        this.fixture.detectChanges();

        this.dragHandleRegistrar = TestBed.get(DragHandleRegistrarService);
        this.testElement = this.fixture.nativeElement;
      });

      afterEach(function() {
        this.fixture.destroy();
      });

      it('should register its element as a custom drag handle', function() {
        const dragHandleEl = this.fixture.debugElement.query(By.directive(ClrDragHandle)).nativeElement;
        expect(this.dragHandleRegistrar.customHandle).toBe(dragHandleEl);
      });

      it('should unregister its element if it gets removed', function() {
        this.testComponent.display = false;
        this.fixture.detectChanges();
        expect(this.dragHandleRegistrar.customHandle).toBeUndefined();
      });
    });
  });
}

@Component({ template: `<div *ngIf="display" clrDragHandle>Test</div>` })
class DragHandleTest {
  display = true;
}

@Component({ template: `<div clrDragHandle>Test</div>` })
class NoDragHandleRegistrar {}
