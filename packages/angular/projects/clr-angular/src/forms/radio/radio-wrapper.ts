/**
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, ContentChild, OnInit } from '@angular/core';

import { DynamicWrapper } from '../../utils/host-wrapping/dynamic-wrapper';
import { ControlIdService } from '../common/providers/control-id.service';
import { ClrLabel } from '../common/label';

@Component({
  selector: 'clr-radio-wrapper',
  template: `
    <ng-content select="[clrRadio]"></ng-content>
    <ng-content select="label"></ng-content>
    <label *ngIf="!label"></label>
  `,
  host: {
    '[class.clr-radio-wrapper]': 'true',
  },
  providers: [ControlIdService],
})
export class ClrRadioWrapper implements DynamicWrapper, OnInit {
  // We need both _dynamic for HostWrapper and ContentChild(ClrLabel) in cases where
  // the user puts a radio inside a wrapper without a label, host wrapping doesn't apply
  // but we'd still need to insert a label
  _dynamic = false;
  @ContentChild(ClrLabel, { static: true })
  label: ClrLabel;

  ngOnInit() {
    if (this.label) {
      this.label.disableGrid();
    }
  }
}
