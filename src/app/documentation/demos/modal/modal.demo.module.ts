/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from '@clr/angular';


import {ModalStaticDemo} from "./modal-static";
import {ModalStyleDesignDemo} from "./modal-style-design";
import {ModalSizeDesignDemo} from "./modal-size-design";
import {ModalAnimationDesignDemo} from "./modal-animation-design";
import {ModalAngularNotClosableDemo} from "./modal-angular-not-closable";
import {ModalAngularShowDemo} from "./modal-angular-show";
import {ModalAngularSizeDemo} from "./modal-angular-size";
import {ModalAngularStaticBackdropDemo} from "./modal-angular-static-backdrop";
import {ModalAnimationDemo} from "./modal-animation";
import {ModalBackdropDemo} from "./modal-backdrop";
import {ModalSizesDemo} from "./modal-sizes";
import {ModalDemo} from "./modal.demo";
import {DocWrapperModule} from "../_doc-wrapper/doc-wrapper.module";
import {RouterModule} from "@angular/router";
import {UtilsModule} from "../../../utils/utils.module";


@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
        DocWrapperModule,
        RouterModule.forChild([{path: "", component: ModalDemo}]),
        UtilsModule
    ],
    declarations: [
        ModalStaticDemo,
        ModalStyleDesignDemo,
        ModalSizeDesignDemo,
        ModalAnimationDesignDemo,
        ModalAngularNotClosableDemo,
        ModalAngularShowDemo,
        ModalAngularSizeDemo,
        ModalAngularStaticBackdropDemo,
        ModalAnimationDemo,
        ModalBackdropDemo,
        ModalSizesDemo,
        ModalDemo
    ],
    exports: [
        ModalDemo
    ]
})
export class ModalDemoModule {
}
