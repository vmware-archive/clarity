/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from "../../clarity.module";
import {ROUTING} from "./nav.demo.routing";
import {NavDemo} from "./nav.demo";
import {HeadersDemo} from "./headers";
import {NavsDemo} from "./navs";
import {SidenavDemo} from "./sidenav";
import {HeaderColorsDemo} from "./header-colors";
import {HeaderTypesDemo} from "./header-types";
import {SubNavDemo} from "./sub-nav";
import {HeaderTypesOldDemo} from "./header-types-old";
import {ResponsiveNav1Demo} from "./responsive-nav1";
import {ResponsiveNav2Demo} from "./responsive-nav2";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
        ROUTING
    ],
    declarations: [
        NavDemo,
        HeadersDemo,
        NavsDemo,
        SidenavDemo,
        HeaderColorsDemo,
        HeaderTypesDemo,
        SubNavDemo,
        HeaderTypesOldDemo,
        ResponsiveNav1Demo,
        ResponsiveNav2Demo
    ],
    exports: [
        NavDemo,
        HeadersDemo,
        NavsDemo,
        SidenavDemo,
        HeaderColorsDemo,
        HeaderTypesDemo,
        SubNavDemo,
        ResponsiveNav1Demo,
        ResponsiveNav2Demo
    ]
})
export default class NavDemoModule {
}
