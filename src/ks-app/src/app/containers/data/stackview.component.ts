/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';
import {
  ClrStackBlock,
  ClrStackHeader,
  ClrStackInput,
  ClrStackSelect,
  ClrStackView,
  ClrStackViewCustomTags,
} from '@clr/angular';

@Component({ templateUrl: './stackview.component.html' })
export class KSStackView {
  /**
   * @description
   * These exist so that the exported API from Clarity is tested when ks-app is compiled with --prod.
   */
  private aClrStackView: ClrStackView;
  private aClrStackHeader: ClrStackHeader;
  private aClrStackBlock: ClrStackBlock;
  private aClrStackViewCustomTags: ClrStackViewCustomTags;
  private aClrStackInput: ClrStackInput;
  private aClrStackSelect: ClrStackSelect;
  // END Clarity Stackview Entities
}
