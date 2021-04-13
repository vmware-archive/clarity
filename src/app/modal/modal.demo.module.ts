/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ClarityModule } from '@clr/angular';

import { ModalAngularNotClosableDemo } from './modal-angular-not-closable';
import { ModalAngularShowDemo } from './modal-angular-show';
import { ModalAngularSizeDemo } from './modal-angular-size';
import { ModalAngularStaticBackdropDemo } from './modal-angular-static-backdrop';
import { ModalAnimationDemo } from './modal-animation';
import { ModalBackdropDemo } from './modal-backdrop';
import { ModalFormDemo } from './modal-form.demo';
import { ModalMaxHeightDemo } from './modal-max-height';
import { ModalSizesDemo } from './modal-sizes';
import { ModalStaticDemo } from './modal-static';
import { ModalStaticOldDemo } from './modal-static-old';
import { ModalTrapDemo } from './modal-trap';
import { ModalDemo } from './modal.demo';
import { ROUTING } from './modal.demo.routing';

@NgModule({
  imports: [CommonModule, ClarityModule, ROUTING, FormsModule],
  declarations: [
    ModalDemo,
    ModalStaticDemo,
    ModalStaticOldDemo,
    ModalAngularNotClosableDemo,
    ModalAngularShowDemo,
    ModalAngularSizeDemo,
    ModalAngularStaticBackdropDemo,
    ModalAnimationDemo,
    ModalBackdropDemo,
    ModalSizesDemo,
    ModalMaxHeightDemo,
    ModalTrapDemo,
    ModalFormDemo,
  ],
  exports: [
    ModalDemo,
    ModalStaticDemo,
    ModalStaticOldDemo,
    ModalAngularNotClosableDemo,
    ModalAngularShowDemo,
    ModalAngularSizeDemo,
    ModalAngularStaticBackdropDemo,
    ModalAnimationDemo,
    ModalBackdropDemo,
    ModalSizesDemo,
    ModalMaxHeightDemo,
    ModalTrapDemo,
    ModalFormDemo,
  ],
})
export class ModalDemoModule {}
