import {ModuleWithProviders} from "@angular/core/src/metadata/ng_module";
import {Routes, RouterModule} from "@angular/router";
import {TablesDemo} from "./tables.demo";
import {TablesBasicDemo} from "./tables-basic";
import {TablesLeftcellDemo} from "./tables-leftcell";
import {TablesMultilineDemo} from "./tables-multiline";
import {TablesNoborderDemo} from "./tables-noborder";
import {TablesCompactDemo} from "./tables-compact";
import {TablesCompactNoborderDemo} from "./tables-compact-noborder";
import {TablesVerticalDemo} from "./tables-vertical";
import {TablesVerticalNoborderCompactDemo} from "./tables-vertical-noborder-compact";
import {TablesWidthDemo} from "./tables-width";

const ROUTES: Routes = [
    {
        path: "",
        component: TablesDemo,
        children: [
            { path: "", redirectTo: "tables-basic", pathMatch: "full" },
            { path: "tables-basic", component: TablesBasicDemo },
            { path: "tables-leftcell", component: TablesLeftcellDemo },
            { path: "tables-multiline", component: TablesMultilineDemo },
            { path: "tables-noborder", component: TablesNoborderDemo },
            { path: "tables-compact", component: TablesCompactDemo },
            { path: "tables-compact-noborder", component: TablesCompactNoborderDemo },
            { path: "tables-vertical", component: TablesVerticalDemo },
            { path: "tables-vertical-noborder-compact", component: TablesVerticalNoborderCompactDemo },
            { path: "tables-width", component: TablesWidthDemo }
        ]
    }
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);