/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, ElementRef, Input, ViewChild } from '@angular/core';

// eslint-disable-next-line clarity/no-barrel-imports
import { POPOVER_HOST_ANCHOR } from '../../../../clr-angular/src/popover/common/popover-host-anchor.token';
// eslint-disable-next-line clarity/no-barrel-imports
import { ClrPopoverToggleService } from '../../../../clr-angular/src/utils/popover/providers/popover-toggle.service';

@Component({
  selector: 'clr-dummy-anchor',
  styleUrls: ['./popovers.demo.scss'],
  template: `
    <input
      #ignore
      type="text"
      *ngIf="openOnFocus"
      placeholder="Open Menu on Focus"
      (focus)="onFocus($event)"
      (click)="onInputClick($event)"
      (focusout)="onFocusOut($event)"
      class="clr-input"
    />
    <button class="btn" *ngIf="!openOnFocus" (click)="onClick($event)">Click Trigger</button>
    <ng-content></ng-content>
  `,
  providers: [ClrPopoverToggleService, { provide: POPOVER_HOST_ANCHOR, useExisting: ElementRef }],
})
export class DummyAnchor {
  @ViewChild('ignore') ignore: ElementRef;

  constructor(private toggleService: ClrPopoverToggleService) {}

  @Input() openOnFocus = false;

  onFocus(event: FocusEvent) {
    this.toggleService.toggleWithEvent(event);
  }

  // This needs to be added to handle the case where:
  // 1. The user focuses on the input and the menu opens,
  // 2. user hits on ESC but is still focused on the menu,
  // 3. and then clicks on the Input again.
  // Without this, the last step of clicking on the Input while it is focused
  // to open the menu wouldn't work.
  onInputClick(event: MouseEvent) {
    if (this.toggleService.open === false) {
      this.toggleService.toggleWithEvent(event);
    }
  }

  onFocusOut(_event: FocusEvent) {
    this.toggleService.open = false;
  }

  onClick(event: MouseEvent) {
    this.toggleService.toggleWithEvent(event);
  }
}
