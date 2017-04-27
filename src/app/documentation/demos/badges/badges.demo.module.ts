/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from "clarity-angular";

import {BadgeColorsDemo} from "./badge-colors";
import {BadgeStatusesDemo} from "./badge-statuses";
import {BadgesDemo} from "./badges.demo";
import {DocWrapper} from "../_doc-wrapper/doc-wrapper";
import {UtilsModule} from "../../../utils/utils.module";
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule.forChild(),
        UtilsModule,
        RouterModule
    ],
    declarations: [
        DocWrapper,
        BadgeColorsDemo,
        BadgeStatusesDemo,
        BadgesDemo
    ],
    exports: [
        BadgesDemo
    ]
})
export class BadgesDemoModule {
}
