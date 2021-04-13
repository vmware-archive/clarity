/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { ClarityDocComponent } from '../clarity-doc';

const ACCESSIBILITY_EXAMPLE = `
<div class="btn-group btn-primary btn-icon">
    <button class="btn">
        <clr-icon shape="check" title="Check"></clr-icon>
    </button>
    <button class="btn">
        <clr-icon shape="home" title="home"></clr-icon>
    </button>
    <button class="btn">
        <clr-icon shape="user" title="user"></clr-icon>
    </button>
</div>
`;

@Component({
  selector: 'clr-button-group-demo',
  templateUrl: './button-group.demo.html',
  host: {
    '[class.content-area]': 'true',
    '[class.dox-content-panel]': 'true',
  },
})
export class ButtonGroupDemo extends ClarityDocComponent {
  accessibilityExample = ACCESSIBILITY_EXAMPLE;
  constructor() {
    super('button-group');
  }
}
