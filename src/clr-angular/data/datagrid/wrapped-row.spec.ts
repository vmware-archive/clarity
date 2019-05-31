/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrappedRow } from './wrapped-row';

@Component({
  template: `
        <dg-wrapped-row #wrapper>Hello World!<dg-wrapped-row>
    `,
})
class WrappedRowTest {
  @ViewChild('wrapper') wrapper: WrappedRow;
}

interface TestContext {
  fixture: ComponentFixture<WrappedRowTest>;
  wrapper: WrappedRow;
}

export default function(): void {
  describe('WrappedRow', () => {
    beforeEach(function(this: TestContext) {
      TestBed.configureTestingModule({ declarations: [WrappedRow, WrappedRowTest] });
      this.fixture = TestBed.createComponent(WrappedRowTest);
      this.wrapper = this.fixture.componentInstance.wrapper;
      this.fixture.detectChanges();
    });
    it('should have a rowView', function(this: TestContext) {
      expect(this.wrapper.rowView).toBeDefined();
    });
    it('should have a templateRef to the portal', function(this: TestContext) {
      expect(this.wrapper.templateRef).toBeDefined();
    });
    it('should project content into the template', function(this: TestContext) {
      expect(this.wrapper.rowView.rootNodes[0].textContent.trim()).toBe('Hello World!');
    });
  });
}
