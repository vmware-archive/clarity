/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

const HTML_EXAMPLE = `
<h4 clrFocusOnViewInit>Electric</h4>
<p>
    There are relatively few Electric Pokémon; in fact only four were added in the third generation. 
    Most are based on rodents or inanimate objects.
</p>
<p>
    Electric Pokémon are very good defensively, being weak only to Ground moves.
</p>
`;
@Component({
  selector: 'clr-electric-pokemon-demo',
  template: ` <h4 clrFocusOnViewInit class="demo-title">Electric</h4>
    <p>
      There are relatively few Electric Pokémon; in fact only four were added in the third generation. Most are based on
      rodents or inanimate objects.
    </p>
    <p>
      Electric Pokémon are very good defensively, being weak only to Ground moves.
    </p>
    <p>
      <em>The template preview of the router component:</em>
    </p>
    <clr-code-snippet [clrCode]="htmlExample"></clr-code-snippet>`,
  styleUrls: ['../../vertical-nav.demo.scss'],
})
export class ElectricPokemonDemo {
  htmlExample = HTML_EXAMPLE;
}
