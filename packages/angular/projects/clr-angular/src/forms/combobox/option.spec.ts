/**
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, ElementRef, ViewChild } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { TestContext } from '../../data/datagrid/helpers.spec';
import { POPOVER_HOST_ANCHOR } from '../../popover/common/popover-host-anchor.token';
import { ClrPopoverToggleService } from '../../utils/popover/providers/popover-toggle.service';

import { ClrOption } from './option';
import { OptionSelectionService } from './providers/option-selection.service';

@Component({
  template: `
    <clr-option [clrValue]="'Test'" #option>
      Test
    </clr-option>
  `,
  providers: [
    ClrPopoverToggleService,
    { provide: POPOVER_HOST_ANCHOR, useExisting: ElementRef },
    OptionSelectionService,
  ],
})
class TestComponent {
  @ViewChild(ClrOption) option;
}

@Component({
  template: `
    <clr-option>
      Test
    </clr-option>
  `,
  providers: [ClrPopoverToggleService, OptionSelectionService],
})
class TestComponentWithError {}

export default function (): void {
  describe('Combobox Option Component', function () {
    let context: TestContext<ClrOption<string>, TestComponent>;
    let toggleService: ClrPopoverToggleService;
    let optionSelectionService: OptionSelectionService<string>;

    describe('View Basics', function () {
      beforeEach(function () {
        context = this.createOnly(ClrOption, TestComponent, []);
        toggleService = context.getClarityProvider(ClrPopoverToggleService);
      });

      it('projects content', () => {
        expect(context.clarityElement.textContent.trim()).toMatch('Test');
      });

      it('closes the menu when an option is clicked', () => {
        const option = context.clarityElement;
        spyOn(context.clarityDirective, 'updateSelectionAndCloseMenu');

        option.click();

        expect(context.clarityDirective.updateSelectionAndCloseMenu).toHaveBeenCalled();
      });

      it('adds the active class on the option when it is clicked', () => {
        let option: HTMLElement = context.clarityElement;
        expect(option.classList.contains('active')).toBe(false);

        option.click();
        context.detectChanges();

        option = context.clarityElement;
        expect(option.classList.contains('active')).toBe(true);
      });
    });

    describe('Typescript API', function () {
      beforeEach(function () {
        context = this.createOnly(ClrOption, TestComponent, []);
        toggleService = context.getClarityProvider(ClrPopoverToggleService);
        optionSelectionService = context.getClarityProvider(OptionSelectionService) as OptionSelectionService<string>;
      });

      it('calls to render the option when an option is clicked', () => {
        spyOn(optionSelectionService, 'renderSelection');

        context.clarityDirective.updateSelectionAndCloseMenu();

        expect(optionSelectionService.renderSelection).toHaveBeenCalled();
      });

      it('calls to update the selection when an option is clicked', () => {
        spyOn(optionSelectionService, 'updateSelection');

        context.clarityDirective.updateSelectionAndCloseMenu();

        expect(optionSelectionService.updateSelection).toHaveBeenCalled();
      });

      it('closes the menu when an option is clicked', () => {
        toggleService.open = true;

        context.clarityDirective.updateSelectionAndCloseMenu();

        expect(toggleService.open).toBe(false);
      });

      it('provides a ref to the ElementRef of the option', () => {
        expect(context.clarityDirective.elRef).toBeDefined();
      });

      it('updates the selection when a new value is received', () => {
        expect(context.testComponent.option.selected).toBe(false);

        optionSelectionService.updateSelection('Test');

        expect(context.testComponent.option.selected).toBe(true);

        // Even if the option is clicked multiple times
        optionSelectionService.updateSelection('Test');

        expect(context.testComponent.option.selected).toBe(true);

        optionSelectionService.updateSelection('Fake Test');

        expect(context.testComponent.option.selected).toBe(false);
      });
    });

    describe('Error Condition', function () {
      it('throws an error when option is not used inside of clr-combobox', function () {
        TestBed.configureTestingModule({ declarations: [ClrOption, TestComponentWithError] });
        expect(() => {
          TestBed.createComponent(TestComponentWithError);
        }).toThrowError('clr-option should only be used inside of a clr-combobox');
      });
    });
  });
}
