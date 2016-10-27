import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from "../../clarity.module";
import {ROUTING} from "./tabs.demo.routing";
import {TabsDemo} from "./tabs.demo";
import {TabsStaticDemo} from "./tabs-static";
import {TabsAngularDemo} from "./tabs-angular";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
        ROUTING
    ],
    declarations: [
        TabsDemo,
        TabsStaticDemo,
        TabsAngularDemo
    ],
    exports: [
        TabsDemo,
        TabsStaticDemo,
        TabsAngularDemo
    ]
})
export default class TabsDemoModule {
}