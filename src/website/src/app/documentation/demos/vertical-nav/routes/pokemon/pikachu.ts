/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

const HTML_EXAMPLE = `
<h4 clrFocusOnViewInit>Pikachu</h4>
<p>
    Whenever Pikachu comes across something new, it blasts it with a jolt of electricity.
    If you come across a blackened berry, it's evidence that
    this Pokémon mistook the intensity of its charge.
</p>`;

@Component({
  selector: 'clr-pikachu-demo',
  template: `
    <h4 clrFocusOnViewInit class="demo-title">Pikachu</h4>
    <p>
      Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a
      blackened berry, it's evidence that this Pokémon mistook the intensity of its charge.
    </p>
    <p>
      <em>The template preview of the router component:</em>
    </p>
    <clr-code-snippet [clrCode]="htmlExample"></clr-code-snippet>
  `,
  styleUrls: ['../../vertical-nav.demo.scss'],
})
export class PikachuDemo {
  htmlExample = HTML_EXAMPLE;
}
