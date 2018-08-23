/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';
import { ClrButtonGroup } from '@clr/angular';

@Component({ templateUrl: './button-groups.component.html' })
export class KSButtonGroups {
  /**
   * @description
   * These exist so that the exported API from Clarity is tested when ks-app is compiled with --prod.
   */
  private aClrButton: ClrButtonGroup;
}
