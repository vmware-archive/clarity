/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrappedColumn } from './wrapped-column';

@Component({
  template: `
        <dg-wrapped-column #wrapper>Hello World!</dg-wrapped-column>
    `,
})
class WrappedColumnTest {
  @ViewChild('wrapper') wrapper: WrappedColumn;
}

interface TestContext {
  fixture: ComponentFixture<WrappedColumnTest>;
  wrapper: WrappedColumn;
}

export default function(): void {
  describe('WrappedColumn', () => {
    beforeEach(function(this: TestContext) {
      TestBed.configureTestingModule({ declarations: [WrappedColumn, WrappedColumnTest] });
      this.fixture = TestBed.createComponent(WrappedColumnTest);
      this.wrapper = this.fixture.componentInstance.wrapper;
      this.fixture.detectChanges();
    });
    it('should have a columnView', function(this: TestContext) {
      expect(this.wrapper.columnView).toBeDefined();
    });
    it('should have a templateRef to the portal', function(this: TestContext) {
      expect(this.wrapper.templateRef).toBeDefined();
    });
    it('projects content into the template', function(this: TestContext) {
      expect(this.wrapper.columnView.rootNodes[0].textContent.trim()).toBe('Hello World!');
    });
  });
}
