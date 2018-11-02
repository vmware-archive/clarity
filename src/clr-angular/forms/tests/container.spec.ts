/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { TestBed, async } from '@angular/core/testing';
import { FormsModule, NgControl, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { ClrIconModule } from '../../icon/icon.module';
import { ClrCommonFormsModule } from '../common/common.module';
import { IfErrorService } from '../common/if-error/if-error.service';

import { NgControlService } from '../common/providers/ng-control.service';
import { Layouts, LayoutService } from '../common/providers/layout.service';
import { MarkControlService } from '../common/providers/mark-control.service';

export function ContainerNoLabelSpec(testContainer, testControl, testComponent): void {
  describe('no label', () => {
    let fixture, containerDE, containerEl, layoutService;
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [ClrIconModule, ClrCommonFormsModule, FormsModule],
        declarations: [testContainer, testControl, testComponent],
        providers: [NgControl, NgControlService, IfErrorService, LayoutService, MarkControlService],
      });
      fixture = TestBed.createComponent(testComponent);

      containerDE = fixture.debugElement.query(By.directive(testContainer));
      containerEl = containerDE.nativeElement;
      layoutService = containerDE.injector.get(LayoutService);
    });

    it('adds an empty label when instantiated without vertical layout', () => {
      fixture.detectChanges();
      const labels = containerEl.querySelectorAll('label');
      expect(Array.prototype.filter.call(labels, label => label.textContent === '').length).toBe(1);
    });

    it('does not add an empty label when instantiated with vertical layout', () => {
      layoutService.layout = Layouts.VERTICAL;
      fixture.detectChanges();
      const labels = containerEl.querySelectorAll('label');
      expect(Array.prototype.filter.call(labels, label => label.textContent === '').length).toBe(0);
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
    let fixture, containerDE, container, containerEl, ifErrorService, layoutService, markControlService;
    if (!Array.isArray(directives)) {
      directives = [directives];
    }
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [ClrIconModule, ClrCommonFormsModule, FormsModule, ReactiveFormsModule],
        declarations: [testContainer, ...directives, testComponent],
        providers: [NgControl, NgControlService, IfErrorService, LayoutService, MarkControlService],
      });
      fixture = TestBed.createComponent(testComponent);

      containerDE = fixture.debugElement.query(By.directive(testContainer));
      container = containerDE.componentInstance;
      containerEl = containerDE.nativeElement;
      ifErrorService = containerDE.injector.get(IfErrorService);
      markControlService = containerDE.injector.get(MarkControlService);
      layoutService = containerDE.injector.get(LayoutService);
      fixture.detectChanges();
    });

    it('injects the layoutService', () => {
      expect(layoutService).toBeTruthy();
      expect(layoutService.layout).toEqual(Layouts.HORIZONTAL);
    });

    it('injects the ifErrorService and subscribes', () => {
      expect(ifErrorService).toBeTruthy();
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
      container.invalid = true;
      fixture.detectChanges();
      expect(containerEl.querySelector('clr-control-helper')).toBeFalsy();
    });

    it('sets error classes and displays the icon when invalid', () => {
      expect(containerEl.querySelector('.clr-control-container').classList.contains('clr-error')).toBeFalse();
      expect(containerEl.querySelector('.clr-validate-icon')).toBeFalsy();
      container.invalid = true;
      fixture.detectChanges();
      expect(containerEl.querySelector('.clr-control-container').classList.contains('clr-error')).toBeTrue();
      expect(containerEl.querySelector('.clr-validate-icon')).toBeTruthy();
    });

    it('projects the error helper when invalid', () => {
      expect(containerEl.querySelector('clr-control-error')).toBeFalsy();
      container.invalid = true;
      fixture.detectChanges();
      expect(containerEl.querySelector('clr-control-error')).toBeTruthy();
    });

    it('adds the .clr-form-control class to the host', () => {
      expect(containerEl.classList).toContain('clr-form-control');
    });

    it('adds the .clr-row class to the host on non-vertical layouts', () => {
      expect(containerEl.classList).toContain('clr-row');
      layoutService.layout = Layouts.VERTICAL;
      fixture.detectChanges();
      expect(containerEl.classList).not.toContain('clr-row');
      layoutService.layout = Layouts.COMPACT;
      fixture.detectChanges();
      expect(containerEl.classList).toContain('clr-row');
    });

    it('adds the error class for the control container', () => {
      expect(container.controlClass()).not.toContain('clr-error');
      container.invalid = true;
      expect(container.controlClass()).toContain('clr-error');
    });

    it('adds the grid class for the control container when not vertical', () => {
      expect(container.controlClass()).toContain('clr-col-xs-12');
      layoutService.layout = Layouts.VERTICAL;
      expect(container.controlClass()).not.toContain('clr-col-xs-12');
    });

    it('tracks the validity of the form control', () => {
      expect(container.invalid).toBeFalse();
      markControlService.markAsDirty();
      fixture.detectChanges();
      expect(container.invalid).toBeTrue();
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
