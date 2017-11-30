/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from '@clr/angular';


import {DropdownStaticDefaultDemo} from "./dropdown-static-default";
import {DropdownStaticPositioningDemo} from "./dropdown-static-positioning";
import {DropdownStaticFontAwesomeToggleDemo} from "./dropdown-static-fontawesome-toggle";
import {DropdownStaticIconToggleDemo} from "./dropdown-static-icon-toggle";
import {DropdownStaticButtonLinkToggleDemo} from "./dropdown-static-buttonlink-toggle";
import {DropdownAngularPositioningDemo} from "./dropdown-angular-positioning";
import {DropdownAngularCloseItemFalseDemo} from "./dropdown-angular-close-item-false";
import {DropdownsDemo} from "./dropdown.demo";
import {RouterModule} from "@angular/router";
import {DocWrapperModule} from "../_doc-wrapper/doc-wrapper.module";
import {UtilsModule} from "../../../utils/utils.module";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
        RouterModule.forChild([{path: "", component: DropdownsDemo}]),
        DocWrapperModule,
        UtilsModule
    ],
    declarations: [
        DropdownStaticDefaultDemo,
        DropdownStaticPositioningDemo,
        DropdownStaticFontAwesomeToggleDemo,
        DropdownStaticIconToggleDemo,
        DropdownStaticButtonLinkToggleDemo,
        DropdownAngularPositioningDemo,
        DropdownAngularCloseItemFalseDemo,

        DropdownsDemo
    ],
    exports: [
        DropdownsDemo
    ]
})
export class DropdownDemoModule {
}
