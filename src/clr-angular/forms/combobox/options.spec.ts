/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, ElementRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { TestContext } from '../../data/datagrid/helpers.spec';
import { POPOVER_HOST_ANCHOR } from '../../popover/common/popover-host-anchor.token';
import { IfOpenService } from '../../utils/conditional/if-open.service';

import { ClrOptions } from './options';

@Component({
  template: `
        <clr-options>
            Test
        </clr-options>
    `,
  providers: [IfOpenService, { provide: POPOVER_HOST_ANCHOR, useExisting: ElementRef }],
})
class TestComponent {}

@Component({
  template: `
        <clr-options>
            Test
        </clr-options>
    `,
  providers: [IfOpenService],
})
class TestComponentWithError {}

export default function(): void {
  describe('Select Options Menu Component', function() {
    let context: TestContext<ClrOptions, TestComponent>;
    let ifOpenService: IfOpenService;

    describe('View Basics', function() {
      beforeEach(function() {
        context = this.createOnly(ClrOptions, TestComponent, []);
        ifOpenService = context.getClarityProvider(IfOpenService);
      });

      it('projects content', function() {
        const menu = context.testElement.querySelector('clr-options');
        expect(menu.textContent).toMatch(/Test/);
      });

      it('has the correct class', function() {
        const menu = context.testElement.querySelector('clr-options');
        expect(menu.classList.contains('clr-options')).toBe(true);
      });

      it('does not close the menu when you click on the menu', () => {
        ifOpenService.open = true;
        const menu = context.testElement.querySelector('clr-options');
        menu.click();

        expect(ifOpenService.open).toBe(true);
      });
    });

    describe('Error Condition', function() {
      it('throws an error when options menu is not used inside of clr-combobox', function() {
        TestBed.configureTestingModule({ declarations: [ClrOptions, TestComponentWithError] });
        expect(() => {
          TestBed.createComponent(TestComponentWithError);
        }).toThrowError('clr-options should only be used inside of a clr-combobox');
      });
    });
  });
}
