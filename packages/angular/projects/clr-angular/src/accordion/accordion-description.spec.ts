/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ClrAccordionModule } from './accordion.module';
import { ClrAccordionDescription } from './accordion-description';

@Component({
  template: `<clr-accordion-description>Hello world</clr-accordion-description>`,
})
class TestComponent {}

describe('ClrAccordionDescription', () => {
  describe('View', () => {
    let fixture: ComponentFixture<any>;

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
        imports: [ClrAccordionModule],
      });

      fixture = TestBed.createComponent(TestComponent);
      fixture.detectChanges();
    });

    it('projects content', () => {
      expect(fixture.nativeElement.textContent.trim()).toMatch('Hello world');
    });

    it('adds a .clr-accordion-description class on the host element', () => {
      const accordionDescriptionElement = fixture.debugElement.query(By.directive(ClrAccordionDescription))
        .nativeElement;
      expect(accordionDescriptionElement.classList.contains('clr-accordion-description')).toBe(true);
    });
  });
});
