/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { TestBed, async } from '@angular/core/testing';
import { FormsModule, NgControl, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { ClrIconModule } from '../../icon/icon.module';
import { ClrCommonFormsModule } from '../common/common.module';

import { NgControlService } from '../common/providers/ng-control.service';
import { ClrFormLayout, LayoutService } from '../common/providers/layout.service';
import { MarkControlService } from '../common/providers/mark-control.service';
import { ControlIdService } from '../common/providers/control-id.service';
import { DatalistIdService } from '../datalist/providers/datalist-id.service';
import { IfControlStateService, CONTROL_STATE } from '../common/if-control-state/if-control-state.service';

export function ContainerNoLabelSpec(testContainer, testControl, testComponent): void {
  describe('no label', () => {
    let fixture, containerDE, containerEl, layoutService, container;
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [ClrIconModule, ClrCommonFormsModule, FormsModule],
        declarations: [testContainer, testControl, testComponent],
        providers: [NgControl, NgControlService, IfControlStateService, LayoutService, MarkControlService],
      });
      fixture = TestBed.createComponent(testComponent);

      containerDE = fixture.debugElement.query(By.directive(testContainer));
      containerEl = containerDE.nativeElement;
      layoutService = containerDE.injector.get(LayoutService);
      container = containerDE.componentInstance;
    });

    it('adds an empty label when instantiated without vertical layout', () => {
      fixture.detectChanges();
      const labels = containerEl.querySelectorAll('label');
      expect(Array.prototype.filter.call(labels, label => label.textContent === '').length).toBe(1);
    });

    it('does not add an empty label when instantiated with vertical layout', () => {
      layoutService.layout = ClrFormLayout.VERTICAL;
      fixture.detectChanges();
      const labels = containerEl.querySelectorAll('label');
      expect(Array.prototype.filter.call(labels, label => label.textContent === '').length).toBe(0);
    });

    it('should display helper text when no success-component is present', () => {
      fixture.detectChanges();
      expect(containerEl.querySelector('clr-control-helper')).toBeTruthy();
      container.state = CONTROL_STATE.INVALID;
      fixture.detectChanges();
      expect(containerEl.querySelector('clr-control-helper')).toBeFalsy();
      container.state = CONTROL_STATE.VALID;
      fixture.detectChanges();
      expect(containerEl.querySelector('clr-control-helper')).toBeTruthy();
    });
  });
}

export function TemplateDrivenSpec(testContainer, testControl, testComponent, wrapperClass): void {
  fullSpec('template-driven', testContainer, testControl, testComponent, wrapperClass);
}

export function ReactiveSpec(testContainer, testControl, testComponent, wrapperClass): void {
  fullSpec('reactive', testContainer, testControl, testComponent, wrapperClass);
}

function fullSpec(description, testContainer, directives: any | any[], testComponent, wrapperClass) {
  describe(description, () => {
    let fixture,
      containerDE,
      container,
      containerEl,
      ifControlStateService: IfControlStateService,
      layoutService,
      markControlService;
    if (!Array.isArray(directives)) {
      directives = [directives];
    }
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [ClrIconModule, ClrCommonFormsModule, FormsModule, ReactiveFormsModule],
        declarations: [testContainer, ...directives, testComponent],
        providers: [
          NgControl,
          NgControlService,
          LayoutService,
          MarkControlService,
          ControlIdService,
          DatalistIdService,
          IfControlStateService,
        ],
      });
      fixture = TestBed.createComponent(testComponent);

      containerDE = fixture.debugElement.query(By.directive(testContainer));
      container = containerDE.componentInstance;
      containerEl = containerDE.nativeElement;
      ifControlStateService = containerDE.injector.get(IfControlStateService);
      markControlService = containerDE.injector.get(MarkControlService);
      layoutService = containerDE.injector.get(LayoutService);
      fixture.detectChanges();
    });

    it('injects the layoutService', () => {
      expect(layoutService).toBeTruthy();
      expect(layoutService.layout).toEqual(ClrFormLayout.HORIZONTAL);
    });

    it('injects the IfControlStateService and subscribes', () => {
      expect(ifControlStateService).toBeTruthy();
      expect(container.subscriptions[0]).toBeTruthy();
    });

    it('projects the label as first child', () => {
      const label = containerEl.querySelector('label');
      expect(label).toBeTruthy();
      expect(label.previousElementSibling).toBeFalsy();
    });

    it('projects the control inside of the wrapper', () => {
      expect(containerEl.querySelector(wrapperClass)).toBeTruthy();
    });

    it('projects the helper text when the control is valid', () => {
      expect(containerEl.querySelector('clr-control-helper')).toBeTruthy();
    });

    it("doesn't display the helper text when invalid", () => {
      expect(containerEl.querySelector('clr-control-helper')).toBeTruthy();
      container.state = CONTROL_STATE.INVALID;
      fixture.detectChanges();
      expect(containerEl.querySelector('clr-control-helper')).toBeFalsy();
    });

    it('sets error classes and displays the icon when invalid', () => {
      expect(containerEl.querySelector('.clr-control-container').classList.contains('clr-error')).toBeFalse();
      expect(containerEl.querySelector('.clr-validate-icon')).toBeFalsy();
      container.state = CONTROL_STATE.INVALID;
      fixture.detectChanges();
      expect(containerEl.querySelector('.clr-control-container').classList.contains('clr-error')).toBeTrue();
      expect(containerEl.querySelector('.clr-validate-icon')).toBeTruthy();
    });

    it('projects the error helper when invalid', () => {
      expect(containerEl.querySelector('clr-control-error')).toBeFalsy();
      container.state = CONTROL_STATE.INVALID;
      fixture.detectChanges();
      expect(containerEl.querySelector('clr-control-error')).toBeTruthy();
    });

    it('projects the success content when valid', () => {
      container.state = CONTROL_STATE.VALID;
      fixture.detectChanges();
      expect(containerEl.querySelector('clr-control-helper')).toBeFalsy();
      expect(containerEl.querySelector('clr-control-error')).toBeFalsy();
      expect(containerEl.querySelector('clr-control-success')).toBeTruthy();
    });

    it('should have the success icon when valid', () => {
      container.state = CONTROL_STATE.VALID;
      fixture.detectChanges();
      const icon: HTMLElement = containerEl.querySelector('cds-icon[shape=check-circle]');
      expect(icon).toBeTruthy();
    });

    it('adds the .clr-form-control class to the host', () => {
      expect(containerEl.classList).toContain('clr-form-control');
    });

    it('adds the .clr-row class to the host on non-vertical layouts', () => {
      expect(containerEl.classList).toContain('clr-row');
      layoutService.layout = ClrFormLayout.VERTICAL;
      fixture.detectChanges();
      expect(containerEl.classList).not.toContain('clr-row');
      layoutService.layout = ClrFormLayout.COMPACT;
      fixture.detectChanges();
      expect(containerEl.classList).toContain('clr-row');
    });

    it('adds the error class for the control container', () => {
      expect(container.controlClass()).not.toContain('clr-error');
      container.state = CONTROL_STATE.INVALID;
      expect(container.controlClass()).toContain('clr-error');
    });

    it('adds the grid class for the control container when not vertical', () => {
      expect(container.controlClass()).toContain('clr-col-12');
      layoutService.layout = ClrFormLayout.VERTICAL;
      expect(container.controlClass()).not.toContain('clr-col-12');
    });

    it('tracks the validity of the form control', () => {
      expect(container.showInvalid).toBeFalse();
      markControlService.markAsTouched();
      fixture.detectChanges();
      expect(container.showInvalid).toBeTrue();
    });

    it('tracks the disabled state', async(() => {
      const test = fixture.debugElement.componentInstance;
      test.disabled = true;
      fixture.detectChanges();
      // Have to wait for the whole control to settle or it doesn't track
      fixture.whenStable().then(() => {
        expect(containerEl.className).not.toContain('clr-form-control-disabled');
        if (test.form) {
          // Handle setting disabled based on reactive form
          test.form.get('model').reset({ value: '', disabled: true });
        }
        fixture.detectChanges();
        expect(containerEl.className).toContain('clr-form-control-disabled');
      });
    }));

    it('implements ngOnDestroy', () => {
      expect(container.ngOnDestroy).toBeDefined();
    });
  });
}
