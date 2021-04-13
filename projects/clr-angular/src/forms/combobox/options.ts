/**
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {
  Component,
  ContentChildren,
  ElementRef,
  Inject,
  Input,
  Optional,
  QueryList,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { POPOVER_HOST_ANCHOR } from '../../popover/common/popover-host-anchor.token';
import { OptionSelectionService } from './providers/option-selection.service';
import { IF_ACTIVE_ID } from '../../utils/conditional/if-active.service';
import { AriaService } from '../../utils/aria/aria.service';
import { ClrCommonStringsService } from '../../utils/i18n/common-strings.service';
import { LoadingListener } from '../../utils/loading/loading-listener';
import { ClrLoadingState } from '../../utils/loading/loading';
import { ClrOption } from './option';
import { ComboboxFocusHandler } from './providers/combobox-focus-handler.service';
import { fromEvent, Subscription } from 'rxjs';
import { ClrPopoverToggleService } from '../../utils/popover/providers/popover-toggle.service';

let nbOptionsComponents = 0;

@Component({
  selector: 'clr-options',
  template: `
    <div *ngIf="optionSelectionService.loading" class="clr-combobox-options-loading">
      <clr-spinner clrInline>
        {{ commonStrings.keys.loading }}
      </clr-spinner>
      <span class="clr-combobox-options-text">
        {{ searchText(optionSelectionService.currentInput) }}
      </span>
    </div>

    <!-- Rendered if data set is empty -->
    <div *ngIf="emptyOptions">
      <span class="clr-combobox-options-empty-text">
        {{ commonStrings.keys.comboboxNoResults }}
      </span>
    </div>

    <!--Option Groups and Options will be projected here-->
    <ng-content></ng-content>
  `,
  providers: [{ provide: LoadingListener, useExisting: ClrOptions }],
  host: {
    '[class.clr-combobox-options]': 'true',
    '[attr.role]': '"listbox"',
    '[id]': 'optionsId',
  },
})
export class ClrOptions<T> implements AfterViewInit, LoadingListener, OnDestroy {
  public loading = false;
  private subscriptions: Subscription[] = [];

  constructor(
    public optionSelectionService: OptionSelectionService<T>,
    @Inject(IF_ACTIVE_ID) public id: number,
    private ariaService: AriaService,
    private el: ElementRef,
    public commonStrings: ClrCommonStringsService,
    private focusHandler: ComboboxFocusHandler<T>,
    private toggleService: ClrPopoverToggleService,
    @Optional()
    @Inject(POPOVER_HOST_ANCHOR)
    parentHost: ElementRef,
    @Inject(DOCUMENT) private document: any
  ) {
    if (!parentHost) {
      throw new Error('clr-options should only be used inside of a clr-combobox');
    }

    if (!this.optionsId) {
      this.optionsId = 'clr-options-' + nbOptionsComponents++;
    }
  }

  public searchText(input: string) {
    return this.commonStrings.parse(this.commonStrings.keys.comboboxSearching, { INPUT: input });
  }

  /**
   * Tests if the list of options is empty, meaning it doesn't contain any items
   */
  public get emptyOptions() {
    return !this.optionSelectionService.loading && this.items.length === 0;
  }

  @Input('id')
  set optionsId(id: string) {
    this.ariaService.ariaControls = id;
    this.ariaService.ariaOwns = id;
  }

  get optionsId(): string {
    return this.ariaService.ariaControls;
  }

  _items: QueryList<ClrOption<T>>;
  @ContentChildren(ClrOption)
  set items(items: QueryList<ClrOption<T>>) {
    this._items = items;
    this.focusHandler.addOptionValues(this._items.map(option => option.optionProxy));
  }

  get items(): QueryList<ClrOption<T>> {
    return this._items;
  }

  loadingStateChange(state: ClrLoadingState): void {
    this.loading = state === ClrLoadingState.LOADING;
  }

  ngAfterViewInit() {
    this.focusHandler.listbox = this.el.nativeElement;

    this.subscriptions.push(
      fromEvent(this.document, 'scroll', { capture: true }).subscribe(event => {
        if (
          this.toggleService.open &&
          (event as Event).target !== this.el.nativeElement &&
          (event as Event).target !== this.focusHandler.textInput
        ) {
          this.toggleService.open = false;
        }
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
