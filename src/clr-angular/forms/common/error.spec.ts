/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ClrControlError } from './error';

@Component({ template: `<clr-control-error>Test error</clr-control-error>` })
class SimpleTest {}

export default function(): void {
  describe('ClrControlError', () => {
    let fixture;

    beforeEach(function() {
      TestBed.configureTestingModule({ declarations: [ClrControlError, SimpleTest] });
      fixture = TestBed.createComponent(SimpleTest);
      fixture.detectChanges();
    });

    it('projects content', function() {
      expect(fixture.debugElement.query(By.directive(ClrControlError)).nativeElement.innerText).toContain('Test error');
    });

    it('adds the .clr-subtext class to host', function() {
      expect(
        fixture.debugElement.query(By.directive(ClrControlError)).nativeElement.classList.contains('clr-subtext')
      ).toBeTrue();
    });
  });
}
