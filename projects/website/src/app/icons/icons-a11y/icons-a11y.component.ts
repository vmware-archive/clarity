/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';

const presentational = `<clr-icon shape="info-circle"></clr-icon>`;

const interactive = `
<button class="btn">
  <clr-icon shape="bars"></clr-icon> Menu
</button>`;

const interactiveNoLabel = `
<button class="btn btn-icon" aria-label="main menu">
  <clr-icon shape="bars"></clr-icon>
</button>
`;

const indicator = `
<p>
  <clr-icon shape="exclamation-triangle" title="Usage Warning"></clr-icon>
  CPU usage is at 99% use.
</p>
`;

@Component({
  selector: 'icons-a11y',
  templateUrl: './icons-a11y.component.html',
  // styleUrls: ['./icons-a11y.component.scss'],
})
export class IconsA11yComponent {
  presentational = presentational;
  interactive = interactive;
  interactiveNoLabel = interactiveNoLabel;
  indicator = indicator;
}
