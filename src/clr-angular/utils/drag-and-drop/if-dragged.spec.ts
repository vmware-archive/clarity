/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, Directive, ViewContainerRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { ClrIfDragged } from './if-dragged';
import { DragEventListenerService } from './providers/drag-event-listener.service';
import { MOCK_DRAG_EVENT_LISTENER_PROVIDER } from './providers/drag-event-listener.service.mock';

export default function(): void {
  describe('ClrIfDragged', function() {
    describe('Without ClrDragEventListener', function() {
      it('should throw an error with a message', function() {
        TestBed.configureTestingModule({ declarations: [NoDragEventListener, ClrIfDragged] });

        expect(function() {
          this.fixture = TestBed.createComponent(NoDragEventListener);
        }).toThrowError('The *clrIfDragged directive can only be used inside of a clrDraggable directive.');
      });
    });
    describe('With ClrDragEventListener', function() {
      beforeEach(function() {
        TestBed.configureTestingModule({
          declarations: [IfDraggedTest, ClrIfDragged, MockVCRProvider],
          providers: [MOCK_DRAG_EVENT_LISTENER_PROVIDER],
        });

        this.fixture = TestBed.createComponent(IfDraggedTest);
        this.fixture.detectChanges();

        this.dragEventListener = TestBed.get(DragEventListenerService);
        this.testElement = this.fixture.nativeElement;
      });

      afterEach(function() {
        this.fixture.destroy();
      });

      it('should not display anything on normal state', function() {
        expect(this.testElement.textContent.trim()).toBe('');
      });

      it('should instantiate its template only during dragging', function() {
        // on dragstart event
        this.dragEventListener.dragStarted.next();
        expect(this.testElement.textContent.trim()).toBe('Test');

        // on dragend event
        this.dragEventListener.dragEnded.next();
        expect(this.testElement.textContent.trim()).toBe('');
      });

      it('should create its view as sibling to parent', function() {
        // on dragstart event
        this.dragEventListener.dragStarted.next();
        expect(this.testElement.textContent.trim()).toBe('Test');

        expect(this.fixture.nativeElement.childNodes.length).toBe(2);

        expect(this.fixture.nativeElement.childNodes[0].classList.contains('parent-vcr')).toBeTruthy();
        expect(this.fixture.nativeElement.childNodes[1].classList.contains('if-dragged')).toBeTruthy();
      });
    });
  });
}

@Directive({ selector: '[mockVCRProvider]' })
class MockVCRProvider {
  // tslint:disable-next-line
  constructor(private vcr: ViewContainerRef) {}
}
@Component({
  template: `<div mockVCRProvider class="parent-vcr"><span class="if-dragged" *clrIfDragged>Test</span></div>`,
})
class IfDraggedTest {}

@Component({ template: `<div *clrIfDragged>Test</div>` })
class NoDragEventListener {}
