/**
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { isPlatformBrowser } from '@angular/common';
import {
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
  HostListener,
  OnDestroy,
  PLATFORM_ID,
  ViewChild,
  Optional,
  OnInit,
  Input,
  Output,
  EventEmitter,
  HostBinding,
} from '@angular/core';
import { Subscription } from 'rxjs';

import { POPOVER_HOST_ANCHOR } from '../../popover/common/popover-host-anchor.token';
import { IfOpenService } from '../../utils/conditional/if-open.service';
import { TAB, DOWN_ARROW, UP_ARROW, ENTER } from '../../utils/key-codes/key-codes';

import { ClrOption } from './option';
import { ClrOptions } from './options';
import { OptionSelectionService } from './providers/option-selection.service';
import { ComboboxDomAdapter } from './utils/combobox-dom-adapter.service';
import { ComboboxNoopDomAdapter } from './utils/combobox-noop-dom-adapter.service';
import { ClrLabel } from '../common/label';
import { LayoutService } from '../common/providers/layout.service';
import { ControlClassService } from '../common/providers/control-class.service';
import { NgControlService } from '../common/providers/ng-control.service';

// Fixes build error
// @dynamic (https://github.com/angular/angular/issues/19698#issuecomment-338340211)
export function comboboxDomAdapterFactory(platformId: Object) {
  if (isPlatformBrowser(platformId)) {
    return new ComboboxDomAdapter();
  } else {
    return new ComboboxNoopDomAdapter();
  }
}

@Component({
  selector: 'clr-combobox',
  templateUrl: './combobox.html',
  providers: [
    IfOpenService,
    { provide: POPOVER_HOST_ANCHOR, useExisting: ElementRef },
    OptionSelectionService,
    { provide: ComboboxDomAdapter, useFactory: comboboxDomAdapterFactory, deps: [PLATFORM_ID] },
    ControlClassService,
    NgControlService,
  ],
  host: {
    '[class.clr-combobox]': 'true',
  },
})
export class ClrCombobox<T> implements OnInit, AfterContentInit, OnDestroy {
  @Input('clrControlClasses') controlClasses: string;
  @Input('clrAllowUserEntry') allowUserEntry: boolean = false;
  @Output('clrSelectedOption') selectedOption: EventEmitter<ClrOption<T>> = new EventEmitter<ClrOption<T>>();
  @Output('clrEnteredValue') enteredValue: EventEmitter<string> = new EventEmitter<string>();

  @HostBinding('class.clr-empty') noSearchResults: boolean;

  @ViewChild('input') input: ElementRef;
  @ContentChild(ClrOptions) options: ClrOptions<T>;
  @ContentChild(ClrLabel) label: ClrLabel;
  invalid: boolean = false;
  private subscriptions: Subscription[] = [];

  constructor(
    private ifOpenService: IfOpenService,
    private optionSelectionService: OptionSelectionService<T>,
    @Optional() private layoutService: LayoutService,
    private domAdapter: ComboboxDomAdapter,
    private controlClassService: ControlClassService
  ) {}

  private initializeSubscriptions(): void {
    this.subscriptions.push(
      this.optionSelectionService.selectionChanged.subscribe((option: ClrOption<T>) => {
        this.renderSelection(option);
      })
    );
    this.subscriptions.push(
      this.optionSelectionService.searchValueChanged.subscribe((value: string) => {
        if (this.allowUserEntry) {
          this.enteredValue.emit(value);
        }
        if (value !== null) {
          this.ifOpenService.open = true;
        }
      })
    );
    this.subscriptions.push(
      this.optionSelectionService.navigatableOptionsChanged.subscribe((count: number) => {
        this.noSearchResults = count === 0;
      })
    );
  }

  private renderSelection(selectedOption: ClrOption<T>): void {
    this.selectedOption.emit(selectedOption);
    if (this.input && selectedOption) {
      this.input.nativeElement.innerText = selectedOption.getDisplayedText();
      this.validateInput();
    }
  }

  private registerPopoverIgnoredInput() {
    if (this.input) {
      this.ifOpenService.registerIgnoredElement(this.input);
    }
  }

  toggleOptionsMenu(event: MouseEvent): void {
    this.ifOpenService.toggleWithEvent(event);
  }

  @HostListener('click')
  focusInput() {
    if (this.input) {
      this.domAdapter.focus(this.input.nativeElement);
    }
  }

  keydown(event: KeyboardEvent) {
    if (event) {
      this.navigateOptions(event);
      this.closeMenuOnTabPress(event);
    }
  }

  navigateOptions(event: KeyboardEvent) {
    if (event.keyCode === DOWN_ARROW) {
      this.ifOpenService.open = true;
      this.optionSelectionService.navigateToNextOption();
    } else if (event.keyCode === UP_ARROW) {
      this.ifOpenService.open = true;
      this.optionSelectionService.navigateToPreviousOption();
    } else if (event.keyCode === ENTER) {
      this.optionSelectionService.selectActiveOption();
      event.preventDefault();
    }
  }

  closeMenuOnTabPress(event: KeyboardEvent) {
    if (event.keyCode === TAB) {
      this.ifOpenService.open = false;
    }
  }

  search() {
    this.optionSelectionService.setSearchValue(this.input.nativeElement.textContent.trim());
  }

  blur() {
    if (!this.allowUserEntry) {
      if (!this.ifOpenService.open) {
        this.validateInput();
      } else {
        // Wait for validation until dropdown is closed, as a click on a dropdown menu loses focus too early
        const openSub = this.ifOpenService.openChange.subscribe(() => {
          this.validateInput();
          openSub.unsubscribe();
        });
      }
    }
  }

  validateInput() {
    let selectedOption: ClrOption<T>;
    let searchValue: string;

    this.optionSelectionService.selectionChanged
      .subscribe((selected: ClrOption<T>) => {
        selectedOption = selected;
      })
      .unsubscribe();

    this.optionSelectionService.searchValueChanged
      .subscribe((value: string) => {
        searchValue = value;
      })
      .unsubscribe();
    if (!selectedOption && searchValue && searchValue.length > 0) {
      this.invalid = true;
    } else {
      this.invalid = false;
    }
  }

  addGrid() {
    if (this.layoutService && !this.layoutService.isVertical()) {
      return true;
    }
    return false;
  }

  controlClass() {
    return this.controlClasses
      ? this.controlClasses
      : this.controlClassService.controlClass(this.invalid, this.addGrid());
  }

  // Lifecycle methods
  ngOnInit() {
    this.initializeSubscriptions();
  }

  ngAfterContentInit() {
    this.registerPopoverIgnoredInput();
    this.optionSelectionService.setOptions(this.options);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
