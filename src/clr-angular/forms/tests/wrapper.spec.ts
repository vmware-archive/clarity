/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { TestBed } from '@angular/core/testing';
import { FormsModule, NgControl } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { ClrIconModule } from '../../icon/icon.module';
import { ClrCommonFormsModule } from '../common/common.module';
import { IfErrorService } from '../common/if-error/if-error.service';

import { NgControlService } from '../common/providers/ng-control.service';
import { LayoutService } from '../common/providers/layout.service';

export function WrapperNoLabelSpec(testContainer, testControl, testComponent): void {
  describe('no label', () => {
    let fixture, containerDE, containerEl;
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [ClrIconModule, ClrCommonFormsModule, FormsModule],
        declarations: [testContainer, testControl, testComponent],
        providers: [NgControl, NgControlService, IfErrorService, LayoutService],
      });
      fixture = TestBed.createComponent(testComponent);

      containerDE = fixture.debugElement.query(By.directive(testContainer));
      containerEl = containerDE.nativeElement;
    });

    it('adds an empty label when no label is provided', () => {
      fixture.detectChanges();
      const labels = containerEl.querySelectorAll('label');
      expect(Array.prototype.filter.call(labels, label => label.textContent === '').length).toBe(1);
    });
  });
}

export function WrapperFullSpec(testContainer, testControl, testComponent, wrapperClass): void {
  describe('full example', () => {
    let fixture, containerDE, containerEl;
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [ClrIconModule, ClrCommonFormsModule, FormsModule],
        declarations: [testContainer, testControl, testComponent],
        providers: [NgControl, NgControlService, IfErrorService, LayoutService],
      });
      fixture = TestBed.createComponent(testComponent);

      containerDE = fixture.debugElement.query(By.directive(testContainer));
      containerEl = containerDE.nativeElement;
      fixture.detectChanges();
    });

    it('projects the control inside of the wrapper', () => {
      expect(containerDE.query(By.directive(testControl))).toBeTruthy();
    });

    it('projects the control as first child', () => {
      const control = containerEl.querySelector('[name]');
      expect(control).toBeTruthy();
      expect(control.previousElementSibling).toBeFalsy();
    });

    it('projects the label as second child', () => {
      const label = containerEl.querySelector('label');
      expect(label).toBeTruthy();
      expect(label.previousElementSibling).toBeTruthy();
    });

    it('adds the wrapper class to the host', () => {
      expect(containerEl.classList).toContain(wrapperClass);
    });
  });
}

export function WrapperContainerSpec(testContainer, testWrapper, testControl, testComponent, wrapperClass): void {
  describe('wrapper in container', () => {
    let fixture, wrapper, wrapperEl;
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [ClrIconModule, ClrCommonFormsModule, FormsModule],
        declarations: [testContainer, testWrapper, testControl, testComponent],
        providers: [NgControl, NgControlService, IfErrorService, LayoutService],
      });
      fixture = TestBed.createComponent(testComponent);

      wrapper = fixture.debugElement.query(By.directive(testWrapper));
      wrapperEl = wrapper.nativeElement;
      fixture.detectChanges();
    });

    it('does not add the wrapper class inside a container', () => {
      expect(wrapperEl.classList).toContain(wrapperClass);
    });
  });
}
