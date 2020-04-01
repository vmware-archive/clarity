/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'page-not-found',
  templateUrl: 'page-not-found.component.html',
  styleUrls: ['page-not-found.component.scss'],
  host: {
    '[class.content-container]': 'true',
  },
})
export class PageNotFoundComponent {}
