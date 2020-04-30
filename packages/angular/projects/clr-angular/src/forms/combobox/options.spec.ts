/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, ElementRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { TestContext } from '../../data/datagrid/helpers.spec';
import { POPOVER_HOST_ANCHOR } from '../../popover/common/popover-host-anchor.token';
import { ClrPopoverToggleService } from '../../utils/popover/providers/popover-toggle.service';

import { ClrOptions } from './options';

@Component({
  template: `
    <clr-options>
      Test
    </clr-options>
  `,
  providers: [ClrPopoverToggleService, { provide: POPOVER_HOST_ANCHOR, useExisting: ElementRef }],
})
class TestComponent {}

@Component({
  template: `
    <clr-options>
      Test
    </clr-options>
  `,
  providers: [ClrPopoverToggleService],
})
class TestComponentWithError {}

export default function (): void {
  describe('Select Options Menu Component', function () {
    let context: TestContext<ClrOptions, TestComponent>;
    let toggleService: ClrPopoverToggleService;

    describe('View Basics', function () {
      beforeEach(function () {
        context = this.createOnly(ClrOptions, TestComponent, []);
        toggleService = context.getClarityProvider(ClrPopoverToggleService);
      });

      it('projects content', function () {
        const menu = context.testElement.querySelector('clr-options');
        expect(menu.textContent).toMatch(/Test/);
      });

      it('has the correct class', function () {
        const menu = context.testElement.querySelector('clr-options');
        expect(menu.classList.contains('clr-options')).toBe(true);
      });

      it('does not close the menu when you click on the menu', () => {
        toggleService.open = true;
        const menu = context.testElement.querySelector('clr-options');
        menu.click();

        expect(toggleService.open).toBe(true);
      });
    });

    describe('Error Condition', function () {
      it('throws an error when options menu is not used inside of clr-combobox', function () {
        TestBed.configureTestingModule({ declarations: [ClrOptions, TestComponentWithError] });
        expect(() => {
          TestBed.createComponent(TestComponentWithError);
        }).toThrowError('clr-options should only be used inside of a clr-combobox');
      });
    });
  });
}
