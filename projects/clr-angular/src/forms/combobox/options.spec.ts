/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, ElementRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { TestContext } from '../../data/datagrid/helpers.spec';
import { POPOVER_HOST_ANCHOR } from '../../popover/common/popover-host-anchor.token';
import { ClrPopoverToggleService } from '../../utils/popover/providers/popover-toggle.service';

import { ClrOptions } from './options';
import { OptionSelectionService } from './providers/option-selection.service';
import { IF_ACTIVE_ID_PROVIDER } from '../../utils/conditional/if-active.service';
import { AriaService } from '../../utils/aria/aria.service';
import { ComboboxFocusHandler } from './providers/combobox-focus-handler.service';
import { ClrCommonStringsService } from '../../utils/i18n/common-strings.service';
import { UNIQUE_ID_PROVIDER } from '../../utils/id-generator/id-generator.service';
import { FocusService } from '../../utils/focus/focus.service';

const OPTION_PROVIDERS = [
  ClrPopoverToggleService,
  IF_ACTIVE_ID_PROVIDER,
  UNIQUE_ID_PROVIDER,
  OptionSelectionService,
  AriaService,
  FocusService,
  ComboboxFocusHandler,
  ClrCommonStringsService,
];

@Component({
  template: ` <clr-options> Test </clr-options> `,
  providers: [...OPTION_PROVIDERS, { provide: POPOVER_HOST_ANCHOR, useExisting: ElementRef }],
})
class TestComponent {}

@Component({
  template: `
    <clr-options>
      <clr-option *ngIf="showOption">1</clr-option>
    </clr-options>
  `,
  providers: [...OPTION_PROVIDERS, { provide: POPOVER_HOST_ANCHOR, useExisting: ElementRef }],
})
class TestComponentWithChild {
  showOption = true;
}

@Component({
  template: ` <clr-options> Test </clr-options> `,
  providers: OPTION_PROVIDERS,
})
class TestComponentWithError {}

export default function (): void {
  describe('Select Options Menu Component', function () {
    let context:
      | TestContext<ClrOptions<string>, TestComponent>
      | TestContext<ClrOptions<string>, TestComponentWithChild>;
    let toggleService: ClrPopoverToggleService;

    describe('View Basics', function () {
      beforeEach(function () {
        context = this.createOnly(ClrOptions, TestComponent, []);
        toggleService = context.getClarityProvider(ClrPopoverToggleService);
      });

      afterEach(function () {
        toggleService.open = false;
        context.detectChanges();
      });

      it('projects content', function () {
        const menu = context.testElement.querySelector('clr-options');
        expect(menu.textContent).toMatch(/Test/);
      });

      it('has the correct class', function () {
        const menu = context.testElement.querySelector('clr-options');
        expect(menu.classList.contains('clr-combobox-options')).toBe(true);
      });

      it('does not close the menu when you click on the menu', () => {
        toggleService.open = true;
        const menu = context.testElement.querySelector('clr-options');
        menu.click();

        expect(toggleService.open).toBe(true);
      });

      it('handles loading and no-result states', function () {
        const selectionService: OptionSelectionService<any> = context.getClarityProvider(OptionSelectionService);
        selectionService.loading = true;
        context.fixture.detectChanges();
        const menu = context.testElement.querySelector('clr-options');
        expect(menu.textContent).toMatch(/Loading/);
        expect(menu.textContent).toMatch(/Searching for matches for/);
        selectionService.loading = false;
        context.fixture.detectChanges();
        expect(menu.textContent).toMatch(/No results/);
      });
    });

    describe('Template API', function () {
      describe('Plain text content', function () {
        beforeEach(function () {
          context = this.createOnly(ClrOptions, TestComponent, []);
        });

        it('has a searchText method', function () {
          const searchText = context.clarityDirective.searchText('test');
          expect(searchText).toEqual('Searching for matches for "test"');
        });
      });

      describe('ClrOption content', function () {
        beforeEach(function () {
          context = this.create(ClrOptions, TestComponentWithChild, []);
        });

        it('can add option items', function () {
          expect(context.clarityDirective.items.length).toBe(1);
          (context.testComponent as TestComponentWithChild).showOption = false;
          context.detectChanges();
          expect(context.clarityDirective.items.length).toBe(0);
        });

        it('has "emptyOptions" field that depend on the items', function () {
          expect(context.clarityDirective.emptyOptions).toBeFalse();
          (context.testComponent as TestComponentWithChild).showOption = false;
          context.detectChanges();
          expect(context.clarityDirective.emptyOptions).toBeTrue();
        });
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
