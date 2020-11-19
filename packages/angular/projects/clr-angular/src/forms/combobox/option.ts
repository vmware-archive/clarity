/**
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, ElementRef, HostBinding, HostListener, Inject, Input, OnInit } from '@angular/core';

import { OptionSelectionService } from './providers/option-selection.service';
import { ComboboxFocusHandler, OptionData as OptionProxy } from './providers/combobox-focus-handler.service';
import { UNIQUE_ID, UNIQUE_ID_PROVIDER } from '../../utils/id-generator/id-generator.service';
import { ClrCommonStringsService } from '../../utils/i18n/common-strings.service';
@Component({
  selector: 'clr-option',
  template: `<ng-content></ng-content>
    <span *ngIf="selected" class="clr-sr-only"> {{ commonStrings.keys.comboboxSelected }} </span> `,
  providers: [UNIQUE_ID_PROVIDER],
  host: {
    '[class.clr-combobox-option]': 'true',
    '[attr.role]': '"option"',
    // Do not remove. Or click-selection will not work.
    '[attr.tabindex]': '-1',
    '[attr.id]': 'optionId',
  },
})
export class ClrOption<T> implements OnInit {
  // A proxy with only the necessary data to be used for a11y and the focus handler service.
  public optionProxy: OptionProxy<T> = new OptionProxy(null, null);

  private _id: string;
  @Input('id')
  set optionId(id: string) {
    this._id = id;
    this.optionProxy.id = this._id;
  }
  get optionId() {
    return this._id;
  }

  private _value: T;
  @Input('clrValue')
  set value(value: T) {
    this._value = value;
    this.optionProxy.value = value;
  }
  get value(): T {
    return this._value;
  }

  @HostBinding('class.active')
  get selected() {
    return (
      this.optionSelectionService.selectionModel && this.optionSelectionService.selectionModel.containsItem(this.value)
    );
  }

  constructor(
    public elRef: ElementRef,
    public commonStrings: ClrCommonStringsService,
    private focusHandler: ComboboxFocusHandler<T>,
    private optionSelectionService: OptionSelectionService<T>,
    @Inject(UNIQUE_ID) private autoId: string
  ) {
    this.optionProxy.el = this.elRef.nativeElement;
  }

  ngOnInit() {
    if (!this._id) {
      this._id = 'clr-option-' + this.autoId;
      this.optionProxy.id = this._id;
    }
  }

  @HostListener('click')
  onClick() {
    if (this.optionSelectionService.multiselectable) {
      this.optionSelectionService.toggle(this.value);
    } else {
      this.optionSelectionService.select(this.value);
    }
  }

  @HostBinding('class.clr-focus')
  get focusClass() {
    return this.focusHandler.pseudoFocus.containsItem(this.optionProxy);
  }
}
