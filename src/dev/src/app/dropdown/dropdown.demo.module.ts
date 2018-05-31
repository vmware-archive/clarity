/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ClarityModule } from '@clr/angular';

import { DropdownAngularCloseItemFalseDemo } from './dropdown-angular-close-item-false';
import { DropdownAngularNestedDemo } from './dropdown-angular-nested';
import { DropdownAngularPositioningDemo } from './dropdown-angular-positioning';
import { DropdownHeaderDemo } from './dropdown-header';
import { DropdownStaticButtonLinkToggleDemo } from './dropdown-static-buttonlink-toggle';
import { DropdownStaticDefaultDemo } from './dropdown-static-default';
import { DropdownStaticIconToggleDemo } from './dropdown-static-icon-toggle';
import { DropdownStaticPositioningDemo } from './dropdown-static-positioning';
import { DropdownDemo } from './dropdown.demo';
import { ROUTING } from './dropdown.demo.routing';

@NgModule({
  imports: [CommonModule, ClarityModule, ROUTING],
  declarations: [
    DropdownDemo,
    DropdownStaticDefaultDemo,
    DropdownStaticPositioningDemo,
    DropdownStaticIconToggleDemo,
    DropdownStaticButtonLinkToggleDemo,
    DropdownAngularPositioningDemo,
    DropdownAngularNestedDemo,
    DropdownAngularCloseItemFalseDemo,
    DropdownHeaderDemo,
  ],
  exports: [
    DropdownDemo,
    DropdownStaticDefaultDemo,
    DropdownStaticPositioningDemo,
    DropdownStaticIconToggleDemo,
    DropdownStaticButtonLinkToggleDemo,
    DropdownAngularPositioningDemo,
    DropdownAngularNestedDemo,
    DropdownAngularCloseItemFalseDemo,
    DropdownHeaderDemo,
  ],
})
export class DropdownDemoModule {}
