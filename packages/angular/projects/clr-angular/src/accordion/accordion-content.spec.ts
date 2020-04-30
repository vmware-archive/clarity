/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClrAccordionModule } from './accordion.module';
import { IfExpandService } from '../utils/conditional/if-expanded.service';

@Component({
  template: `
    <clr-accordion>
      <clr-accordion-content>Hello world</clr-accordion-content>
    </clr-accordion>
  `,
})
class TestComponent {}

describe('ClrAccordionContent', () => {
  describe('View', () => {
    let fixture: ComponentFixture<any>;

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
        imports: [ReactiveFormsModule, NoopAnimationsModule, ClrAccordionModule],
        providers: [IfExpandService],
      });

      fixture = TestBed.createComponent(TestComponent);
      fixture.detectChanges();
    });

    it('projects content', () => {
      expect(fixture.nativeElement.textContent.trim()).toMatch('Hello world');
    });
  });
});
