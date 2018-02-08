/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {Routes, RouterModule} from "@angular/router";

import {ClarityModule} from "@clr/angular";

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
import {DatagridHideShowColumnsDemo} from "./hide-show-columns/hide-show-columns";
import {DatagridCompactDemo} from "./compact/compact";

import {ColorFilter} from "./utils/color-filter";
import {FakeLoader} from "./expandable-rows/fake-loader";
import {DatagridDemo} from "./datagrid.demo";
import {DocWrapperModule} from "../_doc-wrapper/doc-wrapper.module";
import {UtilsModule} from "../../../utils/utils.module";

const routes: Routes = [
    {
        path: "",
        component: DatagridDemo,
        children: [
            {
                path: "",
                redirectTo: "structure",
                pathMatch: "full"
            },
            {
                path: "structure",
                component: DatagridBasicStructureDemo,
                data: {
                    demoName: "Basic Structure"
                }
            },
            {
                path: "custom-rendering",
                component: DatagridCustomRenderingDemo,
                data: {
                    demoName: "Custom Cell Rendering"
                }
            },
            {
                path: "smart-iterator",
                component: DatagridSmartIteratorDemo,
                data: {
                    demoName: "Smart Iterator"
                }
            },
            {
                path: "binding-properties",
                component: DatagridBindingPropertiesDemo,
                data: {
                    demoName: "Binding Properties"
                }
            },
            {
                path: "custom-sorting",
                component: DatagridSortingDemo,
                data: {
                    demoName: "Custom Sorting"
                }
            },
            {
                path: "custom-filtering",
                component: DatagridFilteringDemo,
                data: {
                    demoName: "Custom Filtering"
                }
            },
            {
                path: "string-filtering",
                component: DatagridStringFilteringDemo,
                data: {
                    demoName: "String Filtering"
                }
            },
            {
                path: "pagination",
                component: DatagridPaginationDemo,
                data: {
                    demoName: "Pagination"
                }
            },
            {
                path: "selection",
                component: DatagridSelectionDemo,
                data: {
                    demoName: "Selection"
                }
            },
            {
                path: "selection-single",
                component: DatagridSelectionSingleDemo,
                data: {
                    demoName: "Single Selection"
                }
            },
            {
                path: "batch-action",
                component: DatagridBatchActionDemo,
                data: {
                    demoName: "Batch Action"
                }
            },
            {
                path: "single-action",
                component: DatagridSingleActionDemo,
                data: {
                    demoName: "Single Action"
                }
            },
            {
                path: "server-driven",
                component: DatagridServerDrivenDemo,
                data: {
                    demoName: "Server Driven"
                }
            },
            {
                path: "placeholder",
                component: DatagridPlaceholderDemo,
                data: {
                    demoName: "Placeholder"
                }
            },
            {
                path: "expandable-rows",
                component: DatagridExpandableRowsDemo,
                data: {
                    demoName: "Expandable Rows"
                }
            },
            {
                path: "compact",
                component: DatagridCompactDemo,
                data: {
                    demoName: "Compact"
                }
            },
            {
                path: "hide-show",
                component: DatagridHideShowColumnsDemo,
                data: {
                    demoName: "Hide/Show"
                }
            },
            {
                path: "full",
                component: DatagridFullDemo,
                data: {
                    demoName: "Full Demo"
                }
            }
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ClarityModule,
        DocWrapperModule,
        RouterModule.forChild(routes),
        UtilsModule
    ],
    declarations: [
        DatagridBasicStructureDemo,
        DatagridBatchActionDemo,
        DatagridBindingPropertiesDemo,
        DatagridCompactDemo,
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
