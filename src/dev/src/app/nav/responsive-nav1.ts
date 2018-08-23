/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'clr-responsive-nav-header-sidenav-demo',
  template: `
    <pre>
    <code>
    &lt;clr-main-container&gt;
        &lt;clr-header&gt;
            ...
            &lt;div class=&quot;header-nav&quot; [clr-nav-level]=&quot;1&quot;&gt;
                ...
            &lt;/div&gt;
            ...
        &lt;/clr-header&gt;
        &lt;div class=&quot;content-container&quot;&gt;
            &lt;main class=&quot;content-area&quot;&gt;
                ...
            &lt;/main&gt;
            &lt;nav class=&quot;sidenav&quot; [clr-nav-level]=&quot;2&quot;&gt;
                ...
            &lt;/nav&gt;
        &lt;/div&gt;
    &lt;/clr-main-container&gt;
    </code>
    </pre>
    `,
  styleUrls: ['./headers.demo.scss'],
})
export class ResponsiveNav1Demo {}
