/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, DebugElement, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { itIgnore } from '../../../../tests/tests.helpers';
import { ClrModal } from '../../modal/modal';
import { ClrModalModule } from '../../modal/modal.module';
import { FocusTrapDirective } from './focus-trap.directive';
import { ClrFocusTrapModule } from './focus-trap.module';

describe('FocusTrap', () => {
  let fixture: ComponentFixture<any>;
  let compiled: any;
  let component: TestComponent;

  let lastInput: HTMLElement;

  let directiveDebugElement: DebugElement;
  let directiveInstance: FocusTrapDirective;
  let directiveElement: HTMLElement;

  describe('default behavior', () => {
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

    it('should add its off-screen focus rebounder elements to document body on instantiation', () => {
      const offScreenEls = document.body.querySelectorAll('span.offscreen-focus-rebounder');
      expect(offScreenEls.length).toBe(2);
    });

    it('should add its off-screen focus elements as first an last elements in document body', () => {
      const offScreenEls = document.body.querySelectorAll('span.offscreen-focus-rebounder');
      expect(document.body.firstChild).toBe(offScreenEls[0]);
      expect(document.body.lastChild).toBe(offScreenEls[1]);
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

    it(`should add off-screen rebounder elements only once`, () => {
      component.level1 = true;
      fixture.detectChanges();
      let offScreenEls = document.body.querySelectorAll('span.offscreen-focus-rebounder');
      expect(offScreenEls.length).toBe(2);
      component.level2 = true;
      fixture.detectChanges();
      offScreenEls = document.body.querySelectorAll('span.offscreen-focus-rebounder');
      expect(offScreenEls.length).toBe(2);
    });

    it(`should remove off-screen rebounder elements only once`, () => {
      component.level1 = true;
      component.level2 = true;
      fixture.detectChanges();
      let offScreenEls = document.body.querySelectorAll('span.offscreen-focus-rebounder');
      expect(offScreenEls.length).toBe(2);
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

    itIgnore(['firefox'], `should keep focus within nested element with focus trap directive`, () => {
      component.level1 = true;
      fixture.detectChanges();
      const levelOneFocusTrap = compiled.querySelector('#levelOneFocusTrap');
      lastInput.focus();
      expect(document.activeElement).toEqual(levelOneFocusTrap);
    });

    itIgnore(['firefox'], `should keep focus within last focus trap directive element`, () => {
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

    itIgnore(['firefox'], `should keep trap focus within previous focus trap element if last one is removed`, () => {
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

    // IE tests don't seem to reset the activeElement, so this test fails
    // @TODO Fix IE test for activeElement in focus trap
    itIgnore(['ie'], 'should have an activeElement that defaults to the body', () => {
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
      const escEvent = { shiftKey: false, keyCode: 27, preventDefault: () => {} };
      fixture.componentInstance.modal.close(escEvent);
      fixture.detectChanges();
      expect(document.activeElement).toBe(initialActiveElement);
    });
  });
});

@Component({
  template: `    
        <form clrFocusTrap *ngIf="mainFocusTrap">
            <button id="first">
                Button to test first input
            </button>
            <input type="text"/>
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
  template: `
        <p>
            <button class="btn btn-primary" id="toggleButton" (click)="openState = true;">Show modal</button>
        </p>
        <clr-modal [(clrModalOpen)]="openState">
            <h3 class="modal-title">I have a nice title</h3>
            <div class="modal-body">
                <p>But not much to say...</p>
                <form class="form">
                    <section class="form-block">
                        <div class="form-group">
                            <label for="contactInfo">Contact Info</label>
                            <input type="text" id="contactInfo"
                                   [(ngModel)]="model.contactInfo"
                                   name="contactInfo">
                            <label for="contactInfo">Model Info: {{diagnostic}}</label>
                        </div>
                    </section>
                </form>
            </div>
        </clr-modal>`,
})
class TestModalComponent {
  @ViewChild(ClrModal) modal: ClrModal;
  openState: boolean = false;
  model: any = { contactInfo: '' };
}
