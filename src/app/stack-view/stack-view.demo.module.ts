/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from "../../clarity-angular";
import {FormsModule} from "@angular/forms";
import {ROUTING} from "./stack-view.demo.routing";
import {StackViewDemo} from "./stack-view.demo";
import {StackViewAngularBasicDemo} from "./stack-view-angular-basic";
import {StackViewAngularLazyloadDemo} from "./stack-view-angular-lazyload";
import {StackViewAngularModalEditDemo} from "./stack-view-angular-modal-edit";
import {StackViewStaticDemo} from "./stack-view-static";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
        FormsModule,
        ROUTING
    ],
    declarations: [
        StackViewDemo,
        StackViewAngularBasicDemo,
        StackViewAngularLazyloadDemo,
        StackViewAngularModalEditDemo,
        StackViewStaticDemo
    ],
    exports: [
        StackViewDemo,
        StackViewAngularBasicDemo,
        StackViewAngularLazyloadDemo,
        StackViewAngularModalEditDemo,
        StackViewStaticDemo
    ]
})
export default class StackViewDemoModule {
}