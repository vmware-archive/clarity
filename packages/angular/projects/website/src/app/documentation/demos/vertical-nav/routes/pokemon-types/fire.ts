/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

const HTML_EXAMPLE = `
<h4 clrFocusOnViewInit>Fire</h4>
<p>
    Fire is one of the three basic elemental types along with Water and Grass, 
    which constitute the three starter Pokémon. This creates a 
    simple triangle to explain the type concept easily to new players. 
    Fire types are notoriously rare in the early stages of the games 
    so choosing the Fire variation starter is often a plus.
</p>
`;

@Component({
  selector: 'clr-fire-pokemon-demo',
  template: `
    <h4 clrFocusOnViewInit class="demo-title">Fire</h4>
    <p>
      Fire is one of the three basic elemental types along with Water and Grass, which constitute the three starter
      Pokémon. This creates a simple triangle to explain the type concept easily to new players. Fire types are
      notoriously rare in the early stages of the games so choosing the Fire variation starter is often a plus.
    </p>
    <p>
      <em>The template preview of the router component:</em>
    </p>
    <clr-code-snippet [clrCode]="htmlExample"></clr-code-snippet>
  `,
  styleUrls: ['../../vertical-nav.demo.scss'],
})
export class FirePokemonDemo {
  htmlExample = HTML_EXAMPLE;
}
