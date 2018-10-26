/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClrAlert } from './alert';
import { ClrAlertModule } from './alert.module';

@Component({
  template: `
        <clr-alert
            [clrAlertType]="type"
            [clrAlertSizeSmall]="isSmall"
            [clrAlertClosable]="isClosable"
            [(clrAlertClosed)]="closed"
            [clrAlertAppLevel]="isAppLevel">
            <div class="alert-item">
                <span class="alert-text">
                {{alertMsg}}
                </span>
            </div>
        </clr-alert>
   `,
})
class TestComponent {
  @ViewChild(ClrAlert) alertInstance: ClrAlert;

  type: string = '';
  isSmall: boolean = false;
  isClosable: boolean = false;
  closed: boolean = false;
  isAppLevel: boolean = false;

  alertMsg: string = 'This is an alert!';
}

export default function(): void {
  describe('Alert', () => {
    let fixture: ComponentFixture<any>;
    let compiled: any;

    beforeEach(() => {
      TestBed.configureTestingModule({ imports: [ClrAlertModule], declarations: [TestComponent] });

      fixture = TestBed.createComponent(TestComponent);
      fixture.detectChanges();
      compiled = fixture.nativeElement;
    });

    afterEach(() => {
      fixture.destroy();
    });

    it('projects content', () => {
      const newAlertMsg = 'OHAI';
      expect(compiled.textContent).toMatch(/This is an alert!/);
      fixture.componentInstance.alertMsg = newAlertMsg;
      fixture.detectChanges();
      expect(compiled.textContent).toContain(newAlertMsg);
    });

    it('Extends the alert-sm class when clrAlertSizeSmall is set to true', () => {
      expect(compiled.querySelector('.alert-sm')).toBeNull();
      fixture.componentInstance.isSmall = true;
      fixture.detectChanges();
      expect(compiled.querySelector('.alert-sm')).not.toBeNull();
    });

    it('supports a clrAlertClosable option', () => {
      fixture.componentInstance.isClosable = false;
      fixture.detectChanges();
      expect(compiled.querySelector('.close')).toBeNull();
      fixture.componentInstance.isClosable = true;
      fixture.detectChanges();
      expect(compiled.querySelector('.close')).not.toBeNull();
    });

    it('extends the alert type classes when clrAlertType is set', () => {
      // default info class
      expect(compiled.querySelector('.alert-info')).not.toBeNull();

      // set danger
      fixture.componentInstance.type = 'danger';
      fixture.detectChanges();

      expect(compiled.querySelector('.alert-info')).toBeNull();
      expect(compiled.querySelector('.alert-danger')).not.toBeNull();

      // set warning
      fixture.componentInstance.type = 'warning';
      fixture.detectChanges();

      expect(compiled.querySelector('.alert-danger')).toBeNull();
      expect(compiled.querySelector('.alert-warning')).not.toBeNull();

      // set success
      fixture.componentInstance.type = 'success';
      fixture.detectChanges();

      expect(compiled.querySelector('.alert-warning')).toBeNull();
      expect(compiled.querySelector('.alert-success')).not.toBeNull();
    });

    it('Removes the alert from the DOM when closed', () => {
      const instance: ClrAlert = fixture.componentInstance.alertInstance;

      expect(compiled.querySelector('.alert')).not.toBeNull();
      fixture.componentInstance.isClosable = true;
      fixture.detectChanges();

      instance.close();
      fixture.detectChanges();
      expect(compiled.querySelector('.alert')).toBeNull();
    });

    it('Has an ARIA role of alert', () => {
      const myAlert: HTMLElement = compiled.querySelector('.alert');
      expect(myAlert.getAttribute('role')).toBe('alert');
    });

    it('Has an ARIA-live value of assertive', () => {
      const myAlert: HTMLElement = compiled.querySelector('.alert');
      expect(myAlert.getAttribute('aria-live')).toBe('assertive');
    });

    it('shows and hides the alert based on the clrAlertClosed input', () => {
      expect(compiled.querySelector('.alert')).not.toBeNull();
      fixture.componentInstance.closed = true;
      fixture.detectChanges();
      expect(compiled.querySelector('.alert')).toBeNull();
      fixture.componentInstance.closed = false;
      fixture.detectChanges();
      expect(compiled.querySelector('.alert')).not.toBeNull();
    });

    it('supports a clrAlertAppLevel option', () => {
      fixture.componentInstance.isAppLevel = false;
      fixture.detectChanges();
      expect(compiled.querySelector('.alert-app-level')).toBeNull();

      fixture.componentInstance.isAppLevel = true;
      fixture.detectChanges();
      expect(compiled.querySelector('.alert-app-level')).not.toBeNull();
    });
  });
}
