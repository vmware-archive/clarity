/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

const HTML_EXAMPLE = `
<h4 clrFocusOnViewInit>Poison</h4>
<p>
    The Poison type is regarded as one of the weakest offensively. 
    Prior to Pokémon X/Y it was super-effective only against Grass 
    (many of which are dual Poison so neutralizes the effect). It now has an 
    extra advantage against the new Fairy type. In the first generation it was 
    also super-effective against Bug but this was changed. It fares a little better 
    defensively but its best advantage is through status moves like Toxic.
</p>
`;
@Component({
  selector: 'clr-poison-pokemon-demo',
  template: `
    <h4 clrFocusOnViewInit class="demo-title">Poison</h4>
    <p>
      The Poison type is regarded as one of the weakest offensively. Prior to Pokémon X/Y it was super-effective only
      against Grass (many of which are dual Poison so neutralizes the effect). It now has an extra advantage against the
      new Fairy type. In the first generation it was also super-effective against Bug but this was changed. It fares a
      little better defensively but its best advantage is through status moves like Toxic.
    </p>
    <p>
      <em>The template preview of the router component:</em>
    </p>
    <clr-code-snippet [clrCode]="htmlExample"></clr-code-snippet>
  `,
  styleUrls: ['../../vertical-nav.demo.scss'],
})
export class PoisonPokemonDemo {
  htmlExample = HTML_EXAMPLE;
}
