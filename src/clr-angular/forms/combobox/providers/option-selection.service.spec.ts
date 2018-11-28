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
      fakeOption1.elRef = { nativeElement: { textContent: 'Fake1' } };
      fakeOption1.elRef = { nativeElement: { textContent: 'Fake2' } };
    });

    it('provides an observable to notify that selected option has been changed', () => {
      expect(optionSelectionService.selectionChanged).toBeDefined();
    });

    it('notifies that the option has changed', () => {
      let selectedOption: ClrOption<string>;
      const subscription: Subscription = optionSelectionService.selectionChanged.subscribe(
        (option: ClrOption<string>) => {
          selectedOption = option;
        }
      );

      optionSelectionService.setSelection(fakeOption1);
      expect(selectedOption).toBe(fakeOption1);

      optionSelectionService.setSelection(fakeOption2);
      expect(selectedOption).toBe(fakeOption2);

      subscription.unsubscribe();
    });

    it('does not notify when the selected option remains the same', () => {
      let count: number = -1; // as it's a BehaviorSubject ignore the first call
      const sub: Subscription = optionSelectionService.selectionChanged.subscribe(() => {
        count++;
      });

      optionSelectionService.setSelection(fakeOption1);
      expect(count).toBe(1);

      optionSelectionService.setSelection(fakeOption1);
      expect(count).toBe(1);

      sub.unsubscribe();
    });

    it('provides an observable to notify that user given search value has changed', () => {
      expect(optionSelectionService.searchValueChanged).toBeDefined();
    });

    it('notifies that the user search value has changed', () => {
      let searchValue: string;
      const subscription: Subscription = optionSelectionService.searchValueChanged.subscribe((value: string) => {
        searchValue = value;
      });

      optionSelectionService.setSearchValue('fakeSearch1');
      expect(searchValue).toBe('fakeSearch1');

      optionSelectionService.setSearchValue('fakeSearch2');
      expect(searchValue).toBe('fakeSearch2');

      subscription.unsubscribe();
    });

    it('does not notify when the user search value remains the same', () => {
      let count: number = -1; // as it's a BehaviorSubject ignore the first call
      const sub: Subscription = optionSelectionService.searchValueChanged.subscribe(() => {
        count++;
      });

      optionSelectionService.setSearchValue('fakeSearch1');
      expect(count).toBe(1);

      optionSelectionService.setSearchValue('fakeSearch1');
      expect(count).toBe(1);

      sub.unsubscribe();
    });

    it('notifies that the option has reset, when user enters a search value', () => {
      let selectedOption: ClrOption<string>;
      const selectionSub: Subscription = optionSelectionService.selectionChanged.subscribe(
        (option: ClrOption<string>) => {
          selectedOption = option;
        }
      );

      let searchValue: string;
      const searchSub: Subscription = optionSelectionService.searchValueChanged.subscribe((value: string) => {
        searchValue = value;
      });

      optionSelectionService.setSelection(fakeOption1);
      expect(selectedOption).toBe(fakeOption1);
      expect(searchValue).toBeNull();

      optionSelectionService.setSearchValue('fakeSearch2');
      expect(selectedOption).toBe(undefined);
      expect(searchValue).toBe('fakeSearch2');

      selectionSub.unsubscribe();
      searchSub.unsubscribe();
    });
  });
}
