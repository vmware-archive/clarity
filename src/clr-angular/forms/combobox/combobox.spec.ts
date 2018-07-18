/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

import { TestContext } from '../../data/datagrid/helpers.spec';
import { IfOpenService } from '../../utils/conditional/if-open.service';
import { TAB, UP_ARROW } from '../../utils/key-codes/key-codes';
import { createKeyboardEvent } from '../datepicker/utils/test-utils';

import { ClrCombobox } from './combobox';
import { ClrOption } from './option';
import { ClrOptions } from './options';

@Component({
  template: `
        <clr-combobox>
            <div class="menu">
                Test
            </div>
        </clr-combobox>
    `,
})
class TestComponent {}

export default function(): void {
  describe('Combobox Component', function() {
    let context: TestContext<ClrCombobox<string>, TestComponent>;
    let ifOpenService: IfOpenService;

    describe('Typescript API', function() {
      beforeEach(function() {
        context = this.create(ClrCombobox, TestComponent, [], [ClrCombobox, ClrOptions, ClrOption]);
        ifOpenService = context.getClarityProvider(IfOpenService);
      });

      it('provides a method to toggle the popover on click', () => {
        expect(ifOpenService.open).toBeUndefined();

        context.clarityDirective.toggleOptionsMenu(new MouseEvent('click'));

        expect(open).not.toBe(true);

        context.clarityDirective.toggleOptionsMenu(new MouseEvent('click'));

        expect(open).not.toBe(false);
      });

      it('provides a method to close the popover on tab key press', () => {
        ifOpenService.open = true;

        context.clarityDirective.closeMenuOnTabPress(createKeyboardEvent(UP_ARROW, 'up-arrow'));

        expect(ifOpenService.open).toBe(true);

        context.clarityDirective.closeMenuOnTabPress(createKeyboardEvent(TAB, 'tab'));

        expect(ifOpenService.open).toBe(false);
      });

      it('provides a method to focus on the input', () => {
        let focused = context.clarityElement.querySelector(':focus');

        expect(focused).toBeNull();

        context.clarityDirective.focusInput();

        focused = context.clarityElement.querySelector(':focus');

        expect(focused.classList.contains('clr-combobox-input')).toBe(true);
      });
    });

    describe('View Basics', () => {
      beforeEach(function() {
        context = this.create(ClrCombobox, TestComponent, [], [ClrCombobox, ClrOptions, ClrOption]);
        ifOpenService = context.getClarityProvider(IfOpenService);
      });

      it('projects content', () => {
        expect(context.clarityElement.textContent).toMatch(/Test/);
      });

      it("creates the clr-options menu when the consumer hasn't provided it", () => {
        const menus = context.clarityElement.querySelectorAll('clr-options');
        expect(menus.length).toBe(1);
        expect(menus[0].innerHTML).toMatch(/Test/);
      });

      it('adds the .clr-combobox class on the host', () => {
        expect(context.clarityElement.classList.contains('clr-combobox')).toBe(true);
      });

      it('contains an editable input', () => {
        const input = context.clarityElement.querySelector('.clr-combobox-input');
        expect(input).not.toBeNull();
        expect(input.hasAttribute('contenteditable')).toBe(true);
        expect(input.getAttribute('contenteditable')).toBe('true');
      });

      it('contains a options menu trigger', () => {
        expect(context.clarityElement.querySelector('.clr-combobox-trigger')).not.toBeNull();
      });

      it('opens the menu on the trigger click', () => {
        const trigger = context.clarityElement.querySelector('.clr-combobox-trigger');

        expect(ifOpenService.open).toBeUndefined();

        trigger.click();

        expect(ifOpenService.open).toBe(true);
      });

      it('keeps the options menu open when the input is clicked', () => {
        ifOpenService.open = true;

        const input = context.clarityElement.querySelector('.clr-combobox-input');
        input.click();

        expect(ifOpenService.open).toBe(true);
      });

      it('closes the menu when the select trigger is clicked', () => {
        ifOpenService.open = true;

        const trigger = context.testElement.querySelector('.clr-combobox-trigger');
        trigger.click();

        expect(ifOpenService.open).toBe(false);
      });

      it('calls the focusInput method when the host is clicked', () => {
        spyOn(context.clarityDirective, 'focusInput');

        const select = context.clarityElement;

        select.click();

        expect(context.clarityDirective.focusInput).toHaveBeenCalled();
      });

      it('calls the closeMenuOnTabPress method when a tab keyboard event is dispatched on the input', () => {
        spyOn(context.clarityDirective, 'closeMenuOnTabPress');

        const input = context.clarityElement.querySelector('.clr-combobox-input');
        input.dispatchEvent(createKeyboardEvent(TAB, 'keydown'));

        expect(context.clarityDirective.closeMenuOnTabPress).toHaveBeenCalled();
      });
    });
  });
}
