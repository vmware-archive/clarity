/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';

import { TestContext } from '../../data/datagrid/helpers.spec';

import { ClrCombobox } from './combobox';
import { ClrPopoverToggleService } from '../../utils/popover/providers/popover-toggle.service';
import { fakeAsync, tick } from '@angular/core/testing';

@Component({
  template: `
    <clr-combobox>
      <clr-option [clrValue]="'Option 1'">
        Option 1
      </clr-option>
      <clr-option [clrValue]="'Option 2'">
        Option 2
      </clr-option>
    </clr-combobox>
  `,
})
class TestOptionSelection {}

export default function (): void {
  describe('Rendering Selected Option', function () {
    let context: TestContext<ClrCombobox<string>, TestOptionSelection>;
    let toggleService: ClrPopoverToggleService;

    beforeEach(function () {
      context = this.create(ClrCombobox, TestOptionSelection, [], []);
      toggleService = context.getClarityProvider(ClrPopoverToggleService);
      toggleService.open = true;
      context.detectChanges();
    });

    afterEach(function () {
      toggleService.open = false;
      context.detectChanges();
    });

    it('renders the selected option in the input when it is clicked', fakeAsync(function () {
      const options = document.body.querySelectorAll('.clr-combobox-option');
      const selection: HTMLInputElement = context.clarityElement.querySelector('.clr-combobox-input');

      expect(selection.value).toMatch('');
      (options[0] as HTMLElement).click();
      context.detectChanges();
      tick();
      expect(selection.value).toMatch(/Option 1/);
    }));

    it('clears the previous selection and renders the new selection', fakeAsync(function () {
      const options = document.body.querySelectorAll('.clr-combobox-option');
      const selection: HTMLInputElement = context.clarityElement.querySelector('.clr-combobox-input');
      (options[0] as HTMLElement).click();
      context.detectChanges();
      tick();
      expect(selection.value).toMatch(/Option 1/);
      toggleService.open = true;
      (options[1] as HTMLElement).click();
      context.detectChanges();
      tick();
      expect(selection.value).toMatch(/Option 2/);
    }));
  });
}
