/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-signpost',
  template: `
    <h1>Signpost</h1>

    <cdc-component-status name="signpost"></cdc-component-status>

    <not-ready name="Signposts"></not-ready>
  `,
})
export class SignpostPage {}
