/**
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, ElementRef, ViewChild } from '@angular/core';

import { TestContext } from '../../data/datagrid/helpers.spec';
import { POPOVER_HOST_ANCHOR } from '../../popover/common/popover-host-anchor.token';
import { ClrPopoverToggleService } from '../../utils/popover/providers/popover-toggle.service';

import { ClrOption } from './option';
import { OptionSelectionService } from './providers/option-selection.service';
import { SingleSelectComboboxModel } from './model/single-select-combobox.model';
import { ComboboxModel } from './model/combobox.model';
import { ComboboxFocusHandler } from './providers/combobox-focus-handler.service';
import { UNIQUE_ID_PROVIDER } from '../../utils/id-generator/id-generator.service';

@Component({
  template: ` <clr-option [clrValue]="value" [id]="id" #option> Test </clr-option> `,
  providers: [
    ClrPopoverToggleService,
    { provide: POPOVER_HOST_ANCHOR, useExisting: ElementRef },
    SingleSelectComboboxModel,
    ComboboxFocusHandler,
    UNIQUE_ID_PROVIDER,
    OptionSelectionService,
  ],
})
class TestComponent {
  @ViewChild(ClrOption) option;
  value = 'Test';
  id = 'test-id';
}

export default function (): void {
  describe('Combobox Option Component', function () {
    let context: TestContext<ClrOption<string>, TestComponent>;
    let toggleService: ClrPopoverToggleService;
    let optionSelectionService: OptionSelectionService<string>;

    describe('View Basics', function () {
      beforeEach(function () {
        context = this.createOnly(ClrOption, TestComponent, []);
        toggleService = context.getClarityProvider(ClrPopoverToggleService);
        optionSelectionService = context.getClarityProvider(OptionSelectionService) as OptionSelectionService<string>;
        optionSelectionService.selectionModel = new SingleSelectComboboxModel<string>() as ComboboxModel<string>;
      });

      afterEach(function () {
        toggleService.open = false;
        context.detectChanges();
      });

      it('projects content', () => {
        expect(context.clarityElement.textContent.trim()).toMatch('Test');
      });

      it('adds the active class on the option when it is clicked', () => {
        let option: HTMLElement = context.clarityElement;
        expect(option.classList.contains('active')).toBe(false);

        option.click();
        context.detectChanges();

        option = context.clarityElement;
        expect(option.classList.contains('active')).toBe(true);
      });

      it('has and manages a "clr-focus" class', () => {
        const focusHandler: ComboboxFocusHandler<any> = context.getClarityProvider(ComboboxFocusHandler);
        expect(context.clarityElement.classList).not.toContain('clr-focus');
        focusHandler.pseudoFocus.select(context.clarityDirective.optionProxy);
        context.detectChanges();
        expect(context.clarityElement.classList).toContain('clr-focus');
      });
    });

    describe('Typescript API', function () {
      beforeEach(function () {
        context = this.createOnly(ClrOption, TestComponent, []);
        toggleService = context.getClarityProvider(ClrPopoverToggleService);
        optionSelectionService = context.getClarityProvider(OptionSelectionService) as OptionSelectionService<string>;
        optionSelectionService.selectionModel = new SingleSelectComboboxModel<string>();
      });

      afterEach(function () {
        toggleService.open = false;
        context.detectChanges();
      });

      it('calls to update the selection when an option is clicked', () => {
        spyOn(optionSelectionService, 'select');

        context.clarityDirective.onClick();

        expect(optionSelectionService.select).toHaveBeenCalled();
      });

      it('provides a ref to the ElementRef of the option', () => {
        expect(context.clarityDirective.elRef).toBeDefined();
      });

      it('updates the selection when a new value is received', () => {
        expect(context.testComponent.option.selected).toBe(false);

        optionSelectionService.select('Test');

        expect(context.testComponent.option.selected).toBe(true);

        // Even if the option is clicked multiple times
        optionSelectionService.select('Test');

        expect(context.testComponent.option.selected).toBe(true);

        optionSelectionService.select('Fake Test');

        expect(context.testComponent.option.selected).toBe(false);
      });
    });

    describe('Template API', function () {
      beforeEach(function () {
        context = this.createOnly(ClrOption, TestComponent, []);
      });

      it('defines optionProxy', () => {
        expect(context.clarityDirective.optionProxy).toBeDefined();
        expect(context.clarityDirective.optionProxy.id).toEqual('test-id');
        expect(context.clarityDirective.optionProxy.value).toEqual('Test');
      });

      it('optionProxy id and value can be redefined', () => {
        context.testComponent.id = 'another-id';
        context.testComponent.value = 'Another Test';
        context.detectChanges();
        expect(context.clarityDirective.optionProxy.id).toEqual('another-id');
        expect(context.clarityDirective.optionProxy.value).toEqual('Another Test');
      });
    });
  });
}
