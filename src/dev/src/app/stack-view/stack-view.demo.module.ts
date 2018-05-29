/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ClarityModule } from '@clr/angular';

import { StackViewAngularBasicDemo } from './stack-view-angular-basic';
import { StackViewAngularLazyloadDemo } from './stack-view-angular-lazyload';
import { StackViewAngularModalEditDemo } from './stack-view-angular-modal-edit';
import { StackViewStaticDemo } from './stack-view-static';
import { StackViewDemo } from './stack-view.demo';
import { ROUTING } from './stack-view.demo.routing';

@NgModule({
  imports: [CommonModule, ClarityModule, FormsModule, ROUTING],
  declarations: [
    StackViewDemo,
    StackViewAngularBasicDemo,
    StackViewAngularLazyloadDemo,
    StackViewAngularModalEditDemo,
    StackViewStaticDemo,
  ],
  exports: [
    StackViewDemo,
    StackViewAngularBasicDemo,
    StackViewAngularLazyloadDemo,
    StackViewAngularModalEditDemo,
    StackViewStaticDemo,
  ],
})
export class StackViewDemoModule {}
