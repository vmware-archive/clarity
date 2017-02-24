/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from "../../clarity-angular";
import {ROUTING} from "./tabs.demo.routing";
import {TabsDemo} from "./tabs.demo";
import {TabsStaticDemo} from "./tabs-static";
import {TabsAngularDemo} from "./tabs-angular";
import {VTabsStaticDemo} from "./vtabs-static";
import {VTabsAngularDemo} from "./vtabs-angular";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
        ROUTING
    ],
    declarations: [
        TabsDemo,
        TabsStaticDemo,
        TabsAngularDemo,
        VTabsStaticDemo,
        VTabsAngularDemo
    ],
    exports: [
        TabsDemo,
        TabsStaticDemo,
        TabsAngularDemo,
        VTabsStaticDemo,
        VTabsAngularDemo
    ]
})
export default class TabsDemoModule {
}
