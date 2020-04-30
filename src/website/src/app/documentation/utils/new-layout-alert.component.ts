/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'clr-web-new-layout-alert',
  template: `
    <div class="alert alert-info">
      <div class="alert-item">
        <span class="alert-text">
          This is a test of our new documentation layout. We streamlined the content and moved the design and usage
          guidelines to the top. Please give us feedback on
          <a href="https://twitter.com/VMwareClarity" target="_blank">twitter</a>
          and
          <a href="https://github.com/vmware/clarity" target="_blank">github</a>
          to let us know what you think!
        </span>
      </div>
    </div>
  `,
})
export class NewLayoutAlertComponent {}
