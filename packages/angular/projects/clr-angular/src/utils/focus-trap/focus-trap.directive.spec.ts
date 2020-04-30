/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, DebugElement, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { ClrModal } from '../../modal/modal';
import { ClrModalModule } from '../../modal/modal.module';
import { FocusTrapDirective } from './focus-trap.directive';
import { ClrFocusTrapModule } from './focus-trap.module';

describe('FocusTrap', () => {
  let fixture: ComponentFixture<any>;
  let compiled: any;

  let lastInput: HTMLElement;

  let directiveDebugElement: DebugElement;
  let directiveInstance: FocusTrapDirective;
  let directiveElement: HTMLElement;

  describe('default behavior', () => {
    let component: TestComponent;

    beforeEach(() => {
      TestBed.configureTestingModule({ imports: [ClrFocusTrapModule], declarations: [TestComponent] });
      fixture = TestBed.createComponent(TestComponent);
      fixture.detectChanges();

      component = fixture.componentInstance;
      compiled = fixture.nativeElement;
      lastInput = compiled.querySelector('#last');

      directiveDebugElement = fixture.debugElement.query(By.directive(FocusTrapDirective));
      directiveElement = directiveDebugElement.nativeElement;
      directiveInstance = directiveDebugElement.injector.get(FocusTrapDirective);
    });

    afterEach(() => {
      fixture.destroy();
    });

    it('should create directive', () => {
      expect(directiveInstance).toBeTruthy();
    });

    it('should add tabindex attribute with value zero', () => {
      expect(directiveElement.getAttribute('tabindex')).toEqual('0');
    });

    it('should add its off-screen focus rebounder elements on instantiation', () => {
      const offScreenEls = document.body.querySelectorAll('span.offscreen-focus-rebounder');
      expect(offScreenEls.length).toBe(2);
    });

    it('should place rebound elements correctly outside focus trap', () => {
      const trap = document.getElementById('main-focus-trap');
      const offScreenEls = document.querySelectorAll('span.offscreen-focus-rebounder');
      // Now check their placement, the next element should be a rebounder
      expect(trap.previousElementSibling).toEqual(offScreenEls[0]);
      // Now check in the focus trap, the next element should be a rebounder
      expect(trap.nextElementSibling).toEqual(offScreenEls[1]);
    });

    it('should rebound focus back to the directive if one of rebounding elements gets focused', () => {
      const offScreenEls = document.body.querySelectorAll('span.offscreen-focus-rebounder');

      const beforeRebound = offScreenEls[0] as HTMLElement;
      const afterRebound = offScreenEls[1] as HTMLElement;

      beforeRebound.focus();
      expect(document.activeElement).toBe(directiveElement);
      afterRebound.focus();
      expect(document.activeElement).toBe(directiveElement);
    });

    it('should remove its off-screen focus rebounder elements from parent element on removal', () => {
      expect(document.body.querySelectorAll('span.offscreen-focus-rebounder').length).toBe(2);
      component.mainFocusTrap = false;
      fixture.detectChanges();
      expect(document.body.querySelectorAll('span.offscreen-focus-rebounder').length).toBe(0);
    });

    it(`should add off-screen rebounder elements per trap`, () => {
      component.level1 = true;
      fixture.detectChanges();
      let offScreenEls = document.body.querySelectorAll('span.offscreen-focus-rebounder');
      expect(offScreenEls.length).toBe(4);
      component.level2 = true;
      fixture.detectChanges();
      offScreenEls = document.body.querySelectorAll('span.offscreen-focus-rebounder');
      expect(offScreenEls.length).toBe(6);
    });

    it(`should remove off-screen rebounder elements per trap`, () => {
      component.level1 = true;
      component.level2 = true;
      fixture.detectChanges();
      let offScreenEls = document.body.querySelectorAll('span.offscreen-focus-rebounder');
      expect(offScreenEls.length).toBe(6);
      component.level2 = false;
      component.level1 = false;
      fixture.detectChanges();
      offScreenEls = document.body.querySelectorAll('span.offscreen-focus-rebounder');
      expect(offScreenEls.length).toBe(2);
      component.mainFocusTrap = false;
      fixture.detectChanges();
      offScreenEls = document.body.querySelectorAll('span.offscreen-focus-rebounder');
      expect(offScreenEls.length).toBe(0);
    });

    it(`should keep focus within nested element with focus trap directive`, () => {
      component.level1 = true;
      fixture.detectChanges();
      const levelOneFocusTrap = compiled.querySelector('#levelOneFocusTrap');
      lastInput.focus();
      expect(document.activeElement).toEqual(levelOneFocusTrap);
    });

    it(`should keep focus within last focus trap directive element`, () => {
      component.level1 = true;
      component.level2 = true;
      fixture.detectChanges();
      const levelTwoFocusTrap = compiled.querySelector('#levelTwoFocusTrap');
      const levelTwoButton = compiled.querySelector('#levelTwoButton');
      lastInput.focus();
      expect(document.activeElement).toEqual(levelTwoFocusTrap);
      levelTwoButton.focus();
      expect(document.activeElement).toEqual(
        levelTwoButton,
        `element inside currently active focus trap directive wasn't focused`
      );
    });

    it(`should keep trap focus within previous focus trap element if last one is removed`, () => {
      component.level1 = true;
      component.level2 = true;
      component.level3 = true;
      fixture.detectChanges();
      const levelThreeButton = compiled.querySelector('#levelThreeButton');
      const levelTwoButton = compiled.querySelector('#levelTwoButton');
      const levelTwoFocusTrap = compiled.querySelector('#levelTwoFocusTrap');
      levelThreeButton.focus();
      component.level3 = false;
      fixture.detectChanges();
      lastInput.focus();
      expect(document.activeElement).toEqual(levelTwoFocusTrap);
      levelTwoButton.focus();
      expect(document.activeElement).toEqual(
        levelTwoButton,
        `element inside currently active focus trap directive wasn't focused`
      );
    });
  });

  describe('clr-modal behavior', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [FormsModule, NoopAnimationsModule, ClrModalModule, ClrFocusTrapModule],
        declarations: [TestModalComponent],
      });

      fixture = TestBed.createComponent(TestModalComponent);
      fixture.detectChanges();

      compiled = fixture.nativeElement;
    });

    afterEach(() => {
      fixture.destroy();
    });

    it('should have an activeElement that defaults to the body', () => {
      expect(document.body as Element).toBe(document.activeElement);
    });

    it('should return focus to the activeElement at the time of its initialization', () => {
      const initialActiveElement: any = document.activeElement;
      const toggleButton: HTMLElement = compiled.querySelector('#toggleButton');
      // Show the modal
      toggleButton.click();
      fixture.detectChanges();

      // Put focus into the contactInfo input
      const contactInfo: HTMLElement = compiled.querySelector('#contactInfo');
      contactInfo.focus();
      expect(document.activeElement).toBe(contactInfo);

      // Use the escape key to close the modal
      const escEvent = {
        shiftKey: false,
        keyCode: 27,
        preventDefault: () => {
          // Do nothing
        },
      };
      fixture.componentInstance.modal.close(escEvent);
      fixture.detectChanges();
      expect(document.activeElement).toBe(initialActiveElement);
    });
  });

  describe('local behavior', () => {
    let component: TestLocalModalComponent;
    let rebounders: NodeList;
    let last: HTMLElement;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [ClrFocusTrapModule],
        declarations: [TestLocalModalComponent],
      });

      fixture = TestBed.createComponent(TestLocalModalComponent);
      fixture.detectChanges();
      component = fixture.componentInstance;

      component.enableTrap = true;
      fixture.detectChanges();
      // Move focus into the trap, usually done by the host
      document.getElementById('focus-trap').focus();

      rebounders = document.querySelectorAll('.offscreen-focus-rebounder');
      last = rebounders.item(1) as HTMLElement;
    });

    afterEach(() => {
      fixture.destroy();
    });

    it('should trap focus locally', () => {
      // We can't test tab focus movement for security reasons, so will test by manually moving focus as if tab was pressed
      // First tab press
      document.getElementById('button').focus();
      expect(document.activeElement).toBe(document.getElementById('button'));
      // Second tab press would go to bottom rebounder, then should move to host (focus trap)
      last.focus();
      expect(document.activeElement).toBe(document.getElementById('focus-trap'));
    });

    it('should allow focus to move outside with mouse and not steal focus back', () => {
      expect(document.activeElement).toBe(document.getElementById('focus-trap'));
      const input = document.getElementById('input');
      input.focus(); // Move focus outside of trap
      expect(document.activeElement).toBe(input);
      const button = document.getElementById('button'); // Move back inside of trap
      button.focus();
      expect(document.activeElement).toBe(button);
      last.focus();
      expect(document.activeElement).toBe(last); // Focus trap no longer moves focus since we broke outside
    });
  });
});

@Component({
  template: `
    <form clrFocusTrap *ngIf="mainFocusTrap" id="main-focus-trap">
      <button id="first">
        Button to test first input
      </button>
      <input type="text" />
      <select>
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
      <button id="last">
        Last Input
      </button>

      <div id="levelOneFocusTrap" clrFocusTrap *ngIf="level1 === true">
        <button id="levelOneButton">Level 1</button>
        <div id="levelTwoFocusTrap" clrFocusTrap *ngIf="level2 === true">
          <button id="levelTwoButton">Level 2</button>
          <div id="levelThreeFocusTrap" clrFocusTrap *ngIf="level3 === true">
            <button id="levelThreeButton">Level 3</button>
          </div>
        </div>
      </div>
    </form>
  `,
})
class TestComponent {
  level1 = false;
  level2 = false;
  level3 = false;
  mainFocusTrap = true;
}

@Component({
  template: ` <p>
      <button class="btn btn-primary" id="toggleButton" (click)="openState = true">Show modal</button>
    </p>
    <clr-modal [(clrModalOpen)]="openState">
      <h3 class="modal-title">I have a nice title</h3>
      <div class="modal-body">
        <p>But not much to say...</p>
        <form class="form">
          <section class="form-block">
            <div class="form-group">
              <label for="contactInfo">Contact Info</label>
              <input type="text" id="contactInfo" [(ngModel)]="model.contactInfo" name="contactInfo" />
              <label for="contactInfo">Model Info: {{ diagnostic }}</label>
            </div>
          </section>
        </form>
      </div>
    </clr-modal>`,
})
class TestModalComponent {
  @ViewChild(ClrModal) modal: ClrModal;
  openState = false;
  model: any = { contactInfo: '' };
  diagnostic = '';
}

@Component({
  template: `
    <input id="input" type="text" />
    <div id="parent">
      <div [clrFocusTrap]="{ strict: false }" *ngIf="enableTrap" id="focus-trap">
        <button id="button">Focusable Button</button>
      </div>
    </div>
  `,
})
class TestLocalModalComponent {
  enableTrap = false;
}
