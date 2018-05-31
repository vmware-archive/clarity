/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';
import {
  ClrDatagrid,
  ClrStackBlock,
  ClrStackHeader,
  ClrStackInput,
  ClrStackSelect,
  ClrStackView,
  ClrStackViewCustomTags,
  Datagrid,
  StackBlock,
  StackHeader,
  StackInput,
  StackSelect,
  StackView,
  StackViewCustomTags,
} from '@clr/angular';

@Component({ templateUrl: './stackview.component.html' })
export class KSStackView {
  /**
   * @description
   * These exist so that the exported API from Clarity is tested when ks-app is compiled with --prod.
   */
  private aStackView: StackView;
  private aClrStackView: ClrStackView;
  private aStackHeader: StackHeader;
  private aClrStackHeader: ClrStackHeader;
  private aStackBlock: StackBlock;
  private aClrStackBlock: ClrStackBlock;
  private aStackViewCustomTags: StackViewCustomTags;
  private aClrStackViewCustomTags: ClrStackViewCustomTags;
  private aStackInput: StackInput;
  private aClrStackInput: ClrStackInput;
  private aStackSelect: StackSelect;
  private aClrStackSelect: ClrStackSelect;
  // END Clarity Stackview Entities
}
