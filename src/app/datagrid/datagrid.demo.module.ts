/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

import {ClarityModule} from "../../clarity-angular";
import {ROUTING} from "./datagrid.demo.routing";
import {DatagridBasicStructureDemo} from "./basic-structure/basic-structure";
import {DatagridBindingPropertiesDemo} from "./binding-properties/binding-properties";
import {DatagridCustomRenderingDemo} from "./custom-rendering/custom-rendering";
import {DatagridDemo} from "./datagrid.demo";
import {DatagridFilteringDemo} from "./filtering/filtering";
import {DatagridFullDemo} from "./full/full";
import {DatagridPaginationDemo} from "./pagination/pagination";
import {DatagridSelectionDemo} from "./selection/selection";
import {DatagridSelectionSingleDemo} from "./selection-single/selection-single";
import {DatagridServerDrivenDemo} from "./server-driven/server-driven";
import {DatagridSmartIteratorDemo} from "./smart-iterator/smart-iterator";
import {DatagridSortingDemo} from "./sorting/sorting";
import {DatagridStringFilteringDemo} from "./string-filtering/string-filtering";
import {DatagridPlaceholderDemo} from "./placeholder/placeholder";
import {DatagridScrollingDemo} from "./scrolling/scrolling";
import {DatagridColumnSizingDemo} from "./column-sizing/column-sizing";

import {ColorFilter} from "./utils/color-filter";
import {Example} from "./utils/example";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ClarityModule,
        ROUTING
    ],
    declarations: [
        DatagridDemo,
        DatagridBasicStructureDemo,
        DatagridBindingPropertiesDemo,
        DatagridCustomRenderingDemo,
        DatagridFilteringDemo,
        DatagridFullDemo,
        DatagridPaginationDemo,
        DatagridSelectionDemo,
        DatagridSelectionSingleDemo,
        DatagridServerDrivenDemo,
        DatagridSmartIteratorDemo,
        DatagridSortingDemo,
        DatagridStringFilteringDemo,
        DatagridPlaceholderDemo,
        DatagridScrollingDemo,
        DatagridColumnSizingDemo,
        ColorFilter,
        Example
    ],
    exports: [
        DatagridDemo,
        DatagridBasicStructureDemo,
        DatagridBindingPropertiesDemo,
        DatagridCustomRenderingDemo,
        DatagridFilteringDemo,
        DatagridFullDemo,
        DatagridPaginationDemo,
        DatagridSelectionDemo,
        DatagridSelectionSingleDemo,
        DatagridServerDrivenDemo,
        DatagridSmartIteratorDemo,
        DatagridSortingDemo,
        DatagridStringFilteringDemo,
        DatagridPlaceholderDemo,
        DatagridScrollingDemo,
        DatagridColumnSizingDemo
    ]
})
export default class DatagridDemoModule {
}