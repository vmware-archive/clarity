/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-tab',
  template: `
    <h1>Tab</h1>

    <cdc-component-status name="tab"></cdc-component-status>

    <not-ready name="Tabs"></not-ready>
  `,
})
export class TabPage {}
