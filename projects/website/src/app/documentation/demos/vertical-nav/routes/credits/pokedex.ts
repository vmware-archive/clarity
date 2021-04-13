/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

const HTML_EXAMPLE = `
<b clrFocusOnViewInit>Credit: </b>
<a target="_blank" href="https://www.pokemon.com/us/pokedex/">Pokédex</a> and 
<a target="_blank" href="https://pokemondb.net">PokémonDB</a>`;

@Component({
  selector: 'clr-pokedex-credit-demo',
  template: `
    <b clrFocusOnViewInit>Credit: </b>
    <a target="_blank" href="https://www.pokemon.com/us/pokedex/">Pokédex</a>
    and
    <a target="_blank" href="https://pokemondb.net">PokémonDB</a>

    <p>
      <em>The template preview of the router component:</em>
    </p>
    <clr-code-snippet [clrCode]="htmlExample"></clr-code-snippet>
  `,
})
export class PokedexDemo {
  htmlExample = HTML_EXAMPLE;
}
