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
    let fixture, directive;

    beforeEach(function() {
      TestBed.configureTestingModule({ declarations: [ClrForm, SimpleTest] });
      fixture = TestBed.createComponent(SimpleTest);
      fixture.detectChanges();
      directive = fixture.debugElement.query(By.directive(ClrForm));
    });

    it('adds the .clr-form class to host', function() {
      expect(directive.nativeElement.classList.contains('clr-form')).toBeTrue();
    });

    it('provides the LayoutService', function() {
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
