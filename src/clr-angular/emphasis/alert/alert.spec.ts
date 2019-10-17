/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ClrAlert } from './alert';
import { ClrAlertModule } from './alert.module';
import { AriaLivePoliteness, AriaLiveService } from '../../utils/a11y/aria-live.service';

const CLOSE_ARIA_LABEL = 'Close Test Alert';

@Component({
  template: `
        <clr-alert
            [clrAlertType]="type"
            [clrAlertSizeSmall]="isSmall"
            [clrAlertClosable]="isClosable"
            [(clrAlertClosed)]="closed"
            [clrAlertAppLevel]="isAppLevel"
            [clrCloseButtonAriaLabel]="closeAriaLabel"
            [clrOff]="clrOff"
            [clrAssertive]="clrAssertive"
            [clrPolite]="clrPolite"
            >
            <div class="alert-item">
                <span class="alert-text">{{alertMsg}}</span>
            </div>
        </clr-alert>
   `,
})
class TestComponent {
  @ViewChild(ClrAlert, { static: false })
  alertInstance: ClrAlert;

  type: string = '';
  isSmall: boolean = false;
  isClosable: boolean = false;
  closed: boolean = false;
  isAppLevel: boolean = false;
  closeAriaLabel: string = CLOSE_ARIA_LABEL;

  // AriaLive
  clrOff: boolean = false;
  clrAssertive: boolean = false;
  clrPolite: boolean = false;

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

    it('should be able to set close button text', () => {
      fixture.componentInstance.isClosable = true;
      fixture.detectChanges();
      expect(compiled.querySelector('.close').getAttribute('aria-label')).toBe(CLOSE_ARIA_LABEL);
    });

    describe('AriaLive', function() {
      let ariaLiveService: AriaLiveService;
      let announceSpyOn, component;

      beforeEach(function() {
        fixture = TestBed.createComponent(TestComponent);

        component = fixture.debugElement.query(By.directive(ClrAlert)).injector.get(ClrAlert);
        ariaLiveService = fixture.debugElement.query(By.directive(ClrAlert)).injector.get(AriaLiveService);
        announceSpyOn = spyOn(ariaLiveService, 'announce');
      });

      it("should have an aria-live value of polite when you don't apply any attribute", () => {
        const myAlert: HTMLElement = compiled.querySelector('.alert');
        expect(component.ariaLive).toBe(AriaLivePoliteness.polite);
        fixture.detectChanges();
        expect(announceSpyOn).toHaveBeenCalledWith(fixture.componentInstance.alertMsg, AriaLivePoliteness.polite);
      });

      it('should have an aria-live value of off when apply clrOff', () => {
        const myAlert: HTMLElement = compiled.querySelector('.alert');
        fixture.componentInstance.clrOff = true;
        fixture.detectChanges();
        expect(component.ariaLive).toBe(AriaLivePoliteness.off);
        expect(announceSpyOn).toHaveBeenCalledWith(fixture.componentInstance.alertMsg, AriaLivePoliteness.off);
      });

      it('should have an aria-live value of assertive when apply clrAssertive', () => {
        const myAlert: HTMLElement = compiled.querySelector('.alert');
        fixture.componentInstance.clrAssertive = true;
        fixture.detectChanges();
        expect(component.ariaLive).toBe(AriaLivePoliteness.assertive);
        expect(announceSpyOn).toHaveBeenCalledWith(fixture.componentInstance.alertMsg, AriaLivePoliteness.assertive);
      });

      it('should follow the aria-live priority when all of them are set', () => {
        const myAlert: HTMLElement = compiled.querySelector('.alert');
        fixture.componentInstance.clrAssertive = true;
        fixture.componentInstance.clrPolite = true;
        fixture.componentInstance.clrOff = true;
        fixture.detectChanges();
        expect(component.ariaLive).toBe(AriaLivePoliteness.assertive);
      });

      it('should set clrPolite and clrOff - clrOff will be used', () => {
        const myAlert: HTMLElement = compiled.querySelector('.alert');
        fixture.componentInstance.clrPolite = true;
        fixture.componentInstance.clrOff = true;
        fixture.detectChanges();
        expect(component.ariaLive).toBe(AriaLivePoliteness.off);
      });
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
