/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

const HTML_EXAMPLE = `
<h4 clrFocusOnViewInit>Charmander</h4>
<p>
  The flame that burns at the tip of its tail is an indication of its emotions.
  The flame wavers when Charmander is enjoying itself.
  If the Pokémon becomes enraged, the flame burns fiercely.
</p>`;

@Component({
  selector: 'clr-charmander-demo',
  template: `
    <h4 clrFocusOnViewInit class="demo-title">Charmander</h4>
    <p>
      The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is
      enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.
    </p>
    <p>
      <em>The template preview of the router component:</em>
    </p>

    <clr-code-snippet [clrCode]="htmlExample"></clr-code-snippet>
  `,
  styleUrls: ['../../vertical-nav.demo.scss'],
})
export class CharmanderDemo {
  htmlExample = HTML_EXAMPLE;
}
