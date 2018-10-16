/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
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
import { ClrIfExpandModule } from './utils/expand/if-expand.module';
import { ClrFocusTrapModule } from './utils/focus-trap/focus-trap.module';
import { ClrLoadingModule } from './utils/loading/loading.module';
import { ClrWizardModule } from './wizard/wizard.module';

@NgModule({
  exports: [
    ClrEmphasisModule,
    ClrDataModule,
    ClrIconModule,
    ClrModalModule,
    ClrLoadingModule,
    ClrIfExpandModule,
    ClrConditionalModule,
    ClrFocusTrapModule,
    ClrButtonModule,
    ClrFormsModule,
    ClrLayoutModule,
    ClrPopoverModule,
    ClrWizardModule,
    ClrDragAndDropModule,
  ],
})
export class ClarityModule {}
