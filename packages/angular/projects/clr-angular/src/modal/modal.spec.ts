/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, ViewChild } from '@angular/core';
import { AnimationEvent } from '@angular/animations';

import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { FocusTrapDirective } from '../utils/focus-trap/focus-trap.directive';
import { ClrFocusTrapModule } from '../utils/focus-trap/focus-trap.module';

import { ClrCommonStringsService } from '../utils/i18n/common-strings.service';

import { ClrModal } from './modal';
import { ClrModalModule } from './modal.module';

@Component({
  template: `
    <clr-modal
      [(clrModalOpen)]="opened"
      [clrModalClosable]="closable"
      [clrModalSize]="size"
      [clrModalStaticBackdrop]="staticBackdrop"
    >
      <h4 class="modal-title">Title</h4>
      <div class="modal-body">
        <p>Body</p>
      </div>
      <div class="modal-footer">
        <button (click)="opened = false">Footer</button>
      </div>
    </clr-modal>
  `,
})
class TestComponent {
  @ViewChild(ClrModal) modalInstance: ClrModal;

  opened = true;
  closable = true;
  size = '';
  staticBackdrop = false;
}

@Component({
  template: `
    <clr-modal [(clrModalOpen)]="opened">
      <h4 class="modal-title">Title</h4>
      <div class="modal-body">
        <p>Body</p>
      </div>
      <div class="modal-footer">
        <button (click)="opened = false">Footer</button>
      </div>
    </clr-modal>
  `,
})
class TestDefaultsComponent {
  opened = true;
}

describe('Modal', () => {
  let fixture: ComponentFixture<any>;
  let compiled: any;
  const commonStrings = new ClrCommonStringsService();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ClrModalModule, NoopAnimationsModule, ClrFocusTrapModule],
      declarations: [TestComponent, TestDefaultsComponent],
    });

    return TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      fixture.detectChanges();
      compiled = fixture.nativeElement;
    });
  }));

  function getModalInstance(componentFixture: ComponentFixture<any>): ClrModal {
    return componentFixture.componentInstance.modalInstance;
  }

  function flushAndExpectOpen(componentFixture: ComponentFixture<any>, open: boolean): void {
    componentFixture.detectChanges();
    tick();

    const text: string = componentFixture.nativeElement.textContent.trim();
    if (open) {
      expect(text).not.toBe('');
    } else {
      expect(text).toBe('');
    }
  }

  it('projects content', fakeAsync(() => {
    expect(compiled.textContent).toMatch(/Title/);
    expect(compiled.textContent).toMatch(/Body/);
    expect(compiled.textContent).toMatch(/Footer/);
  }));

  it('should set aria-hidden attribute to false if opened', fakeAsync(() => {
    fixture.componentInstance.opened = false;
    fixture.detectChanges();
    expect(compiled.querySelector('.modal-dialog')).toBeNull();
    // open modal
    getModalInstance(fixture).open();
    fixture.detectChanges();
    expect(compiled.querySelector('.modal-dialog').getAttribute('aria-hidden')).toBe('false');
  }));

  it('shows and hides the modal based on the clrModalOpen input', fakeAsync(() => {
    fixture.componentInstance.opened = false;
    flushAndExpectOpen(fixture, false);

    fixture.componentInstance.opened = true;
    flushAndExpectOpen(fixture, true);
  }));

  it('exposes open() and close() methods', fakeAsync(() => {
    getModalInstance(fixture).close();
    flushAndExpectOpen(fixture, false);

    getModalInstance(fixture).open();
    flushAndExpectOpen(fixture, true);
  }));

  it('should not open if already opened', fakeAsync(() => {
    spyOn(getModalInstance(fixture)._openChanged, 'emit');
    getModalInstance(fixture).open();
    expect(getModalInstance(fixture)._openChanged.emit).not.toHaveBeenCalled();
  }));

  it('should not emit clrModalOpenChange - animation will do that for us', fakeAsync(() => {
    /**
     * Needed just to mock the event so I could enter the `if` statement.
     */
    const fakeAnimationEvent: AnimationEvent = {
      fromState: '',
      toState: 'void',
      totalTime: 0,
      phaseName: '',
      element: {},
      triggerName: '',
      disabled: false,
    };

    spyOn(getModalInstance(fixture)._openChanged, 'emit');
    getModalInstance(fixture).close();
    getModalInstance(fixture).fadeDone(fakeAnimationEvent);
    expect(getModalInstance(fixture)._openChanged.emit).toHaveBeenCalledTimes(1);
  }));

  it('should not close when already closed', fakeAsync(() => {
    fixture.componentInstance.opened = false;
    spyOn(getModalInstance(fixture), 'close');
    expect(getModalInstance(fixture).close).not.toHaveBeenCalled();
  }));

  it('should not throw an error when close is called on an already closed modal', fakeAsync(() => {
    // Close the test modal
    fixture.componentInstance.modalInstance.close();
    fixture.detectChanges();
    // App should not throw an error when already closed.
    expect(() => {
      fixture.componentInstance.modalInstance.close();
      fixture.detectChanges();
    }).not.toThrow();
  }));

  it('offers two-way binding on clrModalOpen', fakeAsync(() => {
    expect(fixture.componentInstance.opened).toBe(true);
    getModalInstance(fixture).close();
    fixture.detectChanges();

    // We make sure to wait for the animation to be over before emitting the output

    // todo: uncomment this after animation bug is fixed https://github.com/angular/angular/issues/15798
    // expect(fixture.componentInstance.opened).toBe(true);
    tick();
    expect(fixture.componentInstance.opened).toBe(false);
  }));

  it('focuses on the title when opened', fakeAsync(() => {
    expect(document.activeElement).toEqual(fixture.nativeElement.querySelector('.modal-title-wrapper'));
  }));

  it('supports a clrModalSize option', fakeAsync(() => {
    expect(compiled.querySelector('.modal-sm')).toBeNull();
    expect(compiled.querySelector('.modal-lg')).toBeNull();

    fixture.componentInstance.size = 'sm';
    fixture.detectChanges();

    expect(compiled.querySelector('.modal-sm')).not.toBeNull();
    expect(compiled.querySelector('.modal-lg')).toBeNull();

    fixture.componentInstance.size = 'lg';
    fixture.detectChanges();

    expect(compiled.querySelector('.modal-sm')).toBeNull();
    expect(compiled.querySelector('.modal-lg')).not.toBeNull();
  }));

  it('supports a clrModalClosable option', fakeAsync(() => {
    fixture.componentInstance.closable = false;
    fixture.detectChanges();

    expect(compiled.querySelector('.close')).toBeNull();

    getModalInstance(fixture).close();
    flushAndExpectOpen(fixture, true);

    fixture.componentInstance.closable = true;
    fixture.detectChanges();

    expect(compiled.querySelector('.close')).not.toBeNull();
    getModalInstance(fixture).close();
    fixture.detectChanges();

    flushAndExpectOpen(fixture, false);
  }));

  it('should not be closed on backdrop click by default', fakeAsync(() => {
    const defaultsFixture = TestBed.createComponent(TestDefaultsComponent);
    defaultsFixture.detectChanges();
    compiled = defaultsFixture.nativeElement;

    const backdrop: HTMLElement = compiled.querySelector('.modal-backdrop');

    backdrop.click();
    flushAndExpectOpen(defaultsFixture, true);
    defaultsFixture.destroy();
  }));

  it('supports a clrModalStaticBackdrop option', fakeAsync(() => {
    const backdrop: HTMLElement = compiled.querySelector('.modal-backdrop');

    fixture.componentInstance.staticBackdrop = true;
    fixture.detectChanges();

    // Just make sure we have the "x" to close the modal,
    // because this is different from the clrModalClosable option.
    expect(compiled.querySelector('.close')).not.toBeNull();

    backdrop.click();
    flushAndExpectOpen(fixture, true);

    fixture.componentInstance.staticBackdrop = false;
    fixture.detectChanges();

    backdrop.click();
    flushAndExpectOpen(fixture, false);
  }));

  it('traps user focus', () => {
    fixture.detectChanges();
    const focusable = fixture.debugElement.query(By.directive(FocusTrapDirective));

    expect(focusable).toBeDefined();
  });

  it('close button should have attribute aria-label', () => {
    expect(compiled.querySelector('.close').getAttribute('aria-label')).toBe(commonStrings.keys.close);
  });

  it('should have text based boundaries for screen readers', fakeAsync(() => {
    // MacOS + Voice Over does not properly isolate modal content so
    // we must give screen reader users text based warnings when they
    // are entering and leaving modal content.
    getModalInstance(fixture).open();
    fixture.detectChanges();
    const messages = compiled.querySelectorAll('.clr-sr-only');
    expect(messages[0].innerText).toBe('Beginning of Modal Content');
    expect(messages[1].innerText).toBe('End of Modal Content');
  }));
});
