/**
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {
  Input,
  Directive,
  ViewContainerRef,
  Injector,
  Self,
  Optional,
  Renderer2,
  ElementRef,
  HostListener,
  Inject,
} from '@angular/core';
import { WrappedFormControl } from '../common/wrapped-control';
import { ClrDatalistContainer } from './datalist-container';
import { NgControl } from '@angular/forms';
import { DatalistControllerService } from './providers/datalist-controller.service';
import { FocusService } from '../common/providers/focus.service';
import { UNIQUE_ID } from 'src/clr-angular/utils/id-generator/id-generator.service';

@Directive({
  selector: '[clrDatalist]',
  host: {
    '[class.clr-input]': 'true',
    '[attr.list]': 'listId',
  },
})
export class ClrDatalist extends WrappedFormControl<ClrDatalistContainer> {
  public listId: string;
  @Input('clrData')
  set items(items: string[]) {
    this.datalistControllerService.dataItems = items;
  }

  constructor(
    private datalistControllerService: DatalistControllerService,
    @Optional() private focusService: FocusService,
    vcr: ViewContainerRef,
    injector: Injector,
    @Self()
    @Optional()
    control: NgControl,
    renderer: Renderer2,
    el: ElementRef,
    @Inject(UNIQUE_ID) private uniqueId: string
  ) {
    super(vcr, ClrDatalistContainer, injector, control, renderer, el);
    this.listId = this.datalistControllerService.generateListId(this.uniqueId);
  }

  @HostListener('focus')
  triggerFocus() {
    if (this.focusService) {
      this.focusService.focused = true;
    }
  }

  @HostListener('blur')
  triggerValidation() {
    super.triggerValidation();
    if (this.focusService) {
      this.focusService.focused = false;
    }
  }
}
