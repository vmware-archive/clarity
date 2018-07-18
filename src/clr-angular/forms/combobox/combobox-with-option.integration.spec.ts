/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';

import { TestContext } from '../../data/datagrid/helpers.spec';

import { ClrCombobox } from './combobox';
import { ClrOptions } from './options';
import { ClrOption } from './option';

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

export default function(): void {
  describe('Rendering Selected Option', () => {
    let context: TestContext<ClrCombobox<string>, TestOptionSelection>;

    beforeEach(function() {
      context = this.create(ClrCombobox, TestOptionSelection, [], [ClrCombobox, ClrOptions, ClrOption]);
    });

    it('renders the selected option in the input when it is clicked', () => {
      const options = context.clarityElement.querySelectorAll('.clr-option');
      const input: HTMLElement = context.clarityElement.querySelector('.clr-combobox-input');

      expect(input.children.length).toBe(0);

      options[0].click();

      expect(input.textContent).toMatch(/Option 1/);
    });

    it('sets the contenteditable attribute to false on the rendered option', () => {
      const options = context.clarityElement.querySelectorAll('.clr-option');
      options[0].click();

      const selectedOption: HTMLElement = context.clarityElement.querySelector('.clr-combobox-input .clr-option');
      const contentEditableAttribute = selectedOption.getAttribute('contenteditable');

      expect(contentEditableAttribute).toBe('false');
    });

    it('clears the previous selection and renders the new selection in the input', () => {
      const options = context.clarityElement.querySelectorAll('.clr-option');
      const input: HTMLElement = context.clarityElement.querySelector('.clr-combobox-input');

      options[0].click();

      expect(input.children.length).toBe(1);
      expect(input.textContent).toMatch(/Option 1/);

      options[1].click();

      expect(input.children.length).toBe(1);
      expect(input.textContent).toMatch(/Option 2/);
    });
  });
}
