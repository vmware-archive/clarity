/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-stack-view',
  template: `
    <h1>Stack View</h1>

    <cdc-component-status name="stackview"></cdc-component-status>

    <not-ready name="Stack View"></not-ready>
  `,
})
export class StackViewPage {}
