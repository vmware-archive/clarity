/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { ArrowKeyDirection } from './arrow-key-direction.enum';
import { FOCUS_SERVICE_PROVIDER, FocusService } from './focus.service';
import { FocusableItem } from './focusable-item/focusable-item';
import { MockFocusableItem } from './focusable-item/focusable-item.mock';

@Component({
  selector: 'simple-host',
  template: '',
  providers: [FOCUS_SERVICE_PROVIDER],
})
class SimpleHost {}

@Component({
  template: '<simple-host></simple-host>',
  providers: [FOCUS_SERVICE_PROVIDER],
})
class NestedHost {}

interface TestContext {
  focusService: FocusService;
}

export default function (): void {
  describe('Focus service', function () {
    describe('FOCUS_SERVICE_PROVIDER', function () {
      it('declares itself as a FocusService provider', function () {
        TestBed.configureTestingModule({ declarations: [SimpleHost] });
        const fixture = TestBed.createComponent(SimpleHost);
        expect(fixture.debugElement.injector.get(FocusService, null)).not.toBeNull();
      });

      it('creates a single instance for nested components declaring it as a provider', function () {
        TestBed.configureTestingModule({ declarations: [SimpleHost, NestedHost] });
        const fixture = TestBed.createComponent(NestedHost);
        const parentService = fixture.debugElement.injector.get(FocusService, null);
        const childService = fixture.debugElement.query(By.directive(SimpleHost)).injector.get(FocusService, null);
        expect(childService).toBe(parentService);
      });
    });

    describe('API', function () {
      beforeEach(function (this: TestContext) {
        // Because the service uses Angular's Renderer2, we need to use TestBed for this spec.
        TestBed.configureTestingModule({ declarations: [SimpleHost] });
        const fixture = TestBed.createComponent(SimpleHost);
        this.focusService = fixture.debugElement.injector.get(FocusService, null);
      });

      function setupContainer(context: TestContext) {
        const container = document.createElement('div');
        context.focusService.registerContainer(container);
        return container;
      }

      it('can be reset to a specific currently focused item', function (this: TestContext) {
        const item = new MockFocusableItem('');
        this.focusService.reset(item);
        expect(this.focusService.current).toBe(item);
      });

      it('can activate the currently focused item', function (this: TestContext) {
        const item = new MockFocusableItem('');
        const spy = spyOn(item, 'activate');
        this.focusService.reset(item);
        this.focusService.activateCurrent();
        expect(spy).toHaveBeenCalled();
      });

      it('calls the focus() method of the new focused item', function (this: TestContext) {
        setupContainer(this);
        const item = new MockFocusableItem('');
        const spy = spyOn(item, 'focus');
        this.focusService.moveTo(item);
        expect(spy).toHaveBeenCalled();
      });

      it('calls the blur() method of the previously focused item', function (this: TestContext) {
        setupContainer(this);
        const first = new MockFocusableItem('1');
        const second = new MockFocusableItem('2');
        this.focusService.reset(first);
        const spy = spyOn(first, 'blur');
        this.focusService.moveTo(second);
        expect(spy).toHaveBeenCalled();
      });

      it('can move in all directions', function (this: TestContext) {
        const spy = spyOn(this.focusService, 'moveTo');
        const current = new MockFocusableItem('center');
        for (const direction of Object.values(ArrowKeyDirection)) {
          const target = new MockFocusableItem(direction);
          current[direction] = target;
          this.focusService.reset(current);
          this.focusService.move(direction);
          expect(spy).toHaveBeenCalledWith(target);
        }
      });

      it('focuses on disabled item in navigation', function (this: TestContext) {
        const current = new MockFocusableItem('1');
        const nope = new MockFocusableItem('2');
        nope.disabled = true;
        current.down = nope;
        const spy = spyOn(this.focusService, 'moveTo');
        this.focusService.reset(current);
        this.focusService.move(ArrowKeyDirection.DOWN);
        expect(spy).toHaveBeenCalledWith(nope);
      });

      it('does not move focus to another item if current is undefined', function (this: TestContext) {
        const spy = spyOn(this.focusService, 'moveTo');
        const result = this.focusService.move(ArrowKeyDirection.DOWN);
        expect(spy).not.toHaveBeenCalled();
        expect(result).toBe(false);
      });

      it('waits for the next item if it is an Observable', function (this: TestContext) {
        const first = new MockFocusableItem('1');
        const second = new MockFocusableItem('2');
        const delayed = new Subject<FocusableItem>();
        first.down = delayed;
        const spy = spyOn(this.focusService, 'moveTo');
        this.focusService.reset(first);
        this.focusService.move(ArrowKeyDirection.DOWN);
        expect(spy).not.toHaveBeenCalled();
        delayed.next(second);
        expect(spy).toHaveBeenCalledWith(second);
      });

      it('should return boolean state dependend on the focus', function (this: TestContext) {
        const current = new MockFocusableItem('1');
        const down = new MockFocusableItem('2');
        current.down = down;
        this.focusService.reset(current);
        const result = this.focusService.move(ArrowKeyDirection.DOWN);
        const result2 = this.focusService.move(ArrowKeyDirection.DOWN);

        expect(result).toBe(true);
        expect(result2).toBe(false);
      });

      it('can listen to arrow keys on an element', function (this: TestContext) {
        const spy = spyOn(this.focusService, 'move');
        const el = document.createElement('div');
        this.focusService.listenToArrowKeys(el);
        el.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowUp' }));
        expect(spy).toHaveBeenCalledWith(ArrowKeyDirection.UP);
        el.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown' }));
        expect(spy).toHaveBeenCalledWith(ArrowKeyDirection.DOWN);
        el.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft' }));
        expect(spy).toHaveBeenCalledWith(ArrowKeyDirection.LEFT);
        el.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight' }));
        expect(spy).toHaveBeenCalledWith(ArrowKeyDirection.RIGHT);
      });

      it('makes a given container focusable', function (this: TestContext) {
        const container = setupContainer(this);
        expect(container.getAttribute('tabindex')).toBe('0');
      });

      it('moves when arrow keys are pressed on the container', function (this: TestContext) {
        const spy = spyOn(this.focusService, 'listenToArrowKeys');
        const container = setupContainer(this);
        expect(spy).toHaveBeenCalledWith(container);
      });

      it('activates the current item when pressing Enter on the container', function (this: TestContext) {
        const spy = spyOn(this.focusService, 'activateCurrent');
        const container = setupContainer(this);
        container.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
        expect(spy).toHaveBeenCalled();
      });

      it('activates the current item when pressing Space on the container', function (this: TestContext) {
        const spy = spyOn(this.focusService, 'activateCurrent');
        const container = setupContainer(this);
        container.dispatchEvent(new KeyboardEvent('keydown', { key: ' ' }));
        expect(spy).toHaveBeenCalled();
      });
    });
  });
}
