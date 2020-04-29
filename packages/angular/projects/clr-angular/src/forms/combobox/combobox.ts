/**
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
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
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Subscription } from 'rxjs';

import { POPOVER_HOST_ANCHOR } from '../../popover/common/popover-host-anchor.token';
import { ClrPopoverToggleService } from '../../utils/popover/providers/popover-toggle.service';
import { TAB } from '../../utils/key-codes/key-codes';

import { ClrOption } from './option';
import { ClrOptions } from './options';
import { OptionSelectionService } from './providers/option-selection.service';
import { ComboboxDomAdapter } from './utils/combobox-dom-adapter.service';
import { ComboboxNoopDomAdapter } from './utils/combobox-noop-dom-adapter.service';

// Fixes build error
// @dynamic (https://github.com/angular/angular/issues/19698#issuecomment-338340211)
export function comboboxDomAdapterFactory(platformId: any) {
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
    ClrPopoverToggleService,
    { provide: POPOVER_HOST_ANCHOR, useExisting: ElementRef },
    OptionSelectionService,
    { provide: ComboboxDomAdapter, useFactory: comboboxDomAdapterFactory, deps: [PLATFORM_ID] },
  ],
  host: { '[class.clr-combobox]': 'true' },
})
export class ClrCombobox<T> implements AfterContentInit, OnDestroy {
  @ViewChild('input') input: ElementRef;
  @ContentChild(ClrOptions) options: ClrOptions;
  private subscription: Subscription;

  constructor(
    private toggleService: ClrPopoverToggleService,
    private optionSelectionService: OptionSelectionService<T>,
    private renderer: Renderer2,
    private domAdapter: ComboboxDomAdapter
  ) {
    // TODO: Might need to delay this to later in the lifecycle and use a BehaviorSubject instead
    this.initializeSubscriptions();
  }

  private initializeSubscriptions(): void {
    this.subscription = this.optionSelectionService.renderSelectionChanged.subscribe((option: ClrOption<T>) => {
      this.renderSelection(option);
    });
  }

  private renderSelection(selectedOption: ClrOption<T>): void {
    if (this.input && selectedOption) {
      this.domAdapter.clearChildren(this.input.nativeElement);
      const clone: HTMLElement = this.domAdapter.cloneNode(selectedOption.elRef.nativeElement);
      this.renderer.setAttribute(clone, 'contenteditable', 'false');
      this.renderer.appendChild(this.input.nativeElement, clone);
    }
  }

  private registerPopoverIgnoredInput() {
    if (this.input) {
      // @TODO COMBOBOX: intentionally commented; resolve while merging the Combobox
      //this.toggleService.registerIgnoredElement(this.input);
    }
  }

  toggleOptionsMenu(event: MouseEvent): void {
    this.toggleService.toggleWithEvent(event);
  }

  @HostListener('click')
  focusInput() {
    if (this.input) {
      this.domAdapter.focus(this.input.nativeElement);
    }
  }

  closeMenuOnTabPress(event: KeyboardEvent) {
    if (event && event.keyCode === TAB) {
      this.toggleService.open = false;
    }
  }

  // Lifecycle methods
  ngAfterContentInit() {
    this.registerPopoverIgnoredInput();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
