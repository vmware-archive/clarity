/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

const HTML_EXAMPLE = `
<h4 clrFocusOnViewInit>Jiggpuff</h4>
<p>
    Jigglypuff's vocal cords can freely adjust the wavelength of its voice.
    This Pokémon uses this ability to sing at precisely the right wavelength to
    make its foes most drowsy.
</p>`;

@Component({
  selector: 'clr-jigglypuff-demo',
  template: `
    <h4 clrFocusOnViewInit class="demo-title">Jiggpuff</h4>
    <p>
      Jigglypuff's vocal cords can freely adjust the wavelength of its voice. This Pokémon uses this ability to sing at
      precisely the right wavelength to make its foes most drowsy.
    </p>
    <p>
      <em>The template preview of the router component:</em>
    </p>
    <clr-code-snippet [clrCode]="htmlExample"></clr-code-snippet>
  `,
  styleUrls: ['../../vertical-nav.demo.scss'],
})
export class JigglypuffDemo {
  htmlExample = HTML_EXAMPLE;
}
