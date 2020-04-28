/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { ClrStackView } from './stack-view';
import { ClrStackViewModule } from './stack-view.module';

@Component({
  template: `
        <clr-stack-header>
            Title
            <a class="stack-action">Action</a>
        </clr-stack-header>
   `,
})
class TestComponent {}

export default function(): void {
  'use strict';
  describe('StackHeader', () => {
    let fixture: ComponentFixture<any>;
    let compiled: any;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [ClrStackViewModule, FormsModule],
        declarations: [TestComponent],
        providers: [ClrStackView],
      });
      fixture = TestBed.createComponent(TestComponent);
      fixture.detectChanges();
      compiled = fixture.nativeElement;
    });

    afterEach(() => {
      fixture.destroy();
    });

    /**
     * There are basically no tests at the moment because the StackHeader component itself
     * doesn't do anything apart from projecting content.
     *
     * This will change when inline editing becomes a public feature.
     */

    it('projects content', () => {
      expect(compiled.textContent).toMatch(/Title/);
      expect(compiled.textContent).toMatch(/Action/);
    });
  });
}
