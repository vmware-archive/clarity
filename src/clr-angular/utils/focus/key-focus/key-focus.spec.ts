/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ClrKeyFocus } from './key-focus';
import { Component, DebugElement, ViewChild } from '@angular/core';
import { ClrKeyFocusModule } from './key-focus.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: `
    <div *ngIf="open" clrKeyFocus [clrDirection]="direction" [clrFocusOnLoad]="focusOnLoad"
        clrItemSelector="button.btn" (clrFocusChange)="changed = true">
      <button class="btn">Button 1</button>
      <button class="btn">Button 2</button>
      <button class="btn">Button 3</button>
    </div>
  `,
})
class TestComponent {
  @ViewChild(ClrKeyFocus, { static: true })
  keyFocus: ClrKeyFocus;

  open: boolean = false;
  changed: boolean = false;
  direction: string = 'vertical';
  focusOnLoad = true;
}

let fixture: ComponentFixture<any>;
let component: TestComponent;

let directiveDebugElement: DebugElement;
let clarityDirective: ClrKeyFocus;
let clarityElement: HTMLElement;

const openMenu = () => {
  component.open = true;
  fixture.detectChanges();

  directiveDebugElement = fixture.debugElement.query(By.directive(ClrKeyFocus));
  clarityElement = directiveDebugElement.nativeElement;
  clarityDirective = directiveDebugElement.injector.get(ClrKeyFocus);
};

const keyPress = (key: string) => {
  clarityElement.dispatchEvent(new KeyboardEvent('keydown', { key: key }));
};

describe('KeyFocus directive', () => {
  describe('Typescript API', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [ClrKeyFocusModule],
        declarations: [TestComponent],
      });
      fixture = TestBed.createComponent(TestComponent);
      fixture.detectChanges();
      component = fixture.componentInstance;
    });

    it('read current position', () => {
      openMenu();
      expect(clarityDirective.current).toBe(0);
      keyPress('ArrowDown');
      expect(clarityDirective.current).toBe(1);
      keyPress('ArrowDown');
      expect(clarityDirective.current).toBe(2);
      keyPress('ArrowUp');
      expect(clarityDirective.current).toBe(1);
    });

    it('focus change notification', () => {
      openMenu();
      // Initial focus notification
      expect(component.changed).toBe(true);
      // Test with arrow
      keyPress('ArrowDown');
      expect(component.changed).toBe(true);
      // Test with position
      component.changed = false;
      clarityDirective.moveTo(0);
      expect(component.changed).toBe(true);
      // Test same position
      component.changed = false;
      clarityDirective.moveTo(0);
      expect(component.changed).toBe(false);
      // Test same position, forced
      component.changed = false;
      clarityDirective.moveTo(0, true);
      expect(component.changed).toBe(true);
      // Test arrow at border, no rotation
      component.changed = false;
      keyPress('ArrowUp');
      expect(component.changed).toBe(false);
    });

    it('does not notify if focus on load is turned off', () => {
      component.focusOnLoad = false;
      openMenu();
      expect(component.changed).toBe(false);
    });

    it('current value updates with keys', () => {
      openMenu();
      expect(clarityDirective.current).toBe(0);
      keyPress('End');
      expect(clarityDirective.current).toBe(2);
      keyPress('ArrowDown');
      expect(clarityDirective.current).toBe(2);
      keyPress('Home');
      expect(clarityDirective.current).toBe(0);
      keyPress('ArrowUp');
      expect(clarityDirective.current).toBe(0);
    });
  });

  describe('Template API', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [ClrKeyFocusModule],
        declarations: [TestComponent],
      });
      fixture = TestBed.createComponent(TestComponent);
      fixture.detectChanges();
      component = fixture.componentInstance;
    });

    it('current value updates with moveTo', () => {
      openMenu();
      expect(clarityDirective.current).toBe(0);
      clarityDirective.moveTo(2);
      expect(clarityDirective.current).toBe(2);
      clarityDirective.moveTo(0);
      expect(clarityDirective.current).toBe(0);
      clarityDirective.moveTo(-1);
      expect(clarityDirective.current).toBe(0);
      clarityDirective.moveTo(999);
      expect(clarityDirective.current).toBe(0);
    });

    it('set focus with mouse click', () => {
      openMenu();
      const savedFirst = document.activeElement;
      clarityDirective.moveTo(2);
      expect(savedFirst).not.toBe(document.activeElement);
      savedFirst.dispatchEvent(new KeyboardEvent('click'));
      expect(document.activeElement).not.toBe(savedFirst);
    });

    it('resolve position of menu item element', () => {
      openMenu();
      expect(clarityDirective.getPositionOf(document.activeElement as HTMLElement)).toBe(0);
      clarityDirective.moveTo(2);
      expect(clarityDirective.getPositionOf(document.activeElement as HTMLElement)).toBe(2);
    });
  });

  describe('View Basics', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [ClrKeyFocusModule],
        declarations: [TestComponent],
      });
      fixture = TestBed.createComponent(TestComponent);
      fixture.detectChanges();
      component = fixture.componentInstance;
    });

    it('should focus on load', () => {
      expect(document.activeElement.textContent).not.toBe('Button 1');
      openMenu();
      expect(document.activeElement.textContent).toBe('Button 1');
    });

    it('should not focus on load', () => {
      expect(document.activeElement.textContent).not.toBe('Button 1');
      component.focusOnLoad = false;
      openMenu();
      expect(document.activeElement.textContent).not.toBe('Button 1');
    });

    it('moves focus with home/end keys', () => {
      openMenu();
      expect(document.activeElement.textContent).toBe('Button 1');
      keyPress('End');
      expect(document.activeElement.textContent).toBe('Button 3');
      keyPress('Home');
      expect(document.activeElement.textContent).toBe('Button 1');
    });

    it('prevents focus rotation', () => {
      openMenu();
      expect(document.activeElement.textContent).toBe('Button 1');
      keyPress('ArrowUp');
      expect(document.activeElement.textContent).toBe('Button 1');
      keyPress('End');
      expect(document.activeElement.textContent).toBe('Button 3');
      keyPress('ArrowDown');
      expect(document.activeElement.textContent).toBe('Button 3');
    });

    describe('direction vertical', () => {
      it('moves focus with arrow up/down keys', () => {
        openMenu();
        expect(document.activeElement.textContent).toBe('Button 1');
        // Arrow down
        keyPress('ArrowDown');
        expect(document.activeElement.textContent).toBe('Button 2');
        // Make sure it's only ArrowDown/Up
        keyPress('ArrowRight');
        expect(document.activeElement.textContent).toBe('Button 2');
        keyPress('ArrowLeft');
        expect(document.activeElement.textContent).toBe('Button 2');
        // Arrow up
        keyPress('ArrowUp');
        expect(document.activeElement.textContent).toBe('Button 1');
      });
    });

    describe('direction horizontal', () => {
      beforeEach(() => {
        component.direction = 'horizontal';
      });

      it('move focus with arrow left/right keys', () => {
        openMenu();
        expect(document.activeElement.textContent).toBe('Button 1');
        // Arrow right
        keyPress('ArrowRight');
        expect(document.activeElement.textContent).toBe('Button 2');
        // Make sure it's only ArrowRight/Left
        keyPress('ArrowDown');
        expect(document.activeElement.textContent).toBe('Button 2');
        keyPress('ArrowUp');
        expect(document.activeElement.textContent).toBe('Button 2');
        // Arrow up
        keyPress('ArrowLeft');
        expect(document.activeElement.textContent).toBe('Button 1');
      });
    });

    describe('direction both', () => {
      beforeEach(() => {
        component.direction = 'both';
      });

      it('move focus with all arrow keys', () => {
        openMenu();
        expect(document.activeElement.textContent).toBe('Button 1');
        keyPress('ArrowRight');
        expect(document.activeElement.textContent).toBe('Button 2');
        keyPress('ArrowDown');
        expect(document.activeElement.textContent).toBe('Button 3');
        keyPress('ArrowUp');
        expect(document.activeElement.textContent).toBe('Button 2');
        keyPress('ArrowLeft');
        expect(document.activeElement.textContent).toBe('Button 1');
      });
    });
  });
});
