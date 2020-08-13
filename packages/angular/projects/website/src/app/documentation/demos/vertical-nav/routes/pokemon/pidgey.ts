/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

const HTML_EXAMPLE = `
<h4 clrFocusOnViewInit>Pidgey</h4>
<p>
    Pidgey has an extremely sharp sense of direction. 
    It is capable of unerringly returning home to its nest, 
    however far it may be removed from its familiar surroundings.
</p>`;

@Component({
  selector: 'clr-pidgey-demo',
  template: `
    <h4 clrFocusOnViewInit class="demo-title">Pidgey</h4>
    <p>
      Pidgey has an extremely sharp sense of direction. It is capable of unerringly returning home to its nest, however
      far it may be removed from its familiar surroundings.
    </p>
    <p>
      <em>The template preview of the router component:</em>
    </p>
    <clr-code-snippet [clrCode]="htmlExample"></clr-code-snippet>
  `,
  styleUrls: ['../../vertical-nav.demo.scss'],
})
export class PidgeyDemo {
  htmlExample = HTML_EXAMPLE;
}
