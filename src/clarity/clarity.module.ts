import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {NgModule} from "@angular/core";

import {ALERT_DIRECTIVES} from "./alert/index";
import {CODE_HIGHLIGHT_DIRECTIVES} from "./code/index";
import {DROPDOWN_DIRECTIVES} from "./dropdown/index";
import {LAYOUT_DIRECTIVES} from "./layout/index";
import {MODAL_DIRECTIVES} from "./modal/index";
import {NAVIGATION_DIRECTIVES} from "./nav/index";
import {STACK_VIEW_DIRECTIVES} from "./stack-view/index";
import {TABS_DIRECTIVES} from "./tabs/index";
import {WIZARD_DIRECTIVES} from "./wizard/index";
import {ICON_DIRECTIVES} from "./iconography/index";

import {ClrResponsiveNavigationService} from "./nav/clrResponsiveNavigationService";
import {CHECKBOX_DIRECTIVES} from "./checkboxes/index";

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        ALERT_DIRECTIVES,
        CHECKBOX_DIRECTIVES,
        CODE_HIGHLIGHT_DIRECTIVES,
        DROPDOWN_DIRECTIVES,
        LAYOUT_DIRECTIVES,
        MODAL_DIRECTIVES,
        NAVIGATION_DIRECTIVES,
        STACK_VIEW_DIRECTIVES,
        TABS_DIRECTIVES,
        WIZARD_DIRECTIVES,
        ICON_DIRECTIVES
    ],
    exports: [
        ALERT_DIRECTIVES,
        CHECKBOX_DIRECTIVES,
        CODE_HIGHLIGHT_DIRECTIVES,
        DROPDOWN_DIRECTIVES,
        LAYOUT_DIRECTIVES,
        MODAL_DIRECTIVES,
        NAVIGATION_DIRECTIVES,
        STACK_VIEW_DIRECTIVES,
        TABS_DIRECTIVES,
        WIZARD_DIRECTIVES,
        ICON_DIRECTIVES
    ],
    providers: [
        ClrResponsiveNavigationService
    ]
})
export class ClarityModule {
}
