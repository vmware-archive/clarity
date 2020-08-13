/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

const HTML_EXAMPLE = `
<h4 clrFocusOnViewInit>Grass</h4>
<p>
  Grass is one of the three basic elemental types along with Fire and Water, 
  which constitute the three starter Pokémon. This creates a simple triangle 
  to explain the type concept easily to new players.
</p>            
<p>
  Grass is one of the weakest types statistically, with 5 defensive weaknesses 
  and 7 types that are resistant to Grass moves. Furthermore, many Grass Pokémon 
  have Poison as their secondary type, adding a Psychic vulnerability. 
  The type combination with the most weaknesses is Grass/Psychic.
</p>
`;
@Component({
  selector: 'clr-grass-pokemon-demo',
  template: `
    <h4 clrFocusOnViewInit class="demo-title">Grass</h4>
    <p>
      Grass is one of the three basic elemental types along with Fire and Water, which constitute the three starter
      Pokémon. This creates a simple triangle to explain the type concept easily to new players.
    </p>
    <p>
      Grass is one of the weakest types statistically, with 5 defensive weaknesses and 7 types that are resistant to
      Grass moves. Furthermore, many Grass Pokémon have Poison as their secondary type, adding a Psychic vulnerability.
      The type combination with the most weaknesses is Grass/Psychic.
    </p>
    <p>
      <em>The template preview of the router component:</em>
    </p>
    <clr-code-snippet [clrCode]="htmlExample"></clr-code-snippet>
  `,
  styleUrls: ['../../vertical-nav.demo.scss'],
})
export class GrassPokemonDemo {
  htmlExample = HTML_EXAMPLE;
}
