/**
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  Inject,
  Input,
  OnDestroy,
  Optional,
  Host,
} from '@angular/core';
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
  private subscriptions: Subscription[] = [];

  @HostBinding('class.active') selected: boolean = false;
  @HostBinding('class.highlighted') highlighted: boolean = false;
  @HostBinding('class.hidden') private _hidden: boolean = false;

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
    this.subscriptions.push(
      this.optionSelectionService.selectionChanged.subscribe((option: ClrOption<T>) => {
        // Check for null and undefined needed because if the user doesnt assign a value to the option,
        // all options should not be selected as the value would be null or undefined
        if (!option) {
          this.selected = false;
        } else if (this === option) {
          // TODO: Render option when current selection is set by the user
          this.selected = true;
        } else {
          this.selected = false;
        }
      })
    );

    this.subscriptions.push(
      this.optionSelectionService.navigatedOptionChanged.subscribe((option: ClrOption<T>) => {
        // Check for null and undefined needed because if the user doesnt assign a value to the option,
        // all options should not be selected as the value would be null or undefined
        if (!option) {
          this.highlighted = false;
        } else if (this === option) {
          this.highlighted = true;
        } else {
          this.highlighted = false;
        }
      })
    );

    this.subscriptions.push(
      this.optionSelectionService.searchValueChanged.subscribe((value: string) => {
        this.hidden = !this.highlightSearchValue(value) && !!value && value.length > 0;
      })
    );
  }

  highlightSearchValue(value: string): boolean {
    let elHtml: string = this.elRef.nativeElement.innerHTML;
    if (elHtml) {
      elHtml = elHtml.replace('<em>', '');
      elHtml = elHtml.replace('</em>', '');

      if (value && value.length > 0) {
        elHtml = elHtml.replace(new RegExp(value, 'i'), '<em>$&</em>');
      }
    }
    this.elRef.nativeElement.innerHTML = elHtml;
    return elHtml.indexOf('<em>') > -1;
  }

  getDisplayedText(): string {
    return this.elRef.nativeElement.textContent;
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
    this.optionSelectionService.setSelection(this);
    this.ifOpenService.open = false;
  }

  set hidden(value: boolean) {
    if (this._hidden === value) {
      return;
    }

    this._hidden = value;
    this.optionSelectionService.updateNavigatableOptions();
  }

  get hidden() {
    return this._hidden;
  }

  // Lifecycle Methods
  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
