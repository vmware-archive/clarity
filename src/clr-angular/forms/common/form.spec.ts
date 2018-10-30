/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, ViewChild } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ClrForm } from './form';
import { LayoutService } from './providers/layout.service';
import { MarkControlService } from './providers/mark-control.service';

@Component({ template: `<form clrForm></form>` })
class SimpleTest {
  @ViewChild(ClrForm) form: ClrForm;
}

export default function(): void {
  describe('ClrForm', () => {
    let fixture, directive, layoutService;

    beforeEach(function() {
      TestBed.configureTestingModule({ declarations: [ClrForm, SimpleTest], providers: [LayoutService] });
      fixture = TestBed.createComponent(SimpleTest);
      directive = fixture.debugElement.query(By.directive(ClrForm));
      layoutService = directive.injector.get(LayoutService);
    });

    it('adds the .clr-form class to host', function() {
      fixture.detectChanges();
      expect(directive.nativeElement.className).toContain('clr-form');
    });

    it('adds the horizontal layout class to host', function() {
      fixture.detectChanges();
      expect(directive.nativeElement.className).toContain('clr-form-horizontal');
    });

    it('adds the vertical layout class to host', function() {
      layoutService.layout = 'vertical';
      fixture.detectChanges();
      // There is no need to put `clr-form-vertical` because its the default behavior in CSS
      expect(directive.nativeElement.className).toEqual('clr-form');
    });

    it('adds the compact layout class to host', function() {
      layoutService.layout = 'compact';
      fixture.detectChanges();
      expect(directive.nativeElement.className).toContain('clr-form-compact');
    });

    it('provides the LayoutService', function() {
      fixture.detectChanges();
      expect(directive.injector.get(LayoutService)).toBeTruthy();
    });

    it('provides the MarkControlService', function() {
      expect(directive.injector.get(MarkControlService)).toBeTruthy();
    });

    it('calls markAsDirty', function() {
      const service = directive.injector.get(MarkControlService);
      spyOn(service, 'markAsDirty');
      directive.componentInstance.form.markAsDirty();
      expect(service.markAsDirty).toHaveBeenCalled();
    });
  });
}
