/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DragAndDropEventBusService } from './drag-and-drop-event-bus.service';
import { DragEventListenerService } from './drag-event-listener.service';
import { MOCK_DRAG_EVENT_LISTENER_PROVIDER } from './drag-event-listener.service.mock';
import { DragHandleRegistrarService } from './drag-handle-registrar.service';

export default function(): void {
  describe('Drag Handle Registrar', function() {
    let fixture: ComponentFixture<any>;

    const draggableEl = document.createElement('div') as HTMLDivElement;
    const customHandleEl = document.createElement('button') as HTMLButtonElement;

    // Providers
    let dragHandleRegistrar: any;
    let dragEventListener: any;

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [DragHandleTestComponent],
        providers: [DragAndDropEventBusService],
      });
      fixture = TestBed.createComponent(DragHandleTestComponent);
      dragHandleRegistrar = fixture.debugElement.injector.get(DragHandleRegistrarService);
      dragEventListener = fixture.debugElement.injector.get(DragEventListenerService);
    });

    afterEach(() => {
      fixture.destroy();
    });

    it('registers element as default handle on assignment', function() {
      dragHandleRegistrar.defaultHandleEl = draggableEl;
      expect(dragEventListener.draggableEl).toBe(draggableEl);
      expect(draggableEl.getAttribute('hasListener')).toBeTruthy();
      expect(draggableEl.classList.contains('drag-handle')).toBeTruthy();
    });

    it('registers custom element as handle', function() {
      dragHandleRegistrar.registerCustomHandle(customHandleEl);

      expect(dragHandleRegistrar.customHandleEl).toBe(customHandleEl);
      expect(dragEventListener.draggableEl).toBe(customHandleEl);

      expect(customHandleEl.getAttribute('hasListener')).toBeTruthy();
      expect(customHandleEl.classList.contains('drag-handle')).toBeTruthy();
    });

    it('registers custom element as drag handle after default handle is set', function() {
      dragHandleRegistrar.defaultHandleEl = draggableEl;
      dragHandleRegistrar.registerCustomHandle(customHandleEl);
      // Once custom handle gets registered, listeners and drag styles should be removed from default element.
      expect(draggableEl.getAttribute('hasListener')).toBeFalsy();
      expect(draggableEl.classList.contains('drag-handle')).toBeFalsy();

      expect(dragHandleRegistrar.customHandleEl).toBe(customHandleEl);
      expect(dragEventListener.draggableEl).toBe(customHandleEl);

      expect(customHandleEl.getAttribute('hasListener')).toBeTruthy();
      expect(customHandleEl.classList.contains('drag-handle')).toBeTruthy();
    });

    it('unregisters custom handle', function() {
      dragHandleRegistrar.registerCustomHandle(customHandleEl);
      expect(dragHandleRegistrar.customHandleEl).toBe(customHandleEl);
      expect(customHandleEl.getAttribute('hasListener')).toBeTruthy();
      expect(customHandleEl.classList.contains('drag-handle')).toBeTruthy();
      dragHandleRegistrar.unregisterCustomHandle();

      expect(dragHandleRegistrar.customHandleEl).toBeUndefined();
      expect(customHandleEl.getAttribute('hasListener')).toBeFalsy();
      expect(customHandleEl.classList.contains('drag-handle')).toBeFalsy();
    });

    it('unregisters custom handle and fall back to default handle if default handle is set before custom handle', function() {
      dragHandleRegistrar.defaultHandleEl = draggableEl;
      dragHandleRegistrar.registerCustomHandle(customHandleEl);
      dragHandleRegistrar.unregisterCustomHandle();
      expect(dragHandleRegistrar.customHandleEl).toBeUndefined();
      expect(dragEventListener.draggableEl).toBe(draggableEl);
      expect(draggableEl.getAttribute('hasListener')).toBeTruthy();
      expect(draggableEl.classList.contains('drag-handle')).toBeTruthy();
    });

    it('keeps custom element as drag handle even after default handle is set', function() {
      dragHandleRegistrar.registerCustomHandle(customHandleEl);
      dragHandleRegistrar.defaultHandleEl = draggableEl;

      expect(dragHandleRegistrar.customHandleEl).toBe(customHandleEl);
      expect(customHandleEl.getAttribute('hasListener')).toBeTruthy();
      expect(customHandleEl.classList.contains('drag-handle')).toBeTruthy();
    });

    it('unregisters custom handle and fall back to default handle if default handle is set after custom handle', function() {
      dragHandleRegistrar.registerCustomHandle(customHandleEl);
      dragHandleRegistrar.defaultHandleEl = draggableEl;
      dragHandleRegistrar.unregisterCustomHandle();
      expect(dragHandleRegistrar.customHandleEl).toBeUndefined();
      expect(dragEventListener.draggableEl).toBe(draggableEl);
      expect(draggableEl.getAttribute('hasListener')).toBeTruthy();
      expect(draggableEl.classList.contains('drag-handle')).toBeTruthy();
    });
  });
}

@Component({
  providers: [MOCK_DRAG_EVENT_LISTENER_PROVIDER, DragHandleRegistrarService], // Should be declared here in a component level, not in the TestBed because Renderer2 wouldn't be present
  template: '<div>Test</div>',
})
class DragHandleTestComponent {}
