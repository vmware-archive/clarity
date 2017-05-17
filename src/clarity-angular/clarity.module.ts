/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders, NgModule } from "@angular/core";
import { ClrButtonModule } from "./button/button.module";
import { ClrDataModule } from "./data/data.module";
import { ClrEmphasisModule } from "./emphasis/emphasis.module";
import { ClrIconModule } from "./icon/icon.module";
import { ClrModalModule } from "./modal/modal.module";
import { ClrLoadingModule } from "./utils/loading/loading.module";
import { ClrCodeModule } from "./code/code.module";
import { ClrFormsModule } from "./forms/forms.module";
import { ClrLayoutModule } from "./layout/layout.module";
import { ClrPopoverModule } from "./popover/popover.module";
import { ClrWizardModule } from "./wizard/wizard.module";
import { ClrWizardDeprecatedModule } from "./wizard-deprecated/wizard-deprecated.module";
import {ClrIfExpandModule} from "./utils/expand/if-expand.module";

@NgModule({
    exports: [
        ClrEmphasisModule,
        ClrDataModule,
        ClrIconModule,
        ClrModalModule,
        ClrLoadingModule,
        ClrIfExpandModule,
        ClrButtonModule,
        ClrCodeModule,
        ClrFormsModule,
        ClrLayoutModule,
        ClrPopoverModule,
        ClrWizardModule,
        ClrWizardDeprecatedModule
    ]
})
export class ClarityModule {
    /** @deprecated */
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: ClarityModule,
            providers: []
        };
    }

    /** @deprecated */
    static forChild(): ModuleWithProviders {
        return {
            ngModule: ClarityModule,
            providers: []
        };
    }
}
