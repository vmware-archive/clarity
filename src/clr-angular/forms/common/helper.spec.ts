/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ClrControlHelper } from './helper';
import { ControlIdService } from './providers/control-id.service';

@Component({ template: `<clr-control-helper>Test helper</clr-control-helper>` })
class SimpleTest {}

export default function(): void {
  describe('ClrControlHelper', () => {
    let fixture;

    beforeEach(function() {
      TestBed.configureTestingModule({ declarations: [ClrControlHelper, SimpleTest], providers: [ControlIdService] });
      fixture = TestBed.createComponent(SimpleTest);
      fixture.detectChanges();
    });

    it('projects content', function() {
      expect(fixture.debugElement.query(By.directive(ClrControlHelper)).nativeElement.innerText).toContain(
        'Test helper'
      );
    });

    it('adds the .clr-subtext class to host', function() {
      expect(
        fixture.debugElement.query(By.directive(ClrControlHelper)).nativeElement.classList.contains('clr-subtext')
      ).toBeTrue();
    });

    it('adds the id to host', function() {
      expect(fixture.debugElement.query(By.directive(ClrControlHelper)).nativeElement.id).toContain('clr-form-control');
    });
  });
}
