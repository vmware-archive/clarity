/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";

import {ClarityModule} from "../../clarity-angular/clarity.module";
import {UtilsDemoModule} from "../_utils/utils.module";

import {DatagridBasicStructureDemo} from "./basic-structure/basic-structure";
import {DatagridBindingPropertiesDemo} from "./binding-properties/binding-properties";
import {DatagridColumnSizingDemo} from "./column-sizing/column-sizing";
import {DatagridCustomRenderingDemo} from "./custom-rendering/custom-rendering";
import {DatagridDemo} from "./datagrid.demo";
import {ROUTING} from "./datagrid.demo.routing";
import {DetailWrapper} from "./expandable-rows/detail-wrapper";
import {DatagridExpandableRowsDemo} from "./expandable-rows/expandable-rows";
import {DatagridFilteringDemo} from "./filtering/filtering";
import {DatagridFullDemo} from "./full/full";
import {DatagridHideShowDemo} from "./hide-show-columns/hide-show";
import {DatagridKitchenSinkDemo} from "./kitchen-sink/kitchen-sink";
import {DatagridPaginationScrollingDemo} from "./pagination-scrolling/pagination-scrolling";
import {DatagridPaginationDemo} from "./pagination/pagination";
import {DatagridPlaceholderDemo} from "./placeholder/placeholder";
import {DatagridPreserveSelectionDemo} from "./preserve-selection/preserve-selection";
import {DatagridScrollingDemo} from "./scrolling/scrolling";
import {DatagridSelectionSingleDemo} from "./selection-single/selection-single";
import {DatagridSelectionDemo} from "./selection/selection";
import {DatagridServerDrivenDemo} from "./server-driven/server-driven";
import {DatagridSmartIteratorDemo} from "./smart-iterator/smart-iterator";
import {DatagridSortingDemo} from "./sorting/sorting";
import {DatagridStringFilteringDemo} from "./string-filtering/string-filtering";
import {DatagridTestCasesAsyncDemo} from "./test-cases-async/test-cases-async";
import {DatagridTestCasesDemo} from "./test-cases/test-cases";
import {ColorFilter} from "./utils/color-filter";
import {Example} from "./utils/example";

@NgModule({
    imports: [CommonModule, FormsModule, ClarityModule, ROUTING, UtilsDemoModule],
    declarations: [
        DatagridDemo,
        DatagridBasicStructureDemo,
        DatagridBindingPropertiesDemo,
        DatagridCustomRenderingDemo,
        DatagridFilteringDemo,
        DatagridFullDemo,
        DatagridHideShowDemo,
        DatagridPaginationDemo,
        DatagridPaginationScrollingDemo,
        DatagridSelectionDemo,
        DatagridSelectionSingleDemo,
        DatagridPreserveSelectionDemo,
        DatagridServerDrivenDemo,
        DatagridSmartIteratorDemo,
        DatagridSortingDemo,
        DatagridStringFilteringDemo,
        DatagridPlaceholderDemo,
        DatagridScrollingDemo,
        DatagridColumnSizingDemo,
        DatagridExpandableRowsDemo,
        DatagridTestCasesDemo,
        DatagridTestCasesAsyncDemo,
        DatagridKitchenSinkDemo,
        ColorFilter,
        Example,
        DetailWrapper
    ],
    exports: [
        DatagridDemo,
        DatagridBasicStructureDemo,
        DatagridBindingPropertiesDemo,
        DatagridCustomRenderingDemo,
        DatagridFilteringDemo,
        DatagridFullDemo,
        DatagridPaginationDemo,
        DatagridPaginationScrollingDemo,
        DatagridSelectionDemo,
        DatagridSelectionSingleDemo,
        DatagridPreserveSelectionDemo,
        DatagridServerDrivenDemo,
        DatagridSmartIteratorDemo,
        DatagridSortingDemo,
        DatagridStringFilteringDemo,
        DatagridPlaceholderDemo,
        DatagridScrollingDemo,
        DatagridColumnSizingDemo,
        DatagridExpandableRowsDemo,
        DatagridTestCasesDemo,
        DatagridTestCasesAsyncDemo,
        DatagridKitchenSinkDemo
    ]
})
export default class DatagridDemoModule {
}
