/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

const HTML_EXAMPLE = `
<h4 clrFocusOnViewInit>Raichu</h4>
<p>
    If the electrical sacs become excessively charged,
    Raichu plants its tail in the ground and discharges.
    Scorched patches of ground will be found near this Pokémon's nest.
</p>
`;

@Component({
  selector: 'clr-raichu-demo',
  template: `
    <h4 clrFocusOnViewInit class="demo-title">Raichu</h4>
    <p>
      If the electrical sacs become excessively charged, Raichu plants its tail in the ground and discharges. Scorched
      patches of ground will be found near this Pokémon's nest.
    </p>
    <p>
      <em>The template preview of the router component:</em>
    </p>
    <clr-code-snippet [clrCode]="htmlExample"></clr-code-snippet>
  `,
  styleUrls: ['../../vertical-nav.demo.scss'],
})
export class RaichuDemo {
  htmlExample = HTML_EXAMPLE;
}
