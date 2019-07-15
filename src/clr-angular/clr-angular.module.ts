/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { NgModule } from '@angular/core';

import { ClrButtonModule } from './button/button.module';
import { ClrDataModule } from './data/data.module';
import { ClrDragAndDropModule } from './utils/drag-and-drop/drag-and-drop.module';
import { ClrEmphasisModule } from './emphasis/emphasis.module';
import { ClrFormsModule } from './forms/forms.module';
import { ClrIconModule } from './icon/icon.module';
import { ClrLayoutModule } from './layout/layout.module';
import { ClrModalModule } from './modal/modal.module';
import { ClrPopoverModule } from './popover/popover.module';
import { ClrConditionalModule } from './utils/conditional/conditional.module';
import { ClrFocusTrapModule } from './utils/focus-trap/focus-trap.module';
import { ClrLoadingModule } from './utils/loading/loading.module';
import { ClrWizardModule } from './wizard/wizard.module';
import { ClrStepperModule } from './accordion/stepper/stepper.module';
import { ClrSpinnerModule } from './progress/spinner/spinner.module';

@NgModule({
  exports: [
    ClrEmphasisModule,
    ClrDataModule,
    ClrIconModule,
    ClrModalModule,
    ClrLoadingModule,
    ClrConditionalModule,
    ClrFocusTrapModule,
    ClrButtonModule,
    ClrFormsModule,
    ClrLayoutModule,
    ClrPopoverModule,
    ClrWizardModule,
    ClrDragAndDropModule,
    ClrStepperModule,
    ClrSpinnerModule,
  ],
})
export class ClarityModule {}
