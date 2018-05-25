/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, ViewChild } from '@angular/core';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { FocusTrapDirective } from '../utils/focus-trap/focus-trap.directive';
import { ClrFocusTrapModule } from '../utils/focus-trap/focus-trap.module';

import { ClrModal } from './modal';
import { ClrModalModule } from './modal.module';

@Component({
  template: `
        <clr-modal [(clrModalOpen)]="opened"
            [clrModalClosable]="closable"
            [clrModalSize]="size"
            [clrModalStaticBackdrop]="staticBackdrop">
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

  opened: boolean = true;
  closable: boolean = true;
  size: string = '';
  staticBackdrop: boolean = false;
}

describe('Modal', () => {
  let fixture: ComponentFixture<any>;
  let compiled: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ClrModalModule, NoopAnimationsModule, ClrFocusTrapModule],
      declarations: [TestComponent],
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

  it(
    'projects content',
    fakeAsync(() => {
      expect(compiled.textContent).toMatch(/Title/);
      expect(compiled.textContent).toMatch(/Body/);
      expect(compiled.textContent).toMatch(/Footer/);
    })
  );

  it(
    'should set aria-hidden attribute to false if opened',
    fakeAsync(() => {
      fixture.componentInstance.opened = false;
      fixture.detectChanges();
      expect(compiled.querySelector('.modal-dialog')).toBeNull();
      // open modal
      getModalInstance(fixture).open();
      fixture.detectChanges();
      expect(compiled.querySelector('.modal-dialog').getAttribute('aria-hidden')).toBe('false');
    })
  );

  it(
    'shows and hides the modal based on the clrModalOpen input',
    fakeAsync(() => {
      fixture.componentInstance.opened = false;
      flushAndExpectOpen(fixture, false);

      fixture.componentInstance.opened = true;
      flushAndExpectOpen(fixture, true);
    })
  );

  it(
    'exposes open() and close() methods',
    fakeAsync(() => {
      getModalInstance(fixture).close();
      flushAndExpectOpen(fixture, false);

      getModalInstance(fixture).open();
      flushAndExpectOpen(fixture, true);
    })
  );

  it(
    'should not open if already opened',
    fakeAsync(() => {
      spyOn(getModalInstance(fixture)._openChanged, 'emit');
      getModalInstance(fixture).open();
      expect(getModalInstance(fixture)._openChanged.emit).not.toHaveBeenCalled();
    })
  );

  it(
    'should not close when already closed',
    fakeAsync(() => {
      fixture.componentInstance.opened = false;
      spyOn(getModalInstance(fixture), 'close');
      expect(getModalInstance(fixture).close).not.toHaveBeenCalled();
    })
  );

  it(
    'should not throw an error when close is called on an already closed modal',
    fakeAsync(() => {
      // Close the test modal
      fixture.componentInstance.modalInstance.close();
      fixture.detectChanges();
      // App should not throw an error when already closed.
      expect(() => {
        fixture.componentInstance.modalInstance.close();
        fixture.detectChanges();
      }).not.toThrow();
    })
  );

  it(
    'offers two-way binding on clrModalOpen',
    fakeAsync(() => {
      expect(fixture.componentInstance.opened).toBe(true);
      getModalInstance(fixture).close();
      fixture.detectChanges();

      // We make sure to wait for the animation to be over before emitting the output

      // todo: uncomment this after animation bug is fixed https://github.com/angular/angular/issues/15798
      // expect(fixture.componentInstance.opened).toBe(true);
      tick();
      expect(fixture.componentInstance.opened).toBe(false);
    })
  );

  it(
    'supports a clrModalSize option',
    fakeAsync(() => {
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
    })
  );

  it(
    'supports a clrModalClosable option',
    fakeAsync(() => {
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
    })
  );

  it(
    'supports a clrModalStaticBackdrop option',
    fakeAsync(() => {
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
    })
  );

  it('traps user focus', () => {
    fixture.detectChanges();
    const focusable = fixture.debugElement.query(By.directive(FocusTrapDirective));

    expect(focusable).toBeDefined();
  });
});
