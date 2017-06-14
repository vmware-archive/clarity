/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {ModuleWithProviders} from "@angular/core/src/metadata/ng_module";
import {Routes, RouterModule} from "@angular/router";

import {ModalDemo} from "./modal.demo";
import {ModalStaticDemo} from "./modal-static";
import {ModalStaticOldDemo} from "./modal-static-old";
import {ModalAngularNotClosableDemo} from "./modal-angular-not-closable";
import {ModalAngularShowDemo} from "./modal-angular-show";
import {ModalAngularSizeDemo} from "./modal-angular-size";
import {ModalAngularStaticBackdropDemo} from "./modal-angular-static-backdrop";
import {ModalAnimationDemo} from "./modal-animation";
import {ModalBackdropDemo} from "./modal-backdrop";
import {ModalSizesDemo} from "./modal-sizes";
import {ModalMaxHeightDemo} from "./modal-max-height";

const ROUTES: Routes = [
    {
        path: "",
        component: ModalDemo,
        children: [
            { path: "", redirectTo: "static", pathMatch: "full" },
            { path: "static", component: ModalStaticDemo },
            { path: "old-close-button", component: ModalStaticOldDemo },
            { path: "dynamic-show", component: ModalAngularShowDemo },
            { path: "dynamic-sizing", component: ModalAngularSizeDemo },
            { path: "static-backdrop", component: ModalAngularStaticBackdropDemo },
            { path: "not-closable", component: ModalAngularNotClosableDemo },
            { path: "animation", component: ModalAnimationDemo },
            { path: "backdrop", component: ModalBackdropDemo },
            { path: "sizes", component: ModalSizesDemo },
            { path: "max-height", component: ModalMaxHeightDemo }
        ]
    }
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
