/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { isObservable, Observable } from 'rxjs';
import { ClrPopoverToggleService } from '../../../utils/popover/providers/popover-toggle.service';
import { ArrowKeyDirection } from '../../../utils/focus/arrow-key-direction.enum';
import { FOCUS_SERVICE_PROVIDER, FocusService } from '../../../utils/focus/focus.service';
import { FocusableItem } from '../../../utils/focus/focusable-item/focusable-item';
import { MockFocusableItem } from '../../../utils/focus/focusable-item/focusable-item.mock';
import { Linkers } from '../../../utils/focus/focusable-item/linkers';
import { UNIQUE_ID } from '../../../utils/id-generator/id-generator.service';
import { DROPDOWN_FOCUS_HANDLER_PROVIDER, DropdownFocusHandler } from './dropdown-focus-handler.service';
// eslint-disable-next-line id-blacklist
import any = jasmine.any;

@Component({
  selector: 'simple-host',
  template: '',
  providers: [ClrPopoverToggleService, FOCUS_SERVICE_PROVIDER, DROPDOWN_FOCUS_HANDLER_PROVIDER],
})
class SimpleHost {}

@Component({
  template: '<simple-host></simple-host>',
  providers: [ClrPopoverToggleService, FOCUS_SERVICE_PROVIDER, DROPDOWN_FOCUS_HANDLER_PROVIDER],
})
class NestedHost {}

interface TestContext {
  fixture: ComponentFixture<SimpleHost | NestedHost>;
  toggleService: ClrPopoverToggleService;
  focusService: FocusService;
  focusHandler: DropdownFocusHandler;
  trigger: HTMLElement;
  container: HTMLElement;
  outside: HTMLElement;
  children: FocusableItem[];
}

export default function (): void {
  describe('DropdownFocusHandler', function () {
    describe('basic dropdown', function () {
      beforeEach(function (this: TestContext) {
        TestBed.configureTestingModule({ declarations: [SimpleHost] });
        this.fixture = TestBed.createComponent(SimpleHost);
        this.toggleService = this.fixture.debugElement.injector.get(ClrPopoverToggleService);
        this.focusService = this.fixture.debugElement.injector.get(FocusService);
        this.focusHandler = this.fixture.debugElement.injector.get(DropdownFocusHandler, null);
        this.trigger = document.createElement('button');
        this.container = document.createElement('div');
        this.outside = document.createElement('button');
        // We need the elements in the DOM to be able to focus them
        document.body.append(this.trigger, this.container, this.outside);
        this.children = new Array(3).fill(0).map((_, i) => new MockFocusableItem(`${i}`));
      });

      afterEach(function (this: TestContext) {
        document.body.removeChild(this.trigger);
        document.body.removeChild(this.container);
        document.body.removeChild(this.outside);
      });

      it('declares a UNIQUE_ID provider', function (this: TestContext) {
        expect(this.fixture.debugElement.injector.get(UNIQUE_ID, 'not_found')).not.toBe('not_found');
      });

      it('declares a DropdownFocusHandler provider', function (this: TestContext) {
        expect(this.focusHandler).not.toBeNull();
      });

      it('aliases the DropdownFocusHandler as a FocusableItem', function (this: TestContext) {
        expect(this.fixture.debugElement.injector.get(FocusableItem, null)).toBe(this.focusHandler);
      });

      it('toggles open when arrow up or down on the trigger', function (this: TestContext) {
        fakeAsync(function (this: TestContext) {
          expect(this.toggleService.open).toBeFalsy();
          this.focusHandler.trigger = this.trigger;

          this.focusHandler.trigger.dispatchEvent(new KeyboardEvent('keydown', { key: 'arrowup' }));
          expect(this.toggleService.open).toBeTruthy();

          //once open, the up/down arrow keys control the focus on menu items, so we close again for the next test
          this.toggleService.open = false;
          tick();
          expect(this.toggleService.open).toBeFalsy();

          this.focusHandler.trigger.dispatchEvent(new KeyboardEvent('keydown', { key: 'arrowdown' }));
          expect(this.toggleService.open).toBeTruthy();
        });
      });

      it('listens to arrow keys on the trigger', function (this: TestContext) {
        const spy = spyOn(this.focusService, 'listenToArrowKeys');
        this.focusHandler.trigger = this.trigger;
        expect(spy).toHaveBeenCalledWith(this.trigger);
      });

      it('proxies focus() and blur() to the trigger', function (this: TestContext) {
        this.focusHandler.trigger = this.trigger;
        expect(document.activeElement).not.toBe(this.trigger);
        this.focusHandler.focus();
        expect(document.activeElement).toBe(this.trigger);
        this.focusHandler.blur();
        expect(document.activeElement).not.toBe(this.trigger);
      });

      it('clicks on the trigger when activated', function (this: TestContext) {
        let clicks = 0;
        this.trigger.addEventListener('click', () => clicks++);
        this.focusHandler.trigger = this.trigger;
        expect(clicks).toBe(0);
        this.focusHandler.activate();
        expect(clicks).toBe(1);
        this.focusHandler.activate();
        expect(clicks).toBe(2);
      });

      it('registers the container to the FocusService', function (this: TestContext) {
        const spy = spyOn(this.focusService, 'registerContainer');
        this.focusHandler.container = this.container;
        expect(spy).toHaveBeenCalledWith(this.container);
      });

      it('sets a tabindex of 0 on the container', function (this: TestContext) {
        this.focusHandler.container = this.container;
        expect(this.container.getAttribute('tabindex')).toBe('0');
      });

      it('closes the dropdown when the container is blurred', function (this: TestContext) {
        this.focusHandler.container = this.container;
        this.toggleService.open = true;
        this.container.focus();
        expect(this.toggleService.open).toBeTruthy();
        this.container.blur();
        expect(this.toggleService.open).toBeFalsy();
      });

      it('blurs the focused items when container is focused and blurred', function (this: TestContext) {
        this.focusHandler.container = this.container;
        this.focusHandler.addChildren(this.children);
        this.toggleService.open = true;

        const spyBlur = spyOn(this.children[0], 'blur');
        this.container.focus();
        expect(spyBlur).not.toHaveBeenCalled();

        this.container.blur();
        expect(spyBlur).toHaveBeenCalled();
      });

      it('puts focus back on the trigger when the dropdown becomes closed', function (this: TestContext) {
        this.focusHandler.trigger = this.trigger;
        this.focusHandler.container = this.container;
        expect(document.activeElement).not.toBe(this.trigger);
        this.toggleService.open = true;
        this.toggleService.open = false;
        expect(document.activeElement).toBe(this.trigger);
      });

      it('does not prevent moving focus to a different part of the page', fakeAsync(function (this: TestContext) {
        this.focusHandler.trigger = this.trigger;
        this.focusHandler.container = this.container;
        this.toggleService.open = true;
        tick();
        this.outside.focus();
        expect(document.activeElement).toBe(this.outside);
      }));

      it('links received children vertically', function (this: TestContext) {
        const spy = spyOn(Linkers, 'linkVertical');
        this.focusHandler.addChildren(this.children);
        expect(spy).toHaveBeenCalledWith(this.children);
      });

      it('points down to the first child', function (this: TestContext) {
        let down: FocusableItem;
        this.focusHandler.down.subscribe(child => (down = child));
        this.focusHandler.addChildren(this.children);
        expect(down).toBe(this.children[0]);
      });

      it('points up to the last child', function (this: TestContext) {
        let up: FocusableItem;
        this.focusHandler.up.subscribe(child => (up = child));
        this.focusHandler.addChildren(this.children);
        expect(up).toBe(this.children[this.children.length - 1]);
      });

      it('does not point left or right', function (this: TestContext) {
        this.focusHandler.addChildren(this.children);
        expect((this.focusHandler as FocusableItem).left).toBeUndefined();
        expect((this.focusHandler as FocusableItem).right).toBeUndefined();
      });

      it('points correctly even if children have been added early', function (this: TestContext) {
        let down: FocusableItem;
        this.focusHandler.addChildren(this.children);
        this.focusHandler.down.subscribe(child => (down = child));
        expect(down).toBe(this.children[0]);
      });

      it('properly resets children', function (this: TestContext) {
        this.focusHandler.addChildren(this.children);
        this.focusHandler.resetChildren();
        this.focusHandler.down.subscribe(() => fail('Expected no pointer down.'));
        this.focusHandler.up.subscribe(() => fail('Expected no pointer up.'));
      });

      it('opens the dropdown when trying to go down or up', function (this: TestContext) {
        expect(this.toggleService.open).toBeFalsy();
        this.focusHandler.down.subscribe(() => null);
        expect(this.toggleService.open).toBeTruthy();
        this.toggleService.open = false;
        this.focusHandler.up.subscribe(() => null);
        expect(this.toggleService.open).toBeTruthy();
      });

      it('moves to the first child when opened with a click', function (this: TestContext) {
        fakeAsync(function (this: TestContext) {
          this.focusHandler.addChildren(this.children);
          const moveTo = spyOn(this.focusService, 'moveTo');
          const move = spyOn(this.focusService, 'move');
          this.toggleService.toggleWithEvent({});
          tick();

          // First we move to the clicked item, which is the trigger,
          expect(moveTo).toHaveBeenCalledWith(this.focusHandler);
          // then we move down to the first item,
          expect(move).toHaveBeenCalledWith(ArrowKeyDirection.DOWN);
          // but maybe that's too detailed for this unit test? It's just the easiest way to test it right now.
        });
      });
    });

    describe('nested dropdown', function () {
      beforeEach(function (this: TestContext) {
        TestBed.configureTestingModule({ declarations: [SimpleHost, NestedHost] });
        this.fixture = TestBed.createComponent(NestedHost);
        const nestedInjector = this.fixture.debugElement.query(By.directive(SimpleHost)).injector;
        this.toggleService = nestedInjector.get(ClrPopoverToggleService);
        this.focusService = nestedInjector.get(FocusService);
        this.focusHandler = nestedInjector.get(DropdownFocusHandler, null);
        this.trigger = document.createElement('button');
        this.container = document.createElement('div');
        // We need the elements in the DOM to be able to focus them
        document.body.append(this.trigger, this.container);
        this.children = new Array(3).fill(0).map((_, i) => new MockFocusableItem(`${i}`));
      });

      afterEach(function (this: TestContext) {
        document.body.removeChild(this.trigger);
        document.body.removeChild(this.container);
      });

      it('calls native elements focus() and blur when focused and blurred', function (this: TestContext) {
        this.focusHandler.trigger = this.trigger;
        this.focusHandler.focus();
        expect(document.activeElement).toBe(this.trigger);
        this.focusHandler.blur();
        expect(document.activeElement).not.toBe(this.trigger);
      });

      it('does not register the container to the FocusService', function (this: TestContext) {
        const spy = spyOn(this.focusService, 'registerContainer');
        this.focusHandler.container = this.container;
        expect(spy).not.toHaveBeenCalled();
      });

      it('does not focus on the container when the dropdown becomes open', fakeAsync(function (this: TestContext) {
        this.focusHandler.container = this.container;
        this.toggleService.open = true;
        // This specific focusing action is asynchronous so we have to tick
        tick();
        expect(document.activeElement).not.toBe(this.container);
      }));

      it('does not focus on the trigger when the dropdown becomes closed', function (this: TestContext) {
        this.focusHandler.trigger = this.trigger;
        this.focusHandler.container = this.container;
        this.toggleService.open = true;
        this.toggleService.open = false;
        expect(document.activeElement).not.toBe(this.trigger);
      });

      it('points right to the first child', function (this: TestContext) {
        let right: FocusableItem;
        this.focusHandler.right.subscribe(child => (right = child));
        this.focusHandler.addChildren(this.children);
        expect(right).toBe(this.children[0]);
      });

      it('does not point up, down or left', function (this: TestContext) {
        this.focusHandler.addChildren(this.children);
        expect((this.focusHandler as FocusableItem).up).toBeUndefined();
        expect((this.focusHandler as FocusableItem).down).toBeUndefined();
        expect((this.focusHandler as FocusableItem).left).toBeUndefined();
      });

      it('links received children back to the trigger', function (this: TestContext) {
        const spy = spyOn(Linkers, 'linkParent');
        this.focusHandler.addChildren(this.children);
        expect(spy).toHaveBeenCalledWith(this.children, any(Observable), ArrowKeyDirection.LEFT);
      });

      it('closes the dropdown when trying to go back to the trigger', function (this: TestContext) {
        this.focusHandler.addChildren(this.children);
        this.toggleService.open = true;
        const back = this.children[0].left;
        expect(isObservable(back)).toBeTruthy();
        (back as Observable<FocusableItem>).subscribe(() => null);
        expect(this.toggleService.open).toBeFalsy();
      });

      it('moves to the first child when opened with a click', function (this: TestContext) {
        fakeAsync(function (this: TestContext) {
          this.focusHandler.addChildren(this.children);
          const moveTo = spyOn(this.focusService, 'moveTo');
          const move = spyOn(this.focusService, 'move');
          this.toggleService.toggleWithEvent({});
          expect(moveTo).toHaveBeenCalledWith(this.focusHandler);
          expect(move).toHaveBeenCalledWith(ArrowKeyDirection.RIGHT);
        });
      });
    });
  });
}
