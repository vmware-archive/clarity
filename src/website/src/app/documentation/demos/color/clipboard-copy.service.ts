/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

// This is an utility service class for copying text to clipboard.
// Currently, we use this only in color demo components.
// If we need to use it somewhere else in the future, we should consider moving to utils directory.
@Injectable()
export class ClipboardCopyService {
  private textareaEl: HTMLTextAreaElement;

  constructor(@Inject(PLATFORM_ID) private platformId: Record<string, any>) {}

  private createTextareaEl() {
    this.textareaEl = document.createElement('textarea');

    // make it off screen
    this.textareaEl.setAttribute('readonly', '');
    this.textareaEl.classList.add('offscreen-clipboard-textarea');
  }

  private setTextareaValue(value: string) {
    this.textareaEl.value = value;
  }

  executeCopy(copyContent: string) {
    if (isPlatformBrowser(this.platformId)) {
      this.createTextareaEl();
      this.setTextareaValue(copyContent);
      document.body.appendChild(this.textareaEl);
      this.textareaEl.select();
      document.execCommand('copy');
      document.body.removeChild(this.textareaEl);
      delete this.textareaEl;
    }
  }
}
