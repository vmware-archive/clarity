/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';
import { ClrModal } from '@clr/angular';

@Component({ templateUrl: './modals.component.html' })
export class KSModals {
  /**
   * @description
   * These exist so that the exported API from Clarity is tested when ks-app is compiled with --prod.
   */
  private aClrModal: ClrModal;
  opened1: boolean = false;
  opened2: boolean = false;
  small: boolean = false;
  large: boolean = false;
  extraLarge: boolean = false;
}
