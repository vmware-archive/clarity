import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from "../../clarity.module";
import {ROUTING} from "./dropdown.demo.routing";

import {DropdownDemo} from "./dropdown.demo";
import {DropdownStaticDefaultDemo} from "./dropdown-static-default";
import {DropdownStaticPositioningDemo} from "./dropdown-static-positioning";
import {DropdownStaticFontAwesomeToggleDemo} from "./dropdown-static-fontawesome-toggle";
import {DropdownStaticIconToggleDemo} from "./dropdown-static-icon-toggle";
import {DropdownStaticTextLinkToggleDemo} from "./dropdown-static-textlink-toggle";
import {DropdownAngularPositioningDemo} from "./dropdown-angular-positioning";
import {DropdownAngularCloseItemFalseDemo} from "./dropdown-angular-close-item-false";



@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
        ROUTING
    ],
    declarations: [
        DropdownDemo,
        DropdownStaticDefaultDemo,
        DropdownStaticPositioningDemo,
        DropdownStaticFontAwesomeToggleDemo,
        DropdownStaticIconToggleDemo,
        DropdownStaticTextLinkToggleDemo,
        DropdownAngularPositioningDemo,
        DropdownAngularCloseItemFalseDemo
    ],
    exports: [
        DropdownDemo,
        DropdownStaticDefaultDemo,
        DropdownStaticPositioningDemo,
        DropdownStaticFontAwesomeToggleDemo,
        DropdownStaticIconToggleDemo,
        DropdownStaticTextLinkToggleDemo,
        DropdownAngularPositioningDemo,
        DropdownAngularCloseItemFalseDemo
    ]
})
export default class DropdownDemoModule {
}
