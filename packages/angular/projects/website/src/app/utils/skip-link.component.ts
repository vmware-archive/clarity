/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skip-link',
  styleUrls: ['./skip-link.component.scss'],
  template: `
    <button
      class="btn btn-warning btn-sm clr-docs-skip-link"
      [class.clr-sr-only]="hideSkipLink"
      (click)="skipToContent()"
      (focus)="hideSkipLink = false"
      (blur)="hideSkipLink = true"
    >
      Skip to content
    </button>
  `,
})
export class SkipLinkComponent {
  @Input() focusElement: HTMLElement;
  hideSkipLink = true;

  skipToContent() {
    this.focusElement.focus();
  }
}
