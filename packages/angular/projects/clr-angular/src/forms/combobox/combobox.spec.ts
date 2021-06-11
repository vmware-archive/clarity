/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { TestBed, ComponentFixture, tick, waitForAsync, fakeAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ApplicationRef, Component } from '@angular/core';

import { ClrCombobox } from './combobox';
import { OptionSelectionService } from './providers/option-selection.service';
import { SingleSelectComboboxModel } from './model/single-select-combobox.model';
import { MultiSelectComboboxModel } from './model/multi-select-combobox.model';
import { ClrPopoverContent } from '../../utils/popover/popover-content';
import { ClrPopoverToggleService } from '../../utils/popover/providers/popover-toggle.service';
import { ClrIconModule } from '../../icon/icon.module';
import { ClrComboboxModule } from './combobox.module';
import { BACKSPACE, UP_ARROW } from '../../utils/key-codes/key-codes';

@Component({
  template: `
    <clr-combobox
      [placeholder]="placeholder"
      [(ngModel)]="selection"
      [clrMulti]="multi"
      (clrInputChange)="inputChanged($event)"
      (clrOpenChange)="openChanged($event)"
      [disabled]="disabled"
    >
      <clr-options>
        <clr-option [clrValue]="1">1</clr-option>
        <clr-option [clrValue]="2">2</clr-option>
        <clr-option [clrValue]="3">3</clr-option>
      </clr-options>
    </clr-combobox>
  `,
})
class TestComponent {
  multi: boolean;
  selection: any;
  inputValue: string;
  openState: boolean;
  placeholder: string;
  disabled = false;
  inputChanged(value: string) {
    this.inputValue = value;
  }
  openChanged(open: boolean) {
    this.openState = open;
  }
}

export default function (): void {
  describe('Combobox Component', function () {
    let clarityElement: HTMLElement;
    let toggleService: ClrPopoverToggleService;
    let selectionService: OptionSelectionService<string>;
    let fixture: ComponentFixture<TestComponent>;
    let clarityDirective: ClrCombobox<string>;

    beforeEach(function () {
      TestBed.configureTestingModule({
        imports: [ClrComboboxModule, ClrIconModule, FormsModule, NoopAnimationsModule],
        declarations: [TestComponent, ClrPopoverContent],
        providers: [OptionSelectionService],
      });

      fixture = TestBed.createComponent(TestComponent);
      const comboboxDebugElement = fixture.debugElement.query(By.directive(ClrCombobox));
      clarityDirective = comboboxDebugElement.componentInstance;
      clarityElement = comboboxDebugElement.nativeElement;
      selectionService = comboboxDebugElement.injector.get(OptionSelectionService) as OptionSelectionService<string>;
      toggleService = comboboxDebugElement.injector.get(ClrPopoverToggleService);

      fixture.detectChanges();
    });

    afterEach(function () {
      toggleService.open = false;
      fixture.detectChanges();
    });

    describe('Typescript API', function () {
      it('implements method that updates the model', () => {
        clarityDirective.writeValue('test');
        expect(selectionService.selectionModel.containsItem('test')).toBeTrue();
      });

      it('has method to unselect value after deletion', () => {
        selectionService.select('test');
        expect(selectionService.selectionModel.containsItem('test')).toBeTrue();
        clarityDirective.unselect('test');
        expect(selectionService.selectionModel.containsItem('test')).toBeFalse();
      });

      it('has open state read-only property', () => {
        expect(clarityDirective.openState).toBeFalsy();
        toggleService.open = true;
        expect(clarityDirective.openState).toBeTrue();
      });

      it('has associated form control', () => {
        expect(clarityDirective.control).toBeTruthy();
      });

      it('does not close panel on clear', () => {
        toggleService.open = true;
        clarityDirective.writeValue(null);
        expect(clarityDirective.openState).toBeTrue();
      });

      it('closes panel on selection', () => {
        toggleService.open = true;
        selectionService.select('test');
        expect(clarityDirective.openState).toBeFalse();
      });

      it('does not close panel on selection if multiselect', () => {
        clarityDirective.multiSelect = true;
        toggleService.open = true;
        selectionService.select('test');
        expect(clarityDirective.openState).toBeTrue();
      });

      // The forms framework has some inner asychronisity, which requires the async/whenStable
      // approach in the following tests
      it(
        'sets selection model based on selection binding',
        waitForAsync(() => {
          fixture.componentInstance.selection = 'test';
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            expect(selectionService.selectionModel.containsItem('test')).toBeTrue();
          });
        })
      );

      it(
        'clears selection model',
        waitForAsync(() => {
          fixture.componentInstance.selection = null;
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            expect(selectionService.selectionModel.isEmpty()).toBeTrue();
          });
        })
      );
    });

    describe('Template API', function () {
      it('defaults to single model', () => {
        expect(selectionService.selectionModel instanceof SingleSelectComboboxModel).toBeTrue();
      });

      it('can change to multi model', () => {
        fixture.componentInstance.multi = true;
        fixture.detectChanges();
        expect(selectionService.selectionModel instanceof MultiSelectComboboxModel).toBeTrue();
      });

      it('notifies on input changes', () => {
        expect(fixture.componentInstance.inputValue).toBeFalsy();
        clarityDirective.searchText = 'test';
        fixture.detectChanges();
        expect(fixture.componentInstance.inputValue).toBe('test');
      });

      it('notifies on open changes', () => {
        expect(fixture.componentInstance.openState).toBeFalsy();
        toggleService.open = true;
        expect(fixture.componentInstance.openState).toBeTrue();
      });
    });

    describe('View Basics', () => {
      it('adds the .clr-combobox class on the host', () => {
        expect(clarityElement.classList.contains('clr-combobox')).toBe(true);
      });

      it('has a generated id', () => {
        expect(clarityElement.hasAttribute('id')).toBeTrue();
      });

      it('contains an editable input', () => {
        const input = clarityElement.querySelector('.clr-combobox-input');
        expect(input).not.toBeNull();
      });

      it('contains a options menu trigger', () => {
        expect(clarityElement.querySelector('.clr-combobox-trigger')).not.toBeNull();
      });

      it('opens the menu on the trigger click', () => {
        const trigger: HTMLElement = clarityElement.querySelector('.clr-combobox-trigger');
        expect(toggleService.open).toBe(false);
        trigger.click();
        expect(toggleService.open).toBe(true);
      });

      it('has aria-owns attribute', () => {
        const trigger: HTMLElement = clarityElement.querySelector('.clr-combobox-input');
        expect(trigger.hasAttribute('aria-owns')).toBeTrue();
        expect(trigger.getAttribute('aria-owns')).toContain('clr-options-');
      });

      it('has aria-expanded attribute', () => {
        const trigger: HTMLElement = clarityElement.querySelector('.clr-combobox-input');
        expect(trigger.hasAttribute('aria-expanded')).toBeTrue();
        expect(trigger.getAttribute('aria-expanded')).toEqual('false');
        toggleService.open = true;
        fixture.detectChanges();
        expect(trigger.getAttribute('aria-expanded')).toEqual('true');
      });

      it('should pass placeholder to internal input', () => {
        fixture.componentInstance.placeholder = 'hello world';
        fixture.detectChanges();
        const combobox: HTMLElement = clarityElement.querySelector('.clr-combobox-input');
        expect(combobox.getAttribute('placeholder')).toEqual('hello world');
      });

      it('should disable openClose button', () =>
        fakeAsync(function () {
          fixture.componentInstance.disabled = true;
          fixture.detectChanges();
          tick();
          const button: HTMLButtonElement = clarityElement.querySelector('.clr-combobox-trigger');
          expect(button.disabled).toBeTruthy();
        }));
    });

    describe('Change detection', () => {
      it('should not run change detection if the keydown event was not backspace', async () => {
        fixture.componentInstance.multi = true;
        fixture.detectChanges();
        await fixture.whenStable();

        fixture.componentInstance.selection = ['test'];
        fixture.detectChanges();
        await fixture.whenStable();

        const appRef = TestBed.inject(ApplicationRef);
        const spy = spyOn(appRef, 'tick').and.callThrough();

        clarityElement.dispatchEvent(new KeyboardEvent('keydown', { keyCode: UP_ARROW }));
        clarityElement.dispatchEvent(new KeyboardEvent('keydown', { keyCode: UP_ARROW }));

        expect(spy).toHaveBeenCalledTimes(0);

        clarityElement.dispatchEvent(new KeyboardEvent('keydown', { keyCode: BACKSPACE }));

        expect(spy).toHaveBeenCalledTimes(1);
      });
    });
  });
}
