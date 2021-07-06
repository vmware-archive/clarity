/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, ViewChild, Renderer2 } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ClrOptionItems } from './option-items.directive';
import { ClrComboboxModule } from './combobox.module';
import { OptionSelectionService } from './providers/option-selection.service';
import { ClrPopoverPositionService } from '../../utils/popover/providers/popover-position.service';
import { ClrPopoverEventsService } from '../../utils/popover/providers/popover-events.service';
import { ClrPopoverToggleService } from '../../utils/popover/providers/popover-toggle.service';

@Component({
  template: `
    <ul>
      <li *clrOptionItems="let n of numbers; trackBy: trackBy">{{ n }}</li>
    </ul>
  `,
})
class FullTest {
  @ViewChild(ClrOptionItems) optionItems: ClrOptionItems<number>;
  numbers = [0, 1, 2, 3];
  trackBy: (index: number, item: number) => any;
}

@Component({
  template: `
    <ul>
      <li *clrOptionItems="let n of numbers; trackBy: trackBy">{{ n }}</li>
    </ul>
  `,
})
class TrackByIndexTest {
  @ViewChild(ClrOptionItems) optionItems: ClrOptionItems<number>;
  numbers = [0, 1, 2, 3];
  trackBy = (index: number) => index;
}

@Component({
  template: `
    <ul>
      <li *clrOptionItems="let n of numbers; field: 'a'">{{ n.a }}</li>
    </ul>
  `,
})
class ObjectDataTest {
  @ViewChild(ClrOptionItems) optionItems: ClrOptionItems<number>;
  numbers = [{ a: 0 }, { a: 1 }, { a: 2 }, { a: 3 }];
  trackBy = (index: number) => index;
}

const OPTION_ITEM_PROVIDERS = [
  OptionSelectionService,
  ClrPopoverToggleService,
  ClrPopoverPositionService,
  ClrPopoverEventsService,
  Renderer2,
];

export default function (): void {
  describe('ClrOptionItems directive', function () {
    describe('correctly initializes', () => {
      beforeEach(function () {
        TestBed.configureTestingModule({
          imports: [ClrComboboxModule],
          declarations: [FullTest],
          providers: OPTION_ITEM_PROVIDERS,
        });
        this.fixture = TestBed.createComponent(FullTest);
        this.fixture.detectChanges();
        this.testComponent = this.fixture.componentInstance;
        this.clarityDirective = this.testComponent.optionItems;
      });

      afterEach(function () {
        this.fixture.destroy();
      });

      it('can handle changes', function () {
        const initialContent = this.fixture.elementRef.nativeElement.textContent;
        expect(initialContent.trim()).toEqual('0123');
        this.testComponent.numbers.push(6);
        this.fixture.detectChanges();
        const updatedContent = this.fixture.elementRef.nativeElement.textContent;

        /* This took me quite some time to research, so it needs a detailed explanation.
           The data not updating immediately does not mean that the new value will not be added to the combobox.
           It only means that it won't be added to the currently open popover. Which we do not want anyway, as:
           - it will cause flickering and focus loss/mess issues;
           - for performance reasons we're only updating the iterator on input change (replace, pushing does not
             count) and on filter change;
           - the user still has the workaround to replace the input reference instead of pushing.
           Based on the above, I prefer to avoid complicating the iterator, unless we have a real scenario for it.
        */
        // Deprecated check:
        // expect(updatedContent.trim()).toEqual('01236');
        expect(updatedContent.trim()).toEqual('0123');
      });

      it('handles a null input for the array of items', function () {
        this.testComponent.numbers = null;
        this.fixture.detectChanges();
        expect(this.clarityDirective._rawItems).toEqual([]);
      });

      it('handles an undefined input for the array of items', function () {
        this.testComponent.numbers = undefined;
        this.fixture.detectChanges();
        expect(this.clarityDirective._rawItems).toEqual([]);
      });

      it('can filter out items based on the option service currentInput field', function () {
        expect(this.clarityDirective.iterableProxy._ngForOf).toEqual([0, 1, 2, 3]);
        const optionService: OptionSelectionService<any> = TestBed.get(OptionSelectionService);
        this.testComponent.numbers.push(12);
        optionService.currentInput = '1';
        this.fixture.detectChanges();
        expect(this.clarityDirective.iterableProxy._ngForOf).toEqual([1, 12]);
      });

      it('has case insensive filter', function () {
        const optionService: OptionSelectionService<any> = TestBed.get(OptionSelectionService);
        this.testComponent.numbers.push('Room', 'Broom');
        optionService.currentInput = 'ro';
        this.fixture.detectChanges();
        expect(this.clarityDirective.iterableProxy._ngForOf).toEqual(['Room', 'Broom']);
      });
    });

    describe('handles arrays of simple data correctly', () => {
      beforeEach(function () {
        TestBed.configureTestingModule({
          imports: [ClrComboboxModule],
          declarations: [TrackByIndexTest],
          providers: OPTION_ITEM_PROVIDERS,
        });
        this.fixture = TestBed.createComponent(TrackByIndexTest);
        this.fixture.detectChanges();
        this.testComponent = this.fixture.componentInstance;
        this.clarityDirective = this.fixture.componentInstance.optionItems;
      });

      afterEach(function () {
        this.fixture.destroy();
      });

      it('receives an input for the trackBy option', function () {
        expect(this.clarityDirective.iterableProxy.ngForTrackBy).toBe(this.testComponent.trackBy);
      });

      it('correctly mutates and resets an array with trackBy', function () {
        // Initial state
        this.fixture.nativeElement.querySelectorAll('li:first-child').forEach(li => (li.style.color = 'red'));
        const firstItem = this.fixture.nativeElement.querySelector('li');
        expect(firstItem.style.color).toBe('red');
        expect(firstItem.textContent.trim()).toBe('0');

        // First mutation
        this.testComponent.numbers.unshift(42);
        this.fixture.detectChanges();
        const unshiftedItem = this.fixture.nativeElement.querySelector('li');
        expect(this.clarityDirective._rawItems).toEqual([42, 0, 1, 2, 3]);
        expect(unshiftedItem.style.color).toBe('red');

        // Resetting
        this.testComponent.numbers = [42];
        this.fixture.detectChanges();
        const replacedItem = this.fixture.nativeElement.querySelector('li');
        expect(replacedItem.style.color).toBe('red');
      });
    });
    describe('handles object arrays correctly', () => {
      beforeEach(function () {
        TestBed.configureTestingModule({
          imports: [ClrComboboxModule],
          declarations: [ObjectDataTest],
          providers: OPTION_ITEM_PROVIDERS,
        });
        this.fixture = TestBed.createComponent(ObjectDataTest);
        this.fixture.detectChanges();
        this.testComponent = this.fixture.componentInstance;
        this.clarityDirective = this.fixture.componentInstance.optionItems;
      });

      afterEach(function () {
        this.fixture.destroy();
      });

      it('generates content', function () {
        const initialContent = this.fixture.elementRef.nativeElement.textContent;
        expect(initialContent.trim()).toEqual('0123');
      });

      it('sets display field', function () {
        const optionService: OptionSelectionService<any> = TestBed.get(OptionSelectionService);
        expect(this.clarityDirective._filterField).toEqual('a');
        expect(optionService.displayField).toEqual('a');
      });

      it('handles null values', function () {
        expect(() => {
          this.testComponent.numbers = [{ a: null }, ...this.testComponent.numbers];
          this.fixture.detectChanges();
        }).not.toThrow();
      });
    });
  });
}
