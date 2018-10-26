/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from '@clr/angular';

import {NavsDemo} from "./navs";
import {SidenavDemo} from "./sidenav";
import {HeaderColorsDemo} from "./header-colors";
import {HeaderTypesDemo} from "./header-types";
import {SubNavDemo} from "./sub-nav";
import {HeaderTypesOldDemo} from "./header-types-old";
import {ResponsiveNav1Demo} from "./responsive-nav1";
import {ResponsiveNav2Demo} from "./responsive-nav2";
import {HeaderLinksDemo} from "./header-links";
import {NavigationDemo} from "./navigation.demo";
import {RouterModule} from "@angular/router";
import {DocWrapperModule} from "../_doc-wrapper/doc-wrapper.module";
import {LayoutNoSidenavDemo} from "./layout-no-sidenav";
import {LayoutNoSubnavDemo} from "./layout-no-subnav";
import {LayoutOnlyHeaderDemo} from "./layout-only-header";
import {LayoutSidenavPrimaryDemo} from "./layout-sidenav-primary";
import {LayoutSubnavPrimaryDemo} from "./layout-subnav-primary";
import {NavCodeInfoAlert} from "./nav-code-info-alert";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
        RouterModule.forChild([{path: "", component: NavigationDemo}]),
        DocWrapperModule
    ],
    declarations: [
        NavsDemo,
        SidenavDemo,
        HeaderColorsDemo,
        HeaderTypesDemo,
        HeaderLinksDemo,
        SubNavDemo,
        HeaderTypesOldDemo,
        ResponsiveNav1Demo,
        ResponsiveNav2Demo,
        NavigationDemo,
        LayoutNoSidenavDemo,
        LayoutNoSubnavDemo,
        LayoutOnlyHeaderDemo,
        LayoutSidenavPrimaryDemo,
        LayoutSubnavPrimaryDemo,
        NavCodeInfoAlert
    ],
    exports: [
        NavigationDemo
    ]
})
export class NavDemoModule {
}
