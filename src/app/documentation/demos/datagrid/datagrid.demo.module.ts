/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

import {ClarityModule} from "clarity-angular";

import {DatagridBasicStructureDemo} from "./basic-structure/basic-structure";
import {DatagridBatchActionDemo} from "./batch-action/batch-action";
import {DatagridBindingPropertiesDemo} from "./binding-properties/binding-properties";
import {DatagridCustomRenderingDemo} from "./custom-rendering/custom-rendering";
import {DatagridFilteringDemo} from "./filtering/filtering";
import {DatagridFullDemo} from "./full/full";
import {DatagridPaginationDemo} from "./pagination/pagination";
import {DatagridSelectionDemo} from "./selection/selection";
import {DatagridSelectionSingleDemo} from "./single-selection/single-selection";
import {DatagridServerDrivenDemo} from "./server-driven/server-driven";
import {DatagridSingleActionDemo} from "./single-action/single-action";
import {DatagridSmartIteratorDemo} from "./smart-iterator/smart-iterator";
import {DatagridSortingDemo} from "./sorting/sorting";
import {DatagridStringFilteringDemo} from "./string-filtering/string-filtering";
import {DatagridPlaceholderDemo} from "./placeholder/placeholder";
import {DatagridExpandableRowsDemo} from "./expandable-rows/expandable-rows";

import {ColorFilter} from "./utils/color-filter";
import {FakeLoader} from "./expandable-rows/fake-loader";
import {DatagridDemo} from "./datagrid.demo";
import {DocWrapperModule} from "../_doc-wrapper/doc-wrapper.module";
import {RouterModule} from "@angular/router";
import {UtilsModule} from "../../../utils/utils.module";
import {DatagridHideShowColumnsDemo} from "./hide-show-columns/hide-show-columns";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ClarityModule.forChild(),
        DocWrapperModule,
        RouterModule,
        UtilsModule
    ],
    declarations: [
        DatagridBasicStructureDemo,
        DatagridBatchActionDemo,
        DatagridBindingPropertiesDemo,
        DatagridCustomRenderingDemo,
        DatagridFilteringDemo,
        DatagridFullDemo,
        DatagridPaginationDemo,
        DatagridSelectionDemo,
        DatagridSelectionSingleDemo,
        DatagridServerDrivenDemo,
        DatagridSingleActionDemo,
        DatagridSmartIteratorDemo,
        DatagridSortingDemo,
        DatagridStringFilteringDemo,
        DatagridPlaceholderDemo,
        DatagridExpandableRowsDemo,
        DatagridHideShowColumnsDemo,
        ColorFilter,
        FakeLoader,
        DatagridDemo
    ],
    exports: [
        DatagridDemo
    ]
})
export class DatagridDemoModule {
}
