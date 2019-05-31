/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrappedCell } from './wrapped-cell';

@Component({
  template: `
        <dg-wrapped-cell #wrapper>Hello World!</dg-wrapped-cell>
    `,
})
class WrappedCellTest {
  @ViewChild('wrapper') wrapper: WrappedCell;
}

interface TestContext {
  fixture: ComponentFixture<WrappedCellTest>;
  wrapper: WrappedCell;
}

export default function(): void {
  describe('WrappedCell', () => {
    beforeEach(function(this: TestContext) {
      TestBed.configureTestingModule({ declarations: [WrappedCell, WrappedCellTest] });
      this.fixture = TestBed.createComponent(WrappedCellTest);
      this.wrapper = this.fixture.componentInstance.wrapper;
      this.fixture.detectChanges();
    });
    it('should have a cellView', function(this: TestContext) {
      expect(this.wrapper.cellView).toBeDefined();
    });
    it('should have a templateRef to the portal', function(this: TestContext) {
      expect(this.wrapper.templateRef).toBeDefined();
    });
    it('projects content into the template', function(this: TestContext) {
      expect(this.wrapper.cellView.rootNodes[0].textContent.trim()).toBe('Hello World!');
    });
  });
}
