/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from '@clr/angular';
import {FormsModule} from "@angular/forms";
import {StackViewAngularBasicDemo} from "./stack-view-angular-basic";
import {StackViewAngularLazyloadDemo} from "./stack-view-angular-lazyload";
import {StackViewAngularModalEditDemo} from "./stack-view-angular-modal-edit";
import {StackViewStaticDemo} from "./stack-view-static";
import {StackViewDemo} from "./stack-view.demo";
import {RouterModule} from "@angular/router";
import {DocWrapperModule} from "../_doc-wrapper/doc-wrapper.module";
import {UtilsModule} from "../../../utils/utils.module";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
        FormsModule,
        RouterModule.forChild([{path: "", component: StackViewDemo}]),
        DocWrapperModule,
        UtilsModule
    ],
    declarations: [
        StackViewAngularBasicDemo,
        StackViewAngularLazyloadDemo,
        StackViewAngularModalEditDemo,
        StackViewStaticDemo,
        StackViewDemo
    ],
    exports: [
        StackViewDemo
    ]
})
export class StackViewDemoModule {
}
