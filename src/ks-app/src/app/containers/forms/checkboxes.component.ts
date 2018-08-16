/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';
import { ClrCheckboxDeprecated } from '@clr/angular';

@Component({ templateUrl: './checkboxes.component.html' })
export class KSCheckboxes {
  /**
   * @description
   * These exist so that the exported API from Clarity is tested when ks-app is compiled with --prod.
   */
  private aClrCheckbox: ClrCheckboxDeprecated;
  // END Clarity Stackview Entities
  indeterminateState: boolean = true;
  nativeIndeterminateState: boolean = true;
  active: boolean = false;

  onToggleIndeterminateState() {
    this.indeterminateState = !this.indeterminateState;
  }
}
