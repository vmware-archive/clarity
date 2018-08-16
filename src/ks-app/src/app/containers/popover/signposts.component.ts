/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';
import { ClrSignpost, ClrSignpostContent, ClrSignpostTrigger } from '@clr/angular';

@Component({ templateUrl: './signposts.component.html' })
export class KSSignposts {
  /**
   * @description
   * These exist so that the exported API from Clarity is tested when ks-app is compiled with --prod.
   */
  private aClrSignpost: ClrSignpost;
  private aClrSignpostContent: ClrSignpostContent;
  private aClrSignpostTrigger: ClrSignpostTrigger;
  openState: boolean = false;
  positions = [{ icon: 'help-info', description: 'Right bottom', position: 'right-bottom', id: 'rightBottomTrigger' }];
}
