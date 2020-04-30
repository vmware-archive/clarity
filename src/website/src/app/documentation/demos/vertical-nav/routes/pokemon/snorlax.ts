/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

const HTML_EXAMPLE = `
<h4 clrFocusOnViewInit>Snorlax</h4>
<p>
    Snorlax's typical day consists of nothing more than eating and sleeping.
    It is such a docile Pokémon that there are children who use its expansive belly as a place to play.
</p>`;

@Component({
  selector: 'clr-snorlax-demo',
  template: `
    <h4 clrFocusOnViewInit class="demo-title">Snorlax</h4>
    <p>
      Snorlax's typical day consists of nothing more than eating and sleeping. It is such a docile Pokémon that there
      are children who use its expansive belly as a place to play.
    </p>
    <p>
      <em>The template preview of the router component:</em>
    </p>
    <clr-code-snippet [clrCode]="htmlExample"></clr-code-snippet>
  `,
  styleUrls: ['../../vertical-nav.demo.scss'],
})
export class SnorlaxDemo {
  htmlExample = HTML_EXAMPLE;
}
