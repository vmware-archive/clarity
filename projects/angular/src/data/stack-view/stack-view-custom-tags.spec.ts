/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClrStackViewModule } from './stack-view.module';

@Component({
  template: `
    <clr-stack-label class="one">Title</clr-stack-label>
    <clr-stack-label class="two" id="ohai">Title</clr-stack-label>
  `,
})
class TestComponent {}

export default function (): void {
  'use strict';
  describe('StackView Label', () => {
    let fixture: ComponentFixture<any>;
    let compiled: any;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [ClrStackViewModule],
        declarations: [TestComponent],
      });
      fixture = TestBed.createComponent(TestComponent);
      fixture.detectChanges();
      compiled = fixture.nativeElement;
    });

    afterEach(() => {
      fixture.destroy();
    });

    it('projects content', () => {
      expect(compiled.textContent).toMatch(/Title/);
    });

    it('auto assigns an id if none is given', () => {
      const testme = compiled.querySelector('clr-stack-label.one');
      expect(testme.hasAttribute('id')).toBe(true);
      expect(testme.getAttribute('id').indexOf('clr-stack-label-clr-id-') > -1).toBe(true);
    });

    it('keeps the id if the stack-view-label already has one', () => {
      const testme = compiled.querySelector('clr-stack-label.two');
      expect(testme.hasAttribute('id')).toBe(true);
      expect(testme.getAttribute('id')).toBe('ohai');
    });
  });
}
