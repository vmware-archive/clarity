/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from "../../clarity-angular";
import {ROUTING} from "./layout.demo.routing";
import {LayoutDemo} from "./layout.demo";
import {LayoutAllDemo} from "./layout-all";
import {LayoutNoSubnavDemo} from "./layout-no-subnav";
import {LayoutNoSidenavDemo} from "./layout-no-sidenav";
import {LayoutOnlyHeaderDemo} from "./layout-only-header";
import {LayoutSubnavPrimaryDemo} from "./layout-subnav-primary";
import {LayoutSidenavPrimaryDemo} from "./layout-sidenav-primary";
import {LayoutAdditionalSectionsDemo} from "./layout-additional-sections";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
        ROUTING
    ],
    declarations: [
        LayoutDemo,
        LayoutAllDemo,
        LayoutNoSubnavDemo,
        LayoutNoSidenavDemo,
        LayoutOnlyHeaderDemo,
        LayoutSubnavPrimaryDemo,
        LayoutSidenavPrimaryDemo,
        LayoutAdditionalSectionsDemo
    ],
    exports: [
        LayoutDemo,
        LayoutAllDemo,
        LayoutNoSubnavDemo,
        LayoutNoSidenavDemo,
        LayoutOnlyHeaderDemo,
        LayoutSubnavPrimaryDemo,
        LayoutSidenavPrimaryDemo,
        LayoutAdditionalSectionsDemo
    ]
})
export default class LayoutDemoModule {
}