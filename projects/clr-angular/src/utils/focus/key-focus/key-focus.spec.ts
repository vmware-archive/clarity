/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ClrKeyFocus } from './key-focus';
import { Component, DebugElement, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { KeyCodes } from './../../enums/key-codes.enum';
import { ClrKeyFocusModule } from './key-focus.module';
import { ClrKeyFocusItem } from './key-focus-item';

@Component({
  template: `
    <div
      *ngIf="open"
      clrKeyFocus
      [clrDirection]="direction"
      [clrFocusOnLoad]="focusOnLoad"
      (clrFocusChange)="changed = true"
    >
      <button clrKeyFocusItem>Button 1</button>
      <button clrKeyFocusItem>Button 2</button>
      <button *ngIf="showLast" clrKeyFocusItem>Button 3</button>
    </div>
  `,
})
class TestComponent {
  @ViewChild(ClrKeyFocus, { static: true })
  keyFocus: ClrKeyFocus;
  @ViewChildren(ClrKeyFocusItem) keyFocusItems: QueryList<ClrKeyFocusItem>;
  open = false;
  changed = false;
  direction = 'vertical';
  focusOnLoad = true;
  showLast = true;
}

@Component({
  template: `
    <div [clrKeyFocus]="buttons" [clrFocusOnLoad]="focusOnLoad">
      <button>Button 1</button>
      <button>Button 2</button>
      <button *ngIf="showLast">Button 3</button>
    </div>
  `,
})
class DOMTestComponent {
  buttons: any;
  focusOnLoad = true;
  showLast = true;
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

const keyPress = (key: string, el = clarityElement, bubbles = true) => {
  el.dispatchEvent(new KeyboardEvent('keydown', { key, code: key, bubbles }));
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
      keyPress(KeyCodes.ArrowDown);
      expect(clarityDirective.current).toBe(1);
      keyPress(KeyCodes.ArrowDown);
      expect(clarityDirective.current).toBe(2);
      keyPress(KeyCodes.ArrowUp);
      expect(clarityDirective.current).toBe(1);
    });

    it('focus change notification', () => {
      openMenu();
      // Initial focus notification
      expect(component.changed).toBe(true);
      // Test with arrow
      keyPress(KeyCodes.ArrowDown);
      expect(component.changed).toBe(true);
      // Test with position
      component.changed = false;
      clarityDirective.moveTo(0);
      expect(component.changed).toBe(true);
      // Test arrow at border, no rotation
      component.changed = false;
      keyPress(KeyCodes.ArrowUp);
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
      keyPress(KeyCodes.End);
      expect(clarityDirective.current).toBe(2);
      keyPress(KeyCodes.ArrowDown);
      expect(clarityDirective.current).toBe(2);
      keyPress(KeyCodes.Home);
      expect(clarityDirective.current).toBe(0);
      keyPress(KeyCodes.ArrowUp);
      expect(clarityDirective.current).toBe(0);
    });
    it('current value updates, when elements are being removed', () => {
      openMenu();
      expect(clarityDirective.current).toBe(0);
      keyPress(KeyCodes.End);
      expect(clarityDirective.current).toBe(2);
      component.showLast = false;
      fixture.detectChanges();
    });
    it('checks if keyboard event comes focused current', () => {
      openMenu();
      expect(clarityDirective.current).toBe(0);
      keyPress(KeyCodes.ArrowUp, component.keyFocusItems.last.nativeElement);
      expect(clarityDirective.current).toBe(1);
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
      keyPress(KeyCodes.End);
      expect(document.activeElement.textContent).toBe('Button 3');
      keyPress(KeyCodes.Home);
      expect(document.activeElement.textContent).toBe('Button 1');
    });

    it('prevents focus rotation', () => {
      openMenu();
      expect(document.activeElement.textContent).toBe('Button 1');
      keyPress(KeyCodes.ArrowUp);
      expect(document.activeElement.textContent).toBe('Button 1');
      keyPress(KeyCodes.End);
      expect(document.activeElement.textContent).toBe('Button 3');
      keyPress(KeyCodes.ArrowDown);
      expect(document.activeElement.textContent).toBe('Button 3');
    });

    describe('direction vertical', () => {
      it('moves focus with arrow up/down keys', () => {
        openMenu();
        expect(document.activeElement.textContent).toBe('Button 1');
        // Arrow down
        keyPress(KeyCodes.ArrowDown);
        expect(document.activeElement.textContent).toBe('Button 2');
        // Make sure it's only ArrowDown/Up
        keyPress(KeyCodes.ArrowRight);
        expect(document.activeElement.textContent).toBe('Button 2');
        keyPress(KeyCodes.ArrowLeft);
        expect(document.activeElement.textContent).toBe('Button 2');
        // Arrow up
        keyPress(KeyCodes.ArrowUp);
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
        keyPress(KeyCodes.ArrowRight);
        expect(document.activeElement.textContent).toBe('Button 2');
        // Make sure it's only ArrowRight/Left
        keyPress(KeyCodes.ArrowDown);
        expect(document.activeElement.textContent).toBe('Button 2');
        keyPress(KeyCodes.ArrowUp);
        expect(document.activeElement.textContent).toBe('Button 2');
        // Arrow up
        keyPress(KeyCodes.ArrowLeft);
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
        keyPress(KeyCodes.ArrowRight);
        expect(document.activeElement.textContent).toBe('Button 2');
        keyPress(KeyCodes.ArrowDown);
        expect(document.activeElement.textContent).toBe('Button 3');
        keyPress(KeyCodes.ArrowUp);
        expect(document.activeElement.textContent).toBe('Button 2');
        keyPress(KeyCodes.ArrowLeft);
        expect(document.activeElement.textContent).toBe('Button 1');
      });
    });
  });

  describe('DOM API', () => {
    let domComponent: DOMTestComponent;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [ClrKeyFocusModule],
        declarations: [DOMTestComponent],
      });
      fixture = TestBed.createComponent(DOMTestComponent);
      fixture.detectChanges();
      domComponent = fixture.componentInstance;
      directiveDebugElement = fixture.debugElement.query(By.directive(ClrKeyFocus));
      clarityElement = directiveDebugElement.nativeElement;
      clarityDirective = directiveDebugElement.injector.get(ClrKeyFocus);
    });

    it('should use a FocusableItem list (Element References)', () => {
      // This API is needed for cases where Content Children is not available for a template
      // An example of this is the Tabs component.
      domComponent.buttons = Array.from(fixture.nativeElement.querySelectorAll('button'));
      fixture.detectChanges();
      expect(clarityDirective.focusableItems.length).toBe(3);
    });
    it('focus updates, when elements are being removed', () => {
      domComponent.buttons = Array.from(fixture.nativeElement.querySelectorAll('button'));
      fixture.detectChanges();
      expect(document.activeElement.textContent).toBe('Button 1');
      keyPress(KeyCodes.End);
      expect(document.activeElement.textContent).toBe('Button 3');
      domComponent.showLast = false;
      fixture.detectChanges();
      domComponent.buttons = Array.from(fixture.nativeElement.querySelectorAll('button'));
      fixture.detectChanges();
      expect(document.activeElement.textContent).toBe('Button 2');
    });
  });
});
