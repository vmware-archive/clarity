/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { ClarityDocComponent } from '../clarity-doc';

export const OPTIONAL_PERCENTAGE_LABEL = `
<!-- Visual Presentation -->
<div aria-hidden="true"
  <div>Container 1 loading Progress </div>
  <progress  max="100" value="65" data-displayval="65%"></progress>
</div>

<!-- Screen Reader Presentation -->
<!-- Screen reader users will be interrupted and hear "Container 1 Loading Progress is 65%" when the progress bar appears -->
<!-- Screen reader users will also be able to read this text with the screen reader's cursor --> 
<span  aria-live="polite">
  <span class="clr-sr-only">
    Container 1 Loading Progress is
  </span>
  65%
</span>
`;

@Component({
  selector: 'clr-progress-bars-demo',
  templateUrl: './progress-bars.demo.html',
  host: {
    '[class.content-area]': 'true',
    '[class.dox-content-panel]': 'true',
  },
})
export class ProgressBarsDemo extends ClarityDocComponent {
  newLayout = true;
  optionalPercentageLabel = OPTIONAL_PERCENTAGE_LABEL;
  constructor() {
    super('progress');
  }
}
