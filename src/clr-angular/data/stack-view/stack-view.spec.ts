/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { ClrStackViewModule } from './stack-view.module';

@Component({
  template: `
        <clr-stack-view #stackView>
            <clr-stack-header>Title</clr-stack-header>
            <clr-stack-block>
                <clr-stack-label>Label</clr-stack-label>
                <clr-stack-content>Content</clr-stack-content>
            </clr-stack-block>
        </clr-stack-view>
   `,
})
class TestComponent {}

export default function(): void {
  'use strict';
  describe('StackView', () => {
    let fixture: ComponentFixture<any>;
    let compiled: any;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [ClrStackViewModule, NoopAnimationsModule],
        declarations: [TestComponent],
      });

      fixture = TestBed.createComponent(TestComponent);
      fixture.detectChanges();
      compiled = fixture.nativeElement;
    });

    afterEach(() => {
      fixture.destroy();
    });

    /**
     * There are basically no tests at the moment because the StackView component itself
     * doesn't do anything apart from projecting content.
     *
     * This will change when inline editing becomes a public feature.
     */

    it('projects content', () => {
      expect(compiled.textContent).toMatch(/Title/);
      expect(compiled.textContent).toMatch(/Label/);
      expect(compiled.textContent).toMatch(/Content/);
    });
  });
}
