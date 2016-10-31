import {ModuleWithProviders} from "@angular/core/src/metadata/ng_module";
import {Routes, RouterModule} from "@angular/router";

import {DropdownDemo} from "./dropdown.demo";
import {DropdownStaticDefaultDemo} from "./dropdown-static-default";
import {DropdownStaticPositioningDemo} from "./dropdown-static-positioning";
import {DropdownStaticFontAwesomeToggleDemo} from "./dropdown-static-fontawesome-toggle";
import {DropdownStaticIconToggleDemo} from "./dropdown-static-icon-toggle";
import {DropdownStaticButtonLinkToggleDemo} from "./dropdown-static-buttonlink-toggle";
import {DropdownAngularPositioningDemo} from "./dropdown-angular-positioning";
import {DropdownAngularCloseItemFalseDemo} from "./dropdown-angular-close-item-false";

const ROUTES: Routes = [
    {
        path: "",
        component: DropdownDemo,
        children: [
            { path: "", redirectTo: "default", pathMatch: "full" },
            { path: "default", component: DropdownStaticDefaultDemo },
            { path: "positioning", component: DropdownStaticPositioningDemo },
            { path: "fontawesome-toggle", component: DropdownStaticFontAwesomeToggleDemo },
            { path: "icon-toggle", component: DropdownStaticIconToggleDemo },
            { path: "buttonlink-toggle", component: DropdownStaticButtonLinkToggleDemo },
            { path: "angular-positioning", component: DropdownAngularPositioningDemo },
            { path: "multi-click", component: DropdownAngularCloseItemFalseDemo }
        ]
    }
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
