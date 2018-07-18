/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';

import { IfOpenService } from '../../../utils/conditional/if-open.service';
import { ClrOption } from '../option';

import { OptionSelectionService } from './option-selection.service';

export default function() {
  describe('Option Selection Service', () => {
    let optionSelectionService: OptionSelectionService<string>;
    let fakeOption1: ClrOption<string>;
    let fakeOption2: ClrOption<string>;

    beforeEach(() => {
      optionSelectionService = new OptionSelectionService();
      fakeOption1 = new ClrOption(new IfOpenService(), new ElementRef(null), null, optionSelectionService);
      fakeOption2 = new ClrOption(new IfOpenService(), new ElementRef(null), null, optionSelectionService);
    });

    it('provides an observable to subscribe to change in value', () => {
      expect(optionSelectionService.valueChanged).toBeDefined();
    });

    it('provides an observable to notify to render the option', () => {
      expect(optionSelectionService.renderSelectionChanged).toBeDefined();
    });

    it('notifies that the value has changed', () => {
      let selectedValue: string;
      const subscription: Subscription = optionSelectionService.valueChanged.subscribe((value: string) => {
        selectedValue = value;
      });

      optionSelectionService.updateSelection('Option 1');

      expect(selectedValue).toBe('Option 1');

      optionSelectionService.updateSelection('Option 2');

      expect(selectedValue).toBe('Option 2');

      subscription.unsubscribe();
    });

    it('notifies that the option has changed', () => {
      let selectedOption: ClrOption<string>;
      const subscription: Subscription = optionSelectionService.renderSelectionChanged.subscribe(
        (option: ClrOption<string>) => {
          selectedOption = option;
        }
      );

      optionSelectionService.renderSelection(fakeOption1);

      expect(selectedOption).toBe(fakeOption1);

      optionSelectionService.renderSelection(fakeOption2);

      expect(selectedOption).toBe(fakeOption2);

      subscription.unsubscribe();
    });

    it('does not notify when the value remains the same', () => {
      let count: number = 0;
      const sub: Subscription = optionSelectionService.valueChanged.subscribe(() => {
        count++;
      });

      optionSelectionService.updateSelection('Option 1');

      expect(count).toBe(1);

      optionSelectionService.updateSelection('Option 1');

      expect(count).toBe(1);

      sub.unsubscribe();
    });

    it('does not notify when the selected option remains the same', () => {
      let count: number = 0;
      const sub: Subscription = optionSelectionService.renderSelectionChanged.subscribe(() => {
        count++;
      });

      optionSelectionService.renderSelection(fakeOption1);

      expect(count).toBe(1);

      optionSelectionService.renderSelection(fakeOption1);

      expect(count).toBe(1);

      sub.unsubscribe();
    });
  });
}
