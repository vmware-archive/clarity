/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from 'clarity-angular';

import {TabsStaticDemo} from "./tabs-static";
import {TabsAngularDemo} from "./tabs-angular";
import {TabsDemo} from "./tabs.demo";
import {RouterModule} from "@angular/router";
import {DocWrapperModule} from "../_doc-wrapper/doc-wrapper.module";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule.forChild(),
        RouterModule,
        DocWrapperModule
    ],
    declarations: [
        TabsStaticDemo,
        TabsAngularDemo,
        TabsDemo
    ],
    exports: [
        TabsDemo
    ]
})
export class TabsDemoModule {
}
