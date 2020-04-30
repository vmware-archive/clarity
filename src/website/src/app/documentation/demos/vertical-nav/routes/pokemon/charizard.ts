/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

const HTML_EXAMPLE = `
<h4 clrFocusOnViewInit>Charizard</h4>
<p>
  Charizard flies around the sky in search of powerful opponents. 
  It breathes fire of such great heat that it melts anything. 
  However, it never turns its fiery breath on any opponent weaker than itself.
</p>`;

@Component({
  selector: 'clr-charizard-demo',
  template: `
    <h4 clrFocusOnViewInit class="demo-title">Charizard</h4>
    <p>
      Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts
      anything. However, it never turns its fiery breath on any opponent weaker than itself.
    </p>
    <p>
      <em>The template preview of the router component:</em>
    </p>
    <clr-code-snippet [clrCode]="htmlExample"></clr-code-snippet>
  `,
  styleUrls: ['../../vertical-nav.demo.scss'],
})
export class CharizardDemo {
  htmlExample = HTML_EXAMPLE;
}
