/**
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, ElementRef, HostBinding, HostListener, Inject, Input, OnDestroy, Optional } from '@angular/core';
import { Subscription } from 'rxjs';

import { POPOVER_HOST_ANCHOR } from '../../popover/common/popover-host-anchor.token';
import { IfOpenService } from '../../utils/conditional/if-open.service';

import { OptionSelectionService } from './providers/option-selection.service';

@Component({
  selector: 'clr-option',
  templateUrl: './option.html',
  host: { '[class.clr-option]': 'true' },
})
export class ClrOption<T> implements OnDestroy {
  private subscription: Subscription;

  @HostBinding('class.active') selected: boolean = false;

  @Input('clrValue') value: T;

  constructor(
    private ifOpenService: IfOpenService,
    @Optional()
    @Inject(POPOVER_HOST_ANCHOR)
    parentHost: ElementRef,
    public elRef: ElementRef,
    private optionSelectionService: OptionSelectionService<T>
  ) {
    if (!parentHost) {
      throw new Error('clr-option should only be used inside of a clr-combobox');
    }
    this.initializeSubscription();
  }

  private initializeSubscription(): void {
    this.subscription = this.optionSelectionService.valueChanged.subscribe((value: T) => {
      // Check for null and undefined needed because if the user doesnt assign a value to the option,
      // all options should not be selected as the value would be null or undefined
      if (value === null || value === undefined) {
        this.selected = false;
      } else if (this.value === value) {
        // TODO: Render option when current selection is set by the user
        this.selected = true;
      } else {
        this.selected = false;
      }
    });
  }

  /**
   * This behavior is only for single select. Multi select will keep the menu open on option click.
   * We will handle that later.
   */
  @HostListener('click')
  updateSelectionAndCloseMenu() {
    // We call render here without checking the value because even if the user hasn't
    // assigned a value to the option, we should atleast display the selection on the input.
    // This is what the native select does.
    this.optionSelectionService.renderSelection(this);
    this.optionSelectionService.updateSelection(this.value);
    this.ifOpenService.open = false;
  }

  // Lifecycle Methods
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
