import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from "../../clarity.module";
import {ROUTING} from "./progress-bars.demo.routing";
import {ProgressBarExamplesDemo} from "./progress-bar-examples";
import {ProgressBarColorsDemo} from "./progress-bar-colors";
import {ProgressBarAnimationsDemo} from "./progress-bar-animations";
import {ProgressBarCardsDemo} from "./progress-bar-cards";
import {ProgressBarSidenavDemo} from "./progress-bar-sidenav";
import {ProgressBarLoopDemo} from "./progress-bar-loop";
import {ProgressBarsDemo} from "./progress-bars.demo";
import {ProgressBarStaticDemo} from "./progress-bar-static";
import {ProgressBarStaticCardsDemo} from "./progress-bar-static-cards";
import {ProgressBarInlineDemo} from "./progress-bar-inline";
import {ProgressBarInlineCardsDemo} from "./progress-bar-inline-cards";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
        ROUTING
    ],
    declarations: [
        ProgressBarExamplesDemo,
        ProgressBarColorsDemo,
        ProgressBarAnimationsDemo,
        ProgressBarCardsDemo,
        ProgressBarSidenavDemo,
        ProgressBarLoopDemo,
        ProgressBarsDemo,
        ProgressBarStaticDemo,
        ProgressBarStaticCardsDemo,
        ProgressBarInlineDemo,
        ProgressBarInlineCardsDemo
    ],
    exports: [
        ProgressBarExamplesDemo,
        ProgressBarColorsDemo,
        ProgressBarAnimationsDemo,
        ProgressBarCardsDemo,
        ProgressBarSidenavDemo,
        ProgressBarLoopDemo,
        ProgressBarsDemo,
        ProgressBarStaticDemo,
        ProgressBarStaticCardsDemo,
        ProgressBarInlineDemo,
        ProgressBarInlineCardsDemo
    ]
})
export default class ProgressBarsDemoModule {
}