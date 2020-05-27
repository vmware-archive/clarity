/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ClrControlError } from './error';
import { ControlIdService } from './providers/control-id.service';

@Component({ template: `<clr-control-error>Test error</clr-control-error>` })
class SimpleTest {}

@Component({ template: `<clr-control-error aria-describedby="hello"></clr-control-error>` })
class ExplicitAriaTest {}

export default function (): void {
  describe('ClrControlError', () => {
    let fixture;

    beforeEach(function () {
      TestBed.configureTestingModule({
        declarations: [ClrControlError, SimpleTest, ExplicitAriaTest],
        providers: [ControlIdService],
      });
      fixture = TestBed.createComponent(SimpleTest);
      fixture.detectChanges();
    });

    it('projects content', function () {
      expect(fixture.debugElement.query(By.directive(ClrControlError)).nativeElement.innerText).toContain('Test error');
    });

    it('adds the .clr-subtext class to host', function () {
      expect(
        fixture.debugElement.query(By.directive(ClrControlError)).nativeElement.classList.contains('clr-subtext')
      ).toBeTrue();
    });

    it('leaves the for aria-describedby untouched if it exists', function () {
      const explicitFixture = TestBed.createComponent(ExplicitAriaTest);
      explicitFixture.detectChanges();
      const message = explicitFixture.nativeElement.querySelector('clr-control-error');
      expect(message.getAttribute('aria-describedby')).toBe('hello');
    });
  });
}
