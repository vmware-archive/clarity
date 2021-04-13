/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Subscription } from 'rxjs';

import { OptionSelectionService } from './option-selection.service';
import { SingleSelectComboboxModel } from '../model/single-select-combobox.model';
import { ComboboxModel } from '../model/combobox.model';

export default function () {
  describe('Option Selection Service', () => {
    let optionSelectionService: OptionSelectionService<string>;

    beforeEach(() => {
      optionSelectionService = new OptionSelectionService();
      optionSelectionService.selectionModel = new SingleSelectComboboxModel<string>() as ComboboxModel<string>;
    });

    it('provides an observable of changes to the input value', () => {
      expect(optionSelectionService.inputChanged).toBeDefined();
    });

    it('provides an observable to notify to render the option', () => {
      expect(optionSelectionService.selectionChanged).toBeDefined();
    });

    it('notifies that the value has changed', () => {
      let selectedValue: string;
      const subscription: Subscription = optionSelectionService.inputChanged.subscribe((value: string) => {
        selectedValue = value;
      });
      optionSelectionService.currentInput = 'Option 1';
      expect(selectedValue).toBe('Option 1');
      optionSelectionService.currentInput = 'Option 2';
      expect(selectedValue).toBe('Option 2');
      subscription.unsubscribe();
    });

    it('notifies that the option has changed', () => {
      let selectedOption: string;
      const subscription: Subscription = optionSelectionService.selectionChanged.subscribe(
        (option: ComboboxModel<string>) => {
          selectedOption = option.pop();
        }
      );
      optionSelectionService.select('Option 1');
      expect(selectedOption).toBe('Option 1');
      optionSelectionService.select('Option 2');
      expect(selectedOption).toBe('Option 2');
      subscription.unsubscribe();
    });

    it('can toggle an option and emits selection events', () => {
      let selectedOption: string;
      const subscription: Subscription = optionSelectionService.selectionChanged.subscribe(
        (option: ComboboxModel<string>) => {
          selectedOption = option.model as string;
        }
      );
      optionSelectionService.toggle('Option 1');
      expect(selectedOption).toBe('Option 1');
      optionSelectionService.toggle('Option 1');
      expect(selectedOption).toBeNull();
      subscription.unsubscribe();
    });

    it('does not notify when the value remains the same', () => {
      let count = 0;
      const sub: Subscription = optionSelectionService.inputChanged.subscribe(() => {
        count++;
      });
      optionSelectionService.select('Option 1');
      expect(count).toBe(1);
      optionSelectionService.select('Option 1');
      expect(count).toBe(1);
      sub.unsubscribe();
    });

    it('does not notify when the selected option remains the same', () => {
      let count = 0;
      const sub: Subscription = optionSelectionService.selectionChanged.subscribe(() => {
        count++;
      });
      optionSelectionService.select('Option 1');
      expect(count).toBe(1);
      optionSelectionService.select('Option 1');
      expect(count).toBe(1);
      sub.unsubscribe();
    });

    it('updates loading state if changed externally', () => {
      // protect against future implementation changes, as this public property is shared by different components
      expect(optionSelectionService.loading).toBeFalse();
      optionSelectionService.loading = true;
      expect(optionSelectionService.loading).toBeTrue();
      optionSelectionService.loading = false;
      expect(optionSelectionService.loading).toBeFalse();
    });

    it('clears selection in single selection mode when input empty', () => {
      optionSelectionService.currentInput = 'Option 1';
      optionSelectionService.setSelectionValue('Test value');
      expect(optionSelectionService.selectionModel.isEmpty()).toBeFalse();
      optionSelectionService.currentInput = '';
      expect(optionSelectionService.selectionModel.isEmpty()).toBeTrue();
    });
  });
}
