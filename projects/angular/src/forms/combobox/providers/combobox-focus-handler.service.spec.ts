/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, ViewChild, ElementRef, RendererFactory2, Renderer2 } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { COMBOBOX_FOCUS_HANDLER_PROVIDER, ComboboxFocusHandler, OptionData } from './combobox-focus-handler.service';
import { ClrPopoverToggleService } from '../../../utils/popover/providers/popover-toggle.service';
import { OptionSelectionService } from './option-selection.service';
import { SingleSelectComboboxModel } from '../model/single-select-combobox.model';
import { KeyCodes } from '../../../utils/enums/key-codes.enum';

@Component({
  template: `<form (submit)="onSubmit()">
    <input type="text" #textInput /><button #trigger></button>
    <ul #listbox></ul>
  </form>`,
})
class SimpleHost {
  @ViewChild('textInput') textInput: ElementRef;
  @ViewChild('trigger') trigger: ElementRef;
  @ViewChild('listbox') listbox: ElementRef;
  onSubmit() {
    // do nothing; it makes eslint happy
  }
}

interface TestContext {
  fixture: ComponentFixture<SimpleHost>;
  testComponent: SimpleHost;
  el: HTMLElement;
  focusHandler: ComboboxFocusHandler<any>;
  selectionService: OptionSelectionService<any>;
  toggleService: ClrPopoverToggleService;
}

export default function (): void {
  describe('Basic focusHandler', function () {
    beforeEach(function (this: TestContext) {
      TestBed.configureTestingModule({
        declarations: [SimpleHost],
        providers: [
          {
            provide: Renderer2,
            useFactory: RendererFactory2,
          },
          ClrPopoverToggleService,
          OptionSelectionService,
          COMBOBOX_FOCUS_HANDLER_PROVIDER,
        ],
      });
      this.fixture = TestBed.createComponent(SimpleHost);
      this.testComponent = this.fixture.componentInstance;
      this.el = this.fixture.debugElement.nativeElement;
      this.focusHandler = this.fixture.debugElement.injector.get(ComboboxFocusHandler);
      this.toggleService = this.fixture.debugElement.injector.get(ClrPopoverToggleService);
      this.selectionService = this.fixture.debugElement.injector.get(OptionSelectionService);

      this.fixture.detectChanges();

      this.focusHandler.textInput = this.testComponent.textInput.nativeElement;
      this.focusHandler.trigger = this.testComponent.trigger.nativeElement;
      this.focusHandler.listbox = this.testComponent.listbox.nativeElement;

      this.focusHandler.addOptionValues([
        new OptionData('1', 'one'),
        new OptionData('2', 'two'),
        new OptionData('3', 'three'),
      ]);
    });

    it('declares itself as a ComboboxFocusHandler provider', function (this: TestContext) {
      expect(this.focusHandler).toBeTruthy();
    });

    it('has empty pseudoFocus on initialization', function (this: TestContext) {
      expect(this.focusHandler.pseudoFocus).toBeTruthy();
      expect(this.focusHandler.pseudoFocus.isEmpty()).toBeTrue();
      expect(this.toggleService.open).toBeFalse();
    });

    it('can open a listbox and set focus', function (this: TestContext) {
      const event = new KeyboardEvent('keydown', { key: KeyCodes.ArrowDown });
      this.testComponent.textInput.nativeElement.dispatchEvent(event);
      expect(this.toggleService.open).toBeTrue();
      expect(this.focusHandler.pseudoFocus.model).toEqual(new OptionData('1', 'one'));
    });

    it('moves focus with keys', function (this: TestContext) {
      const event = new KeyboardEvent('keydown', { key: KeyCodes.ArrowDown });
      this.testComponent.textInput.nativeElement.dispatchEvent(event);
      expect(this.focusHandler.pseudoFocus.model).toEqual(new OptionData('1', 'one'));
      this.testComponent.textInput.nativeElement.dispatchEvent(event);
      expect(this.focusHandler.pseudoFocus.model).toEqual(new OptionData('2', 'two'));
      const upEvent = new KeyboardEvent('keydown', { key: KeyCodes.ArrowUp });
      this.testComponent.textInput.nativeElement.dispatchEvent(upEvent);
      expect(this.focusHandler.pseudoFocus.model).toEqual(new OptionData('1', 'one'));
    });

    it('closes popover on textInput blur', function (this: TestContext) {
      this.toggleService.open = true;
      const event = new FocusEvent('blur');
      this.testComponent.textInput.nativeElement.dispatchEvent(event);
      expect(this.toggleService.open).toBeFalse();
    });

    it('closes popover on trigger blur', function (this: TestContext) {
      this.toggleService.open = true;
      const event = new FocusEvent('blur');
      this.testComponent.trigger.nativeElement.dispatchEvent(event);
      expect(this.toggleService.open).toBeFalse();
    });

    it('closes popover on listbox blur', function (this: TestContext) {
      this.toggleService.open = true;
      const event = new FocusEvent('blur');
      this.testComponent.listbox.nativeElement.dispatchEvent(event);
      expect(this.toggleService.open).toBeFalse();
    });

    it('can set focus on textInput', function (this: TestContext) {
      spyOn(this.testComponent.textInput.nativeElement, 'focus');
      this.focusHandler.focusInput();
      expect(this.testComponent.textInput.nativeElement.focus).toHaveBeenCalled();
    });

    it('can set focus on first active item', function (this: TestContext) {
      this.selectionService.selectionModel = new SingleSelectComboboxModel();
      const item = 'two';
      this.selectionService.select(item);
      this.focusHandler.focusFirstActive();
      expect(this.focusHandler.pseudoFocus.model).toEqual(new OptionData('2', 'two'));
    });

    it('can set focus on the first item if no item is active', function (this: TestContext) {
      this.selectionService.selectionModel = new SingleSelectComboboxModel();
      this.focusHandler.focusFirstActive();
      expect(this.focusHandler.pseudoFocus.model).toEqual(new OptionData('1', 'one'));
    });

    it('Option data can be compared', function (this: TestContext) {
      const item = new OptionData('1', 'one');
      const sameItem = new OptionData('1', 'one');
      const otherItem = new OptionData('2', 'two');

      expect(item.equals(sameItem)).toBeTrue();
      expect(item.equals(otherItem)).toBeFalse();
    });

    it('does submit on Enter when dialog is closed', function (this: TestContext) {
      spyOn(this.testComponent, 'onSubmit');
      const event = new KeyboardEvent('keydown', { key: KeyCodes.Enter });
      this.testComponent.textInput.nativeElement.dispatchEvent(event);
      expect(this.testComponent.onSubmit).not.toHaveBeenCalled();
    });

    it('does not submit on Enter when dialog is open', function (this: TestContext) {
      spyOn(this.testComponent, 'onSubmit');
      this.toggleService.open = true;
      const event = new KeyboardEvent('keydown', { key: KeyCodes.Enter });
      this.testComponent.textInput.nativeElement.dispatchEvent(event);
      expect(this.testComponent.onSubmit).not.toHaveBeenCalled();
    });
  });
}
