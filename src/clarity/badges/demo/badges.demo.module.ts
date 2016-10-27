import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from "../../clarity.module";
import {ROUTING} from "./badges.demo.routing";

import {BadgesDemo} from "./badges.demo";
import {BadgeColorsDemo} from "./badge-colors";
import {BadgeStatusesDemo} from "./badge-statuses";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
        ROUTING
    ],
    declarations: [
        BadgesDemo,
        BadgeColorsDemo,
        BadgeStatusesDemo
    ],
    exports: [
        BadgesDemo,
        BadgeColorsDemo,
        BadgeStatusesDemo
    ]
})
export default class BadgesDemoModule {
}
